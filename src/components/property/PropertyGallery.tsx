'use client';

import { useState } from 'react';
import { Property } from '@/types';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Expand, Play, X } from 'lucide-react';

interface PropertyGalleryProps {
  property: Property;
  showThumbnails?: boolean;
}

export default function PropertyGallery({
  property,
  showThumbnails = true,
}: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = property.images.length > 0 ? property.images : ['/images/placeholder.jpg'];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
        <img
          src={images[currentIndex]}
          alt={`${property.title} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute bottom-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <Expand className="h-5 w-5" />
        </button>

        {/* Video Button */}
        {property.videos && property.videos.length > 0 && (
          <button className="absolute top-4 right-4 bg-homez-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-homez-primary/90 transition-colors">
            <Play className="h-4 w-4" />
            Video Tour
          </button>
        )}

        {/* Virtual Tour Button */}
        {property.virtualTour && (
          <button className="absolute top-4 left-4 bg-homez-dark text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-homez-dark/90 transition-colors">
            <Play className="h-4 w-4" />
            Virtual Tour
          </button>
        )}
      </div>

      {/* Thumbnails */}
      {showThumbnails && images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-2 ring-homez-primary ring-offset-2'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image}
                alt={`${property.title} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Dialog */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-6xl h-[90vh] p-0 bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={images[currentIndex]}
              alt={`${property.title} - Image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
