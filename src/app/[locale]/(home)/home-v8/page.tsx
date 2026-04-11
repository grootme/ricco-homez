'use client';

import { useRef, useEffect, useState } from 'react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  MapPin,
  Heart,
  ArrowRight,
  Star,
  ZoomIn,
  ZoomOut,
  Layers,
  Home,
  Shield,
  TrendingUp,
  Users,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { useProperties, useCities, useTestimonials } from '@/hooks/useAsyncData';
import { properties, cities, testimonials } from '@/lib/data';
import { Header, Footer } from '@/components/layout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partnerNames = [
  'Homez Finance',
  'Urban Homes',
  'Prime Mortgage',
  'Property Plus',
  'Realty Group',
  'Trust Bank',
];

const helpBenefits = [
  {
    icon: Home,
    title: 'Property Search',
    description: 'Advanced search tools to find your ideal property from thousands of listings.',
  },
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'Every property is verified by our team to ensure accuracy and authenticity.',
  },
  {
    icon: TrendingUp,
    title: 'Market Insights',
    description: 'Real-time market data and trends to help you make informed decisions.',
  },
  {
    icon: Users,
    title: 'Expert Agents',
    description: 'Connect with experienced agents who know your local market inside out.',
  },
];

function formatPrice(price: number, suffix?: string) {
  const formatted =
    price >= 1000000
      ? `$${(price / 1000000).toFixed(2)}M`
      : price >= 1000
        ? `$${(price / 1000).toFixed(0)}K`
        : `$${price.toLocaleString()}`;
  return `${formatted}${suffix ? ' ' + suffix : ''}`;
}

