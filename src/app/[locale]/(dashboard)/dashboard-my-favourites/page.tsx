'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Heart, MapPin, BedDouble, Bath, Maximize, Trash2, Search, ArrowRight, AlertCircle } from 'lucide-react';
import { 
  useTranslation, 
  useAuth, 
  useUserDataSource,
  usePropertyDataSource 
} from '@/providers';
import type { Property, UserFavorite } from '@/types';

interface FavoriteProperty extends Property {
  savedAt: string;
}

const formatPrice = (price: number, suffix?: string) => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  return suffix ? `${formatted}${suffix}` : formatted;
};

const statusColors: Record<string, string> = {
  'for-sale': 'bg-homez-primary text-white',
  'for-rent': 'bg-homez-dark text-white',
  'sold': 'bg-gray-500 text-white',
  'rented': 'bg-gray-500 text-white',
  'pending': 'bg-homez-warning text-white',
};

export default function DashboardMyFavourites() {
  const { t } = useTranslation();
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const userDataSource = useUserDataSource();
  const propertyDataSource = usePropertyDataSource();

  const [favorites, setFavorites] = useState<FavoriteProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  // Fetch favorites
  useEffect(() => {
    async function fetchFavorites() {
      if (!user?.id) return;

      setLoading(true);
      setError(null);

      try {
        // Get user's favorites
        const userFavorites = await userDataSource.getUserFavorites(user.id);
        
        // Fetch property details for each favorite
        const propertyPromises = userFavorites.map(async (fav: UserFavorite) => {
          const property = await propertyDataSource.getPropertyById(fav.propertyId);
          if (property) {
            return {
              ...property,
              savedAt: fav.createdAt,
            } as FavoriteProperty;
          }
          return null;
        });

        const properties = (await Promise.all(propertyPromises)).filter(Boolean) as FavoriteProperty[];
        setFavorites(properties);
      } catch (err) {
        console.error('Failed to fetch favorites:', err);
        setError(t('errors.somethingWentWrong', 'Failed to load favorites'));
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, [user?.id, userDataSource, propertyDataSource, t]);

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
    // In production, also call API to remove from database
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    // In production, also call API to remove all from database
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
          <div className="flex gap-3">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-28" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-80" />
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
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Heart className="h-6 w-6 text-homez-primary" />
            {t('dashboard.myFavorites', 'My Favorites')}
          </h1>
          <p className="text-gray-500">
            {favorites.length} {favorites.length === 1 ? t('property.property', 'property') : t('property.properties', 'properties')} {t('common.saved', 'saved')}
          </p>
        </div>
        {favorites.length > 0 && (
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/grid-default">
                <Search className="h-4 w-4 mr-2" />
                {t('search.browseAll', 'Browse More')}
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="text-red-600 hover:bg-red-50"
              onClick={clearAllFavorites}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              {t('common.clear', 'Clear All')}
            </Button>
          </div>
        )}
      </div>

      {/* Empty State */}
      {favorites.length === 0 ? (
        <Card className="py-16">
          <CardContent className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t('common.noResults', 'No favorites yet')}
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              {t('favorites.emptyMessage', 'Start exploring properties and save your favorites by clicking the heart icon.')}
            </p>
            <Button className="bg-homez-primary hover:bg-homez-primary/90" asChild>
              <Link href="/grid-default">
                {t('search.browseAll', 'Browse Properties')}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        /* Favorites Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((property) => (
            <Card key={property.id} className="overflow-hidden group">
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={property.images[0] || '/images/placeholder.jpg'}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 left-3 ${statusColors[property.status]}`}>
                  {property.status.replace('-', ' ').toUpperCase()}
                </Badge>
                <button
                  onClick={() => removeFavorite(property.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors group/btn"
                  title={t('property.unfavorite', 'Remove from favorites')}
                >
                  <Heart className="h-4 w-4 text-homez-primary fill-homez-primary group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>

              {/* Content */}
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-xl font-bold text-homez-primary">
                    {formatPrice(property.price, property.priceSuffix)}
                  </p>
                  <button
                    onClick={() => removeFavorite(property.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    title={t('common.delete', 'Remove')}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                  <Link href={`/single-v1/${property.id}`} className="hover:text-homez-primary">
                    {property.title}
                  </Link>
                </h3>
                
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                  <MapPin className="h-4 w-4" />
                  {property.city}, {property.state}
                </p>

                {/* Features */}
                <div className="flex items-center gap-4 text-sm text-gray-600 pt-3 border-t">
                  <span className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4" />
                    {property.bedrooms} {t('property.beds', 'Beds')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    {property.bathrooms} {t('property.baths', 'Baths')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" />
                    {property.sqft.toLocaleString()} {t('property.sqft', 'Sqft')}
                  </span>
                </div>

                {/* Saved Date */}
                <p className="text-xs text-gray-400 mt-3">
                  {t('common.saved', 'Saved')} {new Date(property.savedAt).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
