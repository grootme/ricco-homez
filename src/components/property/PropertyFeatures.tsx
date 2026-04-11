'use client';

import { Property } from '@/types';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface PropertyFeaturesProps {
  property: Property;
  variant?: 'default' | 'compact' | 'grouped';
}

export default function PropertyFeatures({
  property,
  variant = 'default',
}: PropertyFeaturesProps) {
  const [showAll, setShowAll] = useState(false);

  // Categorize features
  const featureCategories = {
    interior: property.features.filter(f => 
      ['Hardwood Floors', 'Central AC', 'Fireplace', 'Walk-in Closets', 'Wine Cellar', 
       'Home Theater', 'Gym', 'Smart Home', 'Exposed Beams', 'Crown Moldings',
       'Vaulted Ceilings', 'Built-in Cabinetry', 'Updated Kitchen', 'Chef\'s Kitchen',
       'In-unit Laundry', 'Murphy Bed', 'Smart Storage'].includes(f)
    ),
    exterior: property.features.filter(f => 
      ['Pool', 'Garden', 'Outdoor Kitchen', 'Outdoor Fireplace', 'Wrap-around Porch',
       'Balcony', 'Rooftop Deck', 'Fire Pit', 'Hot Tub', 'Private Terrace',
       'Outdoor Shower', 'Covered Patio'].includes(f)
    ),
    views: property.features.filter(f => 
      ['Ocean View', 'Mountain Views', 'Lake Views', 'Skyline Views', 'City Views',
       'Vineyard Views', 'Beach Views', 'Lakefront', 'Ocean Views'].includes(f)
    ),
    other: property.features.filter(f => 
      !['Hardwood Floors', 'Central AC', 'Fireplace', 'Walk-in Closets', 'Wine Cellar', 
        'Home Theater', 'Gym', 'Smart Home', 'Exposed Beams', 'Crown Moldings',
        'Vaulted Ceilings', 'Built-in Cabinetry', 'Updated Kitchen', 'Chef\'s Kitchen',
        'In-unit Laundry', 'Murphy Bed', 'Smart Storage', 'Pool', 'Garden', 
        'Outdoor Kitchen', 'Outdoor Fireplace', 'Wrap-around Porch', 'Balcony', 
        'Rooftop Deck', 'Fire Pit', 'Hot Tub', 'Private Terrace', 'Outdoor Shower',
        'Covered Patio', 'Ocean View', 'Mountain Views', 'Lake Views', 'Skyline Views',
        'City Views', 'Vineyard Views', 'Beach Views', 'Lakefront', 'Ocean Views'].includes(f)
    ),
  };

  if (variant === 'compact') {
    const displayFeatures = showAll ? property.features : property.features.slice(0, 6);
    
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-2 gap-2">
          {displayFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-gray-600 text-sm">
              <Check className="h-4 w-4 text-homez-primary shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
        {property.features.length > 6 && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-4 text-homez-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : `Show All ${property.features.length} Features`}
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </Button>
        )}
      </div>
    );
  }

  if (variant === 'grouped') {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Features & Amenities</h2>
        
        <div className="space-y-6">
          {featureCategories.interior.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Interior Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {featureCategories.interior.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check className="h-4 w-4 text-homez-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {featureCategories.exterior.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Exterior Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {featureCategories.exterior.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check className="h-4 w-4 text-homez-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {featureCategories.views.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Views</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {featureCategories.views.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check className="h-4 w-4 text-homez-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {featureCategories.other.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Other Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {featureCategories.other.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check className="h-4 w-4 text-homez-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {property.amenities.length > 0 && (
            <div className="pt-4 border-t">
              <h3 className="font-semibold text-gray-700 mb-3">Community Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check className="h-4 w-4 text-homez-primary" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="space-y-6">
      {/* Features */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {property.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-gray-600">
              <Check className="h-4 w-4 text-homez-primary" />
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      {property.amenities.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {property.amenities.map((amenity) => (
              <div key={amenity} className="flex items-center gap-2 text-gray-600">
                <Check className="h-4 w-4 text-homez-primary" />
                {amenity}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
