/**
 * Auth Provider Interface
 * Defines the contract for authentication providers (mock, ricco-id, etc.)
 */

import {
  type RiccoIdUser,
  type RiccoIdSession,
  type RiccoIdTokens,
  type LoginCredentials,
  type RegisterData,
  type OAuthProvider,
} from './ricco-id-client';

export interface AuthProvider {
  login(credentials: LoginCredentials): Promise<RiccoIdSession>;
  register(data: RegisterData): Promise<RiccoIdSession>;
  logout(accessToken: string): Promise<void>;
  getCurrentUser(accessToken: string): Promise<RiccoIdUser>;
  updateProfile(accessToken: string, data: Partial<RiccoIdUser>): Promise<RiccoIdUser>;
  requestPasswordReset(email: string): Promise<void>;
  resetPassword(token: string, newPassword: string): Promise<void>;
  refreshToken(refreshToken: string): Promise<RiccoIdTokens>;
  getOAuthProviders(): Promise<OAuthProvider[]>;
  getOAuthAuthorizationUrl(provider: string, redirectUri: string, state?: string): string;
  exchangeOAuthCode(provider: string, code: string, redirectUri: string): Promise<RiccoIdSession>;
  validateToken(accessToken: string): Promise<boolean>;
}

// Re-export types from ricco-id-client for convenience
export type {
  RiccoIdUser,
  RiccoIdSession,
  RiccoIdTokens,
  LoginCredentials,
  RegisterData,
  OAuthProvider,
} from './ricco-id-client';
