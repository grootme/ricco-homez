/**
 * Mock Auth Provider
 * Simulates authentication operations with in-memory fake data.
 * Useful for development and testing without a real auth backend.
 */

import type { AuthProvider } from './types';
import type {
  RiccoIdUser,
  RiccoIdSession,
  RiccoIdTokens,
  LoginCredentials,
  RegisterData,
  OAuthProvider,
} from './ricco-id-client';

// Simple base64 encode/decode helpers
function encodeBase64(obj: Record<string, unknown>): string {
  return Buffer.from(JSON.stringify(obj)).toString('base64');
}

function decodeBase64<T>(token: string): T | null {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    return JSON.parse(decoded) as T;
  } catch {
    return null;
  }
}

// Generate a fake JWT-like token (header.payload.signature format)
function generateFakeToken(payload: Record<string, unknown>): string {
  const header = encodeBase64({ alg: 'HS256', typ: 'JWT' });
  const body = encodeBase64(payload);
  const signature = encodeBase64({ sig: 'mock-signature' });
  return `${header}.${body}.${signature}`;
}

// Decode a fake token and extract the payload
function decodeFakeToken<T>(token: string): T | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    return decodeBase64<T>(parts[1]);
  } catch {
    return null;
  }
}

// In-memory user store
interface StoredUser extends RiccoIdUser {
  passwordHash: string;
}

const users = new Map<string, StoredUser>();

// Generate a simple hash for passwords (NOT secure, just for mock)
function simpleHash(str: string): string {
  return Buffer.from(str).toString('base64');
}

