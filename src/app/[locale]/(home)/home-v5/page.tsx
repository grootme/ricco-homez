'use client';

import { useRef, useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Autoplay } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Search, MapPin, BedDouble, Bath, Maximize, Heart, ChevronLeft, ChevronRight,
  ArrowRight, Phone, Facebook, Twitter, Instagram, Linkedin, Quote,
  Home, Shield, Users, Award, Wrench, MessageSquare, Headphones,
  Menu, Building2, ChevronDown, Send, Star, Grid3X3, Key, DollarSign,
  UserCheck, TrendingUp, BarChart3, Truck, Calculator
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useProperties, useCities, useAgents, useTestimonials, useCategories } from '@/hooks/useAsyncData';
import { properties, cities, agents, testimonials, categories } from '@/lib/data';
import { partners } from '@/lib/data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ==================== DATA ====================
const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=150&fit=crop',
    price: '$4,850,000',
    title: 'Luxury Modern Villa with Ocean View',
    beds: 5,
    baths: 6,
    sqft: 6500,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&h=1080&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=200&h=150&fit=crop',
    price: '$3,200,000',
    title: 'Downtown Penthouse with Skyline Views',
    beds: 3,
    baths: 3,
    sqft: 3200,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200&h=150&fit=crop',
    price: '$3,750,000',
    title: 'Tuscan-Inspired Villa with Vineyard',
    beds: 4,
    baths: 4,
    sqft: 5800,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=150&fit=crop',
    price: '$645,000',
    title: 'Spacious Family Home with Pool',
    beds: 4,
    baths: 3,
    sqft: 2800,
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  Home, Building: Building2, Building2, Castle: Building2, Briefcase: Building2,
  Home: Home, Warehouse: Building2, Crown: Building2, Layout: Building2,
};

const serviceItems = [
  { icon: Home, title: 'Residential Sales', desc: 'Expert guidance for buying or selling residential properties. From first-time buyers to luxury seekers, we cover it all.', link: '/grid-default' },
  { icon: Building2, title: 'Commercial Real Estate', desc: 'Comprehensive commercial property services including office spaces, retail locations, and industrial properties.', link: '/grid-default' },
  { icon: Key, title: 'Property Management', desc: 'Full-service property management including tenant screening, rent collection, and maintenance coordination.', link: '/about' },
  { icon: BarChart3, title: 'Investment Advisory', desc: 'Strategic investment guidance to help you build and manage your real estate portfolio for maximum returns.', link: '/about' },
  { icon: Truck, title: 'Relocation Services', desc: 'Complete relocation assistance for individuals and corporations, making your move seamless and stress-free.', link: '/contact' },
  { icon: Calculator, title: 'Property Valuation', desc: 'Accurate property valuations based on market analysis and comparable sales to help you make informed decisions.', link: '/about' },
];

