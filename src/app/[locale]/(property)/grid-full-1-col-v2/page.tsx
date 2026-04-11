'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useProperties } from '@/hooks/useAsyncData';
import { FilterBar, SortDropdown, Pagination } from '@/components/listing';
import { PropertySearchFilters, Property } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Home, 
  MapPin, 
  BedDouble, 
  Bath, 
  Maximize, 
  Heart, 
  Eye,
  Calendar,
  Share2
} from 'lucide-react';

const ITEMS_PER_PAGE = 4;

interface PropertyCardExtendedProps {
  property: Property;
}

function PropertyCardExtended({ property }: PropertyCardExtendedProps) {
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
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="relative w-full lg:w-96 h-64 lg:h-auto shrink-0">
          <img
            src={property.images[0] || '/images/placeholder.jpg'}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <Badge className={`absolute top-4 left-4 ${statusColors[property.status]}`}>
            {property.status.replace('-', ' ').toUpperCase()}
          </Badge>
          {property.featured && (
            <Badge variant="secondary" className="absolute top-4 left-24">
              Featured
            </Badge>
          )}
          
          {/* Action buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button size="icon" variant="ghost" className="h-9 w-9 bg-white/90 hover:bg-white rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9 bg-white/90 hover:bg-white rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Views count */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
            <Eye className="h-4 w-4" />
            {property.views.toLocaleString()} views
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="flex-1 p-6">
          <div className="flex flex-col h-full">
            {/* Price and Title */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <p className="text-2xl font-bold text-homez-primary mb-1">
                  {formatPrice(property.price, property.priceSuffix)}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                  <Link href={`/single-v1/${property.id}`} className="hover:text-homez-primary transition-colors">
                    {property.title}
                  </Link>
                </h3>
              </div>
            </div>

            {/* Location */}
            <p className="text-gray-500 flex items-center gap-1 mb-4">
              <MapPin className="h-4 w-4" />
              {property.address}, {property.city}, {property.state} {property.zipCode}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-1">
              {property.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-2">
                <BedDouble className="h-5 w-5 text-gray-400" />
                <span className="font-medium">{property.bedrooms}</span> Bedrooms
              </span>
              <span className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-gray-400" />
                <span className="font-medium">{property.bathrooms}</span> Bathrooms
              </span>
              <span className="flex items-center gap-2">
                <Maximize className="h-5 w-5 text-gray-400" />
                <span className="font-medium">{property.sqft.toLocaleString()}</span> Sqft
              </span>
              {property.garage && (
                <span className="flex items-center gap-2">
                  <span className="font-medium">{property.garage}</span> Garage
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                Listed {new Date(property.createdAt).toLocaleDateString()}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  Compare
                </Button>
                <Button size="sm" className="bg-homez-primary hover:bg-homez-primary/90">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default function GridFull1ColV2Page() {
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

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (filters.query) {
      const query = filters.query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.city.toLowerCase().includes(query) ||
          p.state.toLowerCase().includes(query)
      );
    }

    if (filters.propertyType && filters.propertyType.length > 0) {
      result = result.filter((p) => filters.propertyType!.includes(p.propertyType));
    }

    if (filters.status && filters.status.length > 0) {
      result = result.filter((p) => filters.status!.includes(p.status));
    }

    if (filters.minPrice !== undefined) {
      result = result.filter((p) => p.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      result = result.filter((p) => p.price <= filters.maxPrice!);
    }

    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price-asc':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'date-desc':
          result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
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
            Properties - Single Column V2
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Extended card view with detailed property information
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

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 my-6">
          <span className="text-sm text-gray-600">
            Showing <span className="font-semibold">{paginatedProperties.length}</span> of{' '}
            <span className="font-semibold">{filteredProperties.length}</span> properties
          </span>

          <SortDropdown
            value={filters.sortBy}
            onChange={(sortBy) => handleFilterChange({ ...filters, sortBy })}
          />
        </div>

        {/* Properties List - Extended Cards */}
        <div className="space-y-6">
          {paginatedProperties.map((property) => (
            <PropertyCardExtended key={property.id} property={property} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Home className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search filters</p>
            <Button variant="outline" onClick={handleClearFilters}>
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
