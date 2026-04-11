'use client';

import { useRef, useState, useEffect } from 'react';
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
  ArrowRight, Phone, Facebook, Twitter, Instagram, Linkedin, Star, Quote,
  Home, Tag, Key, Building, Play, Mail, Menu, Users, Shield, Clock
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useProperties, useCities, useAgents, useTestimonials, useBlogPosts, useCategories } from '@/hooks/useAsyncData';
import { properties, cities, agents, testimonials, blogPosts, categories } from '@/lib/data';
import { partners } from '@/lib/data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ==================== COMPACT HERO ====================
function HeroV2() {
  const [searchTab, setSearchTab] = useState<'Buy' | 'Rent' | 'Sold'>('Buy');

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-homez-dark">
      <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-homez-dark/80" />
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* Search Form - ABOVE heading (compact hero) */}
        <div className="gsap-hero-fade bg-white rounded-2xl p-4 sm:p-6 shadow-2xl max-w-4xl mx-auto mb-12">
          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            {(['Buy', 'Rent', 'Sold'] as const).map((tab) => (
              <button key={tab} onClick={() => setSearchTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${searchTab === tab ? 'bg-homez-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {tab}
              </button>
            ))}
          </div>
          {/* Search Fields */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input placeholder={`Enter Keyword for ${searchTab}`} className="w-full pl-12 h-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-homez-primary text-gray-700" />
            </div>
            <select className="h-12 px-4 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-homez-primary bg-white min-w-[160px]">
              <option>Apartments</option>
              {categories.map(c => <option key={c.id}>{c.name}</option>)}
            </select>
            <Button className="h-12 px-8 bg-homez-primary hover:bg-homez-primary/90 text-white rounded-xl">
              <Search className="h-5 w-5 mr-2" /> Search
            </Button>
          </div>
        </div>

        {/* Heading BELOW search */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="gsap-hero-text text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight">
            Find Your Dream Home
          </h1>
          <p className="gsap-hero-fade text-lg text-white/70 leading-relaxed">
            Let&apos;s find a home that&apos;s perfect for you
          </p>
        </div>
      </div>
    </section>
  );
}

// ==================== STATISTICS SECTION ====================
function StatisticsSection() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const statsData = [
    { target: 12000, suffix: '+', label: 'Properties' },
    { target: 8000, suffix: '+', label: 'Happy Clients' },
    { target: 200, suffix: '+', label: 'Expert Agents' },
    { target: 15, suffix: '+', label: 'Years Experience' },
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
    <section className="py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">With Us Help You Find Your Dream Home</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">As the complexity of buildings to increase, the field of architecture.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((s, i) => (
            <div key={s.label} className="gsap-fade-up text-center p-6 rounded-2xl bg-gray-50">
              <span ref={(el) => { counterRefs.current[i] = el; }} className="text-4xl md:text-5xl font-bold text-homez-primary block mb-2">
                0{s.suffix}
              </span>
              <span className="text-gray-600 text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FEATURED PROPERTIES CAROUSEL ====================
function FeaturedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const featured = properties.filter(p => p.featured);
  const formatPrice = (price: number, suffix?: string) => {
    const f = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);
    return suffix ? `${f} / ${suffix}` : f;
  };

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-section-title flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Discover Our Featured Listings</h2>
            <p className="text-gray-500 text-lg">Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-homez-primary hover:text-white hover:border-homez-primary transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-homez-primary hover:text-white hover:border-homez-primary transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {featured.map((p) => (
            <Card key={p.id} className="gsap-card min-w-[300px] md:min-w-[340px] flex-shrink-0 border-0 shadow-md hover:shadow-xl transition-all rounded-2xl overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                {p.featured && <Badge className="absolute top-4 left-4 bg-homez-primary text-white px-3 py-1 text-xs rounded-lg">FEATURED</Badge>}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-homez-primary hover:text-white transition-colors"><Heart className="h-4 w-4" /></button>
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-2xl font-bold text-homez-primary mb-2">{formatPrice(p.price, p.priceSuffix?.replace('/', ''))}</p>
                <h3 className="text-lg font-semibold text-homez-dark mb-2 line-clamp-1 group-hover:text-homez-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-4"><MapPin className="h-4 w-4" />{p.city}, {p.state}, {p.country}</p>
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

// ==================== SERVICES SECTION ====================
function ServicesV2() {
  const services = [
    { icon: Home, title: 'Wide Range of Properties', desc: 'Explore our extensive collection of properties including apartments, houses, villas, and commercial spaces.', link: 'Find a home' },
    { icon: Users, title: 'Expert Agents', desc: 'Work with our experienced real estate agents who have in-depth knowledge of local markets.', link: 'Find an agent' },
    { icon: Shield, title: 'Trusted by Thousands', desc: 'Join thousands of satisfied customers who found their dream homes through our platform.', link: 'Read reviews' },
    { icon: Clock, title: '24/7 Customer Support', desc: 'Get assistance anytime with our dedicated customer support team available around the clock.', link: 'Get help' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">See How We Can Help</h2>
          <p className="text-gray-500 text-lg">Aliquam lacinia diam quis lacus euismod</p>
        </div>
        <div className="gsap-cards-container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="gsap-card bg-white border border-gray-100 hover:border-homez-primary/30 shadow-sm hover:shadow-lg transition-all rounded-2xl overflow-hidden group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-homez-primary/10 flex items-center justify-center mb-6 group-hover:bg-homez-primary transition-colors">
                  <s.icon className="h-8 w-8 text-homez-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-homez-dark mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{s.desc}</p>
                <a href="#" className="inline-flex items-center text-homez-primary font-medium hover:gap-2 transition-all group/link text-sm">
                  {s.link} <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CITIES / AREAS GRID ====================
function CitiesAreas() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Explore Cities</h2>
          <p className="text-gray-500 text-lg">Aliquam lacinia diam quis lacus euismod</p>
        </div>
        <div className="gsap-cards-container grid grid-cols-2 md:grid-cols-3 gap-6">
          {cities.slice(0, 6).map((city) => (
            <Link key={city.id} href="/grid-default" className="gsap-card group relative rounded-2xl overflow-hidden h-64 block">
              <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-bold text-xl">{city.name}</h3>
                <p className="text-white/80 text-sm mt-1">{city.totalProperties} Properties</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== TABBED TESTIMONIALS ====================
function TestimonialsV2() {
  const featured = testimonials.filter(t => t.featured);
  const [activeTab, setActiveTab] = useState(0);
  const active = featured[activeTab] || featured[0];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Testimonials</h2>
          <p className="text-gray-500 text-lg">10,000+ unique online course list designs</p>
        </div>
        <div className="gsap-fade-up max-w-3xl mx-auto">
          {/* Tab Indicators */}
          <div className="flex justify-center gap-3 mb-8">
            {featured.map((_, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                className={`w-3 h-3 rounded-full transition-all ${activeTab === i ? 'bg-homez-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} />
            ))}
          </div>
          {/* Testimonial Content */}
          {active && (
            <div className="text-center px-4">
              <Quote className="h-12 w-12 text-homez-primary/20 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 italic">
                &ldquo;{active.content}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-homez-primary/20">
                  {active.avatar ? <img src={active.avatar} alt={active.name} className="w-full h-full object-cover" /> : <span className="text-lg font-bold text-homez-primary flex items-center justify-center h-full w-full bg-homez-primary/10">{active.name.charAt(0)}</span>}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-homez-dark">{active.name}</p>
                  <p className="text-sm text-gray-500">{active.role}, {active.company}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ==================== AGENTS CAROUSEL ====================
function AgentsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
  };

  // Show 7 agents by using all 8 and slicing
  const displayAgents = agents.slice(0, 7);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-section-title flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Our Exclusive Agents</h2>
            <p className="text-gray-500 text-lg">Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-homez-primary hover:text-white hover:border-homez-primary transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-homez-primary hover:text-white hover:border-homez-primary transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {displayAgents.map((agent) => (
            <Card key={agent.id} className="gsap-card min-w-[240px] flex-shrink-0 border-0 shadow-md hover:shadow-xl transition-all rounded-2xl overflow-hidden group">
              <div className="relative h-72 overflow-hidden">
                <img src={agent.avatar} alt={agent.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    {agent.socialLinks?.facebook && <a href={agent.socialLinks.facebook} className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-homez-primary transition-colors"><Facebook className="h-3.5 w-3.5 text-white" /></a>}
                    {agent.socialLinks?.twitter && <a href={agent.socialLinks.twitter} className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-homez-primary transition-colors"><Twitter className="h-3.5 w-3.5 text-white" /></a>}
                    {agent.socialLinks?.linkedin && <a href={agent.socialLinks.linkedin} className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-homez-primary transition-colors"><Linkedin className="h-3.5 w-3.5 text-white" /></a>}
                  </div>
                </div>
              </div>
              <CardContent className="p-5 text-center">
                <h3 className="text-lg font-semibold text-homez-dark">{agent.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{agent.title}</p>
                <p className="text-sm text-homez-primary font-medium">{agent.rating} rating · {agent.totalSales} sales</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== VIDEO SECTION ====================
function VideoSection() {
  const videoPlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoPlayRef.current) {
      gsap.to(videoPlayRef.current, {
        scale: 1.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  const featuredProp = properties.find(p => p.featured);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Video Thumbnail */}
          <div className="gsap-fade-up relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop" alt="Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div ref={videoPlayRef} className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-homez-primary rounded-full flex items-center justify-center shadow-2xl">
                <Play className="h-8 w-8 text-white ml-1" fill="white" />
              </div>
            </div>
            <p className="absolute bottom-6 left-6 text-white font-medium text-lg">Watch Video</p>
          </div>

          {/* Featured Property Card */}
          {featuredProp && (
            <div className="gsap-fade-up bg-gray-50 rounded-2xl p-6 lg:p-8">
              <p className="text-sm text-homez-primary font-medium mb-3 uppercase tracking-wider">Featured Property</p>
              <h3 className="text-2xl font-bold text-homez-dark mb-2">{featuredProp.title}</h3>
              <p className="text-gray-500 flex items-center gap-1 mb-6"><MapPin className="h-4 w-4" />{featuredProp.city}, {featuredProp.state}, {featuredProp.country}</p>
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1"><BedDouble className="h-4 w-4 text-homez-primary" />{featuredProp.bedrooms} bed</span>
                <span className="flex items-center gap-1"><Bath className="h-4 w-4 text-homez-primary" />{featuredProp.bathrooms} bath</span>
                <span className="flex items-center gap-1"><Maximize className="h-4 w-4 text-homez-primary" />{featuredProp.sqft.toLocaleString()} sqft</span>
              </div>
              <Link href="/grid-default" className="inline-flex items-center text-homez-primary font-semibold hover:gap-3 transition-all group/link">
                View House <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ==================== BLOG PREVIEW ====================
function BlogPreview() {
  const featured = blogPosts.filter(b => b.featured).slice(0, 3);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return { month: d.toLocaleString('en-US', { month: 'short' }), day: d.getDate() };
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-section-title flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">From Our Blog</h2>
            <p className="text-gray-500 text-lg">Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <Link href="/blog-list-v1" className="inline-flex items-center text-homez-primary font-medium mt-4 md:mt-0">
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="gsap-cards-container grid md:grid-cols-3 gap-8">
          {featured.map((post) => {
            const date = formatDate(post.publishedAt);
            return (
              <Card key={post.id} className="gsap-card bg-white border-0 shadow-sm hover:shadow-lg transition-all rounded-2xl overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-homez-primary text-white rounded-xl px-3 py-2 text-center min-w-[60px]">
                    <span className="block text-xs font-medium uppercase leading-tight">{date.month}</span>
                    <span className="block text-lg font-bold leading-tight">{date.day}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <span className="text-homez-primary text-sm font-medium">{post.category}</span>
                  <h3 className="text-lg font-semibold text-homez-dark mt-2 line-clamp-2 group-hover:text-homez-primary transition-colors">
                    <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-400 mt-3">{post.readTime} min read</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ==================== CTA WITH IMAGE OVERLAY ====================
function CTAV2() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-homez-dark/85" />
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-fade-up text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Listing or Buying a Property</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">Talk to our experts or Browse through more properties.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/grid-default">
              <Button size="lg" className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-full px-10 h-14 text-lg">
                Browse Properties <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="gsap-fade-up flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-homez-primary" />
            <span>Total Free Customer Care</span>
            <a href="tel:+1234567890" className="text-white font-medium hover:text-homez-primary transition-colors">+(0) 123 050 945 02</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-homez-primary" />
            <span>Need Live Support?</span>
            <a href="mailto:hi@homez.com" className="text-white font-medium hover:text-homez-primary transition-colors">hi@homez.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== PARTNERS MARQUEE ====================
function PartnersMarquee() {
  const partnerNames = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Trusted by the world&apos;s best</h2>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-16 animate-marquee hover:[animation-play-state:paused]">
            {partnerNames.map((p, i) => (
              <div key={`${p.id}-${i}`} className="flex-shrink-0 flex items-center justify-center min-w-[150px] h-16 px-6">
                <span className="text-xl font-bold text-gray-300 hover:text-homez-primary transition-colors">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 3rem)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}

// ==================== MAIN PAGE ====================
export default function HomeV2Page() {
  const { data: propertiesData, isLoading: loadingProps } = useProperties();
  const { data: citiesData, isLoading: loadingCities } = useCities();
  const { data: agentsData, isLoading: loadingAgents } = useAgents();
  const { data: testimonialsData, isLoading: loadingTestimonials } = useTestimonials();
  const { data: blogPostsData, isLoading: loadingBlog } = useBlogPosts();
  const { data: categoriesData, isLoading: loadingCategories } = useCategories();

  const isLoading = loadingProps || loadingCities || loadingAgents || loadingTestimonials || loadingBlog || loadingCategories;

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
  const blogPosts = blogPostsData ?? [];
  const categories = categoriesData ?? [];

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.utils.toArray<HTMLElement>('.gsap-hero-text').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
      });
      gsap.utils.toArray<HTMLElement>('.gsap-hero-fade').forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.1 + i * 0.15 });
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
      <Header variant="transparent" />
      <HeroV2 />
      <StatisticsSection />
      <FeaturedCarousel />
      <ServicesV2 />
      <CitiesAreas />
      <TestimonialsV2 />
      <AgentsCarousel />
      <VideoSection />
      <BlogPreview />
      <CTAV2 />
      <PartnersMarquee />
      <Footer />
    </main>
  );
}
