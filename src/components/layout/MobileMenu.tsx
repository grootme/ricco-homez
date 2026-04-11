'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  ChevronDown, 
  ChevronUp,
  Home,
  Building2,
  Users,
  LayoutDashboard,
  FileText,
  Info,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MenuItem {
  label: string;
  href: string;
  icon?: React.ElementType;
}

interface MenuGroup {
  label: string;
  icon?: React.ElementType;
  items: MenuItem[];
}

const menuGroups: MenuGroup[] = [
  {
    label: 'Home',
    icon: Home,
    items: [
      { label: 'Home v1 (Default)', href: '/' },
      { label: 'Home v2', href: '/home-v2' },
      { label: 'Home v3', href: '/home-v3' },
      { label: 'Home v4', href: '/home-v4' },
      { label: 'Home v5', href: '/home-v5' },
      { label: 'Home v6', href: '/home-v6' },
      { label: 'Home v7', href: '/home-v7' },
      { label: 'Home v8', href: '/home-v8' },
      { label: 'Home v9', href: '/home-v9' },
      { label: 'Home v10', href: '/home-v10' },
    ],
  },
  {
    label: 'Properties',
    icon: Building2,
    items: [
      { label: 'Grid Default', href: '/grid-default' },
      { label: 'Grid Full 3 Column', href: '/grid-full-3-col' },
      { label: 'Grid Full 4 Column', href: '/grid-full-4-col' },
      { label: 'Grid Full 2 Column', href: '/grid-full-2-col' },
      { label: 'List v1', href: '/list-v1' },
      { label: 'Map v1', href: '/map-v1' },
    ],
  },
  {
    label: 'Agents',
    icon: Users,
    items: [
      { label: 'All Agents', href: '/agents' },
      { label: 'Agent Single', href: '/agent-single/agent-001' },
      { label: 'Agencies', href: '/agency' },
      { label: 'Agency Single', href: '/agency-single/agency-001' },
    ],
  },
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    items: [
      { label: 'Dashboard Home', href: '/dashboard-home' },
      { label: 'My Properties', href: '/dashboard-my-properties' },
      { label: 'Add Property', href: '/dashboard-add-property' },
      { label: 'My Favourites', href: '/dashboard-my-favourites' },
      { label: 'My Profile', href: '/dashboard-my-profile' },
    ],
  },
  {
    label: 'Blog',
    icon: FileText,
    items: [
      { label: 'Blog List v1', href: '/blog-list-v1' },
      { label: 'Blog List v2', href: '/blog-list-v2' },
      { label: 'Blog List v3', href: '/blog-list-v3' },
      { label: 'Blog Single', href: '/blogs/blog-001' },
    ],
  },
  {
    label: 'Pages',
    icon: Info,
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Compare', href: '/compare' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Login', href: '/login' },
      { label: 'Register', href: '/register' },
    ],
  },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  const toggleGroup = (label: string) => {
    setExpandedGroups((prev) =>
      prev.includes(label)
        ? prev.filter((g) => g !== label)
        : [...prev, label]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/" className="text-2xl font-bold text-homez-primary" onClick={onClose}>
            Homez
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Menu Content */}
        <div className="p-4">
          {menuGroups.map((group) => {
            const Icon = group.icon;
            const isExpanded = expandedGroups.includes(group.label);
            
            return (
              <div key={group.label} className="mb-2">
                <button
                  onClick={() => toggleGroup(group.label)}
                  className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {Icon && <Icon className="h-5 w-5 text-gray-500" />}
                    <span className="font-medium">{group.label}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-200',
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="pl-12 pr-4 py-2 space-y-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className="block py-2 text-sm text-gray-600 hover:text-homez-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t space-y-3">
          <Button className="w-full bg-homez-primary hover:bg-homez-primary/90">
            Add Property
          </Button>
          <Button variant="outline" className="w-full">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
