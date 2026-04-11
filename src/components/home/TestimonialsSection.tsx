'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote, Loader2 } from 'lucide-react';
import { useTranslation, useTestimonialDataSource } from '@/providers';
import type { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  showSlider?: boolean;
}

export default function TestimonialsSection({
  title,
  subtitle,
  showSlider = true,
}: TestimonialsSectionProps) {
  const { t } = useTranslation();
  const testimonialDataSource = useTestimonialDataSource();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default values from translations
  const displayTitle = title ?? t('testimonials.title', 'What Our Clients Say');
  const displaySubtitle = subtitle ?? t('testimonials.subtitle', 'Real stories from real homeowners who found their dream properties with us');

  // Fetch testimonials on mount
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setLoading(true);
        const data = await testimonialDataSource.getFeaturedTestimonials(6);
        setTestimonials(data);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
        // Fallback to empty array
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, [testimonialDataSource]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-homez-dark text-white">
      <div className="container-homez">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {displayTitle}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {displaySubtitle}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-homez-primary" />
          </div>
        )}

        {/* Empty State */}
        {!loading && testimonials.length === 0 && (
          <div className="text-center py-12 text-white/50">
            {t('common.noResults', 'No testimonials found')}
          </div>
        )}

        {/* Slider View */}
        {!loading && showSlider && testimonials.length > 0 && (
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full shrink-0 px-4">
                    <Card className="bg-white/10 backdrop-blur border-white/20">
                      <CardContent className="p-8 text-center">
                        {/* Quote Icon */}
                        <Quote className="h-10 w-10 text-homez-primary mx-auto mb-6 opacity-50" />

                        {/* Rating */}
                        <div className="flex items-center justify-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating 
                                  ? 'text-yellow-400 fill-yellow-400' 
                                  : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <p className="text-lg text-white/90 mb-6 leading-relaxed">
                          &quot;{testimonial.content}&quot;
                        </p>

                        {/* Author */}
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-homez-primary/20 flex items-center justify-center overflow-hidden">
                            {testimonial.avatar ? (
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-xl font-bold text-homez-primary">
                                {testimonial.name.charAt(0)}
                              </span>
                            )}
                          </div>
                          <div className="text-left">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-white/60">
                              {testimonial.role} {testimonial.company ? `• ${testimonial.company}` : ''}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-homez-primary w-6' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Grid View */}
        {!loading && !showSlider && testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white/90 mb-4 line-clamp-4">
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-homez-primary/20 flex items-center justify-center overflow-hidden">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-sm font-bold text-homez-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
