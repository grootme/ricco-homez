'use client';

import { useRef, useEffect, useState } from 'react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  MapPin,
  Heart,
  GitCompareArrows,
  Share2,
  Phone,
  CalendarDays,
  ArrowRight,
  Star,
  Users,
  Award,
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

const filterTabs = ['All', 'Apartment', 'House', 'Villa', 'Condo', 'Townhouse'];

function formatPrice(price: number, suffix?: string) {
  const formatted =
    price >= 1000000
      ? `$${(price / 1000000).toFixed(2)}M`
      : price >= 1000
        ? `$${(price / 1000).toFixed(0)}K`
        : `$${price.toLocaleString()}`;
  return `${formatted}${suffix ? ' ' + suffix : ''}`;
}

export default function HomeV7() {
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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const propertyGridRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const cityGridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      if (titleRef.current && subtitleRef.current && searchRef.current) {
        gsap.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.from(subtitleRef.current, {
          y: 40,
          opacity: 0,
          duration: 1,
          delay: 0.15,
          ease: 'power3.out',
        });
        gsap.from(searchRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
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

      // Property cards stagger
      if (propertyGridRef.current) {
        gsap.from(propertyGridRef.current.children, {
          scrollTrigger: {
            trigger: propertyGridRef.current,
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

      // City grid stagger
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

      // CTA animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          scale: 0.95,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 8);
  const popularProperties = properties.slice(0, 8);
  const featuredCities = cities.filter((c) => c.featured).slice(0, 6);
  const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 3);

  const filteredProperties =
    activeFilter === 'All'
      ? popularProperties
      : popularProperties.filter((p) => p.propertyType === activeFilter.toLowerCase());

  return (
    <>
      <Header variant="default" />

      {/* Hero - Light/White Background with Featured Property Spotlight */}
      <section
        ref={heroRef}
        className="relative bg-white pt-8 pb-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
            >
              Find Your <span className="text-homez-primary">Dream</span> Home
            </h1>
            <p ref={subtitleRef} className="text-lg text-gray-500 max-w-2xl mx-auto">
              Discover the finest properties with expert guidance. Your journey to the perfect home starts here.
            </p>
          </div>

          {/* Featured Property Spotlight */}
          <div className="mb-10 grid md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden h-[350px] md:h-[400px]">
              <img
                src={properties[0].images[0]}
                alt={properties[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-homez-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-6">
              <span className="text-homez-primary text-sm font-semibold uppercase tracking-wide">
                Property of the Week
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3">
                {properties[0].title}
              </h2>
              <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {properties[0].address}, {properties[0].city}, {properties[0].state}
              </p>
              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {properties[0].description}
              </p>
              <div className="flex gap-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <strong className="text-gray-900">{properties[0].bedrooms}</strong> Beds
                </span>
                <span className="flex items-center gap-1">
                  <strong className="text-gray-900">{properties[0].bathrooms}</strong> Baths
                </span>
                <span className="flex items-center gap-1">
                  <strong className="text-gray-900">{properties[0].sqft.toLocaleString()}</strong> Sqft
                </span>
              </div>
              <div className="text-3xl font-bold text-homez-primary mb-6">
                {formatPrice(properties[0].price)}
              </div>
              <Button className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-lg px-6">
                View Property
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Search Form */}
          <div
            ref={searchRef}
            className="bg-gray-50 rounded-2xl p-5 max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search properties..."
                  className="pl-10 h-12 bg-white rounded-lg border-gray-200"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Location"
                  className="pl-10 h-12 bg-white rounded-lg border-gray-200"
                />
              </div>
              <Button className="h-12 px-8 bg-homez-primary hover:bg-homez-primary/90 text-white rounded-lg">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {partnerNames.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-12 px-4 bg-white rounded-lg border border-gray-100 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <span className="text-gray-400 font-bold text-sm tracking-wide hover:text-gray-600 transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Homes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={(el) => { sectionRefs.current[0] = el; }}
            className="flex justify-between items-end mb-10"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Homes</h2>
              <p className="text-gray-500">Explore our hand-picked selection</p>
            </div>
            <Button variant="outline" className="rounded-lg border-homez-primary text-homez-primary hover:bg-homez-primary/10">
              View All
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div ref={propertyGridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProperties.slice(0, 4).map((property) => (
              <div
                key={property.id}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-homez-primary text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                    </span>
                  </div>
                  {/* Quick Action Icons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5">
                    <button className="w-7 h-7 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition">
                      <Heart className="h-3.5 w-3.5 text-gray-600" />
                    </button>
                    <button className="w-7 h-7 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition">
                      <GitCompareArrows className="h-3.5 w-3.5 text-gray-600" />
                    </button>
                    <button className="w-7 h-7 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition">
                      <Share2 className="h-3.5 w-3.5 text-gray-600" />
                    </button>
                  </div>
                  {/* Bottom actions */}
                  <div className="absolute bottom-3 right-3 flex gap-1.5">
                    <button className="w-7 h-7 bg-homez-primary rounded-full flex items-center justify-center hover:bg-homez-primary/90 transition">
                      <Phone className="h-3.5 w-3.5 text-white" />
                    </button>
                    <button className="w-7 h-7 bg-homez-primary rounded-full flex items-center justify-center hover:bg-homez-primary/90 transition">
                      <CalendarDays className="h-3.5 w-3.5 text-white" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-lg font-bold text-homez-primary mb-1">
                    {formatPrice(property.price, property.priceSuffix)}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1.5 line-clamp-1">
                    {property.title}
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                    <MapPin className="h-3 w-3" />
                    {property.city}, {property.state}
                  </p>
                  <div className="flex gap-3 text-xs text-gray-400 pt-3 border-t border-gray-50">
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

      {/* Discover Popular Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={(el) => { sectionRefs.current[1] = el; }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Discover Popular Properties
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Browse through our most viewed and favorited properties
            </p>
          </div>

          {/* Filter Tabs */}
          <div ref={filterRef} className="flex flex-wrap justify-center gap-2 mb-10">
            {filterTabs.map((tab) => (
              <Button
                key={tab}
                variant={activeFilter === tab ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(tab)}
                className={
                  activeFilter === tab
                    ? 'bg-homez-primary hover:bg-homez-primary/90 text-white rounded-full px-5'
                    : 'rounded-full px-5 border-gray-200 text-gray-600'
                }
              >
                {tab}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProperties.slice(0, 8).map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 backdrop-blur text-gray-900 text-sm font-bold px-3 py-1 rounded-lg">
                      {formatPrice(property.price, property.priceSuffix)}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">
                    {property.title}
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mb-2">
                    <MapPin className="h-3 w-3" />
                    {property.city}, {property.state}
                  </p>
                  <div className="flex gap-3 text-xs text-gray-400">
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
            ref={(el) => { sectionRefs.current[2] = el; }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Cities</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Properties available in the most popular locations
            </p>
          </div>

          <div ref={cityGridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredCities.slice(0, 6).map((city) => (
              <div
                key={city.id}
                className="group relative h-52 rounded-xl overflow-hidden cursor-pointer"
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={(el) => { sectionRefs.current[3] = el; }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Testimonials</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Hear from our satisfied clients about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
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
                    <p className="text-xs text-gray-500">{testimonial.role} · {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Agent Registration */}
      <section className="py-20 bg-homez-primary">
        <div
          ref={ctaRef}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Become a Homez Agent
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join our network of expert agents and get access to premium leads, marketing tools, and a dedicated support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-white text-homez-primary hover:bg-gray-100 rounded-lg px-8 font-semibold">
              Register Now
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-lg px-8">
              Learn More
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 mt-10 text-white/80">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">200+ Active Agents</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span className="text-sm">4.9 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
