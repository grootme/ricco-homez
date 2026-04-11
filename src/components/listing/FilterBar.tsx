'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  BedDouble, 
  Bath, 
  DollarSign,
  Home,
  MapPin
} from 'lucide-react';
import { PropertySearchFilters, PropertyType, PropertyStatus } from '@/types';

interface FilterBarProps {
  filters: PropertySearchFilters;
  onFilterChange: (filters: PropertySearchFilters) => void;
  onClearFilters: () => void;
  resultCount?: number;
  showSearch?: boolean;
}

const propertyTypes: { value: PropertyType; label: string }[] = [
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'condo', label: 'Condo' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'villa', label: 'Villa' },
  { value: 'penthouse', label: 'Penthouse' },
  { value: 'studio', label: 'Studio' },
  { value: 'land', label: 'Land' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'office', label: 'Office' },
];

const propertyStatuses: { value: PropertyStatus; label: string }[] = [
  { value: 'for-sale', label: 'For Sale' },
  { value: 'for-rent', label: 'For Rent' },
];

const priceRanges = [
  { label: 'Any Price', min: undefined, max: undefined },
  { label: 'Under $100K', min: 0, max: 100000 },
  { label: '$100K - $250K', min: 100000, max: 250000 },
  { label: '$250K - $500K', min: 250000, max: 500000 },
  { label: '$500K - $750K', min: 500000, max: 750000 },
  { label: '$750K - $1M', min: 750000, max: 1000000 },
  { label: '$1M - $2M', min: 1000000, max: 2000000 },
  { label: '$2M - $5M', min: 2000000, max: 5000000 },
  { label: 'Over $5M', min: 5000000, max: undefined },
];

