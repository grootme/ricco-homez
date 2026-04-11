/**
 * ricco-id Client
 * Client for authentication with ricco-id service
 */

import { riccoIdConfig } from '@/lib/config';
import { apiClient, type ApiResponse } from '@/lib/api/client';

// User types
export interface RiccoIdUser {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  phone?: string;
  role: 'user' | 'agent' | 'agency' | 'admin';
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RiccoIdSession {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: 'Bearer';
  user: RiccoIdUser;
}

export interface RiccoIdTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: 'Bearer';
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

export interface OAuthProvider {
  name: string;
  authorizationUrl: string;
  callbackUrl: string;
  icon?: string;
}

// ricco-id Client Class
class RiccoIdClient {
  private baseUrl: string;
  private clientId: string;
  private clientSecret: string;

  constructor() {
    this.baseUrl = riccoIdConfig.url;
    this.clientId = riccoIdConfig.clientId;
    this.clientSecret = riccoIdConfig.clientSecret;
  }

  /**
   * Get available OAuth providers
   */
  async getOAuthProviders(): Promise<OAuthProvider[]> {
    const response = await apiClient.get<ApiResponse<OAuthProvider[]>>(
      `${this.baseUrl}/oauth/providers`,
      { headers: this.getClientHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get OAuth providers');
    }

    return response.data;
  }

  /**
   * Login with email and password
   */
  async login(credentials: LoginCredentials): Promise<RiccoIdSession> {
    const response = await apiClient.post<ApiResponse<RiccoIdSession>>(
      `${this.baseUrl}/auth/login`,
      {
        email: credentials.email,
        password: credentials.password,
        rememberMe: credentials.rememberMe,
        clientId: this.clientId,
      },
      { headers: this.getClientHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Login failed');
    }

    return response.data;
  }

  /**
   * Register a new user
   */
  async register(data: RegisterData): Promise<RiccoIdSession> {
    const response = await apiClient.post<ApiResponse<RiccoIdSession>>(
      `${this.baseUrl}/auth/register`,
      {
        email: data.email,
        password: data.password,
        name: data.name,
        phone: data.phone,
        clientId: this.clientId,
      },
      { headers: this.getClientHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Registration failed');
    }

    return response.data;
  }

  /**
   * Logout user
   */
  async logout(accessToken: string): Promise<void> {
    await apiClient.post<ApiResponse<void>>(
      `${this.baseUrl}/auth/logout`,
      {},
      { headers: this.getAuthHeaders(accessToken) }
    );
  }

  /**
   * Refresh access token
   */
  async refreshToken(refreshToken: string): Promise<RiccoIdTokens> {
    const response = await apiClient.post<ApiResponse<RiccoIdTokens>>(
      `${this.baseUrl}/auth/refresh`,
      { refreshToken, clientId: this.clientId },
      { headers: this.getClientHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Token refresh failed');
    }

    return response.data;
  }

  /**
   * Get current user profile
   */
  async getCurrentUser(accessToken: string): Promise<RiccoIdUser> {
    const response = await apiClient.get<ApiResponse<RiccoIdUser>>(
      `${this.baseUrl}/auth/me`,
      { headers: this.getAuthHeaders(accessToken) }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get user profile');
    }

    return response.data;
  }

  /**
   * Update user profile
   */
  async updateProfile(accessToken: string, data: Partial<RiccoIdUser>): Promise<RiccoIdUser> {
    const response = await apiClient.patch<ApiResponse<RiccoIdUser>>(
      `${this.baseUrl}/auth/me`,
      data,
      { headers: this.getAuthHeaders(accessToken) }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to update profile');
    }

    return response.data;
  }

  /**
   * Request password reset
   */
  async requestPasswordReset(email: string): Promise<void> {
    const response = await apiClient.post<ApiResponse<void>>(
      `${this.baseUrl}/auth/forgot-password`,
      { email, clientId: this.clientId },
      { headers: this.getClientHeaders() }
    );

    if (!response.success) {
      throw new Error(response.error?.message ?? 'Password reset request failed');
    }
  }

  /**
   * Reset password with token
   */
  async resetPassword(token: string, newPassword: string): Promise<void> {
    const response = await apiClient.post<ApiResponse<void>>(
      `${this.baseUrl}/auth/reset-password`,
      { token, newPassword, clientId: this.clientId },
      { headers: this.getClientHeaders() }
    );

    if (!response.success) {
      throw new Error(response.error?.message ?? 'Password reset failed');
    }
  }

  /**
   * Verify email
   */
  async verifyEmail(token: string): Promise<RiccoIdUser> {
    const response = await apiClient.post<ApiResponse<RiccoIdUser>>(
      `${this.baseUrl}/auth/verify-email`,
      { token, clientId: this.clientId },
      { headers: this.getClientHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Email verification failed');
    }

    return response.data;
  }

  /**
   * Resend verification email
   */
  async resendVerificationEmail(email: string): Promise<void> {
    const response = await apiClient.post<ApiResponse<void>>(
      `${this.baseUrl}/auth/resend-verification`,
      { email, clientId: this.clientId },
      { headers: this.getClientHeaders() }
    );

    if (!response.success) {
      throw new Error(response.error?.message ?? 'Failed to resend verification email');
    }
  }

  /**
   * Get OAuth authorization URL
   */
  getOAuthAuthorizationUrl(provider: string, redirectUri: string, state?: string): string {
    const params = new URLSearchParams({
      client_id: this.clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      state: state ?? '',
    });
    return `${this.baseUrl}/oauth/${provider}/authorize?${params.toString()}`;
  }

  /**
   * Exchange OAuth code for tokens
   */
  async exchangeOAuthCode(provider: string, code: string, redirectUri: string): Promise<RiccoIdSession> {
    const response = await apiClient.post<ApiResponse<RiccoIdSession>>(
      `${this.baseUrl}/oauth/${provider}/callback`,
      {
        code,
        redirectUri,
        clientId: this.clientId,
      },
      { headers: this.getClientHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'OAuth authentication failed');
    }

    return response.data;
  }

  /**
   * Validate access token
   */
  async validateToken(accessToken: string): Promise<boolean> {
    try {
      await this.getCurrentUser(accessToken);
      return true;
    } catch {
      return false;
    }
  }

  // Private helper methods
  private getClientHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'X-Client-Id': this.clientId,
      ...(this.clientSecret && { 'X-Client-Secret': this.clientSecret }),
    };
  }

  private getAuthHeaders(accessToken: string): Record<string, string> {
    return {
      ...this.getClientHeaders(),
      Authorization: `Bearer ${accessToken}`,
    };
  }
}

// Export singleton instance
export const riccoIdClient = new RiccoIdClient();

// Export class for testing
export { RiccoIdClient };
