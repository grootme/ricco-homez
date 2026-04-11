'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useProperties } from '@/hooks/useAsyncData';
import { FilterBar, SortDropdown, Pagination } from '@/components/listing';
import { PropertySearchFilters, Property } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  LayoutGrid,
  LayoutList,
  Home,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Heart,
  Eye,
  Share2,
  Calendar,
  Grid3X3,
  AlignJustify,
} from 'lucide-react';

const ITEMS_PER_PAGE = 9;

// Compact List Item
function CompactListItem({ property }: { property: Property }) {
  const formatPrice = (price: number, suffix?: string) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
    return suffix ? `${formatted}${suffix}` : formatted;
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
      <div className="relative w-24 h-20 shrink-0 rounded-lg overflow-hidden">
        <img
          src={property.images[0] || '/images/placeholder.jpg'}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <Badge className={`absolute top-1 left-1 text-[10px] ${
          property.status === 'for-sale' ? 'bg-homez-primary' : 'bg-homez-dark'
        }`}>
          {property.status === 'for-sale' ? 'Sale' : 'Rent'}
        </Badge>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-homez-primary">{formatPrice(property.price, property.priceSuffix)}</p>
        <h3 className="font-medium text-sm text-gray-900 truncate">{property.title}</h3>
        <p className="text-xs text-gray-500">{property.city}, {property.state}</p>
      </div>
      <div className="hidden sm:flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1"><BedDouble className="h-3 w-3" />{property.bedrooms}</span>
        <span className="flex items-center gap-1"><Bath className="h-3 w-3" />{property.bathrooms}</span>
        <span className="flex items-center gap-1"><Maximize className="h-3 w-3" />{property.sqft}</span>
      </div>
      <Button size="sm" className="shrink-0">View</Button>
    </div>
  );
}

// Extended List Item
function ExtendedListItem({ property }: { property: Property }) {
  const formatPrice = (price: number, suffix?: string) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
    return suffix ? `${formatted}${suffix}` : formatted;
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-80 h-48 md:h-auto shrink-0">
          <img
            src={property.images[0] || '/images/placeholder.jpg'}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <Badge className={`absolute top-3 left-3 ${
            property.status === 'for-sale' ? 'bg-homez-primary' : 'bg-homez-dark'
          }`}>
            {property.status.replace('-', ' ').toUpperCase()}
          </Badge>
          <div className="absolute top-3 right-3 flex gap-2">
            <Button size="icon" variant="ghost" className="h-8 w-8 bg-white/90 rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <CardContent className="flex-1 p-5">
          <div className="flex justify-between items-start mb-2">
            <p className="text-2xl font-bold text-homez-primary">
              {formatPrice(property.price, property.priceSuffix)}
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Eye className="h-4 w-4" />
              {property.views}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            <Link href={`/single-v1/${property.id}`} className="hover:text-homez-primary">
              {property.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
            <MapPin className="h-4 w-4" />
            {property.address}, {property.city}
          </p>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">{property.description}</p>
          <div className="flex items-center justify-between pt-3 border-t">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" />{property.bedrooms} Beds</span>
              <span className="flex items-center gap-1"><Bath className="h-4 w-4" />{property.bathrooms} Baths</span>
              <span className="flex items-center gap-1"><Maximize className="h-4 w-4" />{property.sqft.toLocaleString()} Sqft</span>
            </div>
            <Button size="sm" className="bg-homez-primary hover:bg-homez-primary/90">
              Details
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

// Grid Item (smaller)
function GridItem({ property }: { property: Property }) {
  const formatPrice = (price: number, suffix?: string) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
    return suffix ? `${formatted}${suffix}` : formatted;
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-40">
        <img
          src={property.images[0] || '/images/placeholder.jpg'}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <Badge className={`absolute top-2 left-2 text-xs ${
          property.status === 'for-sale' ? 'bg-homez-primary' : 'bg-homez-dark'
        }`}>
          {property.status === 'for-sale' ? 'Sale' : 'Rent'}
        </Badge>
      </div>
      <CardContent className="p-3">
        <p className="font-bold text-homez-primary">{formatPrice(property.price, property.priceSuffix)}</p>
        <h3 className="font-medium text-sm text-gray-900 truncate">{property.title}</h3>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <MapPin className="h-3 w-3" />{property.city}
        </p>
        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
          <span><BedDouble className="h-3 w-3 inline" /> {property.bedrooms}</span>
          <span><Bath className="h-3 w-3 inline" /> {property.bathrooms}</span>
          <span><Maximize className="h-3 w-3 inline" /> {property.sqft}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ListAllStylePage() {
  const { data: propertiesData, isLoading } = useProperties();
  
  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading properties...</div>
      </main>
    );
  }
  
  const properties = propertiesData ?? [];

  const [filters, setFilters] = useState<PropertySearchFilters>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [viewStyle, setViewStyle] = useState<'compact' | 'extended' | 'grid'>('extended');

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (filters.query) {
      const query = filters.query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.city.toLowerCase().includes(query)
      );
    }

    if (filters.propertyType && filters.propertyType.length > 0) {
      result = result.filter((p) => filters.propertyType!.includes(p.propertyType));
    }

    if (filters.status && filters.status.length > 0) {
      result = result.filter((p) => filters.status!.includes(p.status));
    }

    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price-asc':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          result.sort((a, b) => b.price - a.price);
          break;
      }
    }

    return result;
  }, [filters]);

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (newFilters: PropertySearchFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({});
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-homez-dark py-12">
        <div className="container-homez text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Properties - All Styles
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Multiple view styles to suit your preference
          </p>
        </div>
      </div>

      <div className="container-homez py-8">
        {/* Filter Bar */}
        <FilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          resultCount={filteredProperties.length}
        />

        {/* View Style Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 my-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">View Style:</span>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <Button
                variant={viewStyle === 'compact' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewStyle('compact')}
                className="rounded-none"
              >
                <AlignJustify className="h-4 w-4 mr-1" />
                Compact
              </Button>
              <Button
                variant={viewStyle === 'extended' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewStyle('extended')}
                className="rounded-none"
              >
                <LayoutList className="h-4 w-4 mr-1" />
                Extended
              </Button>
              <Button
                variant={viewStyle === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewStyle('grid')}
                className="rounded-none"
              >
                <Grid3X3 className="h-4 w-4 mr-1" />
                Grid
              </Button>
            </div>
          </div>

          <SortDropdown
            value={filters.sortBy}
            onChange={(sortBy) => handleFilterChange({ ...filters, sortBy })}
          />
        </div>

        {/* Properties Display */}
        {viewStyle === 'compact' && (
          <div className="space-y-3">
            {paginatedProperties.map((property) => (
              <CompactListItem key={property.id} property={property} />
            ))}
          </div>
        )}

        {viewStyle === 'extended' && (
          <div className="space-y-6">
            {paginatedProperties.map((property) => (
              <ExtendedListItem key={property.id} property={property} />
            ))}
          </div>
        )}

        {viewStyle === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedProperties.map((property) => (
              <GridItem key={property.id} property={property} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <Home className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No properties found</p>
            <Button variant="outline" className="mt-4" onClick={handleClearFilters}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </main>
  );
}
