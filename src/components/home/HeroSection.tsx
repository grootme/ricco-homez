'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useTranslation } from '@/providers';

interface HeroSectionProps {
  preHeading?: string;
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
  backgroundImage?: string;
  height?: 'full' | 'large' | 'medium' | 'small';
  variant?: 'default' | 'compact';
  searchPlaceholder?: string;
  showPropertyTypeDropdown?: boolean;
}

export default function HeroSection({
  preHeading,
  title,
  subtitle,
  showSearch = true,
  backgroundImage,
  height = 'full',
  variant = 'default',
  searchPlaceholder,
  showPropertyTypeDropdown = false,
}: HeroSectionProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('buy');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState('Apartments');

  // Default values from translations
  const defaultPreHeading = t('hero.preHeading', 'THE BEST WAY TO');
  const defaultTitle = t('hero.findYourDreamHome', 'Find Your Dream Home');
  const defaultSubtitle = t('hero.discoverPerfectProperty', "We've more than 745,000 apartments, place & plot.");

  // Use provided props or fall back to translations
  const displayPreHeading = preHeading ?? defaultPreHeading;
  const displayTitle = title ?? defaultTitle;
  const displaySubtitle = subtitle ?? defaultSubtitle;

  const searchTabs = [
    { id: 'buy', label: t('hero.buyProperty', 'Buy') },
    { id: 'rent', label: t('hero.rentProperty', 'Rent') },
    { id: 'sold', label: t('hero.sellProperty', 'Sold') },
  ];

  const propertyTypes = [
    t('propertyTypes.apartment', 'Apartments'),
    t('propertyTypes.house', 'Houses'),
    t('propertyTypes.condo', 'Condos'),
    t('propertyTypes.villa', 'Villas'),
    t('propertyTypes.townhouse', 'Townhouses'),
    t('propertyTypes.commercial', 'Commercial'),
    t('propertyTypes.office', 'Office'),
  ];

  const getPlaceholder = () => {
    if (searchPlaceholder) return searchPlaceholder;
    const basePlaceholder = t('hero.enterLocation', 'Enter an address, neighborhood, city, or ZIP code');
    switch (activeTab) {
      case 'buy':
        return variant === 'compact' 
          ? t('hero.enterKeywordBuy', 'Enter Keyword for Buy') 
          : `${basePlaceholder} ${t('hero.forBuy', 'for Buy')}`;
      case 'rent':
        return variant === 'compact'
          ? t('hero.enterKeywordRent', 'Enter Keyword for Rent')
          : `${basePlaceholder} ${t('hero.forRent', 'for Rent')}`;
      case 'sold':
        return variant === 'compact'
          ? t('hero.enterKeywordSold', 'Enter Keyword for Sold')
          : `${basePlaceholder} ${t('hero.forSold', 'for Sold')}`;
      default:
        return basePlaceholder;
    }
  };

  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[700px]',
    medium: 'min-h-[500px]',
    small: 'min-h-[400px]',
  };

  // Compact variant - search above, content below
  if (variant === 'compact') {
    return (
      <section className="relative bg-white">
        {/* Search Bar at Top */}
        {showSearch && (
          <div className="bg-homez-dark py-6">
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-2xl p-3 shadow-2xl max-w-4xl mx-auto">
                {/* Tabs */}
                <div className="flex items-center gap-1 mb-3 px-2">
                  {searchTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-homez-primary text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Search Form */}
                <div className="flex flex-wrap items-center gap-3 p-2">
                  {/* Keyword Input */}
                  <div className="flex-1 min-w-[200px] relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder={getPlaceholder()}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-12 border-0 bg-gray-50 focus-visible:ring-homez-primary text-gray-700 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Property Type Dropdown */}
                  {showPropertyTypeDropdown && (
                    <select
                      value={selectedPropertyType}
                      onChange={(e) => setSelectedPropertyType(e.target.value)}
                      className="h-12 px-4 min-w-[160px] border rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary bg-white"
                    >
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  )}

                  {/* Advanced Button */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="h-12 px-5 border-gray-200 hover:border-homez-primary hover:text-homez-primary"
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    {t('hero.advancedSearch', 'Advanced')}
                    <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
                  </Button>

                  {/* Search Button */}
                  <Button
                    type="submit"
                    className="h-12 px-8 bg-homez-primary hover:bg-homez-primary/90 text-white rounded-xl"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </div>

                {/* Advanced Filters (Expandable) */}
                {showAdvanced && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border-t mt-2 animate-fade-in">
                    <select className="h-11 px-4 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary">
                      <option>{t('search.priceRange', 'Price Range')}</option>
                      <option>$0 - $100,000</option>
                      <option>$100,000 - $300,000</option>
                      <option>$300,000 - $500,000</option>
                      <option>$500,000 - $1,000,000</option>
                      <option>$1,000,000+</option>
                    </select>
                    <select className="h-11 px-4 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary">
                      <option>{t('search.bedrooms', 'Bedrooms')}</option>
                      <option>1+ {t('property.beds', 'Beds')}</option>
                      <option>2+ {t('property.beds', 'Beds')}</option>
                      <option>3+ {t('property.beds', 'Beds')}</option>
                      <option>4+ {t('property.beds', 'Beds')}</option>
                      <option>5+ {t('property.beds', 'Beds')}</option>
                    </select>
                    <select className="h-11 px-4 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary">
                      <option>{t('search.bathrooms', 'Bathrooms')}</option>
                      <option>1+ {t('property.baths', 'Baths')}</option>
                      <option>2+ {t('property.baths', 'Baths')}</option>
                      <option>3+ {t('property.baths', 'Baths')}</option>
                      <option>4+ {t('property.baths', 'Baths')}</option>
                    </select>
                    <select className="h-11 px-4 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary">
                      <option>{t('search.sortBy', 'Sort By')}</option>
                      <option>{t('search.sortOptions.newest', 'Newest')}</option>
                      <option>{t('search.sortOptions.priceAsc', 'Price: Low to High')}</option>
                      <option>{t('search.sortOptions.priceDesc', 'Price: High to Low')}</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Hero Content Below */}
        <div 
          className="relative flex items-center justify-center overflow-hidden min-h-[400px] md:min-h-[500px]"
          style={{
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center py-16">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              {displayTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in">
              {displaySubtitle}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Default variant - full-width hero with background
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${heightClasses[height]}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        {/* Pre-heading */}
        {displayPreHeading && (
          <p className="text-homez-primary text-sm md:text-base font-medium tracking-widest uppercase mb-4 animate-fade-in">
            {displayPreHeading}
          </p>
        )}

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          {displayTitle}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in">
          {displaySubtitle}
        </p>

        {showSearch && (
          <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-3xl mx-auto animate-scale-in">
            {/* Tabs */}
            <div className="flex items-center gap-1 mb-2 px-2">
              {searchTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-homez-primary text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Form */}
            <div className="flex items-center gap-2 p-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder={getPlaceholder()}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 border-0 bg-gray-50 focus-visible:ring-homez-primary text-gray-700 placeholder:text-gray-400"
                />
              </div>

              {/* Advanced Button */}
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="h-14 px-5 border-gray-200 hover:border-homez-primary hover:text-homez-primary"
              >
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                {t('hero.advancedSearch', 'Advanced')}
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
              </Button>

              {/* Search Button */}
              <Button
                type="submit"
                className="h-14 px-8 bg-homez-primary hover:bg-homez-primary/90 text-white rounded-xl"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Advanced Filters (Expandable) */}
            {showAdvanced && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border-t mt-2 animate-fade-in">
                <select className="h-12 px-4 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary">
                  <option>{t('hero.propertyType', 'Property Type')}</option>
                  <option>{t('propertyTypes.house', 'House')}</option>
                  <option>{t('propertyTypes.apartment', 'Apartment')}</option>
                  <option>{t('propertyTypes.condo', 'Condo')}</option>
                  <option>{t('propertyTypes.villa', 'Villa')}</option>
                  <option>{t('propertyTypes.townhouse', 'Townhouse')}</option>
                </select>
                <select className="h-12 px-4 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary">
                  <option>{t('search.priceRange', 'Price Range')}</option>
                  <option>$0 - $100,000</option>
                  <option>$100,000 - $300,000</option>
                  <option>$300,000 - $500,000</option>
                  <option>$500,000 - $1,000,000</option>
                  <option>$1,000,000+</option>
                </select>
                <select className="h-12 px-4 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary">
                  <option>{t('search.bedrooms', 'Bedrooms')}</option>
                  <option>1+ {t('property.beds', 'Beds')}</option>
                  <option>2+ {t('property.beds', 'Beds')}</option>
                  <option>3+ {t('property.beds', 'Beds')}</option>
                  <option>4+ {t('property.beds', 'Beds')}</option>
                  <option>5+ {t('property.beds', 'Beds')}</option>
                </select>
                <select className="h-12 px-4 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary">
                  <option>{t('search.bathrooms', 'Bathrooms')}</option>
                  <option>1+ {t('property.baths', 'Baths')}</option>
                  <option>2+ {t('property.baths', 'Baths')}</option>
                  <option>3+ {t('property.baths', 'Baths')}</option>
                  <option>4+ {t('property.baths', 'Baths')}</option>
                </select>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
