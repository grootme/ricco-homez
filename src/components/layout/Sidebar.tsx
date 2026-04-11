'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  Heart,
  Search,
  Star,
  Package,
  User,
  LogOut,
  MessageSquare,
  Crown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslation, useAuth } from '@/providers';

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

export default function Sidebar({ className, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { t } = useTranslation();
  const { user, isLoading, logout } = useAuth();

  const mainNavItems = [
    { label: t('dashboard.title', 'Dashboard'), href: '/dashboard-home', icon: LayoutDashboard },
    { label: t('dashboard.messages', 'Messages'), href: '/dashboard-message', icon: MessageSquare },
  ];

  const manageListingsItems = [
    { label: t('dashboard.addProperty', 'Add New Property'), href: '/dashboard-add-property', icon: PlusCircle },
    { label: t('dashboard.myProperties', 'My Properties'), href: '/dashboard-my-properties', icon: Building2 },
    { label: t('dashboard.myFavorites', 'My Favorites'), href: '/dashboard-my-favourites', icon: Heart },
    { label: t('dashboard.savedSearches', 'Saved Search'), href: '/dashboard-saved-search', icon: Search },
    { label: t('dashboard.myReviews', 'Reviews'), href: '/dashboard-reviews', icon: Star },
  ];

  const manageAccountItems = [
    { label: t('dashboard.myPackage', 'My Package'), href: '/dashboard-my-package', icon: Package },
    { label: t('dashboard.myProfile', 'My Profile'), href: '/dashboard-my-profile', icon: User },
  ];

  const isActive = (href: string) => pathname === href;

  const handleLogout = async () => {
    try {
      await logout();
      onClose?.();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const NavItem = ({ item, onClick }: { item: typeof mainNavItems[0]; onClick?: () => void }) => {
    const Icon = item.icon;
    const active = isActive(item.href);
    return (
      <Link
        href={item.href}
        onClick={onClick}
        className={cn(
          'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
          active
            ? 'bg-homez-primary text-white'
            : 'text-gray-600 hover:bg-gray-100'
        )}
      >
        <Icon className="h-5 w-5" />
        {item.label}
      </Link>
    );
  };

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!user?.name) return 'U';
    return user.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <aside className={cn('w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col', className)}>
      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
        {/* User Info */}
        <div className="flex items-center gap-3 mb-6 p-2">
          {isLoading ? (
            <>
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </>
          ) : (
            <>
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback>{getUserInitials()}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate">{user?.name || 'Guest'}</p>
                <p className="text-xs text-gray-500">{user?.role === 'agent' ? 'Agent' : user?.role === 'agency' ? 'Agency' : 'User'}</p>
              </div>
            </>
          )}
        </div>

        {/* MAIN Section */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
            {t('common.all', 'Main')}
          </p>
          <nav className="space-y-1">
            {mainNavItems.map((item) => (
              <NavItem key={item.href} item={item} onClick={onClose} />
            ))}
          </nav>
        </div>

        <Separator className="my-4" />

        {/* MANAGE LISTINGS Section */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
            {t('dashboard.myProperties', 'Manage Listings')}
          </p>
          <nav className="space-y-1">
            {manageListingsItems.map((item) => (
              <NavItem key={item.href} item={item} onClick={onClose} />
            ))}
          </nav>
        </div>

        <Separator className="my-4" />

        {/* MANAGE ACCOUNT Section */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
            {t('dashboard.settings', 'Manage Account')}
          </p>
          <nav className="space-y-1">
            {manageAccountItems.map((item) => (
              <NavItem key={item.href} item={item} onClick={onClose} />
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors w-full"
            >
              <LogOut className="h-5 w-5" />
              {t('nav.logout', 'Logout')}
            </button>
          </nav>
        </div>
      </div>

      {/* Upgrade Card - Fixed at bottom */}
      <div className="p-4 border-t border-gray-100">
        <div className="p-4 bg-gradient-to-br from-homez-primary to-homez-dark rounded-xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="h-5 w-5" />
            <h4 className="font-semibold">{t('dashboard.upgrade', 'Upgrade to Pro')}</h4>
          </div>
          <p className="text-sm text-white/80 mb-3">
            {t('dashboard.upgradeDescription', 'Get unlimited listings and premium features.')}
          </p>
          <Button variant="secondary" size="sm" className="w-full">
            {t('dashboard.upgrade', 'Upgrade Now')}
          </Button>
        </div>
      </div>
    </aside>
  );
}
