import React, { useState, useEffect, useRef } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { Loader2 } from 'lucide-react';
import { GoogleOAuthModal } from './GoogleOAuthModal';

interface GoogleSignInButtonProps {
  className?: string;
  variant?: 'standard' | 'cyber';
}

export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
  className = '',
  variant = 'cyber',
}) => {
  const { 
    googleClientId, 
    loginWithGoogleCredential, 
    loginWithGoogleUserInfo, 
    isLoading 
  } = useAuthStore();

  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const tokenClientRef = useRef<any>(null);

  // Poll or check for Google Identity Services script availability
  useEffect(() => {
    const checkGoogleSdk = () => {
      if (typeof window !== 'undefined' && (window as any).google?.accounts?.oauth2) {
        setSdkReady(true);
        return true;
      }
      return false;
    };

    if (checkGoogleSdk()) return;

    const interval = setInterval(() => {
      if (checkGoogleSdk()) {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Initialize Google OAuth Token Client whenever googleClientId or SDK is ready
  useEffect(() => {
    if (!sdkReady || !googleClientId) return;

    try {
      // 1. Initialize Google ID Token (One Tap / Credential) flow
      (window as any).google?.accounts?.id?.initialize({
        client_id: googleClientId,
        callback: (response: any) => {
          if (response?.credential) {
            loginWithGoogleCredential(response.credential);
          }
        },
      });

      // 2. Initialize Google OAuth 2.0 Popup Token Client (Real Google Account Chooser)
      tokenClientRef.current = (window as any).google?.accounts?.oauth2?.initTokenClient({
        client_id: googleClientId,
        scope: 'openid profile email',
        callback: async (tokenResponse: any) => {
          if (tokenResponse?.error) {
            console.error('Google OAuth token error:', tokenResponse);
            return;
          }

          if (tokenResponse?.access_token) {
            try {
              // Fetch real user details directly from Google UserInfo endpoint
              const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
              });
              const userInfo = await res.json();
              await loginWithGoogleUserInfo(userInfo, tokenResponse.access_token);
            } catch (err) {
              console.error('Failed to fetch userinfo from Google:', err);
            }
          }
        },
      });
    } catch (e) {
      console.warn('Google Identity Client initialization error:', e);
    }
  }, [sdkReady, googleClientId, loginWithGoogleCredential, loginWithGoogleUserInfo]);

  const launchRealGooglePopup = (clientId?: string) => {
    const activeClientId = clientId || googleClientId;

    if (!activeClientId) {
      setIsConfigModalOpen(true);
      return;
    }

    if (tokenClientRef.current) {
      // Request real Google account selector popup
      tokenClientRef.current.requestAccessToken({ prompt: 'select_account' });
    } else if (typeof window !== 'undefined' && (window as any).google?.accounts?.oauth2) {
      // Re-init on the fly if needed
      tokenClientRef.current = (window as any).google.accounts.oauth2.initTokenClient({
        client_id: activeClientId,
        scope: 'openid profile email',
        callback: async (tokenResponse: any) => {
          if (tokenResponse?.access_token) {
            const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
              headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            });
            const userInfo = await res.json();
            await loginWithGoogleUserInfo(userInfo, tokenResponse.access_token);
          }
        },
      });
      tokenClientRef.current.requestAccessToken({ prompt: 'select_account' });
    } else {
      // Fallback: direct Google OAuth 2.0 popup window
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(
        activeClientId
      )}&redirect_uri=${encodeURIComponent(
        window.location.origin
      )}&response_type=token&scope=${encodeURIComponent('openid profile email')}&prompt=select_account`;
      
      window.open(authUrl, '_blank', 'width=500,height=600');
    }
  };

  return (
    <>
      <div className="relative inline-flex items-center gap-1 font-mono">
        <button
          onClick={() => launchRealGooglePopup()}
          disabled={isLoading}
          className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-md group ${
            variant === 'cyber'
              ? 'bg-cyber-card border border-cyber-border hover:border-cyber-emerald text-white hover:shadow-glow-emerald/20'
              : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
          } ${className}`}
          title="Sign in with your real Google account"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin text-cyber-emerald" />
          ) : (
            /* Official Google 4-Color "G" Icon */
            <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          )}
          <span className="hidden sm:inline">Sign in with Google</span>
          <span className="sm:hidden">Sign in</span>
        </button>
      </div>

      {/* Google OAuth Configuration Modal */}
      <GoogleOAuthModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        onLaunchLogin={(clientId) => launchRealGooglePopup(clientId)}
      />
    </>
  );
};
