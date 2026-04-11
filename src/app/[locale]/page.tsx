'use client';

import { useRef, useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Search, MapPin, BedDouble, Bath, Maximize, Heart, ChevronLeft, ChevronRight,
  ArrowRight, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Star, Quote,
  Home, Building2, Building, Castle, Landmark, Warehouse, DoorOpen, Briefcase,
  SlidersHorizontal, ChevronDown, Tag, Key, Send, Check, Menu, User, Plus, LogIn
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  properties, cities, testimonials, blogPosts, categories,
  getFeaturedProperties, getPropertiesByStatus, getFeaturedTestimonials, getFeaturedBlogPosts
} from '@/lib/data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ==================== SECTION TITLE ====================
function SectionTitle({ title, subtitle, light = false }: { title: string; subtitle: string; light?: boolean }) {
  return (
    <div className="gsap-section-title text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-homez-dark'}`}>
        {title}
      </h2>
      <p className={`text-lg ${light ? 'text-white/70' : 'text-gray-500'}`}>
        {subtitle}
      </p>
    </div>
  );
}

// ==================== PROPERTY CARD (Reusable) ====================
function PropertyCardInline({ property, compact = false }: { property: typeof properties[0]; compact?: boolean }) {
  const formatPrice = (price: number, suffix?: string) => {
    const f = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);
    return suffix ? `${f} / ${suffix}` : f;
  };

  return (
    <Card className="gsap-card bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
      <div className={`relative overflow-hidden ${compact ? 'h-48' : 'h-56'}`}>
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {property.featured && (
          <Badge className="absolute top-4 left-4 bg-homez-primary text-white px-3 py-1 text-xs font-semibold rounded-lg">
            FEATURED
          </Badge>
        )}
        <Badge className={`absolute top-4 right-4 ${property.status === 'for-sale' ? 'bg-homez-dark' : 'bg-homez-primary'} text-white px-3 py-1 text-xs font-medium rounded-lg`}>
          {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
        </Badge>
        <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-homez-primary hover:text-white transition-colors">
            <Heart className="h-4 w-4" />
          </button>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-homez-primary hover:text-white transition-colors">
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-homez-primary hover:text-white transition-colors">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
      <CardContent className={compact ? 'p-4' : 'p-5'}>
        <p className={`font-bold text-homez-primary mb-2 ${compact ? 'text-xl' : 'text-2xl'}`}>
          {formatPrice(property.price, property.priceSuffix)}
        </p>
        <h3 className={`${compact ? 'text-base' : 'text-lg'} font-semibold text-homez-dark mb-2 line-clamp-1`}>
          <Link href={`/single-v1/${property.id}`} className="hover:text-homez-primary transition-colors">
            {property.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
          <MapPin className="h-4 w-4" />
          {property.city}, {property.state}, {property.country}
        </p>
        <div className={`flex items-center justify-between pt-3 border-t border-gray-100 ${compact ? 'text-xs' : 'text-sm'} text-gray-600`}>
          <span className="flex items-center gap-1">
            <BedDouble className={compact ? 'h-3 w-3' : 'h-4 w-4'} />
            {property.bedrooms} bed
          </span>
          <span className="flex items-center gap-1">
            <Bath className={compact ? 'h-3 w-3' : 'h-4 w-4'} />
            {property.bathrooms} bath
          </span>
          <span className="flex items-center gap-1">
            <Maximize className={compact ? 'h-3 w-3' : 'h-4 w-4'} />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

// ==================== HERO SECTION ====================
function HeroSection() {
  const [activeTab, setActiveTab] = useState('buy');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const getPlaceholder = () => {
    const base = 'Enter an address, neighborhood, city, or ZIP code';
    switch (activeTab) {
      case 'buy': return `${base} for Buy`;
      case 'rent': return `${base} for Rent`;
      case 'sold': return `${base} for Sold`;
      default: return base;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 gsap-parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-homez-dark/70 via-homez-dark/50 to-homez-dark/80" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center py-20">
        <p className="gsap-hero-fade text-homez-primary text-sm md:text-base font-medium tracking-widest uppercase mb-4">
          THE BEST WAY TO
        </p>
        <h1 className="gsap-hero-text text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Find Your Dream Home
        </h1>
        <p className="gsap-hero-fade text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          We&apos;ve more than 745,000 apartments, place &amp; plot.
        </p>

        {/* Search Form */}
        <div className="gsap-scale-in bg-white rounded-2xl p-2 shadow-2xl max-w-4xl mx-auto">
          <div className="flex items-center gap-1 mb-2 px-2">
            {[{ id: 'buy', label: 'Buy' }, { id: 'rent', label: 'Rent' }, { id: 'sold', label: 'Sold' }].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id ? 'bg-homez-primary text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 p-2">
            <div className="flex-1 min-w-[180px] relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                placeholder={getPlaceholder()}
                className="w-full pl-12 h-12 border-0 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-homez-primary text-gray-700"
              />
            </div>
            <select className="h-12 px-4 min-w-[130px] border rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary bg-white">
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
              <option>Villa</option>
            </select>
            <select className="h-12 px-4 min-w-[130px] border rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary bg-white">
              <option>Price Range</option>
              <option>$0-$300K</option>
              <option>$300K-$500K</option>
              <option>$500K-$1M</option>
              <option>$1M+</option>
            </select>
            <select className="h-12 px-4 min-w-[110px] border rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary bg-white">
              <option>Bedrooms</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
            <select className="h-12 px-4 min-w-[110px] border rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary bg-white">
              <option>Bathrooms</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="h-12 px-5 border rounded-xl text-gray-600 hover:border-homez-primary hover:text-homez-primary transition-colors flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Advanced
              <ChevronDown className={`h-4 w-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
            </button>
            <Button className="h-12 px-8 bg-homez-primary hover:bg-homez-primary/90 text-white rounded-xl">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== PROPERTY TYPES SECTION ====================
function PropertyTypesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Home, Apartment: Building2, Office: Briefcase, Villa: Castle,
    Townhouse: Building, Bungalow: Warehouse, Loft: DoorOpen, Condo: Building2,
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Explore Apartment Types" subtitle="Get some Inspirations from 1800+ skills" />
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {categories.slice(0, 7).map((cat) => {
              const Icon = iconMap[cat.icon] || Home;
              return (
                <Card
                  key={cat.id}
                  className="gsap-card min-w-[250px] flex-shrink-0 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-md bg-white rounded-2xl"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-homez-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon className="h-10 w-10 text-homez-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-homez-dark mb-2">{cat.name}</h3>
                    <p className="text-gray-500">{cat.propertyCount.toLocaleString()} Properties</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ==================== SERVICES SECTION ====================
function ServicesSection() {
  const services = [
    { title: 'Buy a property', description: 'Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.', icon: Home, linkText: 'Find a home', link: '/grid-default' },
    { title: 'Sell a property', description: 'Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.', icon: Tag, linkText: 'Place an ad', link: '/dashboard-add-property' },
    { title: 'Rent a property', description: 'Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.', icon: Key, linkText: 'Find a rental', link: '/grid-default?status=for-rent' },
  ];

  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="See How Realton Can Help" subtitle="Aliquam lacinia diam quis lacus euismod" />
        <div className="gsap-cards-container grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="gsap-card group bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-homez-primary/10 flex items-center justify-center mb-6 group-hover:bg-homez-primary transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-homez-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-homez-dark mb-3">{service.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-homez-primary font-medium hover:gap-2 transition-all group/link"
                >
                  {service.linkText}
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FEATURED PROPERTIES ====================
function FeaturedPropertiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const featured = getFeaturedProperties().slice(0, 6);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div className="gsap-section-title">
            <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Discover Our Featured Listings</h2>
            <p className="text-gray-500 text-lg">Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <Link href="/grid-default" className="gsap-section-title inline-flex items-center text-homez-primary font-medium hover:gap-2 transition-all mt-4 md:mt-0">
            See All Properties <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {featured.map((p) => (
              <div key={p.id} className="min-w-[320px] flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
                <PropertyCardInline property={p} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ==================== CITIES SECTION ====================
function CitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const featuredCities = cities.filter(c => c.featured).slice(0, 6);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div className="gsap-section-title">
            <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Properties by Cities</h2>
            <p className="text-gray-500 text-lg">Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <Link href="/grid-default" className="gsap-section-title inline-flex items-center text-homez-primary font-medium hover:gap-2 transition-all mt-4 md:mt-0">
            See All Cities <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {featuredCities.map((city) => (
              <Link
                key={city.id}
                href={`/grid-default?city=${city.slug}`}
                className="gsap-card min-w-[300px] flex-shrink-0 relative h-80 rounded-2xl overflow-hidden group block"
                style={{ scrollSnapAlign: 'start' }}
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                  <p className="text-white/80 mb-4">{city.totalProperties} Properties</p>
                  <span className="inline-flex items-center text-sm font-medium hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ==================== SELLING OPTIONS CTA ====================
function SellingOptionsCTA() {
  const features = [
    'Find excellent deals',
    'Friendly host & Fast support',
    'List your own property',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="gsap-fade-up grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-48">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop" alt="Property" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-64">
                <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=500&fit=crop" alt="Property" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden h-64">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=500&fit=crop" alt="Property" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop" alt="Property" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold text-homez-dark mb-4">
              Let&apos;s find the right selling option for you
            </h2>
            <p className="gsap-section-title text-gray-500 text-lg mb-8">
              As the complexity of buildings to increase, the field of architecture
            </p>
            <ul className="gsap-cards-container space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="gsap-card flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-homez-primary/10 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-homez-primary" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/about" className="gsap-fade-up inline-flex items-center bg-homez-primary hover:bg-homez-primary/90 text-white px-8 py-3.5 rounded-xl font-medium transition-colors">
              Learn More <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== POPULAR PROPERTIES ====================
function PopularPropertiesSection() {
  const [activeTab, setActiveTab] = useState<'for-rent' | 'for-sale'>('for-rent');
  const displayProperties = getPropertiesByStatus(activeTab).slice(0, 8);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Discover Popular Properties" subtitle="Aliquam lacinia diam quis lacus euismod" />
        <div className="flex items-center justify-center gap-2 mb-10">
          {(['for-rent', 'for-sale'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab ? 'bg-homez-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab === 'for-rent' ? 'For Rent' : 'For Sale'}
            </button>
          ))}
        </div>
        <div className="gsap-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProperties.map((property) => (
            <PropertyCardInline key={property.id} property={property} compact />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/grid-default" className="inline-flex items-center text-homez-primary font-medium hover:gap-2 transition-all">
            See All Properties <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS SECTION ====================
function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const featured = getFeaturedTestimonials().slice(0, 4);

  return (
    <section className="py-16 bg-homez-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="People Love Living with Realton" subtitle="Aliquam lacinia diam quis lacus euismod" light />
        <div className="gsap-fade-up relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
              {featured.map((t) => (
                <div key={t.id} className="w-full shrink-0 px-4">
                  <Card className="bg-white/10 backdrop-blur border-white/20">
                    <CardContent className="p-8 text-center">
                      <Quote className="h-10 w-10 text-homez-primary mx-auto mb-6 opacity-50" />
                      <h4 className="text-xl font-semibold mb-4">Great Work</h4>
                      <p className="text-lg text-white/90 mb-6 leading-relaxed">
                        &ldquo;{t.content}&rdquo;
                      </p>
                      <div className="flex items-center justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-homez-primary/20 overflow-hidden flex items-center justify-center">
                          {t.avatar ? (
                            <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-xl font-bold text-homez-primary">{t.name.charAt(0)}</span>
                          )}
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">{t.name}</p>
                          <p className="text-sm text-white/60">{t.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((p) => (p - 1 + featured.length) % featured.length)}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-homez-primary w-6' : 'bg-white/40'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((p) => (p + 1) % featured.length)}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== BLOG SECTION ====================
function BlogSection() {
  const featured = getFeaturedBlogPosts().slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return { month: date.toLocaleString('default', { month: 'long' }), day: date.getDate() };
  };

  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="From Our Blog" subtitle="Aliquam lacinia diam quis lacus euismod" />
        <div className="gsap-cards-container grid md:grid-cols-3 gap-8">
          {featured.map((post) => {
            const date = formatDate(post.publishedAt);
            return (
              <Card key={post.id} className="gsap-card group bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-homez-primary text-white rounded-xl px-4 py-2 text-center">
                    <p className="text-xs font-medium uppercase">{date.month}</p>
                    <p className="text-xl font-bold">{date.day}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <span className="text-homez-primary text-sm font-medium">{post.category}</span>
                  <h3 className="text-lg font-semibold text-homez-dark mt-2 line-clamp-2 group-hover:text-homez-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{post.readTime} min read</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ==================== PARTNERS SECTION ====================
function PartnersSection() {
  const partnerNames = [
    'Zillow', 'Realtor.com', 'Redfin', 'Trulia', 'Homes.com', 'Century 21',
    'RE/MAX', 'Coldwell Banker', 'Keller Williams',
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-gray-400 text-sm uppercase tracking-wider font-medium">
          Trusted by the world&apos;s best
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee">
          {[...partnerNames, ...partnerNames, ...partnerNames].map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-4 flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-gray-300 hover:text-homez-primary transition-colors cursor-pointer whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// ==================== CTA / CONTACT SECTION ====================
function CTASection() {
  return (
    <section className="py-16 bg-homez-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="gsap-fade-up grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need help? Talk to our expert.
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Talk to our experts or Browse through more properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact">
                <Button size="lg" className="bg-homez-primary hover:bg-homez-primary/90 text-white">
                  Contact Us <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:9208519087" className="inline-flex items-center text-white hover:text-homez-primary transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                920 851 9087
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-white/60 text-sm mb-1">Total Free Customer Care</p>
                <a href="tel:+012305094502" className="text-white hover:text-homez-primary font-medium">
                  +(0) 123 050 945 02
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">Need Live Support?</p>
                <a href="mailto:hi@homez.com" className="text-white hover:text-homez-primary font-medium">
                  hi@homez.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Apps & Social */}
          <div className="lg:pl-12">
            {/* Apps */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Apps</h3>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <p className="text-white/60 text-xs">Download on the</p>
                    <p className="text-white font-semibold">Apple Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div>
                    <p className="text-white/60 text-xs">Get it on</p>
                    <p className="text-white font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow us on social media</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, label: 'Facebook' },
                  { Icon: Twitter, label: 'Twitter' },
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Linkedin, label: 'LinkedIn' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-homez-primary transition-colors"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== MAIN PAGE ====================
export default function HomeV1Page() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.utils.toArray<HTMLElement>('.gsap-hero-text').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out', delay: 0.2 });
      });
      gsap.utils.toArray<HTMLElement>('.gsap-hero-fade').forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.3 + i * 0.15 });
      });
      gsap.utils.toArray<HTMLElement>('.gsap-scale-in').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out', delay: 0.6 });
      });

      // Section title animations
      gsap.utils.toArray<HTMLElement>('.gsap-section-title').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      // Card container stagger animations
      gsap.utils.toArray<HTMLElement>('.gsap-cards-container').forEach((c) => {
        gsap.fromTo(c.querySelectorAll('.gsap-card'), { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: c, start: 'top 80%' },
        });
      });

      // Fade-up animations
      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      // Parallax hero background
      gsap.to('.gsap-parallax-bg', {
        scrollTrigger: {
          trigger: '.gsap-parallax-bg',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 200,
        ease: 'none',
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen">
      <Header variant="transparent" />
      <HeroSection />
      <PropertyTypesSection />
      <ServicesSection />
      <FeaturedPropertiesSection />
      <CitiesSection />
      <SellingOptionsCTA />
      <PopularPropertiesSection />
      <TestimonialsSection />
      <BlogSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </main>
  );
}
