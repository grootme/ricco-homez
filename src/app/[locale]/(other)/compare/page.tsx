'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Calendar,
  Building2,
  Home,
  Car,
  Trees,
  Dumbbell,
  Waves,
  Shield,
  Wifi,
  X,
  ArrowRightLeft,
  Check,
  Heart,
  Share2
} from 'lucide-react';

// Sample properties for comparison
const allProperties = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    price: 1250000,
    address: '123 Palm Beach Drive, Miami, FL',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    type: 'Villa',
    status: 'For Sale',
    yearBuilt: 2020,
    parking: '2-Car Garage',
    lotSize: '0.5 acres',
    features: ['Pool', 'Smart Home', 'Garden', 'Security System'],
    agent: { name: 'Sarah Johnson', phone: '+1 234 567 890' },
  },
  {
    id: '2',
    title: 'Downtown Penthouse',
    price: 2100000,
    address: '456 Skyline Tower, New York, NY',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    type: 'Penthouse',
    status: 'For Sale',
    yearBuilt: 2018,
    parking: 'Valet',
    lotSize: 'N/A',
    features: ['Rooftop', 'Concierge', 'Gym', 'Doorman'],
    agent: { name: 'Michael Chen', phone: '+1 234 567 891' },
  },
  {
    id: '3',
    title: 'Beachfront Condo',
    price: 875000,
    address: '321 Ocean Boulevard, San Diego, CA',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: 'Condo',
    status: 'For Sale',
    yearBuilt: 2022,
    parking: '1 Garage Space',
    lotSize: 'N/A',
    features: ['Beach Access', 'Pool', 'Gym', 'Balcony'],
    agent: { name: 'David Wilson', phone: '+1 234 567 893' },
  },
  {
    id: '4',
    title: 'Mountain Retreat',
    price: 925000,
    address: '555 Alpine Way, Denver, CO',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    type: 'House',
    status: 'For Sale',
    yearBuilt: 2015,
    parking: '2-Car Garage',
    lotSize: '1 acre',
    features: ['Mountain View', 'Hot Tub', 'Fireplace', 'Garage'],
    agent: { name: 'Jennifer Smith', phone: '+1 234 567 894' },
  },
  {
    id: '5',
    title: 'Lakefront Estate',
    price: 3500000,
    address: '100 Lakeside Drive, Chicago, IL',
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=300&fit=crop',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 6500,
    type: 'Estate',
    status: 'For Sale',
    yearBuilt: 2012,
    parking: '3-Car Garage',
    lotSize: '2 acres',
    features: ['Lake View', 'Private Dock', 'Wine Cellar', 'Home Theater'],
    agent: { name: 'Amanda White', phone: '+1 234 567 896' },
  },
];

const comparisonFields = [
  { key: 'price', label: 'Price', format: (v: number) => `$${v.toLocaleString()}` },
  { key: 'type', label: 'Property Type' },
  { key: 'status', label: 'Status' },
  { key: 'bedrooms', label: 'Bedrooms', icon: Bed },
  { key: 'bathrooms', label: 'Bathrooms', icon: Bath },
  { key: 'sqft', label: 'Square Feet', format: (v: number) => `${v.toLocaleString()} sqft`, icon: Square },
  { key: 'yearBuilt', label: 'Year Built', icon: Calendar },
  { key: 'parking', label: 'Parking', icon: Car },
  { key: 'lotSize', label: 'Lot Size', icon: Trees },
];

