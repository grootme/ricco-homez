'use client';

import { useState, useMemo } from 'react';
import { useProperties } from '@/hooks/useAsyncData';
import { PropertyCard } from '@/components/property';
import { PropertyMap } from '@/components/listing';
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
import {
  Search,
  Home,
  MapPin,
  SlidersHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function MapV1Page() {
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
  const [showMap, setShowMap] = useState(true);

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

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top Search Bar */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="container-wide py-4">
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900">Map View</h1>
            
            <div className="flex-1 flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search location..."
                  value={filters.query || ''}
                  onChange={(e) => setFilters({ ...filters, query: e.target.value })}
                  className="pl-9"
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
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
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
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="for-sale">For Sale</SelectItem>
                  <SelectItem value="for-rent">For Rent</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setShowMap(!showMap)}
              >
                <MapPin className="h-4 w-4" />
                {showMap ? 'Hide Map' : 'Show Map'}
              </Button>
            </div>

            <span className="text-sm text-gray-500">
              {filteredProperties.length} properties
            </span>
          </div>
        </div>
      </div>

      {/* Split View */}
      <div className="flex h-[calc(100vh-73px)]">
        {/* Properties List - Left Side */}
        <div className={`${showMap ? 'w-1/2' : 'w-full'} overflow-y-auto transition-all duration-300`}>
          <div className="p-4 space-y-4">
            {filteredProperties.map((property) => (
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

            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <Home className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No properties found</p>
              </div>
            )}
          </div>
        </div>

        {/* Map - Right Side */}
        {showMap && (
          <div className="w-1/2 sticky top-[73px] h-[calc(100vh-73px)]">
            <PropertyMap
              properties={filteredProperties}
              selectedProperty={selectedProperty}
              onPropertySelect={setSelectedProperty}
              height="100%"
            />
          </div>
        )}
      </div>
    </main>
  );
}