// Generate a unique ID
function generateId(): string {
  return `usr_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

// Create a session from a stored user
function createSession(user: RiccoIdUser): RiccoIdSession {
  const now = Date.now();
  const accessToken = generateFakeToken({
    sub: user.id,
    email: user.email,
    role: user.role,
    iat: now,
    exp: now + 3600 * 1000, // 1 hour
    type: 'access',
  });
  const refreshToken = generateFakeToken({
    sub: user.id,
    iat: now,
    exp: now + 7 * 24 * 3600 * 1000, // 7 days
    type: 'refresh',
  });
  return {
    accessToken,
    refreshToken,
    expiresIn: 3600,
    tokenType: 'Bearer',
    user,
  };
}

// Pre-seed demo user
const demoUser: RiccoIdUser = {
  id: 'usr_demo_001',
  email: 'demo@homez.com',
  name: 'Demo User',
  avatar: undefined,
  phone: '+1 555-0100',
  role: 'user',
  emailVerified: true,
  phoneVerified: false,
  createdAt: new Date('2024-01-01').toISOString(),
  updatedAt: new Date().toISOString(),
};

users.set('demo@homez.com', {
  ...demoUser,
  passwordHash: simpleHash('demo123'),
});

/**
 * Mock Auth Provider Implementation
 */
export const mockAuthProvider: AuthProvider = {
  async login(credentials: LoginCredentials): Promise<RiccoIdSession> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    const storedUser = users.get(credentials.email);
    if (!storedUser) {
      throw new Error('Invalid email or password');
    }

    if (storedUser.passwordHash !== simpleHash(credentials.password)) {
      throw new Error('Invalid email or password');
    }

    // Return user without passwordHash
    const { passwordHash: _ph, ...userWithoutPassword } = storedUser;
    return createSession(userWithoutPassword);
  },

  async register(data: RegisterData): Promise<RiccoIdSession> {
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (users.has(data.email)) {
      throw new Error('Email already registered');
    }

    const now = new Date().toISOString();
    const newUser: StoredUser = {
      id: generateId(),
      email: data.email,
      name: data.name,
      avatar: undefined,
      phone: data.phone,
      role: 'user',
      emailVerified: false,
      phoneVerified: false,
      createdAt: now,
      updatedAt: now,
      passwordHash: simpleHash(data.password),
    };

    users.set(data.email, newUser);

    const { passwordHash: _ph, ...userWithoutPassword } = newUser;
    return createSession(userWithoutPassword);
  },

  async logout(_accessToken: string): Promise<void> {
    // No-op for mock
    await new Promise((resolve) => setTimeout(resolve, 100));
  },

  async getCurrentUser(accessToken: string): Promise<RiccoIdUser> {
    await new Promise((resolve) => setTimeout(resolve, 150));

    const payload = decodeFakeToken<{ sub: string; type: string; exp: number }>(accessToken);
    if (!payload || payload.type !== 'access') {
      throw new Error('Invalid or expired token');
    }

    if (payload.exp < Date.now()) {
      throw new Error('Token expired');
    }

    // Find user by ID
    for (const [, storedUser] of users) {
      if (storedUser.id === payload.sub) {
        const { passwordHash: _ph, ...userWithoutPassword } = storedUser;
        return userWithoutPassword;
      }
    }

    throw new Error('User not found');
  },

  async updateProfile(accessToken: string, data: Partial<RiccoIdUser>): Promise<RiccoIdUser> {
    await new Promise((resolve) => setTimeout(resolve, 200));

    const payload = decodeFakeToken<{ sub: string }>(accessToken);
    if (!payload) {
      throw new Error('Invalid token');
    }

    for (const [email, storedUser] of users) {
      if (storedUser.id === payload.sub) {
        const updatedUser: StoredUser = {
          ...storedUser,
          ...data,
          updatedAt: new Date().toISOString(),
        };
        users.set(email, updatedUser);
        const { passwordHash: _ph, ...userWithoutPassword } = updatedUser;
        return userWithoutPassword;
      }
    }

    throw new Error('User not found');
  },

  async requestPasswordReset(email: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    if (!users.has(email)) {
      throw new Error('Email not found');
    }
    // In a real implementation, send a reset email
    console.log(`[Mock Auth] Password reset requested for: ${email}`);
  },

  async resetPassword(token: string, newPassword: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 200));

    const payload = decodeFakeToken<{ sub: string; type: string }>(token);
    if (!payload || payload.type !== 'reset') {
      throw new Error('Invalid or expired reset token');
    }

    for (const [email, storedUser] of users) {
      if (storedUser.id === payload.sub) {
        storedUser.passwordHash = simpleHash(newPassword);
        storedUser.updatedAt = new Date().toISOString();
        return;
      }
    }

    throw new Error('User not found');
  },

  async refreshToken(refreshTokenStr: string): Promise<RiccoIdTokens> {
    await new Promise((resolve) => setTimeout(resolve, 100));

    const payload = decodeFakeToken<{ sub: string; type: string; exp: number }>(refreshTokenStr);
    if (!payload || payload.type !== 'refresh') {
      throw new Error('Invalid refresh token');
    }

    if (payload.exp < Date.now()) {
      throw new Error('Refresh token expired');
    }

    const now = Date.now();
    const newAccessToken = generateFakeToken({
      sub: payload.sub,
      email: '',
      role: 'user',
      iat: now,
      exp: now + 3600 * 1000,
      type: 'access',
    });

    return {
      accessToken: newAccessToken,
      refreshToken: refreshTokenStr,
      expiresIn: 3600,
      tokenType: 'Bearer',
    };
  },

  async getOAuthProviders(): Promise<OAuthProvider[]> {
    return [
      {
        name: 'google',
        authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
        callbackUrl: '/api/auth/callback/google',
        icon: 'google',
      },
      {
        name: 'github',
        authorizationUrl: 'https://github.com/login/oauth/authorize',
        callbackUrl: '/api/auth/callback/github',
        icon: 'github',
      },
    ];
  },

  getOAuthAuthorizationUrl(provider: string, redirectUri: string, state?: string): string {
    const params = new URLSearchParams({
      client_id: 'mock-client-id',
      redirect_uri: redirectUri,
      response_type: 'code',
      state: state ?? 'mock-state',
      scope: 'openid email profile',
    });
    return `https://mock-auth.example.com/oauth/${provider}/authorize?${params.toString()}`;
  },

  async exchangeOAuthCode(provider: string, _code: string, _redirectUri: string): Promise<RiccoIdSession> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const oauthUser: RiccoIdUser = {
      id: generateId(),
      email: `user_${provider}_${Date.now()}@example.com`,
      name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
      avatar: undefined,
      role: 'user',
      emailVerified: true,
      phoneVerified: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return createSession(oauthUser);
  },

  async validateToken(accessToken: string): Promise<boolean> {
    try {
      await this.getCurrentUser(accessToken);
      return true;
    } catch {
      return false;
    }
  },
};
