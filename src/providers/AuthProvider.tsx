'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import {
  getAuthProvider,
  type RiccoIdUser,
  type RiccoIdSession,
  type LoginCredentials,
  type RegisterData,
} from '@/lib/auth';

interface AuthContextType {
  /** Current user */
  user: RiccoIdUser | null;
  /** Is authenticated */
  isAuthenticated: boolean;
  /** Is loading */
  isLoading: boolean;
  /** Access token */
  accessToken: string | null;
  /** Login */
  login: (credentials: LoginCredentials) => Promise<void>;
  /** Register */
  register: (data: RegisterData) => Promise<void>;
  /** Logout */
  logout: () => Promise<void>;
  /** Refresh user data */
  refreshUser: () => Promise<void>;
  /** Update profile */
  updateProfile: (data: Partial<RiccoIdUser>) => Promise<void>;
  /** Request password reset */
  requestPasswordReset: (email: string) => Promise<void>;
  /** Check if user has role */
  hasRole: (role: RiccoIdUser['role'] | RiccoIdUser['role'][]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ACCESS_TOKEN_KEY = 'homez-access-token';
const REFRESH_TOKEN_KEY = 'homez-refresh-token';

interface AuthProviderProps {
  children: ReactNode;
  /** Initial user (from server) */
  initialUser?: RiccoIdUser | null;
}

export function AuthProvider({ children, initialUser }: AuthProviderProps) {
  const [user, setUser] = useState<RiccoIdUser | null>(initialUser ?? null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(!initialUser);

  // Load tokens from storage on mount
  useEffect(() => {
    const storedAccessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const storedRefreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

  // Validate token and load user when token changes
  useEffect(() => {
    async function loadUser() {
      if (!accessToken || initialUser) {
        setIsLoading(false);
        return;
      }

      try {
        const authProvider = getAuthProvider();
        const userData = await authProvider.getCurrentUser(accessToken);
        setUser(userData);
      } catch (error) {
        console.error('Failed to load user:', error);
        // Token is invalid, clear it
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        setAccessToken(null);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadUser();
  }, [accessToken, initialUser]);

  // Login
  const login = useCallback(async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const authProvider = getAuthProvider();
      const session: RiccoIdSession = await authProvider.login(credentials);
      
      // Store tokens
      localStorage.setItem(ACCESS_TOKEN_KEY, session.accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, session.refreshToken);
      
      setAccessToken(session.accessToken);
      setUser(session.user);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Register
  const register = useCallback(async (data: RegisterData) => {
    setIsLoading(true);
    try {
      const authProvider = getAuthProvider();
      const session: RiccoIdSession = await authProvider.register(data);
      
      // Store tokens
      localStorage.setItem(ACCESS_TOKEN_KEY, session.accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, session.refreshToken);
      
      setAccessToken(session.accessToken);
      setUser(session.user);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Logout
  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      if (accessToken) {
        const authProvider = getAuthProvider();
        await authProvider.logout(accessToken);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      // Clear tokens regardless of API result
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      setAccessToken(null);
      setUser(null);
      setIsLoading(false);
    }
  }, [accessToken]);

  // Refresh user data
  const refreshUser = useCallback(async () => {
    if (!accessToken) return;

    try {
      const authProvider = getAuthProvider();
      const userData = await authProvider.getCurrentUser(accessToken);
      setUser(userData);
    } catch (error) {
      console.error('Failed to refresh user:', error);
    }
  }, [accessToken]);

  // Update profile
  const updateProfile = useCallback(
    async (data: Partial<RiccoIdUser>) => {
      if (!accessToken) {
        throw new Error('Not authenticated');
      }

      try {
        const authProvider = getAuthProvider();
        const updatedUser = await authProvider.updateProfile(accessToken, data);
        setUser(updatedUser);
      } catch (error) {
        console.error('Failed to update profile:', error);
        throw error;
      }
    },
    [accessToken]
  );

  // Request password reset
  const requestPasswordReset = useCallback(async (email: string) => {
    try {
      const authProvider = getAuthProvider();
      await authProvider.requestPasswordReset(email);
    } catch (error) {
      console.error('Failed to request password reset:', error);
      throw error;
    }
  }, []);

  // Check if user has role
  const hasRole = useCallback(
    (role: RiccoIdUser['role'] | RiccoIdUser['role'][]): boolean => {
      if (!user) return false;
      
      const roles = Array.isArray(role) ? role : [role];
      return roles.includes(user.role);
    },
    [user]
  );

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    accessToken,
    login,
    register,
    logout,
    refreshUser,
    updateProfile,
    requestPasswordReset,
    hasRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook to access auth context
 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

/**
 * Hook to get current user
 */
export function useUser() {
  const { user, isLoading } = useAuth();
  return { user, isLoading };
}

/**
 * Hook to check if user is authenticated
 */
export function useIsAuthenticated() {
  const { isAuthenticated, isLoading } = useAuth();
  return { isAuthenticated, isLoading };
}

/**
 * Hook to require authentication
 * @returns user if authenticated, throws otherwise
 */
export function useRequireAuth(): RiccoIdUser {
  const { user, isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    throw new Error('Auth is loading');
  }
  
  if (!isAuthenticated || !user) {
    throw new Error('Authentication required');
  }
  
  return user;
}

export default AuthProvider;
