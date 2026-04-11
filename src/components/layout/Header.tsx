'use client';

import { useState, useEffect } from 'react';
import { usePathname, Link, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  Home, 
  Building2, 
  Users, 
  LayoutDashboard, 
  FileText, 
  Info,
  ChevronDown,
  Search,
  Heart,
  User,
  Plus,
  LogOut,
  LogIn,
} from 'lucide-react';
import { useAuth } from '@/providers';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

// Safe translation helper that returns fallback on error
function safeT(t: (key: string) => string, key: string, fallback: string): string {
  try {
    const result = t(key);
    // next-intl returns the key itself if not found in some versions
    if (result === key) return fallback;
    return result;
  } catch {
    return fallback;
  }
}

// Submenu item component that uses label directly (avoids translation errors)
function SubmenuLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  return (
    <DropdownMenuItem asChild>
      <Link href={href} onClick={onClick}>{label}</Link>
    </DropdownMenuItem>
  );
}

const navigation = [
  {
    key: 'home',
    icon: Home,
    href: '/',
    submenu: [
      { labelKey: 'nav.homeV1', label: 'Home v1 (Default)', href: '/' },
      { labelKey: 'nav.homeV2', label: 'Home v2', href: '/home-v2' },
      { labelKey: 'nav.homeV3', label: 'Home v3', href: '/home-v3' },
      { labelKey: 'nav.homeV4', label: 'Home v4', href: '/home-v4' },
      { labelKey: 'nav.homeV5', label: 'Home v5', href: '/home-v5' },
      { labelKey: 'nav.homeV6', label: 'Home v6', href: '/home-v6' },
      { labelKey: 'nav.homeV7', label: 'Home v7', href: '/home-v7' },
      { labelKey: 'nav.homeV8', label: 'Home v8', href: '/home-v8' },
      { labelKey: 'nav.homeV9', label: 'Home v9', href: '/home-v9' },
      { labelKey: 'nav.homeV10', label: 'Home v10', href: '/home-v10' },
    ],
  },
  {
    key: 'properties',
    icon: Building2,
    href: '/grid-default',
    submenu: [
      { labelKey: 'nav.gridDefault', label: 'Grid Default', href: '/grid-default' },
      { labelKey: 'nav.gridFull3Col', label: 'Grid Full 3 Column', href: '/grid-full-3-col' },
      { labelKey: 'nav.gridFull4Col', label: 'Grid Full 4 Column', href: '/grid-full-4-col' },
      { labelKey: 'nav.gridFull2Col', label: 'Grid Full 2 Column', href: '/grid-full-2-col' },
      { labelKey: 'nav.gridFull1ColV1', label: 'Grid Full 1 Column v1', href: '/grid-full-1-col-v1' },
      { labelKey: 'nav.gridFull1ColV2', label: 'Grid Full 1 Column v2', href: '/grid-full-1-col-v2' },
      { labelKey: 'nav.listV1', label: 'List v1', href: '/list-v1' },
      { labelKey: 'nav.listAllStyle', label: 'List All Style', href: '/list-all-style' },
      { labelKey: 'nav.mapV1', label: 'Map v1', href: '/map-v1' },
      { labelKey: 'nav.mapV2', label: 'Map v2', href: '/map-v2' },
      { labelKey: 'nav.mapV3', label: 'Map v3', href: '/map-v3' },
      { labelKey: 'nav.mapV4', label: 'Map v4', href: '/map-v4' },
    ],
  },
  {
    key: 'agents',
    icon: Users,
    href: '/agents',
    submenu: [
      { labelKey: 'agent.agents', label: 'All Agents', href: '/agents' },
      { labelKey: 'agent.agentSingle', label: 'Agent Single', href: '/agent-single/agent-001' },
      { labelKey: 'agency.agencies', label: 'Agencies', href: '/agency' },
      { labelKey: 'agency.agencySingle', label: 'Agency Single', href: '/agency-single/agency-001' },
    ],
  },
  {
    key: 'dashboard',
    icon: LayoutDashboard,
    href: '/dashboard-home',
    submenu: [
      { labelKey: 'dashboard.title', label: 'Dashboard Home', href: '/dashboard-home' },
      { labelKey: 'dashboard.myProperties', label: 'My Properties', href: '/dashboard-my-properties' },
      { labelKey: 'dashboard.addProperty', label: 'Add Property', href: '/dashboard-add-property' },
      { labelKey: 'dashboard.myFavorites', label: 'My Favourites', href: '/dashboard-my-favourites' },
      { labelKey: 'dashboard.savedSearches', label: 'Saved Search', href: '/dashboard-saved-search' },
      { labelKey: 'dashboard.myReviews', label: 'Reviews', href: '/dashboard-reviews' },
      { labelKey: 'dashboard.myPackage', label: 'My Package', href: '/dashboard-my-package' },
      { labelKey: 'dashboard.myProfile', label: 'My Profile', href: '/dashboard-my-profile' },
      { labelKey: 'dashboard.messages', label: 'Messages', href: '/dashboard-message' },
    ],
  },
  {
    key: 'blog',
    icon: FileText,
    href: '/blog-list-v1',
    submenu: [
      { labelKey: 'nav.blogListV1', label: 'Blog List v1', href: '/blog-list-v1' },
      { labelKey: 'nav.blogListV2', label: 'Blog List v2', href: '/blog-list-v2' },
      { labelKey: 'nav.blogListV3', label: 'Blog List v3', href: '/blog-list-v3' },
      { labelKey: 'nav.blogSingle', label: 'Blog Single', href: '/blogs/blog-001' },
    ],
  },
  {
    key: 'pages',
    icon: Info,
    href: '/about',
    submenu: [
      { labelKey: 'nav.about', label: 'About Us', href: '/about' },
      { labelKey: 'nav.contact', label: 'Contact', href: '/contact' },
      { labelKey: 'nav.compare', label: 'Compare', href: '/compare' },
      { labelKey: 'nav.faq', label: 'FAQ', href: '/faq' },
      { labelKey: 'nav.pricing', label: 'Pricing', href: '/pricing' },
      { labelKey: 'nav.login', label: 'Login', href: '/login' },
      { labelKey: 'nav.register', label: 'Register', href: '/register' },
      { labelKey: 'nav.invoice', label: 'Invoice', href: '/invoice' },
    ],
  },
];

