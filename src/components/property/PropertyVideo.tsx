'use client';

import { useState } from 'react';
import { Property } from '@/types';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Play, Youtube, X } from 'lucide-react';

interface PropertyVideoProps {
  property: Property;
  variant?: 'default' | 'compact' | 'hero';
}

export default function PropertyVideo({
  property,
  variant = 'default',
}: PropertyVideoProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Mock video URL (YouTube embed)
  const videoUrl = property.videos?.[0] || 'https://www.youtube.com/embed/dQw4w9WgXcQ';
  
  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);
    return match ? match[1] : 'dQw4w9WgXcQ';
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${getYouTubeId(videoUrl)}/maxresdefault.jpg`;

  if (variant === 'hero') {
    return (
      <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
        <img
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="w-full h-full object-cover opacity-70"
          onError={(e) => {
            e.currentTarget.src = property.images[0] || '/images/placeholder.jpg';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className="w-20 h-20 bg-homez-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Play className="h-8 w-8 text-white ml-1" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl p-0 bg-black">
              <div className="relative aspect-video">
                <iframe
                  src={`${videoUrl}?autoplay=1`}
                  title="Property Video Tour"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="font-semibold text-lg">{property.title}</p>
          <p className="text-sm opacity-80">Video Tour</p>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-gray-100 shrink-0">
            <img
              src={thumbnailUrl}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Video Tour</h3>
            <p className="text-sm text-gray-500">Watch a virtual tour of this property</p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-homez-primary hover:bg-homez-primary/90">
                <Play className="h-4 w-4 mr-1" />
                Play
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl p-0 bg-black">
              <div className="relative aspect-video">
                <iframe
                  src={`${videoUrl}?autoplay=1`}
                  title="Property Video Tour"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
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
        <Youtube className="h-5 w-5 text-red-500" />
        <h2 className="text-xl font-bold">Video Tour</h2>
      </div>

      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
        <img
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = property.images[0] || '/images/placeholder.jpg';
          }}
        />
        
        {/* Play Overlay */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 bg-homez-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="h-7 w-7 text-white ml-1" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-5xl p-0 bg-black">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 z-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative aspect-video">
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title="Property Video Tour"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          3:45
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-3">
        Take a video tour of {property.title}. See all the features and get a feel for the layout.
      </p>
    </div>
  );
}
