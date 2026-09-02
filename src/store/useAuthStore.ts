import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, AuthState } from '../types/auth';
import { playCyberSound } from '../utils/helpers';

const AUTH_STORAGE_KEY = 'rootvector_auth_session';
const CLIENT_ID_STORAGE_KEY = 'rootvector_google_client_id';

const getInitialGoogleClientId = (): string | null => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(CLIENT_ID_STORAGE_KEY);
    if (stored) return stored;
  }
  return (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID || null;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      token: null,
      guestDataMigrated: false,
      googleClientId: getInitialGoogleClientId(),

      setGoogleClientId: (clientId: string) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem(CLIENT_ID_STORAGE_KEY, clientId);
        }
        set({ googleClientId: clientId });
      },

      // Live Google Identity Services ID Token (JWT) Handler
      loginWithGoogleCredential: async (credential: string) => {
        set({ isLoading: true });
        try {
          // Attempt backend verification endpoint if available
          const response = await fetch('/api/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ credential }),
          }).catch(() => null);

          if (response && response.ok) {
            const data = await response.json();
            set({
              user: data.user,
              token: data.token,
              isAuthenticated: true,
              isLoading: false,
            });
            await get().migrateGuestData();
            playCyberSound('root');
            return;
          }

          // Direct Client-Side Standard JWT Decode (Google RFC 7519 Payload)
          const base64Url = credential.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(
            atob(base64)
              .split('')
              .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
              .join('')
          );
          const decoded = JSON.parse(jsonPayload);

          const user: User = {
            id: `usr_${decoded.sub}`,
            googleId: decoded.sub,
            email: decoded.email,
            name: decoded.name || decoded.email.split('@')[0],
            avatarUrl: decoded.picture,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          set({
            user,
            token: credential,
            isAuthenticated: true,
            isLoading: false,
          });

          await get().migrateGuestData();
          playCyberSound('root');
        } catch (err) {
          console.error('Google OAuth credential processing error:', err);
          set({ isLoading: false });
        }
      },

      // Live Google OAuth 2.0 Access Token & UserInfo Handler
      loginWithGoogleUserInfo: async (userInfo, token) => {
        set({ isLoading: true });
        try {
          const user: User = {
            id: `usr_${userInfo.sub}`,
            googleId: userInfo.sub,
            email: userInfo.email,
            name: userInfo.name || userInfo.email.split('@')[0],
            avatarUrl: userInfo.picture,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          set({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
          });

          await get().migrateGuestData();
          playCyberSound('root');
        } catch (err) {
          console.error('Failed to log in with Google UserInfo:', err);
          set({ isLoading: false });
        }
      },

      // Instant Dev Sandbox Simulation
      simulateGoogleLogin: (profile?: Partial<User>) => {
        const dummyUser: User = {
          id: 'usr_google_89412491',
          googleId: '109849201948201',
          email: profile?.email || 'operator@rootvector.lab',
          name: profile?.name || 'Daniel (Operator)',
          avatarUrl: profile?.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          ...profile,
        };

        set({
          user: dummyUser,
          token: 'mock_jwt_session_token_' + Date.now(),
          isAuthenticated: true,
          isLoading: false,
        });

        playCyberSound('engage');
      },

      // Logout and clear authentication session
      logout: () => {
        fetch('/api/auth/logout', { method: 'POST' }).catch(() => {});

        set({
          user: null,
          token: null,
          isAuthenticated: false,
          guestDataMigrated: false,
        });

        playCyberSound('click');
      },

      // Migrate guest localStorage progress to the user's permanent database account
      migrateGuestData: async () => {
        const { user, token } = get();
        if (!user) return { success: false, count: 0 };

        try {
          const rawStore = localStorage.getItem('specter_ctf_store_v1');
          if (!rawStore) return { success: true, count: 0 };

          const parsed = JSON.parse(rawStore);
          const state = parsed.state || parsed;
          const machines = state.machines || [];

          // Pwned or modified machines
          const pwnedMachines = machines.filter(
            (m: any) => m.status !== 'unopened' || m.userFlag || m.rootFlag || m.quickNotes
          );

          if (pwnedMachines.length > 0) {
            await fetch('/api/auth/migrate', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                userId: user.id,
                machines: pwnedMachines,
              }),
            }).catch(() => {});
          }

          set({ guestDataMigrated: true });
          return { success: true, count: pwnedMachines.length };
        } catch (e) {
          console.error('Guest data migration error:', e);
          return { success: false, count: 0 };
        }
      },

      // Verify session on app mount
      checkSession: async () => {
        const { token } = get();
        if (!token) return;

        try {
          const res = await fetch('/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.ok) {
            const data = await res.json();
            set({ user: data.user, isAuthenticated: true });
          } else {
            set({ user: null, token: null, isAuthenticated: false });
          }
        } catch {
          // Keep offline persisted user session
        }
      },
    }),
    {
      name: AUTH_STORAGE_KEY,
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        guestDataMigrated: state.guestDataMigrated,
        googleClientId: state.googleClientId,
      }),
    }
  )
);
