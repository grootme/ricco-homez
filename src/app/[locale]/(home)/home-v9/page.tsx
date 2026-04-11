'use client';

import { useRef, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import {
  Search,
  MapPin,
  Heart,
  ArrowRight,
  Star,
  Check,
  ChevronDown,
  LayoutGrid,
  Building2,
  Crown,
  Layers,
  TreePine,
} from 'lucide-react';
import { useProperties, useCities, useTestimonials } from '@/hooks/useAsyncData';
import { properties, cities, testimonials } from '@/lib/data';
import { Header, Footer } from '@/components/layout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const apartmentTypes = [
  {
    name: 'Studio',
    description: 'Compact and efficient living spaces perfect for individuals',
    icon: LayoutGrid,
    count: 1287,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
  },
  {
    name: 'Loft',
    description: 'Open-concept spaces with high ceilings and industrial charm',
    icon: Building2,
    count: 345,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
  },
  {
    name: 'Penthouse',
    description: 'Luxury top-floor residences with stunning panoramic views',
    icon: Crown,
    count: 156,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=300&fit=crop',
  },
  {
    name: 'Duplex',
    description: 'Two-story apartments offering the feel of a house in a building',
    icon: Layers,
    count: 678,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop',
  },
  {
    name: 'Garden',
    description: 'Ground-floor apartments with private outdoor garden space',
    icon: TreePine,
    count: 423,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
  },
];

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    description: 'Get started with basic property browsing',
    features: [
      'Browse all listings',
      'Save up to 5 properties',
      'Basic search filters',
      'Community support',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$199.95',
    period: '/mo',
    description: 'Perfect for serious home seekers',
    features: [
      'All Free features',
      'Save unlimited properties',
      'Advanced filters & alerts',
      'Priority support',
      'Virtual tours access',
      'Market analytics',
    ],
    popular: true,
  },
  {
    name: 'Business',
    price: '$399.95',
    period: '/mo',
    description: 'For agents and agencies',
    features: [
      'All Professional features',
      'Listing management',
      'Lead generation tools',
      'Branded profile page',
      'Analytics dashboard',
      'Dedicated account manager',
    ],
    popular: false,
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

export default function HomeV9() {
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
  const heroContentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const aptGridRef = useRef<HTMLDivElement>(null);
  const listingGridRef = useRef<HTMLDivElement>(null);
  const pricingGridRef = useRef<HTMLDivElement>(null);
  const cityGridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animations
      if (heroContentRef.current) {
        const tl = gsap.timeline();
        tl.from('.hero-title', {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: 'power3.out',
        })
          .from(
            '.hero-subtitle',
            {
              y: 40,
              opacity: 0,
              duration: 0.8,
              ease: 'power3.out',
            },
            '-=0.6'
          )
          .from(
            '.hero-buttons',
            {
              y: 30,
              opacity: 0,
              duration: 0.6,
              ease: 'power3.out',
            },
            '-=0.4'
          );
      }

      // Parallax on hero
      if (heroRef.current) {
        gsap.to(heroRef.current.querySelector('.hero-bg'), {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Scroll indicator bounce
      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          y: 10,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: 'power1.inOut',
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

      // Apartment types grid
      if (aptGridRef.current) {
        gsap.from(aptGridRef.current.children, {
          scrollTrigger: {
            trigger: aptGridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }

      // Listings grid (dark section)
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

      // Pricing grid
      if (pricingGridRef.current) {
        gsap.from(pricingGridRef.current.children, {
          scrollTrigger: {
            trigger: pricingGridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
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

      // CTA
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

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 6);
  const popularProperties = properties.slice(0, 8);
  const featuredCities = cities.filter((c) => c.featured).slice(0, 6);

  return (
    <>
      <Header variant="transparent" />
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Fallback - Dark gradient background */}
        <div className="hero-bg absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e]" />
          {/* Animated overlay elements for video feel */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-homez-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div ref={heroContentRef} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Live Life <br />
            <span className="bg-gradient-to-r from-homez-primary to-homez-primary/70 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Discover luxury apartments and premium properties in the world&apos;s most desirable locations.
            Your perfect home awaits.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-lg px-8 text-base">
              Explore Properties
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-lg px-8 text-base">
              <Search className="h-5 w-5 mr-2" />
              Search Now
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 text-white/50" />
        </div>
      </section>

      {/* Apartment Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={(el) => { sectionRefs.current[0] = el; }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Apartment Types
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Explore different apartment styles to find your ideal living space
            </p>
          </div>

          <div ref={aptGridRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {apartmentTypes.map((apt) => (
              <div
                key={apt.name}
                className="group relative rounded-xl overflow-hidden cursor-pointer h-64"
              >
                <img
                  src={apt.image}
                  alt={apt.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                    <apt.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white mb-0.5">{apt.name}</h3>
                  <p className="text-white/70 text-xs line-clamp-1 mb-2">{apt.description}</p>
                  <p className="text-white/90 text-sm font-medium">{apt.count.toLocaleString()} listings</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings - DARK Background */}
      <section className="py-20 bg-homez-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={(el) => { sectionRefs.current[1] = el; }}
            className="flex justify-between items-end mb-10"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Listings</h2>
              <p className="text-white/50">Hand-picked properties for discerning buyers</p>
            </div>
            <Button variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/10 hidden sm:flex">
              View All
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div ref={listingGridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white/5 backdrop-blur rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300"
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
                  <button className="absolute top-3 right-3 w-8 h-8 bg-black/30 backdrop-blur rounded-full flex items-center justify-center hover:bg-black/50 transition">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="text-lg font-bold text-homez-primary mb-1">
                    {formatPrice(property.price, property.priceSuffix)}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1 line-clamp-1">
                    {property.title}
                  </h3>
                  <p className="text-xs text-white/50 flex items-center gap-1 mb-3">
                    <MapPin className="h-3 w-3" />
                    {property.city}, {property.state}
                  </p>
                  <div className="flex gap-4 text-xs text-white/40 pt-3 border-t border-white/10">
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

      {/* Pricing Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={(el) => { sectionRefs.current[2] = el; }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Simple Pricing
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Choose the plan that&apos;s right for you
            </p>
          </div>

          <div ref={pricingGridRef} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gray-900 text-white shadow-2xl scale-105 relative'
                    : 'bg-white border border-gray-100 hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-homez-primary text-white text-xs font-medium px-4 py-1 rounded-full">
                    Best Value
                  </div>
                )}
                <h3 className={`text-lg font-semibold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-white/60' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-white/50' : 'text-gray-400'}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-2 text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.popular ? 'text-homez-primary' : 'text-homez-primary'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-lg ${
                    plan.popular
                      ? 'bg-homez-primary hover:bg-homez-primary/90 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.price === '$0' ? 'Get Started Free' : 'Choose Plan'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties by Cities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={(el) => { sectionRefs.current[3] = el; }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Properties by Cities</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Browse listings in your favorite cities
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

      {/* CTA */}
      <section ref={ctaRef} className="py-20 bg-homez-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-homez-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-homez-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Property Journey Today
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Whether buying, selling, or renting — Homez makes it simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-lg px-8">
              Get Started
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-lg px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
