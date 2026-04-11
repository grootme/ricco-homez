'use client';

import { Property } from '@/types';
import { MapPin, Coffee, ShoppingBag, GraduationCap, Building2, Train, Trees, Heart, Fuel, Utensils } from 'lucide-react';

interface PropertyNearbyProps {
  property: Property;
  variant?: 'default' | 'compact' | 'list';
}

interface NearbyPlace {
  id: string;
  name: string;
  category: string;
  distance: string;
  duration: string;
  icon: React.ElementType;
}

// Mock nearby places data
const getNearbyPlaces = (propertyId: string): NearbyPlace[] => [
  { id: 'np-1', name: 'Lincoln Elementary School', category: 'School', distance: '0.3 mi', duration: '5 min walk', icon: GraduationCap },
  { id: 'np-2', name: 'Central Park', category: 'Park', distance: '0.5 mi', duration: '10 min walk', icon: Trees },
  { id: 'np-3', name: 'Metro Station', category: 'Transit', distance: '0.2 mi', duration: '4 min walk', icon: Train },
  { id: 'np-4', name: 'Whole Foods Market', category: 'Grocery', distance: '0.4 mi', duration: '8 min walk', icon: ShoppingBag },
  { id: 'np-5', name: 'Blue Bottle Coffee', category: 'Coffee', distance: '0.1 mi', duration: '2 min walk', icon: Coffee },
  { id: 'np-6', name: 'City Hospital', category: 'Hospital', distance: '1.2 mi', duration: '5 min drive', icon: Heart },
  { id: 'np-7', name: 'Gas Station', category: 'Gas', distance: '0.6 mi', duration: '3 min drive', icon: Fuel },
  { id: 'np-8', name: 'Downtown Shopping Mall', category: 'Shopping', distance: '0.8 mi', duration: '15 min walk', icon: Building2 },
  { id: 'np-9', name: 'Italian Restaurant', category: 'Restaurant', distance: '0.2 mi', duration: '4 min walk', icon: Utensils },
];

export default function PropertyNearby({
  property,
  variant = 'default',
}: PropertyNearbyProps) {
  const nearbyPlaces = getNearbyPlaces(property.id);

  // Group by category
  const groupedPlaces = nearbyPlaces.reduce((acc, place) => {
    const category = place.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(place);
    return acc;
  }, {} as Record<string, NearbyPlace[]>);

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold mb-3">What's Nearby</h3>
        <div className="grid grid-cols-2 gap-2">
          {nearbyPlaces.slice(0, 6).map((place) => (
            <div key={place.id} className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                <place.icon className="h-4 w-4 text-gray-500" />
              </div>
              <div className="truncate">
                <p className="font-medium truncate">{place.name}</p>
                <p className="text-xs text-gray-500">{place.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4">What's Nearby</h2>
        <div className="space-y-3">
          {nearbyPlaces.map((place) => (
            <div key={place.id} className="flex items-center justify-between py-2 border-b last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <place.icon className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <p className="font-medium">{place.name}</p>
                  <p className="text-sm text-gray-500">{place.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{place.distance}</p>
                <p className="text-sm text-gray-500">{place.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default variant - Grouped by category
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="h-5 w-5 text-homez-primary" />
        <h2 className="text-xl font-bold">What's Nearby</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(groupedPlaces).map(([category, places]) => (
          <div key={category}>
            <h3 className="font-semibold text-gray-700 mb-3">{category}</h3>
            <div className="space-y-2">
              {places.map((place) => (
                <div key={place.id} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <place.icon className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{place.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500">{place.distance}</span>
                    <span className="text-gray-400 text-xs ml-2">({place.duration})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Walk Score Placeholder */}
      <div className="mt-6 pt-6 border-t">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">92</p>
            <p className="text-xs text-gray-600">Walk Score</p>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">85</p>
            <p className="text-xs text-gray-600">Transit Score</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">78</p>
            <p className="text-xs text-gray-600">Bike Score</p>
          </div>
        </div>
      </div>
    </div>
  );
}
