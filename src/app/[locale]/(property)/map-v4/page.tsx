'use client';

import { useState, useMemo } from 'react';
import { useProperties } from '@/hooks/useAsyncData';
import { PropertyCard } from '@/components/property';
import { PropertyMap, Pagination } from '@/components/listing';
import { PropertySearchFilters, Property } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Home, MapPin, LayoutGrid, LayoutList } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

export default function MapV4Page() {
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
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState<'grid' | 'list'>('list');

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
      {/* Header */}
      <div className="bg-homez-dark py-6">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-xl font-bold text-white">Split View</h1>
            
            <div className="flex-1 flex flex-wrap items-center gap-3 max-w-2xl">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search location..."
                  value={filters.query || ''}
                  onChange={(e) => setFilters({ ...filters, query: e.target.value })}
                  className="pl-9 bg-white"
                />
              </div>

              <Select
                value={filters.propertyType?.[0] || 'all'}
                onValueChange={(value) =>
                  setFilters({
                    ...filters,
                    propertyType: value === 'all' ? undefined : [value as any],
                  })
                }
              >
                <SelectTrigger className="w-[130px] bg-white">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={filters.status?.[0] || 'all'}
                onValueChange={(value) =>
                  setFilters({
                    ...filters,
                    status: value === 'all' ? undefined : [value as any],
                  })
                }
              >
                <SelectTrigger className="w-[110px] bg-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="for-sale">For Sale</SelectItem>
                  <SelectItem value="for-rent">For Rent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-white/70 text-sm">
                {filteredProperties.length} properties
              </span>
              
              <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
                <Button
                  variant={view === 'list' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setView('list')}
                  className="rounded-none text-white"
                >
                  <LayoutList className="h-4 w-4" />
                </Button>
                <Button
                  variant={view === 'grid' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setView('grid')}
                  className="rounded-none text-white"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Split View - Equal Split */}
      <div className="flex h-[calc(100vh-88px)]">
        {/* Properties List - Left Side */}
        <div className="w-1/2 overflow-y-auto border-r">
          <div className="p-4">
            {view === 'list' ? (
              <div className="space-y-4">
                {paginatedProperties.map((property) => (
                  <div
                    key={property.id}
                    className={`transition-all duration-200 ${
                      selectedProperty?.id === property.id
                        ? 'ring-2 ring-homez-primary rounded-xl'
                        : ''
                    }`}
                    onMouseEnter={() => setSelectedProperty(property)}
                    onMouseLeave={() => setSelectedProperty(null)}
                  >
                    <PropertyCard property={property} variant="horizontal" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {paginatedProperties.map((property) => (
                  <div
                    key={property.id}
                    className={`transition-all duration-200 ${
                      selectedProperty?.id === property.id
                        ? 'ring-2 ring-homez-primary rounded-xl'
                        : ''
                    }`}
                    onMouseEnter={() => setSelectedProperty(property)}
                    onMouseLeave={() => setSelectedProperty(null)}
                  >
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
            )}

            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <Home className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No properties found</p>
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-6">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>

        {/* Map - Right Side */}
        <div className="w-1/2 sticky top-[88px] h-[calc(100vh-88px)]">
          <PropertyMap
            properties={paginatedProperties}
            selectedProperty={selectedProperty}
            onPropertySelect={setSelectedProperty}
            height="100%"
            variant="split"
          />
        </div>
      </div>
    </main>
  );
}
