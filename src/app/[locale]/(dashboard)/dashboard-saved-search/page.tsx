'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Search,
  Trash2,
  Play,
  Bell,
  BellOff,
  MapPin,
  Home,
  DollarSign,
  Calendar,
  Plus,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from 'lucide-react';
import { useTranslation, useAuth, useUserDataSource } from '@/providers';
import type { SavedSearch } from '@/types';

const formatPrice = (price: number) => {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  }
  return `$${(price / 1000).toFixed(0)}k`;
};

export default function DashboardSavedSearch() {
  const { t } = useTranslation();
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const userDataSource = useUserDataSource();

  const [searches, setSearches] = useState<SavedSearch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  // Fetch saved searches
  useEffect(() => {
    async function fetchSearches() {
      if (!user?.id) return;

      setLoading(true);
      setError(null);

      try {
        const result = await userDataSource.getUserSavedSearches(user.id);
        setSearches(result);
      } catch (err) {
        console.error('Failed to fetch saved searches:', err);
        setError(t('errors.somethingWentWrong', 'Failed to load saved searches'));
      } finally {
        setLoading(false);
      }
    }

    fetchSearches();
  }, [user?.id, userDataSource, t]);

  const toggleAlerts = (id: string) => {
    setSearches((prev) =>
      prev.map((s) => (s.id === id ? { ...s, alertsEnabled: !s.alertsEnabled } : s))
    );
  };

  const deleteSearch = (id: string) => {
    setSearches((prev) => prev.filter((s) => s.id !== id));
  };

  const toggleExpanded = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Loading state
  if (authLoading || loading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      </div>
    );
  }

  // Error state
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
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.savedSearches', 'Saved Searches')}</h1>
          <p className="text-gray-500">
            {searches.length} {searches.length === 1 ? t('search.search', 'search') : t('search.savedSearches', 'searches')} {t('common.saved', 'saved')}
          </p>
        </div>
        <Button className="bg-homez-primary hover:bg-homez-primary/90" asChild>
          <Link href="/grid-default">
            <Plus className="h-4 w-4 mr-2" />
            {t('search.saveSearch', 'New Search')}
          </Link>
        </Button>
      </div>

      {/* Empty State */}
      {searches.length === 0 ? (
        <Card className="py-16">
          <CardContent className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('common.noResults', 'No saved searches')}</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              {t('profile.savedSearchDesc', 'Save your search criteria to quickly find properties and receive alerts when new listings match.')}
            </p>
            <Button className="bg-homez-primary hover:bg-homez-primary/90" asChild>
              <Link href="/grid-default">
                {t('search.browseAll', 'Start Searching')}
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        /* Searches List */
        <div className="space-y-4">
          {searches.map((search) => (
            <Card key={search.id} className="overflow-hidden">
              <CardContent className="p-0">
                {/* Main Content */}
                <div className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{search.name}</h3>
                        {search.alertsEnabled ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <Bell className="h-3 w-3 mr-1" />
                            {t('profile.alertsOn', 'Alerts On')}
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-gray-50 text-gray-500 border-gray-200">
                            <BellOff className="h-3 w-3 mr-1" />
                            {t('profile.alertsOff', 'Alerts Off')}
                          </Badge>
                        )}
                      </div>

                      {/* Filter Pills */}
                      <div className="flex flex-wrap gap-2 mb-2">
                        {search.filters.location && (
                          <Badge variant="secondary" className="font-normal">
                            <MapPin className="h-3 w-3 mr-1" />
                            {search.filters.location}
                          </Badge>
                        )}
                        {search.filters.propertyType && (
                          <Badge variant="secondary" className="font-normal">
                            <Home className="h-3 w-3 mr-1" />
                            {search.filters.propertyType}
                          </Badge>
                        )}
                        {search.filters.minPrice && search.filters.maxPrice && (
                          <Badge variant="secondary" className="font-normal">
                            <DollarSign className="h-3 w-3 mr-1" />
                            {formatPrice(search.filters.minPrice)} - {formatPrice(search.filters.maxPrice)}
                          </Badge>
                        )}
                        {search.filters.bedrooms && (
                          <Badge variant="secondary" className="font-normal">
                            {search.filters.bedrooms}+ {t('property.beds', 'Beds')}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{t('search.results', '{count} results', { count: 0 })}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {t('common.saved', 'Saved')} {new Date(search.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 hidden md:inline">{t('profile.alerts', 'Alerts')}</span>
                        <Switch
                          checked={search.alertsEnabled}
                          onCheckedChange={() => toggleAlerts(search.id)}
                        />
                      </div>
                      <Button
                        size="sm"
                        className="bg-homez-primary hover:bg-homez-primary/90"
                        asChild
                      >
                        <Link href="/grid-default">
                          <Play className="h-4 w-4 mr-2" />
                          {t('profile.runSearch', 'Run Search')}
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleExpanded(search.id)}
                      >
                        {expandedId === search.id ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:bg-red-50"
                        onClick={() => deleteSearch(search.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedId === search.id && (
                  <div className="border-t bg-gray-50 p-4 md:p-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">{t('profile.searchCriteria', 'Search Criteria')}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      {search.filters.location && (
                        <div>
                          <p className="text-gray-500">{t('property.location', 'Location')}</p>
                          <p className="font-medium">{search.filters.location}</p>
                        </div>
                      )}
                      {search.filters.propertyType && (
                        <div>
                          <p className="text-gray-500">{t('search.propertyType', 'Property Type')}</p>
                          <p className="font-medium">{search.filters.propertyType}</p>
                        </div>
                      )}
                      {search.filters.status && (
                        <div>
                          <p className="text-gray-500">{t('property.status', 'Status')}</p>
                          <p className="font-medium capitalize">{search.filters.status.replace('-', ' ')}</p>
                        </div>
                      )}
                      {search.filters.minPrice && (
                        <div>
                          <p className="text-gray-500">{t('search.minPrice', 'Min Price')}</p>
                          <p className="font-medium">${search.filters.minPrice.toLocaleString()}</p>
                        </div>
                      )}
                      {search.filters.maxPrice && (
                        <div>
                          <p className="text-gray-500">{t('search.maxPrice', 'Max Price')}</p>
                          <p className="font-medium">${search.filters.maxPrice.toLocaleString()}</p>
                        </div>
                      )}
                      {search.filters.bedrooms && (
                        <div>
                          <p className="text-gray-500">{t('property.bedrooms', 'Bedrooms')}</p>
                          <p className="font-medium">{search.filters.bedrooms}+</p>
                        </div>
                      )}
                      {search.filters.bathrooms && (
                        <div>
                          <p className="text-gray-500">{t('property.bathrooms', 'Bathrooms')}</p>
                          <p className="font-medium">{search.filters.bathrooms}+</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Info Card */}
      <Card className="bg-blue-50 border-blue-100">
        <CardContent className="p-4 flex items-start gap-3">
          <Bell className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-900">{t('profile.emailAlerts', 'Email Alerts')}</h4>
            <p className="text-sm text-blue-700 mt-1">
              {t('profile.alertsDesc', "When alerts are enabled, you'll receive email notifications when new properties match your saved search criteria.")}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
