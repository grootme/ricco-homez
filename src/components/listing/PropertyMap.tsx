'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Map, 
  MapPin, 
  X, 
  BedDouble, 
  Bath, 
  Maximize,
  Navigation,
  ZoomIn,
  ZoomOut,
  Maximize2
} from 'lucide-react';
import { Property } from '@/types';

interface PropertyMapProps {
  properties: Property[];
  selectedProperty?: Property | null;
  onPropertySelect?: (property: Property | null) => void;
  height?: string;
  variant?: 'default' | 'fullscreen' | 'split' | 'header';
}

// Simulated map markers based on property coordinates
const generateMarkers = (properties: Property[]) => {
  return properties.map((property) => ({
    id: property.id,
    x: Math.random() * 80 + 10, // Random position between 10% and 90%
    y: Math.random() * 80 + 10,
    property,
  }));
};

export default function PropertyMap({
  properties,
  selectedProperty,
  onPropertySelect,
  height = '600px',
  variant = 'default',
}: PropertyMapProps) {
  const [markers] = useState(() => generateMarkers(properties));
  const [hoveredProperty, setHoveredProperty] = useState<Property | null>(null);
  const [zoom, setZoom] = useState(1);

  const formatPrice = (price: number, suffix?: string) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
    return suffix ? `${formatted}${suffix}` : formatted;
  };

  const handleMarkerClick = (property: Property) => {
    if (selectedProperty?.id === property.id) {
      onPropertySelect?.(null);
    } else {
      onPropertySelect?.(property);
    }
  };

  const isFullscreen = variant === 'fullscreen';
  const isHeader = variant === 'header';

  return (
    <div 
      className={`relative bg-gray-100 rounded-xl overflow-hidden ${isFullscreen ? 'h-full rounded-none' : ''}`}
      style={{ height: isFullscreen ? '100%' : height }}
    >
      {/* Map Placeholder Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-green-50">
        {/* Grid pattern to simulate map */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: `${40 * zoom}px ${40 * zoom}px`,
          }}
        />

        {/* Simulated roads */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 right-0 h-2 bg-white/50" />
          <div className="absolute top-2/3 left-0 right-0 h-3 bg-white/60" />
          <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-white/50" />
          <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-white/50" />
          
          {/* Diagonal road */}
          <div 
            className="absolute h-2 bg-white/40 w-full"
            style={{ transform: 'rotate(30deg)', top: '40%', left: '-20%' }}
          />
        </div>

        {/* Simulated parks */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-green-200/50 rounded-full" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-200/50 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-40 h-28 bg-green-200/40 rounded-lg transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setZoom((z) => Math.min(z + 0.2, 2))}
          className="bg-white shadow-md"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setZoom((z) => Math.max(z - 0.2, 0.5))}
          className="bg-white shadow-md"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="bg-white shadow-md"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3">
        <div className="flex items-center gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-homez-primary" />
            <span>For Sale</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-homez-dark" />
            <span>For Rent</span>
          </div>
        </div>
      </div>

      {/* Property Markers */}
      {markers.map((marker) => {
        const isSelected = selectedProperty?.id === marker.id;
        const isHovered = hoveredProperty?.id === marker.id;
        const isForRent = marker.property.status === 'for-rent';

        return (
          <div
            key={marker.id}
            className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer z-10"
            style={{ 
              left: `${marker.x}%`, 
              top: `${marker.y}%`,
              zIndex: isSelected || isHovered ? 20 : 10,
            }}
            onMouseEnter={() => setHoveredProperty(marker.property)}
            onMouseLeave={() => setHoveredProperty(null)}
            onClick={() => handleMarkerClick(marker.property)}
          >
            {/* Marker */}
            <div
              className={`relative transition-all duration-200 ${
                isSelected ? 'scale-125' : isHovered ? 'scale-110' : ''
              }`}
            >
              {/* Price Tag */}
              <div
                className={`absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-md text-xs font-semibold shadow-md transition-all ${
                  isSelected || isHovered
                    ? 'bg-homez-primary text-white'
                    : 'bg-white text-gray-900'
                }`}
              >
                {formatPrice(marker.property.price)}
                {marker.property.priceSuffix && (
                  <span className="text-[10px] opacity-75">{marker.property.priceSuffix}</span>
                )}
              </div>

              {/* Pin */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                  isForRent
                    ? 'bg-homez-dark'
                    : 'bg-homez-primary'
                }`}
              >
                <MapPin className="h-4 w-4 text-white" />
              </div>

              {/* Pulse animation for selected */}
              {isSelected && (
                <div className="absolute inset-0 rounded-full bg-homez-primary/30 animate-ping" />
              )}
            </div>
          </div>
        );
      })}

      {/* Property Preview Card (on marker hover/select) */}
      {(selectedProperty || hoveredProperty) && (
        <Card
          className="absolute bottom-4 right-4 w-72 shadow-xl z-30"
          onMouseEnter={() => {}}
          onMouseLeave={() => setHoveredProperty(null)}
        >
          <CardContent className="p-0">
            <div className="relative h-32">
              <img
                src={(selectedProperty || hoveredProperty)?.images[0] || '/images/placeholder.jpg'}
                alt={(selectedProperty || hoveredProperty)?.title || ''}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <Badge
                className={`absolute top-2 left-2 ${
                  (selectedProperty || hoveredProperty)?.status === 'for-sale'
                    ? 'bg-homez-primary'
                    : 'bg-homez-dark'
                }`}
              >
                {(selectedProperty || hoveredProperty)?.status.replace('-', ' ').toUpperCase()}
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-6 w-6 bg-white/80 hover:bg-white rounded-full"
                onClick={() => onPropertySelect?.(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-3">
              <p className="text-lg font-bold text-homez-primary">
                {formatPrice(
                  (selectedProperty || hoveredProperty)?.price || 0,
                  (selectedProperty || hoveredProperty)?.priceSuffix
                )}
              </p>
              <h3 className="font-medium text-sm text-gray-900 line-clamp-1">
                {(selectedProperty || hoveredProperty)?.title}
              </h3>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3" />
                {(selectedProperty || hoveredProperty)?.city}, {(selectedProperty || hoveredProperty)?.state}
              </p>
              <div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <BedDouble className="h-3 w-3" />
                  {(selectedProperty || hoveredProperty)?.bedrooms}
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="h-3 w-3" />
                  {(selectedProperty || hoveredProperty)?.bathrooms}
                </span>
                <span className="flex items-center gap-1">
                  <Maximize className="h-3 w-3" />
                  {(selectedProperty || hoveredProperty)?.sqft.toLocaleString()} sqft
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Map Attribution */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
        <Map className="h-3 w-3 inline mr-1" />
        Map Placeholder
      </div>
    </div>
  );
}
