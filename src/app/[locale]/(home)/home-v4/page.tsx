'use client';

import { useRef, useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Search, MapPin, BedDouble, Bath, Maximize, Heart, ChevronLeft, ChevronRight,
  ArrowRight, Star, Quote,
  Users, MessageSquare, BarChart3, Scale, Shield, Headphones,
  Filter
} from 'lucide-react';
import { useProperties, useAgents, useTestimonials } from '@/hooks/useAsyncData';
import { properties, agents, testimonials } from '@/lib/data';
import { Header, Footer } from '@/components/layout';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ==================== HERO V4 - Agent Focused ====================
function HeroV4() {
  const highlights = [
    { icon: Users, value: '100+', label: 'Expert Agents' },
    { icon: Search, value: '5K+', label: 'Properties' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
  ];

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-homez-dark/75" />
      <div className="relative z-10 container-homez py-24 text-center">
        <p className="gsap-hero-fade text-homez-primary text-sm font-medium tracking-widest uppercase mb-4">MEET OUR EXPERTS</p>
        <h1 className="gsap-hero-text text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Find Your Perfect Agent</h1>
        <p className="gsap-hero-fade text-lg text-white/80 max-w-2xl mx-auto mb-12">Connect with top-rated real estate agents who understand your needs and can guide you through every step.</p>
        <div className="gsap-hero-fade flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <h.icon className="h-7 w-7 text-homez-primary" />
              </div>
              <p className="text-3xl font-bold text-white">{h.value}</p>
              <p className="text-sm text-white/60">{h.label}</p>
            </div>
          ))}
        </div>
        <div className="gsap-scale-in flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-full px-10 h-14 text-lg">Browse Agents</Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">Become an Agent</Button>
        </div>
      </div>
    </section>
  );
}

// ==================== AGENT FILTERS ====================
const agentSpecializations = ['All', 'Luxury Properties', 'First-time Buyers', 'Investment', 'Eco-Friendly', 'Historic Homes'];
const agentAreas = ['All', 'Miami', 'New York', 'Los Angeles', 'Portland', 'Seattle'];

