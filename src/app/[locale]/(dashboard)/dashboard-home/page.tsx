'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { ChartWidget } from '@/components/dashboard/ChartWidget';
import PropertyCard from '@/components/property/PropertyCard';
import { 
  Building2, 
  Eye, 
  MessageSquare, 
  Heart,
  TrendingUp,
  DollarSign,
  Calendar,
  Plus,
  ArrowRight,
  Bell,
  CheckCircle,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { 
  useTranslation, 
  useAuth, 
  useDataSource, 
  useUserDataSource,
  usePropertyDataSource,
  useInquiryDataSource,
  useTourDataSource,
} from '@/providers';
import type { Property, Inquiry, Tour, DashboardStats } from '@/types';

export default function DashboardHome() {
  const { t } = useTranslation();
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const dataSource = useDataSource();
  const userDataSource = useUserDataSource();
  const propertyDataSource = usePropertyDataSource();
  const inquiryDataSource = useInquiryDataSource();
  const tourDataSource = useTourDataSource();

  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  // Fetch dashboard data
  useEffect(() => {
    async function fetchDashboardData() {
      if (!user?.id) return;

      setLoading(true);
      setError(null);

      try {
        // Fetch all data in parallel
        const [statsData, propertiesData, inquiriesData, toursData] = await Promise.all([
          userDataSource.getDashboardStats(user.id),
          propertyDataSource.getProperties({ limit: 5 }),
          inquiryDataSource.getInquiries({ agentId: user.id, limit: 5 }),
          tourDataSource.getTours({ agentId: user.id, limit: 5 }),
        ]);

        setStats(statsData);
        setProperties(propertiesData.data);
        setInquiries(inquiriesData.data);
        setTours(toursData.data);
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
        setError(t('errors.somethingWentWrong', 'Failed to load dashboard data'));
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, [user?.id, userDataSource, propertyDataSource, inquiryDataSource, tourDataSource, t]);

  // Mock chart data (would come from analytics in production)
  const viewsData = [
    { name: 'Jan', views: 4000 },
    { name: 'Feb', views: 3000 },
    { name: 'Mar', views: 5000 },
    { name: 'Apr', views: 4500 },
    { name: 'May', views: 6000 },
    { name: 'Jun', views: 5500 },
    { name: 'Jul', views: 7000 },
    { name: 'Aug', views: 6500 },
    { name: 'Sep', views: 8000 },
    { name: 'Oct', views: 7500 },
    { name: 'Nov', views: 9000 },
    { name: 'Dec', views: 12847 },
  ];

  const inquiriesChartData = [
    { name: 'Mon', inquiries: 12 },
    { name: 'Tue', inquiries: 18 },
    { name: 'Wed', inquiries: 15 },
    { name: 'Thu', inquiries: 22 },
    { name: 'Fri', inquiries: 28 },
    { name: 'Sat', inquiries: 20 },
    { name: 'Sun', inquiries: 10 },
  ];

  // Stats cards configuration
  const statsCards = stats ? [
    {
      title: t('dashboard.stats.totalProperties', 'Total Properties'),
      value: stats.totalProperties.toString(),
      change: t('dashboard.stats.thisMonth', '+3 this month'),
      changeType: 'positive' as const,
      icon: Building2,
      iconColor: 'text-blue-600',
      iconBgColor: 'bg-blue-50',
    },
    {
      title: t('dashboard.stats.totalViews', 'Total Views'),
      value: stats.totalViews.toLocaleString(),
      change: t('dashboard.stats.growth', '+15.2% vs last month'),
      changeType: 'positive' as const,
      icon: Eye,
      iconColor: 'text-green-600',
      iconBgColor: 'bg-green-50',
    },
    {
      title: t('dashboard.stats.totalInquiries', 'Total Inquiries'),
      value: stats.totalInquiries.toString(),
      change: t('dashboard.stats.thisMonth', '+8 this week'),
      changeType: 'positive' as const,
      icon: MessageSquare,
      iconColor: 'text-purple-600',
      iconBgColor: 'bg-purple-50',
    },
    {
      title: t('dashboard.myFavorites', 'Favorites'),
      value: '156', // Would come from stats in production
      change: t('dashboard.stats.thisMonth', '+12 today'),
      changeType: 'positive' as const,
      icon: Heart,
      iconColor: 'text-red-600',
      iconBgColor: 'bg-red-50',
    },
  ] : [];

  // Show loading state
  if (authLoading || loading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
          <div className="flex gap-3">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-6 text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-700 mb-2">{t('errors.errorOccurred', 'Error Occurred')}</h3>
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>
            {t('common.tryAgain', 'Try Again')}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {t('dashboard.welcome', 'Welcome back')}, {user?.name?.split(' ')[0] || 'User'}!
          </h1>
          <p className="text-gray-500">{t('dashboard.overview', "Here's what's happening with your properties today.")}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">{t('dashboard.notifications', 'Notifications')}</span>
            <Badge className="ml-2 bg-homez-primary text-white text-xs px-1.5">3</Badge>
          </Button>
          <Button className="bg-homez-primary hover:bg-homez-primary/90" asChild>
            <Link href="/dashboard-add-property">
              <Plus className="h-4 w-4 mr-2" />
              {t('dashboard.addProperty', 'Add New Property')}
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statsCards.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Property Views Chart */}
        <ChartWidget
          title={t('dashboard.performance', 'Property Views')}
          icon={TrendingUp}
          type="area"
          data={viewsData}
          dataKey="views"
          xAxisKey="name"
          color="#e33e3e"
          height={280}
        />

        {/* Inquiries Chart */}
        <ChartWidget
          title={t('dashboard.stats.totalInquiries', 'Weekly Inquiries')}
          icon={MessageSquare}
          type="bar"
          data={inquiriesChartData}
          dataKey="inquiries"
          xAxisKey="name"
          color="#041e42"
          height={280}
        />
      </div>

      {/* Activity & Tours Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Inquiries */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-semibold">{t('dashboard.stats.totalInquiries', 'Recent Inquiries')}</CardTitle>
              <CardDescription>{t('dashboard.recentActivity', 'Your latest property inquiries')}</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard-message">
                {t('common.seeAll', 'View All')}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {inquiries.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <MessageSquare className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>{t('common.noResults', 'No inquiries yet')}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {inquiries.slice(0, 5).map((inquiry) => (
                  <div key={inquiry.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-700 truncate">{inquiry.name}</p>
                      <p className="text-xs text-gray-500 truncate">{inquiry.message}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant={inquiry.status === 'new' ? 'default' : 'secondary'}>
                      {inquiry.status}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Upcoming Tours */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-semibold">{t('dashboard.stats.totalTours', 'Upcoming Tours')}</CardTitle>
              <CardDescription>{t('tour.scheduleTour', 'Your scheduled property tours')}</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              <Calendar className="h-4 w-4 mr-1" />
              {t('common.view', 'Calendar')}
            </Button>
          </CardHeader>
          <CardContent>
            {tours.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>{t('common.noResults', 'No upcoming tours')}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {tours.slice(0, 5).map((tour) => (
                  <div key={tour.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-homez-primary/10 flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-homez-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{tour.name}</p>
                        <p className="text-sm text-gray-500">{tour.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        {new Date(tour.date).toLocaleDateString()}
                      </p>
                      <Badge 
                        variant={tour.status === 'confirmed' ? 'default' : 'secondary'}
                        className={tour.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}
                      >
                        {tour.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Properties */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">{t('dashboard.myProperties', 'Recent Properties')}</CardTitle>
            <CardDescription>{t('property.properties', 'Your latest listed properties')}</CardDescription>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard-my-properties">
              {t('common.seeAll', 'View All')}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          {properties.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Building2 className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p>{t('common.noResults', 'No properties listed yet')}</p>
              <Button className="mt-4 bg-homez-primary hover:bg-homez-primary/90" asChild>
                <Link href="/dashboard-add-property">
                  <Plus className="h-4 w-4 mr-2" />
                  {t('dashboard.addProperty', 'Add Your First Property')}
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {properties.slice(0, 3).map((property) => (
                <PropertyCard key={property.id} property={property} variant="compact" />
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{t('dashboard.quickActions', 'Quick Actions')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-homez-primary/5 hover:border-homez-primary" asChild>
              <Link href="/dashboard-my-properties">
                <Building2 className="h-5 w-5 text-homez-primary" />
                {t('dashboard.myProperties', 'View Properties')}
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-homez-primary/5 hover:border-homez-primary" asChild>
              <Link href="/dashboard-message">
                <MessageSquare className="h-5 w-5 text-homez-primary" />
                {t('dashboard.messages', 'Messages')}
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-homez-primary/5 hover:border-homez-primary" asChild>
              <Link href="/dashboard-add-property">
                <Calendar className="h-5 w-5 text-homez-primary" />
                {t('tour.scheduleTour', 'Schedule Tour')}
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-homez-primary/5 hover:border-homez-primary" asChild>
              <Link href="/dashboard-my-package">
                <DollarSign className="h-5 w-5 text-homez-primary" />
                {t('dashboard.stats.revenue', 'View Earnings')}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
