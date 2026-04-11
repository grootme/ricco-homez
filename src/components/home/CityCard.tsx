'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { City } from '@/types';

interface CityCardProps {
  city: City;
  variant?: 'default' | 'wide';
}

export function CityCard({ city, variant = 'default' }: CityCardProps) {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const cityUrl = `/properties?city=${encodeURIComponent(city.name)}`;

  if (variant === 'wide') {
    return (
      <Link
        href={cityUrl}
        className="group relative block h-64 sm:h-80 rounded-xl overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <Image
            src={city.image}
            alt={`${city.name}, ${city.state}`}
            fill
            className={cn(
              "object-cover transition-transform duration-700 group-hover:scale-110",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            sizes="(max-width: 768px) 100vw, 50vw"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#e33e3e]/0 group-hover:bg-[#e33e3e]/20 transition-colors duration-300" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
            <div className="flex items-center gap-2 text-white/80 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{city.country}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {city.name}
            </h3>
            <p className="text-white/80 text-sm">{city.state}</p>
          </div>

          {/* Property Count Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
            <Home className="w-4 h-4 text-[#e33e3e]" />
            <span className="text-sm font-medium text-gray-700">
              {city.propertyCount.toLocaleString()} Properties
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      href={cityUrl}
      className="group relative block h-48 sm:h-56 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <Image
          src={city.image}
          alt={`${city.name}, ${city.state}`}
          fill
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-110",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#e33e3e]/0 group-hover:bg-[#e33e3e]/20 transition-colors duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
          {city.name}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-white/70 text-sm">{city.state}</span>
          <span className="text-white/80 text-sm font-medium">
            {city.propertyCount.toLocaleString()} properties
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CityCard;
