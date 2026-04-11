'use client';

import { useState } from 'react';
import { Property } from '@/types';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { RotateCcw, Maximize2, Move3d, AlertCircle } from 'lucide-react';

interface PropertyVirtualTourProps {
  property: Property;
  variant?: 'default' | 'compact' | 'card';
}

export default function PropertyVirtualTour({
  property,
  variant = 'default',
}: PropertyVirtualTourProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Use property virtual tour URL or mock
  const virtualTourUrl = property.virtualTour || 'https://virtualtour.example.com/tour';

  if (variant === 'card') {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="bg-gradient-to-br from-homez-dark to-gray-800 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <Move3d className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">360° Virtual Tour</h3>
                <p className="text-white/70 text-sm">Explore every room from anywhere</p>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-6xl h-[80vh]">
          <VirtualTourContent url={virtualTourUrl} title={property.title} />
        </DialogContent>
      </Dialog>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-homez-primary/10 rounded-xl flex items-center justify-center shrink-0">
            <Move3d className="h-6 w-6 text-homez-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">360° Virtual Tour</h3>
            <p className="text-sm text-gray-500">Walk through this property virtually</p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-homez-dark hover:bg-homez-dark/90">
                <Maximize2 className="h-4 w-4 mr-1" />
                View
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl h-[80vh]">
              <VirtualTourContent url={virtualTourUrl} title={property.title} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <RotateCcw className="h-5 w-5 text-homez-primary" />
        <h2 className="text-xl font-bold">360° Virtual Tour</h2>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden cursor-pointer group">
            {/* Placeholder for Virtual Tour */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-homez-primary group-hover:scale-110 transition-all">
                  <Move3d className="h-10 w-10 text-white/80 group-hover:text-homez-primary transition-colors" />
                </div>
                <p className="font-semibold text-lg">Click to Start Virtual Tour</p>
                <p className="text-white/60 text-sm mt-1">360° panoramic views</p>
              </div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Hotspot Indicators */}
            <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-homez-primary rounded-full animate-pulse" />
            <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-homez-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-homez-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Expand Button */}
            <div className="absolute bottom-3 right-3 bg-white/10 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
              <Maximize2 className="h-3 w-3" />
              Full Screen
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-6xl h-[80vh]">
          <VirtualTourContent url={virtualTourUrl} title={property.title} />
        </DialogContent>
      </Dialog>

      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <AlertCircle className="h-4 w-4" />
          Use mouse or touch to navigate
        </div>
      </div>
    </div>
  );
}

// Virtual Tour Content Component
function VirtualTourContent({ url, title }: { url: string; title: string }) {
  return (
    <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
      <div className="text-center text-white">
        <Move3d className="h-20 w-20 mx-auto mb-4 opacity-50" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/60 mb-4">Virtual Tour</p>
        <p className="text-white/40 text-sm">
          360° virtual tour would load here.<br />
          Integration with Matterport, EyeSpy360, or similar service.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button variant="outline" className="text-white border-white/20">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset View
          </Button>
        </div>
      </div>
    </div>
  );
}
