'use client';

import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Home,
  Building2,
  Briefcase,
  Castle,
  Building,
  Warehouse,
  DoorOpen,
  ChevronLeft,
  ChevronRight,
  Loader2
} from 'lucide-react';
import { useTranslation, useCategoryDataSource } from '@/providers';

// Icon mapping for property types
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  house: Home,
  apartment: Building2,
  office: Briefcase,
  villa: Castle,
  townhouse: Building,
  bungalow: Warehouse,
  loft: DoorOpen,
  condo: Building2,
  commercial: Briefcase,
  default: Home,
};

interface PropertyTypesSectionProps {
  title?: string;
  subtitle?: string;
}

export default function PropertyTypesSection({
  title,
  subtitle,
}: PropertyTypesSectionProps) {
  const { t } = useTranslation();
  const categoryDataSource = useCategoryDataSource();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [categories, setCategories] = useState<Array<{
    id: string;
    name: string;
    slug: string;
    propertyCount: number;
    icon: string;
  }>>([]);
  const [loading, setLoading] = useState(true);

  // Default values from translations
  const displayTitle = title ?? t('propertyTypes.title', 'Explore Apartment Types');
  const displaySubtitle = subtitle ?? t('propertyTypes.subtitle', 'Get some Inspirations from 1800+ skills');

  // Fetch categories on mount
  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const data = await categoryDataSource.getCategoriesWithProperties();
        setCategories(data.map(cat => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
          propertyCount: cat.propertyCount,
          icon: cat.icon ?? 'default',
        })));
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        // Fallback to default categories
        setCategories([
          { id: '1', name: t('propertyTypes.house', 'Houses'), slug: 'house', propertyCount: 22, icon: 'house' },
          { id: '2', name: t('propertyTypes.apartment', 'Apartments'), slug: 'apartment', propertyCount: 22, icon: 'apartment' },
          { id: '3', name: t('propertyTypes.office', 'Office'), slug: 'office', propertyCount: 22, icon: 'office' },
          { id: '4', name: t('propertyTypes.villa', 'Villa'), slug: 'villa', propertyCount: 22, icon: 'villa' },
          { id: '5', name: t('propertyTypes.townhouse', 'Townhome'), slug: 'townhouse', propertyCount: 22, icon: 'townhouse' },
          { id: '6', name: t('propertyTypes.bungalow', 'Bungalow'), slug: 'bungalow', propertyCount: 22, icon: 'bungalow' },
          { id: '7', name: t('propertyTypes.loft', 'Loft'), slug: 'loft', propertyCount: 22, icon: 'loft' },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, [categoryDataSource, t]);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#041e42] mb-3">
            {displayTitle}
          </h2>
          <p className="text-gray-500 text-lg">{displaySubtitle}</p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-[#eb6753]" />
          </div>
        )}

        {/* Carousel Container */}
        {!loading && categories.length > 0 && (
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
              {categories.map((type) => {
                const IconComponent = iconMap[type.icon] || iconMap.default;
                return (
                  <Card
                    key={type.id}
                    className="min-w-[250px] flex-shrink-0 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-md bg-white rounded-2xl"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-[#fef3f2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-10 w-10 text-[#eb6753]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#041e42] mb-2">
                        {t(`propertyTypes.${type.slug}`, type.name)}
                      </h3>
                      <p className="text-gray-500">
                        {type.propertyCount} {t('property.properties', 'Properties')}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
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
        {!loading && categories.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            {t('common.noResults', 'No property types found')}
          </div>
        )}
      </div>
    </section>
  );
}
