'use client';

import { useState, useMemo } from 'react';
import { useProperties } from '@/hooks/useAsyncData';
import { BannerSearch, PropertyMap, Pagination, SortDropdown } from '@/components/listing';
import { PropertyCard } from '@/components/property';
import { PropertySearchFilters, Property } from '@/types';
import { Button } from '@/components/ui/button';
import { LayoutGrid, LayoutList, Home } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

export default function HeaderMapStylePage() {
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
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');

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

    return result;
  }, [filters]);

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Banner with Search */}
      <BannerSearch
        variant="header-map"
        title="Properties with Map"
        subtitle="Browse properties with interactive map view"
        onSearch={(searchFilters) => {
          setFilters({
            query: searchFilters.query,
            location: searchFilters.location,
            propertyType: searchFilters.type ? [searchFilters.type as any] : undefined,
            status: searchFilters.status ? [searchFilters.status as any] : undefined,
            minPrice: searchFilters.minPrice,
            maxPrice: searchFilters.maxPrice,
            minBedrooms: searchFilters.bedrooms,
            minBathrooms: searchFilters.bathrooms,
          });
          setCurrentPage(1);
        }}
      />

      {/* Map Section */}
      <div className="h-[400px] relative">
        <PropertyMap
          properties={filteredProperties.slice(0, 12)}
          selectedProperty={selectedProperty}
          onPropertySelect={setSelectedProperty}
          height="400px"
          variant="header"
        />
      </div>

      {/* Properties Section */}
      <div className="container-homez py-8">
        {/* Results Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {filteredProperties.length} Properties Available
            </h2>
            <p className="text-gray-500 text-sm">
              Click on map markers to preview properties
            </p>
          </div>

          <div className="flex items-center gap-3">
            <SortDropdown
              value={filters.sortBy}
              onChange={(sortBy) => setFilters({ ...filters, sortBy })}
            />

            {/* View Toggle */}
            <div className="flex items-center border rounded-lg overflow-hidden">
              <Button
                variant={view === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setView('grid')}
                className="rounded-none"
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={view === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setView('list')}
                className="rounded-none"
              >
                <LayoutList className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Properties Grid/List */}
        {view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProperties.map((property) => (
              <div
                key={property.id}
                className={`transition-all duration-200 ${
                  selectedProperty?.id === property.id ? 'ring-2 ring-homez-primary rounded-xl' : ''
                }`}
                onMouseEnter={() => setSelectedProperty(property)}
                onMouseLeave={() => setSelectedProperty(null)}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {paginatedProperties.map((property) => (
              <div
                key={property.id}
                className={`transition-all duration-200 ${
                  selectedProperty?.id === property.id ? 'ring-2 ring-homez-primary rounded-xl' : ''
                }`}
                onMouseEnter={() => setSelectedProperty(property)}
                onMouseLeave={() => setSelectedProperty(null)}
              >
                <PropertyCard property={property} variant="horizontal" />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <Home className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No properties found</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setFilters({});
                setCurrentPage(1);
              }}
            >
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