// ==================== HERO PROPERTY SLIDER ====================
function HeroPropertySlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('Buy');
  const [lookingFor, setLookingFor] = useState('Apartments');
  const [location, setLocation] = useState('New York');
  const [priceRange, setPriceRange] = useState('$2000 - $45000');

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Main Slider */}
      <div className="absolute inset-0 hero-slider-main">
        <Swiper
          modules={[Navigation, Pagination, Thumbs, Autoplay]}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={false}
          pagination={false}
          className="w-full h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-screen min-h-[600px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-homez-dark/90 via-homez-dark/50 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container-homez">
        <div className="max-w-2xl">
          <div className="gsap-hero-fade inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-homez-primary animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Premium Real Estate</span>
          </div>
          <h1 className="gsap-hero-text text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Find Your Perfect <span className="text-homez-primary">Property</span>
          </h1>
          <p className="gsap-hero-fade text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
            Discover exceptional properties tailored to your lifestyle. Browse our curated collection of luxury homes, apartments, and commercial spaces.
          </p>

          {/* Search Form */}
          <div className="gsap-scale-in bg-white rounded-2xl p-6 shadow-2xl">
            {/* Search Tabs */}
            <div className="flex gap-2 mb-5">
              {['Buy', 'Rent', 'Sold'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-homez-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="relative">
                <label className="text-xs text-gray-500 font-medium mb-1 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Enter keyword..."
                    className="pl-9 rounded-lg border-gray-200 h-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1 block">Looking For</label>
                <div className="relative">
                  <select
                    value={lookingFor}
                    onChange={(e) => setLookingFor(e.target.value)}
                    className="w-full h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-700 appearance-none cursor-pointer"
                  >
                    {['Apartments', 'Houses', 'Villas', 'Condos', 'Townhouses', 'Offices'].map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1 block">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full h-10 pl-9 pr-8 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 appearance-none cursor-pointer"
                  >
                    {['New York', 'Miami', 'Los Angeles', 'San Francisco', 'Chicago', 'Denver', 'Austin', 'Seattle'].map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1 block">Price</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full h-10 pl-9 pr-8 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 appearance-none cursor-pointer"
                  >
                    {['$2000 - $45000', '$50000 - $100000', '$100000 - $300000', '$300000 - $500000', '$500000 - $1M', '$1M - $5M', '$5M+'].map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <Link href="/grid-default" className="text-sm text-homez-primary font-medium hover:underline flex items-center gap-1">
                Advanced Search <ArrowRight className="h-3 w-3" />
              </Link>
              <Button className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-lg px-6">
                <Search className="h-4 w-4 mr-2" /> Search
              </Button>
            </div>
          </div>

          {/* Active Slide Info */}
          <div className="hidden lg:block mt-6">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView={4}
              watchSlidesProgress={true}
              className="hero-thumbs-swiper"
            >
              {heroSlides.map((slide, idx) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative rounded-xl overflow-hidden cursor-pointer group border-2 border-transparent transition-all hover:border-homez-primary/50">
                    <img
                      src={slide.thumbnail}
                      alt={slide.title}
                      className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-1 left-2">
                      <p className="text-white text-xs font-bold">{slide.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== PROPERTY TYPES ====================
function PropertyTypesSection() {
  const cats = categories.slice(0, 6);
  const iconMap: Record<string, React.ElementType> = {
    Home, Building: Building2, Building2, Castle: Building2, Briefcase: Building2,
    Warehouse: Building2, Crown: Building2, Layout: Grid3X3,
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-homez">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Explore Property Types</h2>
          <p className="text-gray-500 text-lg">Get some inspirations from 1800+ skills</p>
        </div>
        <div className="gsap-cards-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {cats.map((cat) => {
            const Icon = iconMap[cat.icon] || Home;
            return (
              <Link
                key={cat.id}
                href="/grid-default"
                className="gsap-card group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 hover:border-homez-primary/30 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-homez-primary/10 flex items-center justify-center mb-4 group-hover:bg-homez-primary transition-colors">
                  <Icon className="h-7 w-7 text-homez-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-homez-dark text-sm mb-1">{cat.name}</h3>
                <p className="text-xs text-gray-400">{cat.propertyCount.toLocaleString()} Properties</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ==================== FEATURED LISTINGS ====================
function FeaturedListingsSection() {
  const featured = properties.filter(p => p.featured).slice(0, 6);
  const formatPrice = (price: number, suffix?: string) => {
    const f = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);
    return suffix ? `${f}${suffix}` : f;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-homez">
        <div className="gsap-section-title flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Discover Our Featured Listings</h2>
            <p className="text-gray-500 text-lg">Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <Link href="/grid-default" className="inline-flex items-center text-homez-primary font-medium mt-4 md:mt-0 hover:gap-2 transition-all">
            See All Properties <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="gsap-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Card key={p.id} className="gsap-card bg-white border-0 shadow-md hover:shadow-xl transition-all rounded-2xl overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <Badge className="absolute top-4 left-4 bg-homez-dark text-white px-3 py-1 text-xs rounded-lg">
                  {p.status === 'for-sale' ? 'FOR SALE' : 'FOR RENT'}
                </Badge>
                {p.featured && (
                  <Badge className="absolute top-4 right-4 bg-homez-primary text-white px-3 py-1 text-xs rounded-lg">FEATURED</Badge>
                )}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-homez-primary hover:text-white transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-homez-primary hover:text-white transition-colors">
                    <Maximize className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-homez-primary hover:text-white transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-xl font-bold text-homez-primary mb-1">{formatPrice(p.price, p.priceSuffix ? p.priceSuffix : undefined)}</p>
                <Link href={`/property/${p.slug}`} className="block">
                  <h3 className="text-lg font-semibold text-homez-dark mb-2 hover:text-homez-primary transition-colors line-clamp-1">{p.title}</h3>
                </Link>
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
                  <MapPin className="h-4 w-4" />{p.city}, {p.state}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-600">
                  <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" />{p.bedrooms} bed</span>
                  <span className="flex items-center gap-1"><Bath className="h-4 w-4" />{p.bathrooms} bath</span>
                  <span className="flex items-center gap-1"><Maximize className="h-4 w-4" />{p.sqft.toLocaleString()} sqft</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== ABOUT SECTION ====================
function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-homez">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="gsap-slide-left relative">
            <div className="rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="About Homez"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-homez-primary text-white rounded-2xl p-6 shadow-xl hidden md:block">
              <p className="text-4xl font-bold">18+</p>
              <p className="text-sm text-white/80">Years of Experience</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="gsap-slide-right">
            <p className="text-homez-primary text-sm font-medium tracking-widest uppercase mb-4">ABOUT OUR AGENCY</p>
            <h2 className="gsap-section-title text-3xl md:text-4xl font-bold text-homez-dark mb-6">We Help You Find The Best Place To Live</h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              At Homez, we believe everyone deserves a place they can call home. Our team of dedicated professionals works tirelessly to match you with properties that exceed your expectations. From luxury estates to cozy apartments, we cover the entire spectrum of real estate.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Shield, title: 'Trusted Experience', desc: '18+ years in the real estate market' },
                { icon: Users, title: 'Expert Team', desc: '100+ certified professionals' },
                { icon: Award, title: 'Award Winning', desc: '25+ industry awards won' },
                { icon: TrendingUp, title: 'Proven Results', desc: '$2B+ in successful transactions' },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-homez-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="h-5 w-5 text-homez-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-homez-dark text-sm">{f.title}</h4>
                    <p className="text-xs text-gray-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center text-homez-primary font-medium hover:gap-2 transition-all">
              Learn More About Us <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SERVICES SECTION ====================
function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-homez">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">See How Homez Can Help</h2>
          <p className="text-gray-500 text-lg">Aliquam lacinia diam quis lacus euismod</p>
        </div>
        <div className="gsap-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((s) => (
            <Card key={s.title} className="gsap-card bg-white border-0 shadow-md hover:shadow-xl transition-all rounded-2xl overflow-hidden group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-homez-primary/10 flex items-center justify-center mb-6 group-hover:bg-homez-primary transition-colors">
                  <s.icon className="h-7 w-7 text-homez-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-homez-dark mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <Link href={s.link} className="inline-flex items-center text-homez-primary font-medium hover:gap-2 transition-all text-sm">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== BEST DEALS ====================
function BestDealsSection() {
  const [activeTab, setActiveTab] = useState<'for-rent' | 'for-sale'>('for-rent');
  const filtered = properties.filter(p => p.status === activeTab).slice(0, 8);
  const formatPrice = (price: number, suffix?: string) => {
    const f = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);
    return suffix ? `${f}${suffix}` : f;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-homez">
        <div className="gsap-section-title flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Discover Our Best Deals</h2>
            <p className="text-gray-500 text-lg">Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            {(['for-rent', 'for-sale'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-homez-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab === 'for-rent' ? 'For Rent' : 'For Sale'}
              </button>
            ))}
          </div>
        </div>
        <div className="gsap-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <Card key={p.id} className="gsap-card bg-white border-0 shadow-md hover:shadow-xl transition-all rounded-2xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                {p.featured && (
                  <Badge className="absolute top-4 left-4 bg-homez-primary text-white px-3 py-1 text-xs rounded-lg">FEATURED</Badge>
                )}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-homez-primary hover:text-white transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-homez-primary hover:text-white transition-colors">
                    <Maximize className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-homez-primary hover:text-white transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-lg font-bold text-homez-primary mb-1">{formatPrice(p.price, p.priceSuffix ? p.priceSuffix : undefined)}</p>
                <Link href={`/property/${p.slug}`} className="block">
                  <h3 className="text-sm font-semibold text-homez-dark mb-1 hover:text-homez-primary transition-colors line-clamp-1">{p.title}</h3>
                </Link>
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                  <MapPin className="h-3 w-3" />{p.city}, {p.state}, {p.country}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><BedDouble className="h-3 w-3" />{p.bedrooms} bed</span>
                  <span className="flex items-center gap-1"><Bath className="h-3 w-3" />{p.bathrooms} bath</span>
                  <span className="flex items-center gap-1"><Maximize className="h-3 w-3" />{p.sqft.toLocaleString()} sqft</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CITIES GRID ====================
function CitiesGridSection() {
  const displayCities = cities.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-homez">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Explore Apartment Types</h2>
          <p className="text-gray-500 text-lg">Get some inspirations from 1800+ skills</p>
        </div>
        <div className="gsap-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCities.map((city) => (
            <Link key={city.id} href="/grid-default" className="gsap-card group relative rounded-2xl overflow-hidden h-64 block">
              <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-homez-dark/80 via-homez-dark/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
                <p className="text-white/80 text-sm">{city.totalProperties} Properties</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/grid-default" className="inline-flex items-center text-homez-primary font-medium hover:gap-2 transition-all">
            See All Cities <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ==================== PROPERTIES BY CITIES CAROUSEL ====================
function PropertiesByCitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const extraCities = [
    { id: 'c9', name: 'California', image: cities[2].image, totalProperties: 634, state: 'CA', country: 'USA', slug: 'california', featured: true, description: '', latitude: 0, longitude: 0, totalAgents: 0 },
    { id: 'c10', name: 'New Jersey', image: cities[1].image, totalProperties: 892, state: 'NJ', country: 'USA', slug: 'new-jersey', featured: true, description: '', latitude: 0, longitude: 0, totalAgents: 0 },
    { id: 'c11', name: 'Manhattan', image: cities[1].image, totalProperties: 450, state: 'NY', country: 'USA', slug: 'manhattan', featured: true, description: '', latitude: 0, longitude: 0, totalAgents: 0 },
    { id: 'c12', name: 'San Diego', image: cities[3].image, totalProperties: 378, state: 'CA', country: 'USA', slug: 'san-diego', featured: true, description: '', latitude: 0, longitude: 0, totalAgents: 0 },
  ];
  const allCities = [...cities, ...extraCities];

  return (
    <section className="py-20 bg-white">
      <div className="container-homez">
        <div className="gsap-section-title flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Properties by Cities</h2>
            <p className="text-gray-500 text-lg">Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${canScrollLeft ? 'border-gray-300 hover:bg-gray-50 text-gray-600' : 'border-gray-200 text-gray-300 cursor-not-allowed'}`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${canScrollRight ? 'border-gray-300 hover:bg-gray-50 text-gray-600' : 'border-gray-200 text-gray-300 cursor-not-allowed'}`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="gsap-fade-up">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          >
            {allCities.map((city) => (
              <Link key={city.id} href="/grid-default" className="min-w-[280px] shrink-0 group relative rounded-2xl overflow-hidden h-64 block">
                <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-homez-dark/80 via-homez-dark/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white mb-1">{city.name}</h3>
                  <p className="text-white/80 text-sm">{city.totalProperties} Properties</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== AGENTS SECTION ====================
function AgentsSection() {
  const teamAgents = agents.slice(0, 8);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-homez">
        <div className="gsap-section-title flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Meet Our Team</h2>
            <p className="text-gray-500 text-lg">Experienced professionals at your service</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${canScrollLeft ? 'border-gray-300 hover:bg-gray-50 text-gray-600' : 'border-gray-200 text-gray-300 cursor-not-allowed'}`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${canScrollRight ? 'border-gray-300 hover:bg-gray-50 text-gray-600' : 'border-gray-200 text-gray-300 cursor-not-allowed'}`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="gsap-fade-up">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          >
            {teamAgents.map((agent) => (
              <Card key={agent.id} className="min-w-[280px] shrink-0 bg-white border-0 shadow-md hover:shadow-xl transition-all rounded-2xl overflow-hidden group">
                <div className="relative h-72 overflow-hidden">
                  <img src={agent.avatar} alt={agent.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-homez-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 justify-center">
                    {agent.socialLinks?.facebook && (
                      <a href={agent.socialLinks.facebook} className="w-9 h-9 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-homez-primary transition-colors"><Facebook className="h-4 w-4 text-white" /></a>
                    )}
                    {agent.socialLinks?.twitter && (
                      <a href={agent.socialLinks.twitter} className="w-9 h-9 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-homez-primary transition-colors"><Twitter className="h-4 w-4 text-white" /></a>
                    )}
                    {agent.socialLinks?.linkedin && (
                      <a href={agent.socialLinks.linkedin} className="w-9 h-9 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-homez-primary transition-colors"><Linkedin className="h-4 w-4 text-white" /></a>
                    )}
                    {agent.socialLinks?.instagram && (
                      <a href={agent.socialLinks.instagram} className="w-9 h-9 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-homez-primary transition-colors"><Instagram className="h-4 w-4 text-white" /></a>
                    )}
                  </div>
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-homez-dark">{agent.name}</h3>
                  <p className="text-sm text-homez-primary mb-1">{agent.title}</p>
                  <p className="text-xs text-gray-400">{agent.city}, {agent.state}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS ====================
function TestimonialsSection() {
  const featured = testimonials.filter(t => t.featured).slice(0, 4);
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container-homez">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">People Love Living with Homez</h2>
          <p className="text-gray-500 text-lg">Aliquam lacinia diam quis lacus euismod</p>
        </div>
        <div className="gsap-fade-up max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
              {featured.map((t) => (
                <div key={t.id} className="w-full shrink-0 px-4">
                  <Card className="bg-white border-0 shadow-lg rounded-2xl">
                    <CardContent className="p-8 md:p-12 text-center">
                      <Quote className="h-10 w-10 text-homez-primary/20 mx-auto mb-6" />
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-homez-primary/10 overflow-hidden flex items-center justify-center">
                          {t.avatar ? (
                            <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-xl font-bold text-homez-primary">{t.name.charAt(0)}</span>
                          )}
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-homez-dark">{t.name}</p>
                          <p className="text-sm text-gray-500">{t.role} &middot; {t.company}</p>
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
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? 'bg-homez-primary w-6' : 'bg-gray-300 w-2'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((p) => (p + 1) % featured.length)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== BUY OR SELL CTA ====================
function BuySellCTASection() {
  return (
    <section className="py-20 bg-homez-dark">
      <div className="container-homez">
        <div className="gsap-fade-up text-center max-w-3xl mx-auto">
          <p className="text-homez-primary text-sm font-medium tracking-widest uppercase mb-4">BUY OR SELL</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Looking to Buy a new property or sell an existing one? Homez provides an awesome solution!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/dashboard-add-property">
              <Button size="lg" className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-xl px-8 h-14 w-full sm:w-auto">
                Submit Property <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="/grid-default">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-xl px-8 h-14 w-full sm:w-auto">
                Browse Properties
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== NEWSLETTER BANNER ====================
function NewsletterSection() {
  const [email, setEmail] = useState('');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-homez">
        <div className="gsap-fade-up bg-homez-primary rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Subscribe Our Newsletter</h3>
              <p className="text-white/80">We don&apos;t send spam so don&apos;t worry.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-w-[260px] h-12 rounded-lg"
              />
              <Button className="bg-white text-homez-primary hover:bg-white/90 shrink-0 rounded-lg px-6 h-12 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== TRUSTED PARTNERS ====================
function TrustedPartnersSection() {
  const partnerNames = partners.length > 0
    ? partners.map(p => p.name)
    : ['Zillow', 'Realtor.com', 'Redfin', 'Trulia', 'Homes.com', 'Century 21'];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container-homez mb-8">
        <p className="text-center text-gray-400 text-sm uppercase tracking-wider">Trusted by the world&apos;s best</p>
      </div>
      <div className="flex animate-marquee">
        {[...partnerNames, ...partnerNames, ...partnerNames].map((p, i) => (
          <div key={`${p}-${i}`} className="flex-shrink-0 mx-8 px-8 py-4">
            <span className="text-2xl font-bold text-gray-300 hover:text-homez-primary transition-colors cursor-pointer whitespace-nowrap">{p}</span>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}

// ==================== MAIN PAGE ====================
export default function HomeV5Page() {
  const { data: propertiesData, isLoading: loadingProps } = useProperties();
  const { data: citiesData, isLoading: loadingCities } = useCities();
  const { data: agentsData, isLoading: loadingAgents } = useAgents();
  const { data: testimonialsData, isLoading: loadingTestimonials } = useTestimonials();
  const { data: categoriesData, isLoading: loadingCategories } = useCategories();

  const isLoading = loadingProps || loadingCities || loadingAgents || loadingTestimonials || loadingCategories;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-homez-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  const properties = propertiesData ?? [];
  const cities = citiesData ?? [];
  const agents = agentsData ?? [];
  const testimonials = testimonialsData ?? [];
  const categories = categoriesData ?? [];

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gsap-hero-text').forEach((el) =>
        gsap.fromTo(el, { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.2 })
      );
      gsap.utils.toArray<HTMLElement>('.gsap-hero-fade').forEach((el, i) =>
        gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 + i * 0.15 })
      );
      gsap.utils.toArray<HTMLElement>('.gsap-scale-in').forEach((el) =>
        gsap.fromTo(el, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.6 })
      );
      gsap.utils.toArray<HTMLElement>('.gsap-section-title').forEach((el) =>
        gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: el, start: 'top 85%' } })
      );
      gsap.utils.toArray<HTMLElement>('.gsap-cards-container').forEach((c) =>
        gsap.fromTo(c.querySelectorAll('.gsap-card'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: c, start: 'top 80%' } })
      );
      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el) =>
        gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 85%' } })
      );
      gsap.utils.toArray<HTMLElement>('.gsap-slide-left').forEach((el) =>
        gsap.fromTo(el, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: el, start: 'top 85%' } })
      );
      gsap.utils.toArray<HTMLElement>('.gsap-slide-right').forEach((el) =>
        gsap.fromTo(el, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: el, start: 'top 85%' } })
      );
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen">
      <Header variant="transparent" />
      <HeroPropertySlider />
      <PropertyTypesSection />
      <FeaturedListingsSection />
      <AboutSection />
      <ServicesSection />
      <BestDealsSection />
      <CitiesGridSection />
      <PropertiesByCitiesSection />
      <AgentsSection />
      <TestimonialsSection />
      <BuySellCTASection />
      <NewsletterSection />
      <TrustedPartnersSection />
      <Footer />
    </main>
  );
}
