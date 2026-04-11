'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Property } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowRight,
  RefreshCw,
  Share2,
  ChevronLeft,
  ChevronRight,
  Loader2
} from 'lucide-react';
import { useTranslation, usePropertyDataSource } from '@/providers';

interface FeaturedPropertiesProps {
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  properties?: Property[];
}

export default function FeaturedProperties({
  title,
  subtitle,
  showViewAll = true,
  properties: providedProperties,
}: FeaturedPropertiesProps) {
  const { t } = useTranslation();
  const propertyDataSource = usePropertyDataSource();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [properties, setProperties] = useState<Property[]>(providedProperties ?? []);
  const [loading, setLoading] = useState(!providedProperties);
  const [error, setError] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Default values from translations
  const displayTitle = title ?? t('featured.title', 'Discover Our Featured Listings');
  const displaySubtitle = subtitle ?? t('featured.subtitle', 'Aliquam lacinia diam quis lacus euismod');

  // Fetch properties on mount if not provided
  useEffect(() => {
    if (providedProperties) {
      setProperties(providedProperties);
      setLoading(false);
      return;
    }

    async function fetchProperties() {
      try {
        setLoading(true);
        setError(null);
        const data = await propertyDataSource.getFeaturedProperties(6);
        setProperties(data);
      } catch (err) {
        console.error('Failed to fetch featured properties:', err);
        setError(t('common.error', 'Failed to load properties'));
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, [propertyDataSource, providedProperties, t]);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#041e42] mb-3">
              {displayTitle}
            </h2>
            <p className="text-gray-500 text-lg">{displaySubtitle}</p>
          </div>
          {showViewAll && (
            <Link
              href="/grid-default"
              className="inline-flex items-center text-[#eb6753] font-medium hover:gap-2 transition-all mt-4 md:mt-0"
            >
              {t('featured.viewAll', 'See All Properties')}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-[#eb6753]" />
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <Button variant="outline" onClick={() => window.location.reload()}>
              {t('common.retry', 'Retry')}
            </Button>
          </div>
        )}

        {/* Carousel Container */}
        {!loading && !error && properties.length > 0 && (
          <div className="relative">
            {/* Left Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border-gray-100 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed ${
                canScrollLeft ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </Button>

            {/* Scrollable Cards */}
            <div
              ref={scrollRef}
              onScroll={checkScrollButtons}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-4"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Right Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border-gray-100 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed ${
                canScrollRight ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </Button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && properties.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            {t('common.noResults', 'No properties found')}
          </div>
        )}
      </div>
    </section>
  );
}

interface PropertyCardProps {
  property: Property;
}

function PropertyCard({ property }: PropertyCardProps) {
  const { t } = useTranslation();

  const formatPrice = (price: number, suffix?: string) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
    return suffix ? `${formatted} / ${suffix}` : formatted;
  };

  const statusColors: Record<string, string> = {
    'for-sale': 'bg-[#041e42] text-white',
    'for-rent': 'bg-[#eb6753] text-white',
    'sold': 'bg-gray-500 text-white',
    'rented': 'bg-gray-500 text-white',
    'pending': 'bg-amber-500 text-white',
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

  return (
    <Card
      className="min-w-[320px] flex-shrink-0 bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop'}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Featured Badge */}
        {property.featured && (
          <Badge className="absolute top-4 left-4 bg-[#eb6753] text-white px-3 py-1 text-xs font-semibold rounded-lg">
            {t('property.featured', 'FEATURED')}
          </Badge>
        )}

        {/* Status Badge */}
        <Badge className={`absolute top-4 right-4 ${statusColors[property.status]} px-3 py-1 text-xs font-medium rounded-lg`}>
          {getStatusLabel(property.status)}
        </Badge>

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#eb6753] hover:text-white transition-colors">
            <Heart className="h-4 w-4" />
          </button>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#eb6753] hover:text-white transition-colors">
            <RefreshCw className="h-4 w-4" />
          </button>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#eb6753] hover:text-white transition-colors">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-5">
        {/* Price */}
        <p className="text-2xl font-bold text-[#eb6753] mb-2">
          {formatPrice(property.price, property.priceSuffix)}
        </p>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#041e42] mb-2 line-clamp-1">
          <Link href={`/single-v1/${property.id}`} className="hover:text-[#eb6753] transition-colors">
            {property.title}
          </Link>
        </h3>

        {/* Location */}
        <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
          <MapPin className="h-4 w-4" />
          {property.city}, {property.state}, {property.country}
        </p>

        {/* Features */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" />
            {property.bedrooms} {t('property.beds', 'bed')}
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            {property.bathrooms} {t('property.baths', 'bath')}
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            {property.sqft.toLocaleString()} {t('property.sqft', 'sqft')}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
