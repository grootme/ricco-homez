'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Check } from 'lucide-react';
import { routing } from '@/i18n/routing';
import { localeNames, localeFlags } from '@/lib/i18n';

interface LanguageSwitcherProps {
  /** Additional CSS classes */
  className?: string;
  /** Variant for the trigger button */
  variant?: 'default' | 'ghost' | 'outline';
  /** Size of the trigger button */
  size?: 'default' | 'sm' | 'lg' | 'icon';
  /** Whether to show the globe icon */
  showIcon?: boolean;
  /** Whether to show the full locale name */
  showFullName?: boolean;
  /** Text color classes for transparent headers */
  textClasses?: string;
}

/**
 * LanguageSwitcher Component
 * Allows users to switch between available locales
 * Preserves the current path when switching languages
 */
export default function LanguageSwitcher({
  className,
  variant = 'ghost',
  size = 'icon',
  showIcon = true,
  showFullName = false,
  textClasses = 'text-gray-700 hover:text-gray-900',
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  /**
   * Handle locale change
   * Uses next-intl router to change locale while preserving path
   */
  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  // Get current locale info
  const currentLocaleName = localeNames[locale as keyof typeof localeNames] || locale;
  const currentLocaleFlag = localeFlags[locale as keyof typeof localeFlags] || '🌐';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={`${textClasses} ${className}`}
          disabled={isPending}
        >
          {showIcon ? (
            <Globe className="h-5 w-5" />
          ) : (
            <span className="flex items-center gap-2">
              <span>{currentLocaleFlag}</span>
              {showFullName && <span>{currentLocaleName}</span>}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {routing.locales.map((loc) => {
          const name = localeNames[loc as keyof typeof localeNames] || loc;
          const flag = localeFlags[loc as keyof typeof localeFlags] || '🌐';
          const isSelected = locale === loc;

          return (
            <DropdownMenuItem
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className="flex items-center justify-between cursor-pointer"
              disabled={isPending}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{flag}</span>
                <span>{name}</span>
              </span>
              {isSelected && <Check className="h-4 w-4 text-homez-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
