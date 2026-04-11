'use client';

import { Property } from '@/types';
import { BedDouble, Bath, Maximize, Calendar, Home, Car, Ruler } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PropertyOverviewProps {
  property: Property;
  variant?: 'grid' | 'inline' | 'cards' | 'compact';
}

export default function PropertyOverview({
  property,
  variant = 'grid',
}: PropertyOverviewProps) {
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
    'rented': 'bg-gray-500 text-white',
    'pending': 'bg-orange-500 text-white',
  };

  const specs = [
    { icon: BedDouble, label: 'Bedrooms', value: property.bedrooms },
    { icon: Bath, label: 'Bathrooms', value: property.bathrooms },
    { icon: Maximize, label: 'Sqft', value: property.sqft.toLocaleString() },
    { icon: Car, label: 'Garage', value: property.garage || 0 },
    { icon: Calendar, label: 'Year Built', value: property.yearBuilt || 'N/A' },
    { icon: Home, label: 'Type', value: property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1) },
    { icon: Ruler, label: 'Lot Size', value: property.lotSize ? `${property.lotSize.toLocaleString()} sqft` : 'N/A' },
  ];

  if (variant === 'inline') {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <Badge className={`${statusColors[property.status]} mb-2`}>
              {property.status.replace('-', ' ').toUpperCase()}
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {property.title}
            </h1>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-homez-primary">
              {formatPrice(property.price, property.priceSuffix)}
            </p>
          </div>
        </div>

        {/* Inline Stats */}
        <div className="flex flex-wrap items-center gap-6 py-4 border-y border-gray-200">
          {specs.slice(0, 4).map((spec) => (
            <div key={spec.label} className="flex items-center gap-2">
              <spec.icon className="h-5 w-5 text-gray-400" />
              <span className="font-semibold">{spec.value}</span>
              <span className="text-gray-500 text-sm">{spec.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'cards') {
    return (
      <div className="space-y-4">
        {/* Header Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Badge className={`${statusColors[property.status]} mb-2`}>
                {property.status.replace('-', ' ').toUpperCase()}
              </Badge>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {property.title}
              </h1>
              <p className="text-gray-500 flex items-center gap-1 mt-2">
                {property.address}, {property.city}, {property.state}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-homez-primary">
                {formatPrice(property.price, property.priceSuffix)}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.slice(0, 4).map((spec) => (
            <div key={spec.label} className="bg-white rounded-xl p-4 shadow-sm text-center">
              <spec.icon className="h-6 w-6 text-homez-primary mx-auto mb-2" />
              <p className="font-bold text-lg">{spec.value}</p>
              <p className="text-sm text-gray-500">{spec.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Badge className={statusColors[property.status]}>
              {property.status.replace('-', ' ').toUpperCase()}
            </Badge>
            <h1 className="text-xl font-bold text-gray-900">{property.title}</h1>
          </div>
          <p className="text-xl font-bold text-homez-primary">
            {formatPrice(property.price, property.priceSuffix)}
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm">
          {specs.slice(0, 3).map((spec) => (
            <div key={spec.label} className="flex items-center gap-1">
              <spec.icon className="h-4 w-4 text-gray-400" />
              <span>{spec.value} {spec.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default: Grid variant
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <Badge className={`${statusColors[property.status]} mb-2`}>
            {property.status.replace('-', ' ').toUpperCase()}
          </Badge>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {property.title}
          </h1>
          <p className="text-gray-500 flex items-center gap-1 mt-2">
            {property.address}, {property.city}, {property.state}
          </p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-homez-primary">
            {formatPrice(property.price, property.priceSuffix)}
          </p>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 pt-4 border-t border-gray-200">
        {specs.map((spec) => (
          <div key={spec.label} className="text-center p-3 bg-gray-50 rounded-lg">
            <spec.icon className="h-5 w-5 text-gray-400 mx-auto mb-1" />
            <p className="font-semibold">{spec.value}</p>
            <p className="text-xs text-gray-500">{spec.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
