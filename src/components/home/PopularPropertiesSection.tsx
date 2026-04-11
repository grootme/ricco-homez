'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Property } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowRight,
  RefreshCw,
  Share2,
} from 'lucide-react';
import { properties, getPropertiesByStatus } from '@/lib/data/properties';

interface PopularPropertiesSectionProps {
  title?: string;
  subtitle?: string;
}

export default function PopularPropertiesSection({
  title = 'Discover Popular Properties',
  subtitle = 'Aliquam lacinia diam quis lacus euismod',
}: PopularPropertiesSectionProps) {
  const [activeTab, setActiveTab] = useState<'for-rent' | 'for-sale'>('for-rent');

  const displayProperties = getPropertiesByStatus(activeTab).slice(0, 8);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#041e42] mb-3">
            {title}
          </h2>
          <p className="text-gray-500 text-lg mb-6">{subtitle}</p>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('for-rent')}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'for-rent'
                  ? 'bg-[#eb6753] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              For Rent
            </button>
            <button
              onClick={() => setActiveTab('for-sale')}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'for-sale'
                  ? 'bg-[#eb6753] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              For Sale
            </button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* See All Link */}
        <div className="text-center mt-10">
          <Link
            href="/grid-default"
            className="inline-flex items-center text-[#eb6753] font-medium hover:gap-2 transition-all"
          >
            See All Properties
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

interface PropertyCardProps {
  property: Property;
}

function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number, suffix?: string) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
    return suffix ? `${formatted} / ${suffix}` : formatted;
  };

  const statusColors: Record<string, string> = {
    'for-sale': 'bg-[#041e42] text-white',
    'for-rent': 'bg-[#eb6753] text-white',
    'sold': 'bg-gray-500 text-white',
    'rented': 'bg-gray-500 text-white',
    'pending': 'bg-amber-500 text-white',
  };

  return (
    <Card className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop'}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Featured Badge */}
        {property.featured && (
          <Badge className="absolute top-4 left-4 bg-[#eb6753] text-white px-3 py-1 text-xs font-semibold rounded-lg">
            FEATURED
          </Badge>
        )}

        {/* Status Badge */}
        <Badge className={`absolute top-4 right-4 ${statusColors[property.status]} px-3 py-1 text-xs font-medium rounded-lg`}>
          {property.status === 'for-sale' ? 'For Sale' : 
           property.status === 'for-rent' ? 'For Rent' : 
           property.status.charAt(0).toUpperCase() + property.status.slice(1)}
        </Badge>

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#eb6753] hover:text-white transition-colors">
            <Heart className="h-4 w-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#eb6753] hover:text-white transition-colors">
            <RefreshCw className="h-4 w-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#eb6753] hover:text-white transition-colors">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-4">
        {/* Price */}
        <p className="text-xl font-bold text-[#eb6753] mb-2">
          {formatPrice(property.price, property.priceSuffix)}
        </p>

        {/* Title */}
        <h3 className="text-base font-semibold text-[#041e42] mb-2 line-clamp-1">
          <Link href={`/single-v1/${property.id}`} className="hover:text-[#eb6753] transition-colors">
            {property.title}
          </Link>
        </h3>

        {/* Location */}
        <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
          <MapPin className="h-3 w-3" />
          {property.city}, {property.state}
        </p>

        {/* Features */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <BedDouble className="h-3 w-3" />
            {property.bedrooms} bed
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-3 w-3" />
            {property.bathrooms} bath
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="h-3 w-3" />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
