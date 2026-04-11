'use client';

import * as React from 'react';
import { Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'featured';
}

function renderStars(rating: number) {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={cn(
        "w-4 h-4",
        i < rating 
          ? "fill-amber-400 text-amber-400" 
          : "text-gray-300"
      )}
    />
  ));
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function TestimonialCard({ 
  testimonial, 
  variant = 'default' 
}: TestimonialCardProps) {
  const [imageError, setImageError] = React.useState(false);

  if (variant === 'featured') {
    return (
      <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
        {/* Quote Icon */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#e33e3e] rounded-full flex items-center justify-center shadow-lg">
          <Quote className="w-6 h-6 text-white" />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-6">
          {renderStars(testimonial.rating)}
        </div>

        {/* Quote Text */}
        <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4">
          <Avatar className="w-14 h-14">
            {testimonial.authorAvatar && !imageError ? (
              <AvatarImage
                src={testimonial.authorAvatar}
                alt={testimonial.authorName}
                onError={() => setImageError(true)}
              />
            ) : null}
            <AvatarFallback className="bg-[#e33e3e]/10 text-[#e33e3e] font-semibold text-lg">
              {getInitials(testimonial.authorName)}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="font-semibold text-gray-900">{testimonial.authorName}</p>
            {testimonial.authorRole && (
              <p className="text-sm text-gray-500">
                {testimonial.authorRole}
                {testimonial.authorCompany && ` at ${testimonial.authorCompany}`}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 transition-all duration-300">
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-8 h-8 text-[#e33e3e]/20" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {renderStars(testimonial.rating)}
      </div>

      {/* Quote Text */}
      <blockquote className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <Avatar className="w-10 h-10">
          {testimonial.authorAvatar && !imageError ? (
            <AvatarImage
              src={testimonial.authorAvatar}
              alt={testimonial.authorName}
              onError={() => setImageError(true)}
            />
          ) : null}
          <AvatarFallback className="bg-[#e33e3e]/10 text-[#e33e3e] font-semibold text-sm">
            {getInitials(testimonial.authorName)}
          </AvatarFallback>
        </Avatar>

        <div>
          <p className="font-medium text-gray-900 text-sm">{testimonial.authorName}</p>
          {testimonial.authorRole && (
            <p className="text-xs text-gray-500">
              {testimonial.authorRole}
              {testimonial.authorCompany && `, ${testimonial.authorCompany}`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
