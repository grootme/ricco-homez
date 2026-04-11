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
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  MapPin, 
  Home, 
  DollarSign,
  BedDouble,
  Bath,
  ChevronDown,
  Play
} from 'lucide-react';
import { PropertyType, PropertyStatus } from '@/types';

interface BannerSearchProps {
  variant?: 'v1' | 'v2' | 'header-map';
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  onSearch?: (filters: {
    query?: string;
    location?: string;
    type?: string;
    status?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
  }) => void;
}

const propertyTypes: { value: string; label: string }[] = [
  { value: 'all', label: 'All Types' },
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'condo', label: 'Condo' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'villa', label: 'Villa' },
  { value: 'penthouse', label: 'Penthouse' },
  { value: 'studio', label: 'Studio' },
  { value: 'land', label: 'Land' },
  { value: 'commercial', label: 'Commercial' },
];

const statusOptions: { value: string; label: string }[] = [
  { value: 'all', label: 'All Status' },
  { value: 'for-sale', label: 'For Sale' },
  { value: 'for-rent', label: 'For Rent' },
];

export default function BannerSearch({
  variant = 'v1',
  title = 'Find Your Dream Home',
  subtitle = 'Discover the perfect property from our extensive collection',
  backgroundImage,
  onSearch,
}: BannerSearchProps) {
  const [filters, setFilters] = useState({
    query: '',
    location: '',
    type: 'all',
    status: 'all',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = () => {
    onSearch?.({
      query: filters.query || undefined,
      location: filters.location || undefined,
      type: filters.type !== 'all' ? filters.type : undefined,
      status: filters.status !== 'all' ? filters.status : undefined,
      minPrice: filters.minPrice ? parseInt(filters.minPrice) : undefined,
      maxPrice: filters.maxPrice ? parseInt(filters.maxPrice) : undefined,
      bedrooms: filters.bedrooms ? parseInt(filters.bedrooms) : undefined,
      bathrooms: filters.bathrooms ? parseInt(filters.bathrooms) : undefined,
    });
  };

  // V2 variant - vertical centered search
  if (variant === 'v2') {
    return (
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: backgroundImage 
              ? `url(${backgroundImage})` 
              : 'linear-gradient(135deg, #041e42 0%, #1a3a5c 100%)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Premium Real Estate Platform
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Location"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="pl-10 h-12"
                />
              </div>

              {/* Type */}
              <Select
                value={filters.type}
                onValueChange={(value) => setFilters({ ...filters, type: value })}
              >
                <SelectTrigger className="h-12">
                  <Home className="h-5 w-5 mr-2 text-gray-400" />
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Status */}
              <Select
                value={filters.status}
                onValueChange={(value) => setFilters({ ...filters, status: value })}
              >
                <SelectTrigger className="h-12">
                  <DollarSign className="h-5 w-5 mr-2 text-gray-400" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Search Button */}
              <Button
                className="h-12 bg-homez-primary hover:bg-homez-primary/90"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5 mr-2" />
                Search Now
              </Button>
            </div>

            {/* Advanced Filters */}
            <button
              className="text-sm text-gray-500 hover:text-homez-primary flex items-center gap-1 mx-auto"
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              {showAdvanced ? 'Hide' : 'Show'} Advanced Filters
              <ChevronDown className={`h-4 w-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
            </button>

            {showAdvanced && (
              <div className="grid md:grid-cols-4 gap-4 mt-4 pt-4 border-t">
                <div>
                  <Label className="text-sm text-gray-500 mb-1">Min Price</Label>
                  <Input
                    type="number"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                  />
                </div>
                <div>
                  <Label className="text-sm text-gray-500 mb-1">Max Price</Label>
                  <Input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  />
                </div>
                <div>
                  <Label className="text-sm text-gray-500 mb-1">Bedrooms</Label>
                  <Select
                    value={filters.bedrooms}
                    onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <SelectItem key={n} value={n.toString()}>
                          {n}+ Beds
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-gray-500 mb-1">Bathrooms</Label>
                  <Select
                    value={filters.bathrooms}
                    onValueChange={(value) => setFilters({ ...filters, bathrooms: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <SelectItem key={n} value={n.toString()}>
                          {n}+ Baths
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">2,500+</p>
              <p className="text-white/60 text-sm">Properties</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-white/60 text-sm">Agents</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">1,200+</p>
              <p className="text-white/60 text-sm">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Header Map variant - compact search bar
  if (variant === 'header-map') {
    return (
      <div className="bg-homez-dark py-12">
        <div className="container-homez">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {title}
              </h1>
              <p className="text-white/70">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Location"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="pl-9 w-48 bg-white"
                />
              </div>

              <Select
                value={filters.type}
                onValueChange={(value) => setFilters({ ...filters, type: value })}
              >
                <SelectTrigger className="w-36 bg-white">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={filters.status}
                onValueChange={(value) => setFilters({ ...filters, status: value })}
              >
                <SelectTrigger className="w-32 bg-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                className="bg-homez-primary hover:bg-homez-primary/90"
                onClick={handleSearch}
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // V1 variant - default horizontal search bar
  return (
    <div className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage 
            ? `url(${backgroundImage})` 
            : 'linear-gradient(135deg, #041e42 0%, #1a3a5c 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-homez py-20">
        <div className="max-w-2xl">
          <Badge className="mb-4 bg-homez-primary text-white">
            #1 Real Estate Platform
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-white/70 mb-8">
            {subtitle}
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-2xl p-2">
            <div className="flex flex-wrap md:flex-nowrap gap-2">
              {/* Main Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by city, neighborhood, ZIP..."
                  value={filters.query}
                  onChange={(e) => setFilters({ ...filters, query: e.target.value })}
                  className="pl-10 h-12 border-0"
                />
              </div>

              {/* Type Select */}
              <Select
                value={filters.type}
                onValueChange={(value) => setFilters({ ...filters, type: value })}
              >
                <SelectTrigger className="w-full md:w-40 h-12 border-0 bg-gray-50">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Status Select */}
              <Select
                value={filters.status}
                onValueChange={(value) => setFilters({ ...filters, status: value })}
              >
                <SelectTrigger className="w-full md:w-36 h-12 border-0 bg-gray-50">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Search Button */}
              <Button
                className="h-12 px-8 bg-homez-primary hover:bg-homez-primary/90"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="text-white/60 text-sm">Popular:</span>
            {['Miami', 'New York', 'Los Angeles', 'Chicago'].map((city) => (
              <button
                key={city}
                className="text-white text-sm hover:text-homez-primary transition-colors"
                onClick={() => setFilters({ ...filters, location: city })}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
          <div>
            <p className="text-3xl font-bold text-white">15K+</p>
            <p className="text-white/60 text-sm">Properties Listed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">8K+</p>
            <p className="text-white/60 text-sm">Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-white/60 text-sm">Expert Agents</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">50+</p>
            <p className="text-white/60 text-sm">Cities Covered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
