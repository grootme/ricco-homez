/**
 * Theme Configuration for Homez
 * Supports light/dark mode with system preference detection
 */

import type { Theme } from 'next-themes';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  defaultTheme: Theme;
  themes: Theme[];
  storageKey: string;
  enableSystem: boolean;
  disableTransitionOnChange: boolean;
}

export const themeConfig: ThemeConfig = {
  // Default theme (light, dark, or system)
  defaultTheme: 'system',
  
  // Available themes
  themes: ['light', 'dark', 'system'] as Theme[],
  
  // Local storage key for persisting theme preference
  storageKey: 'homez-theme',
  
  // Enable system preference detection
  enableSystem: true,
  
  // Disable CSS transitions when changing themes (prevents flash)
  disableTransitionOnChange: false,
};

// Theme colors for meta tags
export const themeColors = {
  light: {
    background: '#f7f7f7',
    foreground: '#1f2937',
    primary: '#e33e3e',
    secondary: '#041e42',
  },
  dark: {
    background: '#0f172a',
    foreground: '#f8fafc',
    primary: '#e33e3e',
    secondary: '#1e3a5f',
  },
};

// Theme meta tags configuration
export const themeMeta = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: themeColors.light.background },
    { media: '(prefers-color-scheme: dark)', color: themeColors.dark.background },
  ],
};

// CSS Variables for themes
export const themeCSSVariables = {
  light: {
    '--background': '#f7f7f7',
    '--foreground': '#1f2937',
    '--card': '#ffffff',
    '--card-foreground': '#1f2937',
    '--popover': '#ffffff',
    '--popover-foreground': '#1f2937',
    '--primary': '#e33e3e',
    '--primary-foreground': '#ffffff',
    '--secondary': '#041e42',
    '--secondary-foreground': '#ffffff',
    '--muted': '#f3f4f6',
    '--muted-foreground': '#6b7280',
    '--accent': '#fef3f3',
    '--accent-foreground': '#e33e3e',
    '--destructive': '#dc2626',
    '--border': '#e5e7eb',
    '--input': '#e5e7eb',
    '--ring': '#e33e3e',
  },
  dark: {
    '--background': '#0f172a',
    '--foreground': '#f8fafc',
    '--card': '#1e293b',
    '--card-foreground': '#f8fafc',
    '--popover': '#1e293b',
    '--popover-foreground': '#f8fafc',
    '--primary': '#e33e3e',
    '--primary-foreground': '#ffffff',
    '--secondary': '#1e3a5f',
    '--secondary-foreground': '#f8fafc',
    '--muted': '#334155',
    '--muted-foreground': '#94a3b8',
    '--accent': '#334155',
    '--accent-foreground': '#f8fafc',
    '--destructive': '#ef4444',
    '--border': '#334155',
    '--input': '#334155',
    '--ring': '#e33e3e',
  },
};

/**
 * Get theme CSS variables for a specific theme
 */
export function getThemeVariables(theme: 'light' | 'dark'): Record<string, string> {
  return themeCSSVariables[theme];
}

/**
 * Apply theme CSS variables to document root
 */
export function applyThemeVariables(theme: 'light' | 'dark'): void {
  const variables = getThemeVariables(theme);
  const root = document.documentElement;
  
  Object.entries(variables).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export default themeConfig;