export default function HomeV8() {
  const { data: propertiesData, isLoading: loadingProps } = useProperties();
  const { data: citiesData, isLoading: loadingCities } = useCities();
  const { data: testimonialsData, isLoading: loadingTestimonials } = useTestimonials();

  const isLoading = loadingProps || loadingCities || loadingTestimonials;

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
  const testimonials = testimonialsData ?? [];

  const heroRef = useRef<HTMLDivElement>(null);
  const searchOverlayRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listingGridRef = useRef<HTMLDivElement>(null);
  const cityGridRef = useRef<HTMLDivElement>(null);
  const benefitGridRef = useRef<HTMLDivElement>(null);
  const happyRef = useRef<HTMLDivElement>(null);
  const [selectedPin, setSelectedPin] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Search overlay animation
      if (searchOverlayRef.current) {
        gsap.from(searchOverlayRef.current, {
          y: 40,
          opacity: 0,
          duration: 1,
          delay: 0.5,
          ease: 'power3.out',
        });
      }

      // Section titles
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          gsap.from(ref, {
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
          });
        }
      });

      // Listings grid
      if (listingGridRef.current) {
        gsap.from(listingGridRef.current.children, {
          scrollTrigger: {
            trigger: listingGridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        });
      }

      // City grid
      if (cityGridRef.current) {
        gsap.from(cityGridRef.current.children, {
          scrollTrigger: {
            trigger: cityGridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }

      // Benefits grid
      if (benefitGridRef.current) {
        gsap.from(benefitGridRef.current.children, {
          scrollTrigger: {
            trigger: benefitGridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
        });
      }

      // Find Your Happy section
      if (happyRef.current) {
        gsap.from(happyRef.current, {
          scrollTrigger: {
            trigger: happyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 6);
  const featuredCities = cities.filter((c) => c.featured).slice(0, 6);

  const pinPositions = [
    { x: 15, y: 20 },
    { x: 35, y: 35 },
    { x: 55, y: 25 },
    { x: 75, y: 45 },
    { x: 25, y: 60 },
    { x: 65, y: 65 },
    { x: 45, y: 50 },
    { x: 85, y: 30 },
  ];

  return (
    <>
      <Header variant="transparent" />
      <section ref={heroRef} className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Simulated Map Background */}
        <div
          className="absolute inset-0 transition-transform duration-500"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
        >
          {/* Map grid pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100" />
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(100,130,180,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(100,130,180,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          {/* Simulated map features - roads */}
          <div className="absolute top-[30%] left-0 right-0 h-[2px] bg-gray-300/40" />
          <div className="absolute top-[55%] left-0 right-0 h-[3px] bg-gray-300/50" />
          <div className="absolute top-0 bottom-0 left-[25%] w-[2px] bg-gray-300/40" />
          <div className="absolute top-0 bottom-0 left-[50%] w-[3px] bg-gray-300/50" />
          <div className="absolute top-0 bottom-0 left-[75%] w-[2px] bg-gray-300/40" />
          {/* Water body */}
          <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-blue-200/30 rounded-tl-full" />
          {/* Parks */}
          <div className="absolute top-[15%] left-[10%] w-20 h-20 bg-green-200/40 rounded-full" />
          <div className="absolute top-[60%] left-[60%] w-16 h-16 bg-green-200/30 rounded-full" />
        </div>

        {/* Property Pins */}
        <div className="absolute inset-0 pointer-events-none">
          {featuredProperties.concat(properties.slice(6, 8)).map((property, index) => (
            <button
              key={property.id}
              className={`absolute pointer-events-auto transition-all duration-200 ${
                selectedPin === index ? 'z-20' : 'z-10'
              }`}
              style={{
                left: `${pinPositions[index]?.x || 20}%`,
                top: `${pinPositions[index]?.y || 20}%`,
              }}
              onClick={() => setSelectedPin(selectedPin === index ? null : index)}
            >
              <div
                className={`relative flex flex-col items-center ${
                  selectedPin === index ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                {/* Pin */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white ${
                  selectedPin === index ? 'bg-homez-primary' : 'bg-orange-500'
                }`}>
                  <span className="text-white text-xs font-bold">$</span>
                </div>
                {/* Pin stem */}
                <div className={`w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent ${
                  selectedPin === index ? 'border-t-homez-primary' : 'border-t-orange-500'
                }`} />
                {/* Tooltip */}
                {selectedPin === index && (
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 w-48 z-30">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-20 object-cover rounded-md mb-2"
                    />
                    <p className="text-xs font-semibold text-gray-900 line-clamp-1">
                      {property.title}
                    </p>
                    <p className="text-xs text-homez-primary font-bold mt-1">
                      {formatPrice(property.price, property.priceSuffix)}
                    </p>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Map Controls */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-1">
          <button
            onClick={() => setZoom(Math.min(zoom + 0.2, 1.5))}
            className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition"
          >
            <ZoomIn className="h-4 w-4 text-gray-700" />
          </button>
          <button
            onClick={() => setZoom(Math.max(zoom - 0.2, 1))}
            className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition"
          >
            <ZoomOut className="h-4 w-4 text-gray-700" />
          </button>
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition">
            <Layers className="h-4 w-4 text-gray-700" />
          </button>
        </div>

        {/* Search Overlay - Top Left */}
        <div ref={searchOverlayRef} className="absolute top-6 left-4 md:left-8 z-20 w-[calc(100%-2rem)] md:w-auto md:max-w-md">
          <div className="bg-white rounded-xl shadow-2xl p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Explore Properties</h2>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Enter a city, neighborhood, or address..."
                  className="pl-10 h-11 text-sm"
                />
              </div>
              <div className="flex gap-2">
                <Input placeholder="Min Price" className="h-11 text-sm" />
                <Input placeholder="Max Price" className="h-11 text-sm" />
              </div>
              <Button className="h-11 bg-homez-primary hover:bg-homez-primary/90 text-white">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {['For Sale', 'For Rent', 'Open House'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full cursor-pointer hover:bg-homez-primary/10 hover:text-homez-primary transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners - DARK Background */}
      <section className="py-14 bg-homez-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {partnerNames.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-12 px-4"
              >
                <span className="text-white/40 font-bold text-sm tracking-wide hover:text-white/70 transition-colors cursor-pointer">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Your Happy */}
      <section ref={happyRef} className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-homez-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                About Homez
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Find Your Happy Place
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                We believe finding the right home should be exciting, not stressful. Our platform
                connects you with verified properties and expert agents to make your search seamless
                and enjoyable.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Personalized property recommendations',
                  'Virtual tours from the comfort of your home',
                  'Transparent pricing with no hidden fees',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-homez-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-lg px-6">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
                alt="Happy family in their new home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={(el) => { sectionRefs.current[0] = el; }}
            className="flex justify-between items-end mb-10"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Listings</h2>
              <p className="text-gray-500">Discover properties hand-picked by our experts</p>
            </div>
            <Button variant="outline" className="rounded-lg border-homez-primary text-homez-primary hover:bg-homez-primary/10 hidden sm:flex">
              View All
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div ref={listingGridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-homez-primary text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                    </span>
                  </div>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 backdrop-blur text-gray-900 text-sm font-bold px-3 py-1 rounded-lg">
                      {formatPrice(property.price, property.priceSuffix)}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                    {property.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {property.city}, {property.state}
                  </p>
                  <div className="flex gap-4 text-sm text-gray-400 pt-3 border-t border-gray-50">
                    <span>{property.bedrooms} Beds</span>
                    <span>{property.bathrooms} Baths</span>
                    <span>{property.sqft.toLocaleString()} Sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Cities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={(el) => { sectionRefs.current[1] = el; }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Cities</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Browse properties in the most popular destinations
            </p>
          </div>

          <div ref={cityGridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredCities.map((city) => (
              <div
                key={city.id}
                className="group relative h-56 rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-0.5">{city.name}</h3>
                  <p className="text-white/80 text-sm">
                    {city.totalProperties.toLocaleString()} Properties
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Realton Helps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={(el) => { sectionRefs.current[2] = el; }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">How Homez Helps</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Everything you need to find and secure your perfect property
            </p>
          </div>

          <div ref={benefitGridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-homez-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-homez-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={(el) => { sectionRefs.current[3] = el; }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">What Our Clients Say</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Trusted by thousands of homeowners across the country
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.filter((t) => t.featured).slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-homez-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Search?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Browse thousands of verified listings and connect with expert agents today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-white text-homez-primary hover:bg-gray-100 rounded-lg px-8">
              Explore Properties
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-lg px-8">
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat With Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
