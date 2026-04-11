'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Search, MapPin, BedDouble, Bath, Maximize, Heart, ChevronLeft, ChevronRight,
  ArrowRight, Star, Quote, Home, X, Shield, Clock, Award, Users
} from 'lucide-react';
import { useProperties, useTestimonials, useCategories } from '@/hooks/useAsyncData';
import { properties, categories, testimonials } from '@/lib/data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ==================== MULTI-SELECT HERO ====================
function HeroV3() {
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const locationOptions = ['Los Angeles', 'New York', 'Miami', 'San Francisco', 'Chicago', 'Denver', 'Austin', 'Seattle'];
  const typeOptions = categories.slice(0, 6).map(c => c.name);

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-homez-dark via-[#0d2847] to-homez-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-hero-fade text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-4 leading-tight">
            Find The Perfect Place to <span className="text-homez-primary">Live</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Multi-select search to find exactly what you&apos;re looking for
          </p>
        </div>

        {/* Search Form */}
        <div className="gsap-scale-in bg-white rounded-2xl p-6 shadow-2xl max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {/* Location Input */}
            <div>
              <label className="text-sm font-medium text-gray-500 mb-1.5 block">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter location..."
                  className="w-full h-11 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-homez-primary text-gray-700"
                />
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {locationOptions.slice(0, 4).map(o => (
                  <button key={o} onClick={() => setLocation(o)}
                    className={`text-xs px-2.5 py-1 rounded-full transition-colors ${location === o ? 'bg-homez-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-homez-primary/10 hover:text-homez-primary'}`}>
                    {o}
                  </button>
                ))}
              </div>
            </div>

            {/* Keyword Input */}
            <div>
              <label className="text-sm font-medium text-gray-500 mb-1.5 block">Keyword</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Enter keyword..."
                  className="w-full h-11 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-homez-primary text-gray-700"
                />
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['Luxury', 'Pool', 'Garden', 'Waterfront'].map(tag => (
                  <button key={tag} onClick={() => setKeyword(tag)}
                    className={`text-xs px-2.5 py-1 rounded-full transition-colors ${keyword === tag ? 'bg-homez-dark text-white' : 'bg-gray-100 text-gray-500 hover:bg-homez-dark/10 hover:text-homez-dark'}`}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Type Dropdown */}
            <div>
              <label className="text-sm font-medium text-gray-500 mb-1.5 block">Property Type</label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-homez-primary text-gray-700 appearance-none"
                >
                  <option value="">All Types</option>
                  {typeOptions.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              {propertyType && (
                <div className="mt-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-homez-primary/10 text-homez-primary rounded-full text-xs">
                    {propertyType}
                    <button onClick={() => setPropertyType('')}><X className="h-3 w-3" /></button>
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-full px-10 h-12 text-base font-semibold">
              <Search className="h-5 w-5 mr-2" /> Search Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FEATURED PROPERTIES GRID ====================
function FeaturedPropertiesV3() {
  const featured = properties.filter(p => p.featured).slice(0, 6);
  const formatPrice = (price: number, suffix?: string) => {
    const f = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);
    return suffix ? `${f} / ${suffix}` : f;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Featured Properties</h2>
          <p className="text-gray-500 text-lg">Handpicked properties for you</p>
        </div>
        <div className="gsap-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Card key={p.id} className="gsap-card bg-white border-0 shadow-md hover:shadow-xl transition-all rounded-2xl overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                {p.featured && <Badge className="absolute top-4 left-4 bg-homez-primary text-white px-3 py-1 text-xs rounded-lg">FEATURED</Badge>}
                <Badge className={`absolute top-4 right-4 ${p.status === 'for-sale' ? 'bg-homez-dark' : 'bg-homez-primary'} text-white px-3 py-1 text-xs rounded-lg`}>
                  {p.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                </Badge>
                <button className="absolute bottom-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-homez-primary hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <CardContent className="p-5">
                <p className="text-2xl font-bold text-homez-primary mb-2">{formatPrice(p.price, p.priceSuffix?.replace('/', ''))}</p>
                <h3 className="text-lg font-semibold text-homez-dark mb-2 line-clamp-1 group-hover:text-homez-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-4"><MapPin className="h-4 w-4" />{p.city}, {p.state}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-600">
                  <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" />{p.bedrooms} bed</span>
                  <span className="flex items-center gap-1"><Bath className="h-4 w-4" />{p.bathrooms} bath</span>
                  <span className="flex items-center gap-1"><Maximize className="h-4 w-4" />{p.sqft.toLocaleString()} sqft</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/grid-default" className="inline-flex items-center text-homez-primary font-semibold hover:gap-3 transition-all group/link text-base">
            See All Properties <ArrowRight className="h-5 w-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ==================== CATEGORIES SECTION ====================
function CategoriesV3() {
  const categoryIcons: Record<string, typeof Home> = {
    'House': Home,
    'Apartment': Building,
    'Villa': Home,
    'Condo': Building,
    'Townhouse': Home,
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Browse by Category</h2>
          <p className="text-gray-500 text-lg">Find properties by type</p>
        </div>
        <div className="gsap-cards-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.slice(0, 5).map((cat) => {
            const Icon = categoryIcons[cat.name] || Home;
            return (
              <Link key={cat.id} href="/grid-default" className="gsap-card group bg-white rounded-2xl p-6 text-center hover:bg-homez-primary hover:text-white transition-all shadow-sm hover:shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-homez-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon className="h-8 w-8 text-homez-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-sm text-homez-dark group-hover:text-white transition-colors">{cat.name}</h3>
                <p className="text-xs mt-1 text-gray-500 group-hover:text-white/80 transition-colors">{cat.propertyCount.toLocaleString()} listings</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ==================== MEMBER CTA SECTION ====================
function MemberCTA() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const statsData = [
    { target: 12000, suffix: '+', label: 'Members' },
    { target: 8000, suffix: '+', label: 'Properties' },
    { target: 200, suffix: '+', label: 'Agents' },
  ];

  useEffect(() => {
    statsData.forEach((s, i) => {
      const el = counterRefs.current[i];
      if (!el) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: s.target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
        onUpdate: () => {
          el.textContent = Math.floor(obj.val).toLocaleString() + s.suffix;
        },
      });
    });
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-homez-dark/90" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="gsap-fade-up hidden md:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=500&fit=crop"
                alt="Membership"
                className="rounded-2xl shadow-2xl w-full max-w-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-homez-primary text-white rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm text-white/80">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="gsap-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Membership</h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Become part of our growing network of real estate professionals. Get access to exclusive listings, marketing tools, and dedicated support.
            </p>

            {/* Animated Counters */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {statsData.map((s, i) => (
                <div key={s.label} className="text-center">
                  <span ref={(el) => { counterRefs.current[i] = el; }} className="text-3xl md:text-4xl font-bold text-homez-primary block mb-1">
                    0{s.suffix}
                  </span>
                  <span className="text-white/60 text-sm">{s.label}</span>
                </div>
              ))}
            </div>

            <Link href="/dashboard-add-property">
              <Button className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-full px-10 h-14 text-lg font-semibold">
                Join Now <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS (DARK) ====================
function TestimonialsV3() {
  const featured = testimonials.filter(t => t.featured).slice(0, 3);

  return (
    <section className="py-16 bg-homez-dark">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What Our Clients Say</h2>
          <p className="text-white/50 text-lg">Real stories from real homeowners</p>
        </div>
        <div className="gsap-cards-container grid md:grid-cols-3 gap-6">
          {featured.map((t) => (
            <Card key={t.id} className="gsap-card bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}`} />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-homez-primary/30 mb-4" />
                <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-4">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-homez-primary/30">
                    {t.avatar ? <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" /> : <span className="text-lg font-bold text-homez-primary flex items-center justify-center h-full w-full bg-homez-primary/10">{t.name.charAt(0)}</span>}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CTA SECTION ====================
function CTASection() {
  return (
    <section className="py-20 bg-homez-primary">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="gsap-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of happy homeowners who found their perfect property with Homez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/grid-default">
              <Button size="lg" className="bg-white text-homez-primary hover:bg-white/90 rounded-full px-10 h-14 text-lg font-semibold">
                Browse Properties <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 rounded-full px-10 h-14 text-lg font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== MAIN PAGE ====================
export default function HomeV3Page() {
  const { data: propertiesData, isLoading: loadingProps } = useProperties();
  const { data: testimonialsData, isLoading: loadingTestimonials } = useTestimonials();
  const { data: categoriesData, isLoading: loadingCategories } = useCategories();

  const isLoading = loadingProps || loadingTestimonials || loadingCategories;

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
  const testimonials = testimonialsData ?? [];
  const categories = categoriesData ?? [];

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.utils.toArray<HTMLElement>('.gsap-hero-text').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
      });
      gsap.utils.toArray<HTMLElement>('.gsap-hero-fade').forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 + i * 0.15 });
      });
      gsap.utils.toArray<HTMLElement>('.gsap-scale-in').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.5 });
      });

      // Section titles
      gsap.utils.toArray<HTMLElement>('.gsap-section-title').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
      });

      // Card containers
      gsap.utils.toArray<HTMLElement>('.gsap-cards-container').forEach((c) => {
        gsap.fromTo(c.querySelectorAll('.gsap-card'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1, scrollTrigger: { trigger: c, start: 'top 80%' } });
      });

      // Generic fade-up
      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen">
      <Header variant="default" />
      <HeroV3 />
      <FeaturedPropertiesV3 />
      <CategoriesV3 />
      <MemberCTA />
      <TestimonialsV3 />
      <CTASection />
      <Footer />
    </main>
  );
}