export default function FilterBar({
  filters,
  onFilterChange,
  onClearFilters,
  resultCount,
  showSearch = true,
}: FilterBarProps) {
  const [localFilters, setLocalFilters] = useState<PropertySearchFilters>(filters);

  const updateFilter = <K extends keyof PropertySearchFilters>(
    key: K,
    value: PropertySearchFilters[K]
  ) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const activeFiltersCount = Object.entries(filters).filter(([key, value]) => {
    if (key === 'sortBy') return false;
    if (value === undefined || value === '') return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true;
  }).length;

  return (
    <div className="bg-white rounded-xl border shadow-sm p-4">
      <div className="flex flex-wrap items-center gap-3">
        {/* Search Input */}
        {showSearch && (
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by location, property name..."
              value={localFilters.query || ''}
              onChange={(e) => updateFilter('query', e.target.value || undefined)}
              className="pl-9"
            />
          </div>
        )}

        {/* Status Filter */}
        <Select
          value={localFilters.status?.[0] || 'all'}
          onValueChange={(value) => 
            updateFilter('status', value === 'all' ? undefined : [value as PropertyStatus])
          }
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            {propertyStatuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Property Type Filter */}
        <Select
          value={localFilters.propertyType?.[0] || 'all'}
          onValueChange={(value) => 
            updateFilter('propertyType', value === 'all' ? undefined : [value as PropertyType])
          }
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {propertyTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Price Filter */}
        <Select
          value={
            priceRanges.findIndex(
              (r) => r.min === localFilters.minPrice && r.max === localFilters.maxPrice
            ).toString()
          }
          onValueChange={(value) => {
            const range = priceRanges[parseInt(value)];
            if (range) {
              const newFilters = { 
                ...localFilters, 
                minPrice: range.min, 
                maxPrice: range.max 
              };
              setLocalFilters(newFilters);
              onFilterChange(newFilters);
            }
          }}
        >
          <SelectTrigger className="w-[150px]">
            <DollarSign className="h-4 w-4 mr-1" />
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.map((range, index) => (
              <SelectItem key={index} value={index.toString()}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Beds Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2">
              <BedDouble className="h-4 w-4" />
              Beds
              {localFilters.minBedrooms && (
                <Badge variant="secondary" className="ml-1">
                  {localFilters.minBedrooms}+
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-4" align="start">
            <Label className="text-sm font-medium mb-3 block">Bedrooms</Label>
            <div className="flex gap-2 flex-wrap">
              {['Any', '1', '2', '3', '4', '5+'].map((num) => (
                <Button
                  key={num}
                  variant={
                    (num === 'Any' && !localFilters.minBedrooms) ||
                    (num !== 'Any' && localFilters.minBedrooms === parseInt(num.replace('+', '')))
                      ? 'default'
                      : 'outline'
                  }
                  size="sm"
                  onClick={() =>
                    updateFilter(
                      'minBedrooms',
                      num === 'Any' ? undefined : parseInt(num.replace('+', ''))
                    )
                  }
                >
                  {num}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Baths Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Bath className="h-4 w-4" />
              Baths
              {localFilters.minBathrooms && (
                <Badge variant="secondary" className="ml-1">
                  {localFilters.minBathrooms}+
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-4" align="start">
            <Label className="text-sm font-medium mb-3 block">Bathrooms</Label>
            <div className="flex gap-2 flex-wrap">
              {['Any', '1', '2', '3', '4', '5+'].map((num) => (
                <Button
                  key={num}
                  variant={
                    (num === 'Any' && !localFilters.minBathrooms) ||
                    (num !== 'Any' && localFilters.minBathrooms === parseInt(num.replace('+', '')))
                      ? 'default'
                      : 'outline'
                  }
                  size="sm"
                  onClick={() =>
                    updateFilter(
                      'minBathrooms',
                      num === 'Any' ? undefined : parseInt(num.replace('+', ''))
                    )
                  }
                >
                  {num}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* More Filters */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              More Filters
              {activeFiltersCount > 0 && (
                <Badge className="bg-homez-primary text-white">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4" align="start">
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="City, state, or ZIP"
                    value={localFilters.location || ''}
                    onChange={(e) => updateFilter('location', e.target.value || undefined)}
                    className="pl-9"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Min Price</Label>
                  <Input
                    type="number"
                    placeholder="Min"
                    value={localFilters.minPrice || ''}
                    onChange={(e) => updateFilter('minPrice', parseInt(e.target.value) || undefined)}
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Max Price</Label>
                  <Input
                    type="number"
                    placeholder="Max"
                    value={localFilters.maxPrice || ''}
                    onChange={(e) => updateFilter('maxPrice', parseInt(e.target.value) || undefined)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Min Sqft</Label>
                  <Input
                    type="number"
                    placeholder="Min"
                    value={localFilters.minSqft || ''}
                    onChange={(e) => updateFilter('minSqft', parseInt(e.target.value) || undefined)}
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Max Sqft</Label>
                  <Input
                    type="number"
                    placeholder="Max"
                    value={localFilters.maxSqft || ''}
                    onChange={(e) => updateFilter('maxSqft', parseInt(e.target.value) || undefined)}
                  />
                </div>
              </div>

              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={onClearFilters}
                >
                  Clear All Filters
                </Button>
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t">
          <span className="text-sm text-gray-500">Active filters:</span>
          {filters.query && (
            <Badge variant="secondary" className="gap-1">
              Search: {filters.query}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => updateFilter('query', undefined)}
              />
            </Badge>
          )}
          {filters.status && filters.status[0] && (
            <Badge variant="secondary" className="gap-1">
              {filters.status[0].replace('-', ' ')}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => updateFilter('status', undefined)}
              />
            </Badge>
          )}
          {filters.propertyType && filters.propertyType[0] && (
            <Badge variant="secondary" className="gap-1">
              {filters.propertyType[0]}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => updateFilter('propertyType', undefined)}
              />
            </Badge>
          )}
          {filters.minBedrooms && (
            <Badge variant="secondary" className="gap-1">
              {filters.minBedrooms}+ Beds
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => updateFilter('minBedrooms', undefined)}
              />
            </Badge>
          )}
          {filters.minBathrooms && (
            <Badge variant="secondary" className="gap-1">
              {filters.minBathrooms}+ Baths
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => updateFilter('minBathrooms', undefined)}
              />
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="text-red-600 hover:text-red-700 ml-auto"
            onClick={onClearFilters}
          >
            Clear All
          </Button>
        </div>
      )}

      {/* Results Count */}
      {resultCount !== undefined && (
        <div className="mt-3 pt-3 border-t">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{resultCount}</span> properties
          </p>
        </div>
      )}
    </div>
  );
}
