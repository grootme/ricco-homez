'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  MoreHorizontal,
  Share2
} from 'lucide-react';
import { useTranslation } from '@/providers';
import type { Property } from '@/lib/data';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'horizontal' | 'compact';
}

export default function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  const { t } = useTranslation();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'for-sale':
        return t('property.forSale', 'For Sale');
      case 'for-rent':
        return t('property.forRent', 'For Rent');
      case 'sold':
        return t('property.sold', 'Sold');
      case 'rented':
        return t('property.rented', 'Rented');
      case 'pending':
        return t('property.pending', 'Pending');
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  if (variant === 'horizontal') {
    return (
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-72 h-48 md:h-auto shrink-0 overflow-hidden">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge className="bg-orange-500 hover:bg-orange-600">
                {getStatusLabel(property.status)}
              </Badge>
              {property.featured && (
                <Badge variant="secondary">{t('property.featured', 'Featured')}</Badge>
              )}
            </div>
            <div className="absolute top-3 right-3 flex gap-2">
              <Button size="icon" variant="ghost" className="h-8 w-8 bg-white/90 hover:bg-white rounded-full">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardContent className="flex-1 p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-orange-500 transition-colors">
                  <Link href={`/property/${property.slug}`}>{property.title}</Link>
                </h3>
                <p className="text-sm text-slate-500 flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {property.address}, {property.city}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-orange-500">
                  {formatPrice(property.price)}
                </p>
                {property.pricePerMonth && (
                  <p className="text-sm text-slate-500">/{t('common.month', 'month')}</p>
                )}
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-4 line-clamp-2">{property.description}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Bed className="h-4 w-4" /> {property.bedrooms} {t('property.beds', 'Beds')}
              </span>
              <span className="flex items-center gap-1">
                <Bath className="h-4 w-4" /> {property.bathrooms} {t('property.baths', 'Baths')}
              </span>
              <span className="flex items-center gap-1">
                <Square className="h-4 w-4" /> {property.sqft.toLocaleString()} {t('property.sqft', 'sqft')}
              </span>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative h-40 overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600 text-xs">
            {getStatusLabel(property.status)}
          </Badge>
        </div>
        <CardContent className="p-3">
          <p className="text-lg font-bold text-orange-500">{formatPrice(property.price)}</p>
          <h3 className="text-sm font-medium text-slate-900 truncate">{property.title}</h3>
          <p className="text-xs text-slate-500 truncate">{property.city}, {property.state}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-orange-500 hover:bg-orange-600">
            {getStatusLabel(property.status)}
          </Badge>
          {property.featured && (
            <Badge variant="secondary">{t('property.featured', 'Featured')}</Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="ghost" className="h-8 w-8 bg-white/90 hover:bg-white rounded-full">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="h-8 w-8 bg-white/90 hover:bg-white rounded-full">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="h-8 w-8 bg-white/90 hover:bg-white rounded-full">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-white px-3 py-1 rounded-lg shadow-lg">
            <span className="text-lg font-bold text-orange-500">
              {formatPrice(property.price)}
            </span>
            {property.pricePerMonth && (
              <span className="text-sm text-slate-500">/{t('common.month', 'month')}</span>
            )}
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-orange-500 transition-colors mb-1">
          <Link href={`/property/${property.slug}`}>{property.title}</Link>
        </h3>
        <p className="text-sm text-slate-500 flex items-center gap-1 mb-3">
          <MapPin className="h-4 w-4" />
          {property.address}, {property.city}
        </p>

        {/* Features */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1 text-sm text-slate-600">
            <Bed className="h-4 w-4 text-slate-400" />
            <span>{property.bedrooms} {t('property.beds', 'Beds')}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-600">
            <Bath className="h-4 w-4 text-slate-400" />
            <span>{property.bathrooms} {t('property.baths', 'Baths')}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-600">
            <Square className="h-4 w-4 text-slate-400" />
            <span>{property.sqft.toLocaleString()} {t('property.sqft', 'sqft')}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
