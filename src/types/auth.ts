export interface User {
  id: string;
  googleId: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
  guestDataMigrated: boolean;
  googleClientId: string | null;
  
  // Actions
  setGoogleClientId: (clientId: string) => void;
  loginWithGoogleCredential: (credential: string) => Promise<void>;
  loginWithGoogleUserInfo: (userInfo: { sub: string; email: string; name: string; picture?: string }, token: string) => Promise<void>;
  logout: () => void;
  migrateGuestData: () => Promise<{ success: boolean; count: number }>;
  checkSession: () => Promise<void>;
}
