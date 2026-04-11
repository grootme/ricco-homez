'use client';

import { useState } from 'react';
import { Property } from '@/types';
import { PropertyCard } from '@/components/property';
import { Button } from '@/components/ui/button';
import { 
  LayoutGrid, 
  LayoutList, 
  SlidersHorizontal,
  Map
} from 'lucide-react';

interface PropertyGridProps {
  properties: Property[];
  view?: 'grid' | 'list' | 'map';
  columns?: 2 | 3 | 4;
  showViewToggle?: boolean;
  showFilters?: boolean;
}

export default function PropertyGrid({
  properties,
  view: initialView = 'grid',
  columns = 3,
  showViewToggle = true,
  showFilters = true,
}: PropertyGridProps) {
  const [view, setView] = useState<'grid' | 'list' | 'map'>(initialView);

  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div>
      {/* Toolbar */}
      {(showViewToggle || showFilters) && (
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-white rounded-lg border">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Showing <span className="font-semibold">{properties.length}</span> properties
            </span>
          </div>

          <div className="flex items-center gap-3">
            {showFilters && (
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            )}

            {showViewToggle && (
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
                <Button
                  variant={view === 'map' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setView('map')}
                  className="rounded-none"
                >
                  <Map className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Properties Display */}
      {view === 'grid' && (
        <div className={`grid ${gridClasses[columns]} gap-6`}>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}

      {view === 'list' && (
        <div className="space-y-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} variant="horizontal" />
          ))}
        </div>
      )}

      {view === 'map' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
          {/* Properties List */}
          <div className="overflow-y-auto space-y-4 pr-4">
            {properties.slice(0, 8).map((property) => (
              <PropertyCard key={property.id} property={property} variant="compact" />
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Map View</p>
              <p className="text-sm text-gray-400">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {properties.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <LayoutGrid className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search filters</p>
          <Button variant="outline">Clear Filters</Button>
        </div>
      )}
    </div>
  );
}
