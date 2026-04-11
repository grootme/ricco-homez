'use client';

import { useState, useMemo } from 'react';
import { useProperties } from '@/hooks/useAsyncData';
import { PropertyMap } from '@/components/listing';
import { PropertySearchFilters, Property } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Search,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
} from 'lucide-react';

export default function MapV3Page() {
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
  const [showCards, setShowCards] = useState(true);

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
    <main className="h-screen relative">
      {/* Full Screen Map */}
      <PropertyMap
        properties={filteredProperties}
        selectedProperty={selectedProperty}
        onPropertySelect={setSelectedProperty}
        height="100%"
        variant="fullscreen"
      />

      {/* Top Search Bar - Floating */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-white rounded-xl shadow-xl p-3 flex flex-wrap items-center gap-3">
          <div className="relative min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search location..."
              value={filters.query || ''}
              onChange={(e) => setFilters({ ...filters, query: e.target.value })}
              className="pl-9 w-64"
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
            <SelectTrigger className="w-[130px]">
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
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="for-sale">For Sale</SelectItem>
              <SelectItem value="for-rent">For Rent</SelectItem>
            </SelectContent>
          </Select>

          <Badge variant="secondary" className="px-3 py-1">
            {filteredProperties.length} results
          </Badge>
        </div>
      </div>

      {/* Bottom Cards Carousel - Floating */}
      {showCards && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="flex gap-4 max-w-5xl overflow-x-auto pb-2 px-4 scrollbar-thin">
            {filteredProperties.slice(0, 8).map((property) => (
              <Card
                key={property.id}
                className={`min-w-[280px] max-w-[280px] shrink-0 cursor-pointer transition-all duration-200 ${
                  selectedProperty?.id === property.id
                    ? 'ring-2 ring-homez-primary shadow-xl'
                    : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedProperty(property)}
              >
                <div className="relative h-36">
                  <img
                    src={property.images[0] || '/images/placeholder.jpg'}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className={`absolute top-2 left-2 ${
                      property.status === 'for-sale' ? 'bg-homez-primary' : 'bg-homez-dark'
                    }`}
                  >
                    {property.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 h-7 w-7 bg-white/80 hover:bg-white rounded-full"
                  >
                    <Heart className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <CardContent className="p-3">
                  <p className="font-bold text-homez-primary text-lg">
                    {formatPrice(property.price, property.priceSuffix)}
                  </p>
                  <h3 className="font-medium text-sm text-gray-900 line-clamp-1">
                    {property.title}
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" />
                    {property.city}, {property.state}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <BedDouble className="h-3 w-3" />
                      {property.bedrooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-3 w-3" />
                      {property.bathrooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize className="h-3 w-3" />
                      {property.sqft.toLocaleString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Cards Button */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute bottom-6 right-6 z-20 shadow-lg"
        onClick={() => setShowCards(!showCards)}
      >
        {showCards ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
      </Button>
    </main>
  );
}

function ChevronDown(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronUp(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
