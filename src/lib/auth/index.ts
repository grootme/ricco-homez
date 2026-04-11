/**
 * Auth Exports
 * Central export for authentication related modules
 */

// Auth provider types
export type { AuthProvider } from './types';
export type {
  RiccoIdUser,
  RiccoIdSession,
  RiccoIdTokens,
  LoginCredentials,
  RegisterData,
  OAuthProvider,
} from './types';

// ricco-id Client
export {
  riccoIdClient,
  RiccoIdClient,
} from './ricco-id-client';

// Re-export from ricco-id-client for backwards compat
export type {
  RiccoIdUser as RiccoIdUserType,
  RiccoIdSession as RiccoIdSessionType,
  RiccoIdTokens as RiccoIdTokensType,
  LoginCredentials as LoginCredentialsType,
  RegisterData as RegisterDataType,
  OAuthProvider as OAuthProviderType,
} from './ricco-id-client';

// Mock auth provider
export { mockAuthProvider } from './mock-provider';

// Re-export config
export { riccoIdConfig, authConfig, authProviderConfig } from '@/lib/config';

// Auth provider factory
import { mockAuthProvider } from './mock-provider';
import { riccoIdClient } from './ricco-id-client';
import { authProviderConfig } from '@/lib/config';
import type { AuthProvider } from './types';

/**
 * Get the configured auth provider based on AUTH_PROVIDER env var.
 * Defaults to 'mock' if not set.
 */
let _cachedProvider: AuthProvider | null = null;

export function getAuthProvider(): AuthProvider {
  if (_cachedProvider) return _cachedProvider;

  switch (authProviderConfig.provider) {
    case 'ricco-id':
      _cachedProvider = riccoIdClient;
      break;
    case 'mock':
    default:
      _cachedProvider = mockAuthProvider;
      break;
  }

  return _cachedProvider;
}
