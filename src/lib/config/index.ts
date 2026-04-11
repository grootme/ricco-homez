/**
 * Application Configuration
 * Centralizes all configuration and feature flags
 */

import type { DataSourceType } from '@/lib/datasource/types';

// Environment
export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const isTest = process.env.NODE_ENV === 'test';

// App Configuration
export const appConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? 'Homez Dev',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  version: process.env.npm_package_version ?? '0.1.0',
  environment: process.env.NODE_ENV ?? 'development',
};

// API Gateway Configuration
export const apiConfig = {
  gatewayUrl: process.env.API_GATEWAY_URL ?? 'http://api.ricco.com',
  timeout: 30000, // 30 seconds
  retries: 3,
};

// ricco-id Configuration
export const riccoIdConfig = {
  url: process.env.RICCO_ID_URL ?? 'http://id.ricco.com',
  clientId: process.env.RICCO_ID_CLIENT_ID ?? 'homez-dev',
  clientSecret: process.env.RICCO_ID_CLIENT_SECRET ?? '',
};

// ricco-ai Configuration
export const riccoAiConfig = {
  url: process.env.RICCO_AI_URL ?? 'http://api.ricco.com/v1/ai',
  apiKey: process.env.RICCO_AI_API_KEY ?? '',
};

// ricco-payment Configuration
export const riccoPaymentConfig = {
  url: process.env.RICCO_PAYMENT_URL ?? 'http://api.ricco.com/v1/payment',
  apiKey: process.env.RICCO_PAYMENT_API_KEY ?? '',
};

// Database Configuration
export const dbConfig = {
  url: process.env.DATABASE_URL ?? 'file:./dev.db',
};

// Auth Provider Configuration
export const authProviderConfig = {
  provider: process.env.AUTH_PROVIDER ?? 'mock', // 'mock' or 'ricco-id'
};

// Authentication Configuration
export const authConfig = {
  secret: process.env.NEXTAUTH_SECRET ?? 'your-super-secret-key-change-in-production',
  url: process.env.NEXTAUTH_URL ?? 'http://localhost:3000',
};

// Feature Flags
export const features = {
  // Data source mode
  dataSource: (process.env.DATA_SOURCE?.toUpperCase() as DataSourceType) ?? 'DATABASE',
  
  // Feature toggles
  ai: process.env.ENABLE_AI_FEATURES === 'true',
  payment: process.env.ENABLE_PAYMENT_FEATURES === 'true',
  virtualTours: process.env.ENABLE_VIRTUAL_TOURS === 'true',
  mortgageCalculator: process.env.ENABLE_MORTGAGE_CALCULATOR === 'true',
  
  // External integrations
  googleMaps: !!process.env.GOOGLE_MAPS_API_KEY,
  mapbox: !!process.env.MAPBOX_ACCESS_TOKEN,
  analytics: !!process.env.NEXT_PUBLIC_GA_ID,
  sentry: !!process.env.NEXT_PUBLIC_SENTRY_DSN,
};

// Map Configuration
export const mapConfig = {
  provider: process.env.GOOGLE_MAPS_API_KEY ? 'google' : process.env.MAPBOX_ACCESS_TOKEN ? 'mapbox' : 'none',
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY ?? '',
  mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN ?? '',
};

// Storage Configuration
export const storageConfig = {
  provider: process.env.STORAGE_PROVIDER ?? 'local',
  s3: {
    bucket: process.env.S3_BUCKET ?? '',
    accessKey: process.env.S3_ACCESS_KEY ?? '',
    secretKey: process.env.S3_SECRET_KEY ?? '',
    region: process.env.S3_REGION ?? 'us-east-1',
  },
};

// Email Configuration
export const emailConfig = {
  host: process.env.SMTP_HOST ?? '',
  port: parseInt(process.env.SMTP_PORT ?? '587', 10),
  user: process.env.SMTP_USER ?? '',
  password: process.env.SMTP_PASSWORD ?? '',
  from: process.env.EMAIL_FROM ?? 'noreply@homez.com',
};

// Rate Limiting Configuration
export const rateLimitConfig = {
  max: parseInt(process.env.RATE_LIMIT_MAX ?? '100', 10),
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS ?? '60000', 10),
};

// Logging Configuration
export const loggingConfig = {
  level: process.env.LOG_LEVEL ?? (isDev ? 'debug' : 'info'),
  debug: process.env.DEBUG_MODE === 'true',
};

/**
 * Check if a feature is enabled
 */
export function isFeatureEnabled(feature: keyof typeof features): boolean {
  if (feature === 'dataSource') {
    return true; // dataSource is always available
  }
  return features[feature] === true;
}

/**
 * Get configuration summary for debugging
 */
export function getConfigSummary() {
  return {
    app: appConfig,
    environment: process.env.NODE_ENV,
    dataSource: features.dataSource,
    features: {
      ai: features.ai,
      payment: features.payment,
      virtualTours: features.virtualTours,
      mortgageCalculator: features.mortgageCalculator,
      googleMaps: features.googleMaps,
      mapbox: features.mapbox,
      analytics: features.analytics,
      sentry: features.sentry,
    },
  };
}

export default {
  app: appConfig,
  api: apiConfig,
  riccoId: riccoIdConfig,
  riccoAi: riccoAiConfig,
  riccoPayment: riccoPaymentConfig,
  db: dbConfig,
  auth: authConfig,
  features,
  map: mapConfig,
  storage: storageConfig,
  email: emailConfig,
  rateLimit: rateLimitConfig,
  logging: loggingConfig,
  isFeatureEnabled,
  getConfigSummary,
};