// ==================== FEATURED AGENTS V4 ====================
function FeaturedAgentsV4() {
  const [specFilter, setSpecFilter] = useState('All');
  const [areaFilter, setAreaFilter] = useState('All');

  const filteredAgents = agents.filter(a => {
    if (specFilter !== 'All' && !a.specialties.some(s => s.toLowerCase().includes(specFilter.toLowerCase()))) return false;
    if (areaFilter !== 'All' && a.city.toLowerCase() !== areaFilter.toLowerCase()) return false;
    return true;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-homez">
        <div className="gsap-section-title text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Featured Agents</h2>
          <p className="text-gray-500 text-lg">Find the perfect agent for your needs</p>
        </div>

        {/* Filters */}
        <div className="gsap-fade-up mb-10 space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-2"><Filter className="h-4 w-4" /> Specialization</p>
            <div className="flex flex-wrap gap-2">
              {agentSpecializations.map(s => (
                <button key={s} onClick={() => setSpecFilter(s)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${specFilter === s ? 'bg-homez-primary text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-homez-primary'}`}>{s}</button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">Area</p>
            <div className="flex flex-wrap gap-2">
              {agentAreas.map(a => (
                <button key={a} onClick={() => setAreaFilter(a)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${areaFilter === a ? 'bg-homez-dark text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-homez-dark'}`}>{a}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Agent Grid */}
        <div className="gsap-cards-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAgents.length > 0 ? filteredAgents.map((agent) => (
            <Card key={agent.id} className="gsap-card bg-white border-0 shadow-md hover:shadow-xl transition-all rounded-2xl overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img src={agent.avatar} alt={agent.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {agent.verified && <Badge className="absolute top-3 left-3 bg-green-500 text-white px-2 py-0.5 text-xs rounded-full">Verified</Badge>}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2">
                    <button className="flex-1 h-9 bg-homez-primary text-white rounded-lg text-sm font-medium">View Profile</button>
                    <button className="w-9 h-9 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center"><Heart className="h-4 w-4 text-white" /></button>
                  </div>
                </div>
              </div>
              <CardContent className="p-5 text-center">
                <h3 className="text-lg font-semibold text-homez-dark">{agent.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{agent.title}</p>
                <p className="text-sm text-gray-500">{agent.city}, {agent.state}</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">{agent.rating}</span>
                  <span className="text-xs text-gray-400">({agent.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
                  <span>{agent.totalSales} sales</span>
                  <span>{agent.totalListings} listings</span>
                </div>
              </CardContent>
            </Card>
          )) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>No agents found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ==================== AGENT PROPERTIES V4 ====================
function AgentPropertiesV4() {
  const featured = properties.filter(p => p.featured).slice(0, 4);
  const formatPrice = (price: number, suffix?: string) => {
    const f = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);
    return suffix ? `${f}/${suffix}` : f;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-homez">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Featured Listings</h2>
          <p className="text-gray-500 text-lg">Top properties from our agents</p>
        </div>
        <div className="gsap-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <Card key={p.id} className="gsap-card bg-white border-0 shadow-md hover:shadow-xl transition-all rounded-2xl overflow-hidden group">
              <div className="relative h-52 overflow-hidden">
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <Badge className={`absolute top-3 left-3 ${p.status === 'for-sale' ? 'bg-homez-dark' : 'bg-homez-primary'} text-white px-3 py-1 text-xs rounded-lg`}>{p.status === 'for-sale' ? 'For Sale' : 'For Rent'}</Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-xl font-bold text-homez-primary mb-1">{formatPrice(p.price, p.priceSuffix)}</p>
                <h3 className="font-semibold text-homez-dark text-sm mb-1 line-clamp-1">{p.title}</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-3"><MapPin className="h-3 w-3" />{p.city}, {p.state}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><BedDouble className="h-3 w-3" />{p.bedrooms}</span>
                  <span className="flex items-center gap-1"><Bath className="h-3 w-3" />{p.bathrooms}</span>
                  <span className="flex items-center gap-1"><Maximize className="h-3 w-3" />{p.sqft.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== SERVICES V4 (6 cards) ====================
function ServicesV4() {
  const services = [
    { icon: MessageSquare, title: 'Consultation', desc: 'Free initial consultation to understand your real estate needs.' },
    { icon: Users, title: 'Management', desc: 'Professional property management services for investors.' },
    { icon: BarChart3, title: 'Market Analysis', desc: 'Data-driven market insights to make informed decisions.' },
    { icon: Scale, title: 'Negotiation', desc: 'Expert negotiation to get you the best deal possible.' },
    { icon: Shield, title: 'Legal Support', desc: 'Complete legal assistance for all transactions.' },
    { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock support whenever you need help.' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-homez">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-homez-dark mb-3">Our Services</h2>
          <p className="text-gray-500 text-lg">Comprehensive real estate solutions</p>
        </div>
        <div className="gsap-cards-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((s) => (
            <Card key={s.title} className="gsap-card bg-white border-0 shadow-sm hover:shadow-lg transition-all rounded-2xl text-center group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-homez-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-homez-primary transition-colors">
                  <s.icon className="h-7 w-7 text-homez-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-homez-dark text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS V4 ====================
function TestimonialsV4() {
  const [current, setCurrent] = useState(0);
  const featured = testimonials.filter(t => t.featured);

  return (
    <section className="py-16 bg-homez-dark text-white">
      <div className="container-homez">
        <div className="gsap-section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Clients Say</h2>
          <p className="text-white/70">Hear from people who found their dream agents</p>
        </div>
        <div className="gsap-fade-up max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="h-10 w-10 text-homez-primary mx-auto mb-6 opacity-50" />
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className={`h-5 w-5 ${i < featured[current]?.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />)}
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">&ldquo;{featured[current]?.content}&rdquo;</p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-homez-primary/20 overflow-hidden flex items-center justify-center">
                  {featured[current]?.avatar ? <img src={featured[current].avatar} alt={featured[current].name} className="w-full h-full object-cover" /> : <span className="text-xl font-bold text-homez-primary">{featured[current]?.name.charAt(0)}</span>}
                </div>
                <div className="text-left">
                  <p className="font-semibold">{featured[current]?.name}</p>
                  <p className="text-sm text-white/60">{featured[current]?.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => setCurrent((p) => (p - 1 + featured.length) % featured.length)} className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20"><ChevronLeft className="h-5 w-5" /></button>
            <div className="flex gap-2">{featured.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-homez-primary w-6' : 'bg-white/40'}`} />)}</div>
            <button onClick={() => setCurrent((p) => (p + 1) % featured.length)} className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== AGENT CTA V4 ====================
function AgentCTAV4() {
  return (
    <section className="py-16 bg-white">
      <div className="container-homez">
        <div className="gsap-fade-up bg-gradient-to-r from-homez-primary to-homez-dark rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work with the Best?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Join thousands of satisfied clients who found their perfect agent through Homez.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-homez-primary hover:bg-white/90 rounded-full px-10 h-14">Browse Agents</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 h-14">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== MAIN PAGE ====================
export default function HomeV4Page() {
  const { data: propertiesData, isLoading: loadingProps } = useProperties();
  const { data: agentsData, isLoading: loadingAgents } = useAgents();
  const { data: testimonialsData, isLoading: loadingTestimonials } = useTestimonials();

  const isLoading = loadingProps || loadingAgents || loadingTestimonials;

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
  const agents = agentsData ?? [];
  const testimonials = testimonialsData ?? [];

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gsap-hero-text').forEach((el) => gsap.fromTo(el, { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.2 }));
      gsap.utils.toArray<HTMLElement>('.gsap-hero-fade').forEach((el, i) => gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 + i * 0.15 }));
      gsap.utils.toArray<HTMLElement>('.gsap-scale-in').forEach((el) => gsap.fromTo(el, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.6 }));
      gsap.utils.toArray<HTMLElement>('.gsap-section-title').forEach((el) => gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: el, start: 'top 85%' } }));
      gsap.utils.toArray<HTMLElement>('.gsap-cards-container').forEach((c) => gsap.fromTo(c.querySelectorAll('.gsap-card'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, scrollTrigger: { trigger: c, start: 'top 80%' } }));
      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el) => gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 85%' } }));
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen">
      <Header variant="transparent" />
      <HeroV4 />
      <FeaturedAgentsV4 />
      <AgentPropertiesV4 />
      <ServicesV4 />
      <TestimonialsV4 />
      <AgentCTAV4 />
      <Footer />
    </main>
  );
}
