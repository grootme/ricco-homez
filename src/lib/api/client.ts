/**
 * Base API Client with fetch wrapper
 * Provides a consistent interface for making HTTP requests
 */

import { apiConfig } from '@/lib/config';
import type {
  ApiResponse,
  ApiClientConfig,
  ApiRequestOptions,
  HttpMethod,
} from './types';
import { ApiClientError, ErrorCode, HttpStatus } from './types';

// Default configuration
const defaultConfig: Partial<ApiClientConfig> = {
  timeout: apiConfig.timeout ?? 30000,
  retries: apiConfig.retries ?? 3,
  retryDelay: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * API Client Class
 */
class ApiClient {
  private baseUrl: string;
  private timeout: number;
  private retries: number;
  private retryDelay: number;
  private defaultHeaders: Record<string, string>;
  private onRequest?: ApiClientConfig['onRequest'];
  private onResponse?: ApiClientConfig['onResponse'];
  private onError?: ApiClientConfig['onError'];

  constructor(config: ApiClientConfig) {
    this.baseUrl = config.baseUrl;
    this.timeout = config.timeout ?? defaultConfig.timeout!;
    this.retries = config.retries ?? defaultConfig.retries!;
    this.retryDelay = config.retryDelay ?? defaultConfig.retryDelay!;
    this.defaultHeaders = { ...defaultConfig.headers, ...config.headers };
    this.onRequest = config.onRequest;
    this.onResponse = config.onResponse;
    this.onError = config.onError;
  }

  /**
   * Make a GET request
   */
  async get<T>(url: string, options?: ApiRequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...options, method: 'GET' });
  }

  /**
   * Make a POST request
   */
  async post<T>(url: string, body?: unknown, options?: ApiRequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...options, method: 'POST', body });
  }

  /**
   * Make a PUT request
   */
  async put<T>(url: string, body?: unknown, options?: ApiRequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...options, method: 'PUT', body });
  }

  /**
   * Make a PATCH request
   */
  async patch<T>(url: string, body?: unknown, options?: ApiRequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...options, method: 'PATCH', body });
  }

  /**
   * Make a DELETE request
   */
  async delete<T>(url: string, options?: ApiRequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...options, method: 'DELETE' });
  }

  /**
   * Make an HTTP request with retry logic
   */
  async request<T>(url: string, options: ApiRequestOptions = {}): Promise<ApiResponse<T>> {
    const fullUrl = this.buildUrl(url, options.params);
    const config = this.buildRequestConfig(options);

    // Apply request interceptor
    const finalConfig = this.onRequest ? this.onRequest(config) : config;

    let lastError: ApiClientError | null = null;
    let attempts = 0;
    const maxAttempts = options.method === 'GET' ? this.retries + 1 : 1;

    while (attempts < maxAttempts) {
      attempts++;

      try {
        const response = await this.fetchWithTimeout(fullUrl, finalConfig);
        const apiResponse = await this.parseResponse<T>(response);

        // Apply response interceptor
        const finalResponse = this.onResponse ? this.onResponse(apiResponse) : apiResponse;

        if (!finalResponse.success && finalResponse.error) {
          const error = ApiClientError.fromResponse(finalResponse as ApiResponse<never>);
          this.onError?.(finalResponse.error);

          // Retry on 5xx errors for GET requests
          if (attempts < maxAttempts && response.status >= 500) {
            await this.delay(this.retryDelay * attempts);
            continue;
          }

          throw error;
        }

        return finalResponse;
      } catch (error) {
        if (error instanceof ApiClientError) {
          lastError = error;

          // Retry on network errors for GET requests
          if (attempts < maxAttempts && error.isNetworkError()) {
            await this.delay(this.retryDelay * attempts);
            continue;
          }
        } else if (error instanceof Error) {
          lastError = new ApiClientError(
            ErrorCode.NETWORK_ERROR,
            error.message,
            0
          );
        }
      }
    }

    // All retries exhausted
    const errorResponse: ApiResponse<T> = {
      success: false,
      error: lastError
        ? {
            code: lastError.code,
            message: lastError.message,
            statusCode: lastError.statusCode,
            details: lastError.details,
          }
        : {
            code: ErrorCode.INTERNAL_ERROR,
            message: 'Request failed after multiple attempts',
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          },
    };

    if (lastError) {
      this.onError?.(errorResponse.error!);
    }

    return errorResponse;
  }

  /**
   * Build full URL with query params
   */
  private buildUrl(url: string, params?: Record<string, string | number | boolean | undefined>): string {
    const fullUrl = url.startsWith('http') ? url : `${this.baseUrl}${url}`;

    if (!params || Object.keys(params).length === 0) {
      return fullUrl;
    }

    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.set(key, String(value));
      }
    });

    const separator = fullUrl.includes('?') ? '&' : '?';
    return `${fullUrl}${separator}${searchParams.toString()}`;
  }

  /**
   * Build request configuration
   */
  private buildRequestConfig(options: ApiRequestOptions): RequestInit & { next?: { revalidate?: number | false; tags?: string[] } } {
    const headers = { ...this.defaultHeaders, ...options.headers };

    const config: RequestInit & { next?: { revalidate?: number | false; tags?: string[] } } = {
      method: options.method ?? 'GET',
      headers,
      cache: options.cache,
      next: options.next,
      signal: options.signal,
    };

    if (options.body !== undefined) {
      config.body = JSON.stringify(options.body);
    }

    return config;
  }

  /**
   * Fetch with timeout
   */
  private async fetchWithTimeout(url: string, config: RequestInit): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...config,
        signal: config.signal ?? controller.signal,
      });
      return response;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /**
   * Parse response
   */
  private async parseResponse<T>(response: Response): Promise<ApiResponse<T>> {
    const statusCode = response.status;

    // Handle empty responses
    if (response.status === HttpStatus.NO_CONTENT) {
      return { success: true };
    }

    // Try to parse JSON
    try {
      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: {
            code: data.code ?? this.getErrorCode(statusCode),
            message: data.message ?? response.statusText,
            statusCode,
            details: data.details ?? data.errors,
          },
        };
      }

      return {
        success: true,
        data: data.data ?? data,
        meta: data.meta,
      };
    } catch {
      // Failed to parse JSON
      if (!response.ok) {
        return {
          success: false,
          error: {
            code: this.getErrorCode(statusCode),
            message: response.statusText,
            statusCode,
          },
        };
      }

      return { success: true };
    }
  }

  /**
   * Get error code from HTTP status
   */
  private getErrorCode(status: number): string {
    switch (status) {
      case HttpStatus.BAD_REQUEST:
        return ErrorCode.BAD_REQUEST;
      case HttpStatus.UNAUTHORIZED:
        return ErrorCode.UNAUTHORIZED;
      case HttpStatus.FORBIDDEN:
        return ErrorCode.FORBIDDEN;
      case HttpStatus.NOT_FOUND:
        return ErrorCode.NOT_FOUND;
      case HttpStatus.CONFLICT:
        return ErrorCode.CONFLICT;
      case HttpStatus.UNPROCESSABLE_ENTITY:
        return ErrorCode.VALIDATION_ERROR;
      case HttpStatus.TOO_MANY_REQUESTS:
        return ErrorCode.RATE_LIMITED;
      case HttpStatus.INTERNAL_SERVER_ERROR:
        return ErrorCode.INTERNAL_ERROR;
      case HttpStatus.SERVICE_UNAVAILABLE:
        return ErrorCode.SERVICE_UNAVAILABLE;
      case HttpStatus.GATEWAY_TIMEOUT:
        return ErrorCode.GATEWAY_TIMEOUT;
      default:
        return ErrorCode.INTERNAL_ERROR;
    }
  }

  /**
   * Delay helper
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Set default header
   */
  setHeader(key: string, value: string): void {
    this.defaultHeaders[key] = value;
  }

  /**
   * Remove default header
   */
  removeHeader(key: string): void {
    delete this.defaultHeaders[key];
  }

  /**
   * Set authorization header
   */
  setAuthToken(token: string): void {
    this.setHeader('Authorization', `Bearer ${token}`);
  }

  /**
   * Clear authorization header
   */
  clearAuthToken(): void {
    this.removeHeader('Authorization');
  }
}

// Create default API client instance
export const apiClient = new ApiClient({
  baseUrl: apiConfig.gatewayUrl,
  timeout: apiConfig.timeout,
  retries: apiConfig.retries,
});

// Export types
export type {
  ApiResponse,
  ApiClientConfig,
  ApiRequestOptions,
  HttpMethod,
};

export { ApiClient, ApiClientError };

// Export default
export default apiClient;
