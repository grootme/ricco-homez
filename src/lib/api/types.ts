/**
 * Common API Types
 */

// HTTP Methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// Request Configuration
export interface RequestConfig extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

// API Response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  meta?: ApiResponseMeta;
}

// API Error
export interface ApiError {
  code: string;
  message: string;
  statusCode: number;
  details?: Record<string, unknown>;
}

// API Response Metadata
export interface ApiResponseMeta {
  page?: number;
  limit?: number;
  total?: number;
  totalPages?: number;
  hasMore?: boolean;
  timestamp?: string;
  requestId?: string;
}

// Pagination Request
export interface PaginationRequest {
  page?: number;
  limit?: number;
  offset?: number;
  cursor?: string;
}

// Pagination Response
export interface PaginationResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasMore: boolean;
  nextCursor?: string;
}

// Sort Options
export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}

// Filter Operators
export type FilterOperator = 
  | 'eq' 
  | 'ne' 
  | 'gt' 
  | 'gte' 
  | 'lt' 
  | 'lte' 
  | 'in' 
  | 'nin' 
  | 'contains' 
  | 'startsWith' 
  | 'endsWith';

// Filter Condition
export interface FilterCondition {
  field: string;
  operator: FilterOperator;
  value: unknown;
}

// API Request Options
export interface ApiRequestOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined>;
  timeout?: number;
  signal?: AbortSignal;
  cache?: RequestCache;
  next?: { revalidate?: number | false; tags?: string[] };
}

// Rate Limit Info
export interface RateLimitInfo {
  limit: number;
  remaining: number;
  reset: number;
  retryAfter?: number;
}

// API Client Configuration
export interface ApiClientConfig {
  baseUrl: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  headers?: Record<string, string>;
  onRequest?: (config: RequestConfig) => RequestConfig;
  onResponse?: <T>(response: ApiResponse<T>) => ApiResponse<T>;
  onError?: (error: ApiError) => void;
}

// HTTP Status Codes
export const HttpStatus = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const;

// Error Codes
export const ErrorCode = {
  // Client errors
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  
  // Rate limiting
  RATE_LIMITED: 'RATE_LIMITED',
  
  // Server errors
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
  GATEWAY_TIMEOUT: 'GATEWAY_TIMEOUT',
  
  // Network errors
  NETWORK_ERROR: 'NETWORK_ERROR',
  TIMEOUT: 'TIMEOUT',
  ABORTED: 'ABORTED',
} as const;

/**
 * Custom API Error class
 */
export class ApiClientError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number,
    public details?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'ApiClientError';
  }

  static fromResponse(response: ApiResponse<never>): ApiClientError {
    return new ApiClientError(
      response.error?.code ?? ErrorCode.INTERNAL_ERROR,
      response.error?.message ?? 'An unexpected error occurred',
      response.error?.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR,
      response.error?.details
    );
  }

  isNetworkError(): boolean {
    return this.code === ErrorCode.NETWORK_ERROR || this.code === ErrorCode.TIMEOUT;
  }

  isAuthError(): boolean {
    return this.statusCode === HttpStatus.UNAUTHORIZED || this.statusCode === HttpStatus.FORBIDDEN;
  }

  isValidationError(): boolean {
    return this.code === ErrorCode.VALIDATION_ERROR || this.statusCode === HttpStatus.UNPROCESSABLE_ENTITY;
  }

  isRateLimited(): boolean {
    return this.code === ErrorCode.RATE_LIMITED || this.statusCode === HttpStatus.TOO_MANY_REQUESTS;
  }
}