export default function ComparePage() {
  const [selectedProperties, setSelectedProperties] = useState(allProperties.slice(0, 3));
  const [selectSlot, setSelectSlot] = useState<number | null>(null);

  const addProperty = (propertyId: string) => {
    const property = allProperties.find(p => p.id === propertyId);
    if (property && selectedProperties.length < 4) {
      setSelectedProperties([...selectedProperties, property]);
    }
    setSelectSlot(null);
  };

  const removeProperty = (index: number) => {
    setSelectedProperties(selectedProperties.filter((_, i) => i !== index));
  };

  const replaceProperty = (index: number, propertyId: string) => {
    const property = allProperties.find(p => p.id === propertyId);
    if (property) {
      const newProperties = [...selectedProperties];
      newProperties[index] = property;
      setSelectedProperties(newProperties);
    }
    setSelectSlot(null);
  };

  const availableProperties = allProperties.filter(
    p => !selectedProperties.find(sp => sp.id === p.id)
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Banner */}
      <section className="bg-homez-dark py-12">
        <div className="container-homez text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Compare Properties
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Side-by-side comparison to help you make the right decision
          </p>
        </div>
      </section>

      <div className="container-homez py-8">
        {/* Property Selection */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Selected Properties ({selectedProperties.length}/4)</h2>
              <p className="text-gray-500 text-sm">Add up to 4 properties to compare</p>
            </div>
            {selectedProperties.length > 0 && (
              <Button
                variant="outline"
                onClick={() => setSelectedProperties([])}
                className="text-gray-600"
              >
                <X className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[0, 1, 2, 3].map((slot) => (
            <Card key={slot} className="overflow-hidden">
              {selectedProperties[slot] ? (
                <>
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={selectedProperties[slot].image}
                      alt={selectedProperties[slot].title}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8 bg-white/90 text-gray-600 hover:bg-white"
                      onClick={() => removeProperty(slot)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <Badge className="absolute bottom-2 left-2 bg-homez-primary text-white">
                      {selectedProperties[slot].status}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2 line-clamp-1">
                      {selectedProperties[slot].title}
                    </h3>
                    <p className="text-homez-primary font-bold text-lg mb-2">
                      ${selectedProperties[slot].price.toLocaleString()}
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="line-clamp-1">{selectedProperties[slot].address}</span>
                    </p>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        {selectedProperties[slot].bedrooms}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        {selectedProperties[slot].bathrooms}
                      </span>
                      <span className="flex items-center gap-1">
                        <Square className="h-4 w-4" />
                        {selectedProperties[slot].sqft}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="flex-1 bg-homez-primary hover:bg-homez-primary/90">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </>
              ) : (
                <CardContent className="p-4 h-full min-h-[350px] flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Home className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 mb-4">Add a property to compare</p>
                  <Select onValueChange={(value) => addProperty(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select property" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableProperties.map((property) => (
                        <SelectItem key={property.id} value={property.id}>
                          {property.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        {selectedProperties.length > 1 && (
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="py-4 px-6 text-left font-semibold w-40">
                        <ArrowRightLeft className="h-5 w-5 text-homez-primary inline mr-2" />
                        Features
                      </th>
                      {selectedProperties.map((property, index) => (
                        <th key={index} className="py-4 px-6 text-center font-semibold">
                          {property.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFields.map((field, index) => (
                      <tr key={field.key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-4 px-6 font-medium">
                          <div className="flex items-center gap-2">
                            {field.icon && <field.icon className="h-4 w-4 text-gray-400" />}
                            {field.label}
                          </div>
                        </td>
                        {selectedProperties.map((property, pIndex) => {
                          const value = property[field.key as keyof typeof property];
                          // Find best value for highlighting
                          let isBest = false;
                          if (field.key === 'price') {
                            const prices = selectedProperties.map(p => p.price);
                            isBest = value === Math.min(...prices);
                          } else if (field.key === 'sqft') {
                            const sqfts = selectedProperties.map(p => p.sqft);
                            isBest = value === Math.max(...sqfts);
                          } else if (field.key === 'bedrooms') {
                            const beds = selectedProperties.map(p => p.bedrooms);
                            isBest = value === Math.max(...beds);
                          }
                          
                          return (
                            <td key={pIndex} className="py-4 px-6 text-center">
                              <span className={isBest ? 'text-homez-primary font-semibold' : ''}>
                                {field.format ? field.format(value as number) : value}
                                {isBest && <Check className="h-4 w-4 inline ml-1 text-green-500" />}
                              </span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                    
                    {/* Features Row */}
                    <tr className="bg-white border-t">
                      <td className="py-4 px-6 font-medium">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-gray-400" />
                          Features
                        </div>
                      </td>
                      {selectedProperties.map((property, index) => (
                        <td key={index} className="py-4 px-6">
                          <div className="flex flex-wrap gap-1 justify-center">
                            {property.features.map((feature, fIndex) => (
                              <Badge key={fIndex} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Agent Row */}
                    <tr className="bg-gray-50 border-t">
                      <td className="py-4 px-6 font-medium">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-gray-400" />
                          Agent
                        </div>
                      </td>
                      {selectedProperties.map((property, index) => (
                        <td key={index} className="py-4 px-6 text-center">
                          <p className="font-medium">{property.agent.name}</p>
                          <p className="text-sm text-gray-500">{property.agent.phone}</p>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Empty State */}
        {selectedProperties.length < 2 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRightLeft className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Add at least 2 properties to compare</h3>
            <p className="text-gray-500 mb-6">
              Select properties from the dropdown above to see a side-by-side comparison
            </p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
