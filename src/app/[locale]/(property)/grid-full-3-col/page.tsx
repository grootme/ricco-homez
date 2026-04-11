'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useProperties } from '@/hooks/useAsyncData';
import { PropertyCard } from '@/components/property';
import { FilterBar, SortDropdown, Pagination } from '@/components/listing';
import { PropertySearchFilters } from '@/types';
import { Button } from '@/components/ui/button';
import {
  LayoutGrid,
  LayoutList,
  Map,
  Home,
} from 'lucide-react';

const ITEMS_PER_PAGE = 12;

export default function GridFull3ColPage() {
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
  const [view, setView] = useState<'grid' | 'list'>('grid');

  // Filter and sort properties
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

    if (filters.location) {
      const location = filters.location.toLowerCase();
      result = result.filter(
        (p) =>
          p.city.toLowerCase().includes(location) ||
          p.state.toLowerCase().includes(location)
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

    if (filters.minBedrooms !== undefined) {
      result = result.filter((p) => p.bedrooms >= filters.minBedrooms!);
    }

    if (filters.minBathrooms !== undefined) {
      result = result.filter((p) => p.bathrooms >= filters.minBathrooms!);
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
        case 'sqft-desc':
          result.sort((a, b) => b.sqft - a.sqft);
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
            Properties - 3 Column Grid
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Full-width layout with 3 columns for optimal browsing
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
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Showing <span className="font-semibold">{paginatedProperties.length}</span> of{' '}
              <span className="font-semibold">{filteredProperties.length}</span> properties
            </span>
          </div>

          <div className="flex items-center gap-3">
            <SortDropdown
              value={filters.sortBy}
              onChange={(sortBy) => handleFilterChange({ ...filters, sortBy })}
            />

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

        {/* Properties Grid */}
        {view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {paginatedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} variant="horizontal" />
            ))}
          </div>
        )}

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
