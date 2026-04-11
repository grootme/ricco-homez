'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  SlidersHorizontal, 
  X, 
  MapPin, 
  Home, 
  DollarSign,
  BedDouble,
  Bath,
  Maximize
} from 'lucide-react';
import { PropertySearchFilters, PropertyType, PropertyStatus } from '@/types';

const propertyTypes: PropertyType[] = [
  'house',
  'apartment',
  'condo',
  'townhouse',
  'villa',
  'penthouse',
  'studio',
  'land',
  'commercial',
  'office',
];

const propertyStatuses: PropertyStatus[] = [
  'for-sale',
  'for-rent',
  'sold',
  'rented',
  'pending',
];

const features = [
  'Air Conditioning',
  'Balcony',
  'Basement',
  'Central Heating',
  'Deck',
  'Dishwasher',
  'Fireplace',
  'Garage',
  'Garden',
  'Gym',
  'Hardwood Floors',
  'High Ceilings',
  'Home Theater',
  'Hot Tub',
  'In-unit Laundry',
  'Jacuzzi',
  'Library',
  'Ocean View',
  'Patio',
  'Pet Friendly',
  'Pool',
  'Roof Deck',
  'Security System',
  'Smart Home',
  'Solar Panels',
  'Storage',
  'Walk-in Closet',
  'Wine Cellar',
];

interface PropertyFilterProps {
  filters: PropertySearchFilters;
  onFilterChange: (filters: PropertySearchFilters) => void;
  onClearFilters: () => void;
}

export default function PropertyFilter({
  filters,
  onFilterChange,
  onClearFilters,
}: PropertyFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState<PropertySearchFilters>(filters);

  const updateFilter = <K extends keyof PropertySearchFilters>(
    key: K,
    value: PropertySearchFilters[K]
  ) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
  };

  const applyFilters = () => {
    onFilterChange(localFilters);
    setIsOpen(false);
  };

  const clearAllFilters = () => {
    setLocalFilters({});
    onClearFilters();
    setIsOpen(false);
  };

  const activeFiltersCount = Object.values(filters).filter(
    (value) => value !== undefined && value !== '' && (Array.isArray(value) ? value.length > 0 : true)
  ).length;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeFiltersCount > 0 && (
            <span className="bg-homez-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-96 overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            Property Filters
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-red-600 hover:text-red-700"
              >
                Clear All
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <Accordion type="multiple" defaultValue={['location', 'price', 'type']} className="w-full">
            {/* Location */}
            <AccordionItem value="location">
              <AccordionTrigger className="text-sm font-medium">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <Input
                  placeholder="Enter city, state, or ZIP"
                  value={localFilters.location || ''}
                  onChange={(e) => updateFilter('location', e.target.value)}
                />
              </AccordionContent>
            </AccordionItem>

            {/* Property Type */}
            <AccordionItem value="type">
              <AccordionTrigger className="text-sm font-medium">
                <span className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Property Type
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <Select
                  value={localFilters.propertyType?.[0] || 'all'}
                  onValueChange={(value) => 
                    updateFilter('propertyType', value === 'all' ? undefined : [value as PropertyType])
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>

            {/* Status */}
            <AccordionItem value="status">
              <AccordionTrigger className="text-sm font-medium">
                <span className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Listing Status
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <Select
                  value={localFilters.status?.[0] || 'all'}
                  onValueChange={(value) => 
                    updateFilter('status', value === 'all' ? undefined : [value as PropertyStatus])
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    {propertyStatuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>

            {/* Price Range */}
            <AccordionItem value="price">
              <AccordionTrigger className="text-sm font-medium">
                <span className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Price Range
                </span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-gray-500">Min Price</Label>
                    <Input
                      type="number"
                      placeholder="Min"
                      value={localFilters.minPrice || ''}
                      onChange={(e) => updateFilter('minPrice', Number(e.target.value) || undefined)}
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-gray-500">Max Price</Label>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={localFilters.maxPrice || ''}
                      onChange={(e) => updateFilter('maxPrice', Number(e.target.value) || undefined)}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Bedrooms */}
            <AccordionItem value="bedrooms">
              <AccordionTrigger className="text-sm font-medium">
                <span className="flex items-center gap-2">
                  <BedDouble className="h-4 w-4" />
                  Bedrooms
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex gap-2 flex-wrap">
                  {['Any', '1', '2', '3', '4', '5+'].map((num) => (
                    <Button
                      key={num}
                      variant={
                        (num === 'Any' && !localFilters.minBedrooms) ||
                        (num !== 'Any' && localFilters.minBedrooms === Number(num.replace('+', '')))
                          ? 'default'
                          : 'outline'
                      }
                      size="sm"
                      onClick={() =>
                        updateFilter(
                          'minBedrooms',
                          num === 'Any' ? undefined : Number(num.replace('+', ''))
                        )
                      }
                    >
                      {num}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Bathrooms */}
            <AccordionItem value="bathrooms">
              <AccordionTrigger className="text-sm font-medium">
                <span className="flex items-center gap-2">
                  <Bath className="h-4 w-4" />
                  Bathrooms
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex gap-2 flex-wrap">
                  {['Any', '1', '2', '3', '4', '5+'].map((num) => (
                    <Button
                      key={num}
                      variant={
                        (num === 'Any' && !localFilters.minBathrooms) ||
                        (num !== 'Any' && localFilters.minBathrooms === Number(num.replace('+', '')))
                          ? 'default'
                          : 'outline'
                      }
                      size="sm"
                      onClick={() =>
                        updateFilter(
                          'minBathrooms',
                          num === 'Any' ? undefined : Number(num.replace('+', ''))
                        )
                      }
                    >
                      {num}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Square Feet */}
            <AccordionItem value="sqft">
              <AccordionTrigger className="text-sm font-medium">
                <span className="flex items-center gap-2">
                  <Maximize className="h-4 w-4" />
                  Square Feet
                </span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-gray-500">Min Sqft</Label>
                    <Input
                      type="number"
                      placeholder="Min"
                      value={localFilters.minSqft || ''}
                      onChange={(e) => updateFilter('minSqft', Number(e.target.value) || undefined)}
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-gray-500">Max Sqft</Label>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={localFilters.maxSqft || ''}
                      onChange={(e) => updateFilter('maxSqft', Number(e.target.value) || undefined)}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Features */}
            <AccordionItem value="features">
              <AccordionTrigger className="text-sm font-medium">
                Features & Amenities
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <Button
                      key={feature}
                      variant={localFilters.features?.includes(feature) ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => {
                        const currentFeatures = localFilters.features || [];
                        const newFeatures = currentFeatures.includes(feature)
                          ? currentFeatures.filter((f) => f !== feature)
                          : [...currentFeatures, feature];
                        updateFilter('features', newFeatures.length > 0 ? newFeatures : undefined);
                      }}
                      className="text-xs"
                    >
                      {feature}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Apply Button */}
          <div className="flex gap-3 pt-4 border-t">
            <Button variant="outline" onClick={clearAllFilters} className="flex-1">
              Clear
            </Button>
            <Button onClick={applyFilters} className="flex-1 bg-homez-primary hover:bg-homez-primary/90">
              Apply Filters
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
