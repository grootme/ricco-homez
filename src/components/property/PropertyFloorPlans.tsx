'use client';

import { useState } from 'react';
import { Property } from '@/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { BedDouble, Bath, Maximize, ChevronDown, Expand } from 'lucide-react';

interface PropertyFloorPlansProps {
  property: Property;
}

// Mock floor plan data
interface FloorPlan {
  id: string;
  name: string;
  level: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  description: string;
  image: string;
}

const mockFloorPlans: FloorPlan[] = [
  {
    id: 'fp-1',
    name: 'Ground Floor',
    level: 'Level 1',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 2200,
    description: 'Main living area with open concept kitchen, dining room, living room, and two guest bedrooms with shared bathroom.',
    image: '/images/floorplans/floor-1.jpg',
  },
  {
    id: 'fp-2',
    name: 'Upper Floor',
    level: 'Level 2',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2500,
    description: 'Master suite with walk-in closet and en-suite bathroom, two additional bedrooms with private bathrooms, and a family room.',
    image: '/images/floorplans/floor-2.jpg',
  },
  {
    id: 'fp-3',
    name: 'Basement',
    level: 'Level B',
    bedrooms: 0,
    bathrooms: 1,
    sqft: 1800,
    description: 'Finished basement with recreation room, home theater, wine cellar, and full bathroom. Direct access to garage.',
    image: '/images/floorplans/floor-3.jpg',
  },
];

export default function PropertyFloorPlans({ property }: PropertyFloorPlansProps) {
  const [expandedFloor, setExpandedFloor] = useState<string[]>(['fp-1']);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Floor Plans</h2>

      <Accordion
        type="multiple"
        value={expandedFloor}
        onValueChange={setExpandedFloor}
        className="space-y-3"
      >
        {mockFloorPlans.map((floor) => (
          <AccordionItem
            key={floor.id}
            value={floor.id}
            className="border border-gray-200 rounded-xl overflow-hidden data-[state=open]:border-homez-primary"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
              <div className="flex items-center justify-between w-full pr-4">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-900">{floor.name}</span>
                  <span className="text-sm text-gray-500">{floor.level}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  {floor.bedrooms > 0 && (
                    <div className="flex items-center gap-1">
                      <BedDouble className="h-4 w-4" />
                      {floor.bedrooms}
                    </div>
                  )}
                  {floor.bathrooms > 0 && (
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      {floor.bathrooms}
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" />
                    {floor.sqft.toLocaleString()} sqft
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="pt-4 border-t">
                <p className="text-gray-600 mb-4">{floor.description}</p>
                
                {/* Floor Plan Image */}
                <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-[16/10]">
                  <img
                    src={floor.image}
                    alt={floor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Maximize className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Floor Plan Image</p>
                      <p className="text-xs">{floor.sqft.toLocaleString()} sqft</p>
                    </div>
                  </div>
                  
                  {/* Expand Button */}
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-3 right-3 bg-white/90"
                    onClick={() => setSelectedImage(floor.image)}
                  >
                    <Expand className="h-4 w-4 mr-1" />
                    Expand
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Total Area Summary */}
      <div className="mt-4 pt-4 border-t">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Total Living Area:</span>
          <span className="font-semibold">{property.sqft.toLocaleString()} sqft</span>
        </div>
        {property.floors && (
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-gray-600">Total Floors:</span>
            <span className="font-semibold">{property.floors}</span>
          </div>
        )}
      </div>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl">
          <div className="aspect-[16/10] bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Maximize className="h-16 w-16 mx-auto mb-2 opacity-50" />
              <p>Full Floor Plan View</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
