'use client';

import { Property } from '@/types';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyMapProps {
  property: Property;
  variant?: 'default' | 'compact' | 'large';
}

export default function PropertyMap({
  property,
  variant = 'default',
}: PropertyMapProps) {
  const { latitude, longitude, address, city, state, zipCode } = property;

  // Create Google Maps embed URL
  const mapEmbedUrl = latitude && longitude
    ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sus!4v1`
    : null;

  // Create Google Maps directions URL
  const directionsUrl = latitude && longitude
    ? `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${city}, ${state} ${zipCode}`)}`;

  // Create Google Maps search URL
  const searchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${city}, ${state} ${zipCode}`)}`;

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <MapPin className="h-5 w-5 text-homez-primary" />
          <div>
            <p className="font-medium text-sm">{address}</p>
            <p className="text-xs text-gray-500">{city}, {state} {zipCode}</p>
          </div>
        </div>
        
        <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden">
          {mapEmbedUrl ? (
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Property Location"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <MapPin className="h-8 w-8 text-gray-400" />
            </div>
          )}
          
          <a
            href={searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-xs text-gray-600 hover:bg-gray-50 flex items-center gap-1"
          >
            View Larger
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'large') {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-homez-primary" />
            <h2 className="text-xl font-bold">Location</h2>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="h-4 w-4 mr-1" />
              Get Directions
            </a>
          </Button>
        </div>

        <div className="relative aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden mb-4">
          {mapEmbedUrl ? (
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Property Location"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Map not available</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-start gap-2">
          <MapPin className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
          <div>
            <p className="font-medium">{address}</p>
            <p className="text-gray-500">{city}, {state} {zipCode}</p>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="h-5 w-5 text-homez-primary" />
        <h2 className="text-xl font-bold">Location</h2>
      </div>

      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
        {mapEmbedUrl ? (
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Property Location"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Map not available</p>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <MapPin className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
          <div>
            <p className="font-medium">{address}</p>
            <p className="text-sm text-gray-500">{city}, {state} {zipCode}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="h-4 w-4 mr-1" />
              Directions
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={searchUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1" />
              View on Maps
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
