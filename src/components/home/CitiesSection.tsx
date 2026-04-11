'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useTranslation, useCityDataSource } from '@/providers';
import type { City } from '@/types';

interface CitiesSectionProps {
  title?: string;
  subtitle?: string;
}

export default function CitiesSection({
  title,
  subtitle,
}: CitiesSectionProps) {
  const { t } = useTranslation();
  const cityDataSource = useCityDataSource();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Default values from translations
  const displayTitle = title ?? t('cities.title', 'Properties by Cities');
  const displaySubtitle = subtitle ?? t('cities.subtitle', 'Aliquam lacinia diam quis lacus euismod');

  // Fetch cities on mount
  useEffect(() => {
    async function fetchCities() {
      try {
        setLoading(true);
        const data = await cityDataSource.getFeaturedCities(6);
        setCities(data);
      } catch (error) {
        console.error('Failed to fetch cities:', error);
        // Fallback to empty array - component will show empty state
      } finally {
        setLoading(false);
      }
    }

    fetchCities();
  }, [cityDataSource]);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#041e42] mb-3">
              {displayTitle}
            </h2>
            <p className="text-gray-500 text-lg">{displaySubtitle}</p>
          </div>
          <Link
            href="/grid-default"
            className="inline-flex items-center text-[#eb6753] font-medium hover:gap-2 transition-all mt-4 md:mt-0"
          >
            {t('cities.viewAll', 'See All Cities')}
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-[#eb6753]" />
          </div>
        )}

        {/* Carousel Container */}
        {!loading && cities.length > 0 && (
          <div className="relative">
            {/* Left Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border-gray-100 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed ${
                canScrollLeft ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </Button>

            {/* Scrollable Cards */}
            <div
              ref={scrollRef}
              onScroll={checkScrollButtons}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-4"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {cities.map((city) => (
                <CityCard key={city.id} city={city} />
              ))}
            </div>

            {/* Right Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border-gray-100 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed ${
                canScrollRight ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </Button>
          </div>
        )}

        {/* Empty State */}
        {!loading && cities.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            {t('common.noResults', 'No cities found')}
          </div>
        )}
      </div>
    </section>
  );
}

interface CityCardProps {
  city: City;
}

function CityCard({ city }: CityCardProps) {
  const { t } = useTranslation();

  return (
    <div
      className="min-w-[300px] flex-shrink-0 relative h-80 rounded-2xl overflow-hidden cursor-pointer group"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Background Image */}
      <img
        src={city.image || 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&h=400&fit=crop'}
        alt={city.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
        <p className="text-white/80 mb-4">
          {city.totalProperties} {t('cities.properties', 'Properties')}
        </p>
        <Link
          href={`/grid-default?city=${city.slug}`}
          className="inline-flex items-center text-sm font-medium hover:gap-2 transition-all"
        >
          {t('cities.explore', 'Explore')}
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