interface HeaderProps {
  variant?: 'default' | 'transparent';
}

export default function Header({ variant = 'default' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();
  const { user, isAuthenticated, logout } = useAuth();
  
  // Safe translation function with fallback
  const st = (key: string, fallback: string) => safeT(t, key, fallback);

  // Check if current page is a homepage
  const isHomePage = pathname === '/' || pathname.startsWith('/home-v');
  const actualVariant = isHomePage && variant === 'transparent' ? 'transparent' : 'default';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = actualVariant === 'transparent' && !scrolled
    ? 'fixed top-0 z-50 w-full bg-transparent border-transparent'
    : 'sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60';

  const textClasses = actualVariant === 'transparent' && !scrolled
    ? 'text-white hover:text-white/80'
    : 'text-gray-700 hover:text-gray-900';

  const logoClasses = actualVariant === 'transparent' && !scrolled
    ? 'text-white'
    : 'text-homez-primary';

  const handleLoginClick = () => {
    router.push('/login');
    setIsOpen(false);
  };

  const handleRegisterClick = () => {
    router.push('/register');
    setIsOpen(false);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <header className={headerClasses}>
        <div className="container-homez">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className={`text-2xl font-bold ${logoClasses}`}>Homez</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <DropdownMenu key={item.key}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className={`flex items-center gap-1 ${textClasses}`}
                    >
                      <item.icon className="h-4 w-4" />
                      {st(`nav.${item.key}`, item.key.charAt(0).toUpperCase() + item.key.slice(1))}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.submenu.map((subItem) => (
                      <SubmenuLink 
                        key={subItem.href} 
                        label={subItem.label} 
                        href={subItem.href} 
                      />
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button variant="ghost" size="icon" className={textClasses}>
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className={textClasses}>
                <Heart className="h-5 w-5" />
              </Button>
              <LanguageSwitcher textClasses={textClasses} />
              <ThemeToggle textClasses={textClasses} />
              
              {isAuthenticated ? (
                <>
                  <Button variant="ghost" size="icon" className={textClasses}>
                    <User className="h-5 w-5" />
                  </Button>
                  <Link href="/dashboard-add-property">
                    <Button className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-full px-6">
                      <Plus className="h-4 w-4 mr-2" />
                      {st('header.addProperty', 'Add Property')}
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    onClick={handleLogout}
                    className={textClasses}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    {st('auth.logout', 'Sign Out')}
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="ghost" 
                    onClick={handleLoginClick}
                    className={textClasses}
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    {st('auth.login', 'Sign In')}
                  </Button>
                  <Link href="/dashboard-add-property">
                    <Button className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-full px-6">
                      <Plus className="h-4 w-4 mr-2" />
                      {st('header.addProperty', 'Add Property')}
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className={textClasses}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <Link href="/" className="text-2xl font-bold text-homez-primary" onClick={() => setIsOpen(false)}>
                      Homez
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <div key={item.key}>
                        <Link 
                          href={item.href}
                          className="text-lg font-medium hover:text-homez-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {st(`nav.${item.key}`, item.key.charAt(0).toUpperCase() + item.key.slice(1))}
                        </Link>
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.slice(0, 4).map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block text-sm text-gray-600 hover:text-homez-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </nav>
                  <div className="mt-auto space-y-3">
                    <Link href="/dashboard-add-property" className="w-full">
                      <Button className="w-full bg-homez-primary hover:bg-homez-primary/90">
                        <Plus className="h-4 w-4 mr-2" />
                        {st('header.addProperty', 'Add Property')}
                      </Button>
                    </Link>
                    {isAuthenticated ? (
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        {st('auth.logout', 'Sign Out')}
                      </Button>
                    ) : (
                      <Link href="/login" className="w-full" onClick={() => setIsOpen(false)}>
                        <Button 
                          variant="outline" 
                          className="w-full"
                        >
                          <User className="h-4 w-4 mr-2" />
                          {st('auth.login', 'Sign In')}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
