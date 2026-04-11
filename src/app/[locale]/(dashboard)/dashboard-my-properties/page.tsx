'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PropertyTable } from '@/components/dashboard/PropertyTable';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, AlertCircle, Building2 } from 'lucide-react';
import { 
  useTranslation, 
  useAuth, 
  usePropertyDataSource 
} from '@/providers';
import type { Property } from '@/types';

interface PropertyWithStats extends Property {
  views: number;
  favorites: number;
}

export default function DashboardMyProperties() {
  const { t } = useTranslation();
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const propertyDataSource = usePropertyDataSource();

  const [properties, setProperties] = useState<PropertyWithStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  // Fetch user's properties
  useEffect(() => {
    async function fetchProperties() {
      if (!user?.id) return;

      setLoading(true);
      setError(null);

      try {
        const result = await propertyDataSource.getPropertiesByAgent(user.id, 50);
        // Add mock stats (would come from analytics in production)
        const propertiesWithStats: PropertyWithStats[] = result.map((p, index) => ({
          ...p,
          views: Math.floor(Math.random() * 500) + 100,
          favorites: Math.floor(Math.random() * 50) + 10,
        }));
        setProperties(propertiesWithStats);
      } catch (err) {
        console.error('Failed to fetch properties:', err);
        setError(t('errors.somethingWentWrong', 'Failed to load properties'));
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, [user?.id, propertyDataSource, t]);

  const handleEdit = (id: string) => {
    router.push(`/dashboard-add-property?edit=${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      await propertyDataSource.deleteProperty(id);
      setProperties(properties.filter(p => p.id !== id));
    } catch (err) {
      console.error('Failed to delete property:', err);
    }
  };

  const handleView = (id: string) => {
    router.push(`/single-v1/${id}`);
  };

  // Calculate stats
  const totalListings = properties.length;
  const activeListings = properties.filter(p => p.status === 'for-sale' || p.status === 'for-rent').length;
  const pendingListings = properties.filter(p => p.status === 'pending').length;
  const soldListings = properties.filter(p => p.status === 'sold').length;

  // Loading state
  if (authLoading || loading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
          <Skeleton className="h-10 w-36" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
        <Skeleton className="h-96" />
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
          <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.myProperties', 'My Properties')}</h1>
          <p className="text-gray-500">{t('property.properties', 'Manage and track your property listings')}</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-homez-primary hover:bg-homez-primary/90" asChild>
            <Link href="/dashboard-add-property">
              <Plus className="h-4 w-4 mr-2" />
              {t('dashboard.addProperty', 'Add Property')}
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <p className="text-sm text-gray-500">{t('dashboard.stats.totalProperties', 'Total Listings')}</p>
          <p className="text-2xl font-bold text-gray-900">{totalListings}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <p className="text-sm text-gray-500">{t('dashboard.stats.activeListings', 'Active')}</p>
          <p className="text-2xl font-bold text-green-600">{activeListings}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <p className="text-sm text-gray-500">{t('dashboard.stats.pendingListings', 'Pending')}</p>
          <p className="text-2xl font-bold text-yellow-600">{pendingListings}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <p className="text-sm text-gray-500">{t('dashboard.stats.soldProperties', 'Sold/Rented')}</p>
          <p className="text-2xl font-bold text-gray-600">{soldListings}</p>
        </div>
      </div>

      {/* Empty State */}
      {properties.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Building2 className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {t('common.noResults', 'No properties found')}
            </h3>
            <p className="text-gray-500 mb-6">
              {t('property.properties', "You haven't listed any properties yet. Start by adding your first property.")}
            </p>
            <Button className="bg-homez-primary hover:bg-homez-primary/90" asChild>
              <Link href="/dashboard-add-property">
                <Plus className="h-4 w-4 mr-2" />
                {t('dashboard.addProperty', 'Add Your First Property')}
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        /* Property Table */
        <PropertyTable
          properties={properties}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />
      )}
    </div>
  );
}
