'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useTranslation } from '@/providers';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex pt-16">
        {/* Desktop Sidebar - Fixed */}
        <div className="hidden lg:block fixed left-0 top-16 bottom-0 z-30">
          <Sidebar />
        </div>

        {/* Mobile Sidebar - Sheet */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="p-0 w-64">
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          {/* Mobile Menu Button */}
          <div className="lg:hidden sticky top-16 z-20 bg-white border-b px-4 py-3">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4 mr-2" />
                  {t('common.menu', 'Menu')}
                </Button>
              </SheetTrigger>
            </Sheet>
          </div>

          {/* Page Content */}
          <div className="p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
