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
  Shield,
  Award,
  Clock,
  Users,
  Home,
  Building2,
  Castle,
  LayoutGrid,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { useProperties, useCities, useTestimonials } from '@/hooks/useAsyncData';
import { properties, cities, testimonials } from '@/lib/data';
import { Header, Footer } from '@/components/layout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'All properties are verified by our team. Every transaction is protected with bank-level security.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized as the best real estate platform for 3 consecutive years by industry experts.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our dedicated team is always available to assist you with any questions or concerns.',
  },
  {
    icon: Users,
    title: 'Expert Agents',
    description: 'Connect with experienced agents who know your local market inside and out.',
  },
];

const apartmentTypes = [
  {
    name: 'House',
    icon: Home,
    count: 8521,
  },
  {
    name: 'Apartment',
    icon: Building2,
    count: 4834,
  },
  {
    name: 'Villa',
    icon: Castle,
    count: 892,
  },
  {
    name: 'Condo',
    icon: Building2,
    count: 3567,
  },
  {
    name: 'Studio',
    icon: LayoutGrid,
    count: 1287,
  },
  {
    name: 'Townhouse',
    icon: Home,
    count: 2154,
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

export default function HomeV10() {
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
  const heroBtnsRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featureGridRef = useRef<HTMLDivElement>(null);
  const listingGridRef = useRef<HTMLDivElement>(null);
  const cityGridRef = useRef<HTMLDivElement>(null);
  const aptGridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      if (titleRef.current && subtitleRef.current && heroBtnsRef.current) {
        gsap.from(titleRef.current, {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.from(subtitleRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: 0.15,
          ease: 'power3.out',
        });
        gsap.from(heroBtnsRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
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

      // Why Choose Us grid
      if (featureGridRef.current) {
        gsap.from(featureGridRef.current.children, {
          scrollTrigger: {
            trigger: featureGridRef.current,
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
          stagger: 0.06,
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
          stagger: 0.08,
          ease: 'power2.out',
        });
      }

      // Apartment types grid
      if (aptGridRef.current) {
        gsap.from(aptGridRef.current.children, {
          scrollTrigger: {
            trigger: aptGridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        });
      }

      // Stats counter
      if (statsRef.current) {
        const statElements = statsRef.current.querySelectorAll('.stat-value');
        statElements.forEach((el) => {
          const target = el.getAttribute('data-value');
          if (target) {
            gsap.from(el, {
              scrollTrigger: {
                trigger: statsRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
              textContent: 0,
              duration: 2,
              ease: 'power1.out',
              snap: { textContent: 1 },
              onUpdate: function () {
                el.textContent = Math.floor(
                  parseFloat(gsap.getProperty(el, 'textContent') as string)
                ).toLocaleString();
              },
              onComplete: function () {
                el.textContent = target;
              },
            });
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const popularProperties = properties.slice(0, 12);
  const featuredCities = cities.filter((c) => c.featured).slice(0, 6);
  const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 3);

  return (
    <>
      <Header variant="transparent" />

      {/* Hero - Full-Width with Image */}
      <section
        ref={heroRef}
        className="relative min-h-[650px] md:min-h-[700px] flex items-center overflow-hidden"
      >
        {/* Full-width background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
            alt="Luxury home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-3xl">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight leading-tight"
            >
              Discover Your <br />
              <span className="text-homez-primary">Perfect Home</span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-white/70 mb-8 max-w-xl"
            >
              Browse over 15,000 properties across 50+ cities. Find the home that matches your lifestyle, budget, and dreams.
            </p>
            <div ref={heroBtnsRef} className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-lg px-8 text-base">
                Browse Properties
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-lg px-8 text-base">
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
          <div
            ref={(el) => { sectionRefs.current[0] = el; }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Choose Homez
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We&apos;re committed to making your property search simple and successful
            </p>
          </div>

          <div ref={featureGridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg hover:border-homez-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-homez-primary/10 rounded-2xl flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-homez-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings - 5-6 column wide grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
          <div
            ref={(el) => { sectionRefs.current[1] = el; }}
            className="flex justify-between items-end mb-10"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Properties</h2>
              <p className="text-gray-500">Most popular listings this month</p>
            </div>
            <Button variant="outline" className="rounded-lg border-homez-primary text-homez-primary hover:bg-homez-primary/10 hidden sm:flex">
              View All
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div ref={listingGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {popularProperties.slice(0, 10).map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      property.status === 'for-sale'
                        ? 'bg-homez-primary text-white'
                        : 'bg-orange-500 text-white'
                    }`}>
                      {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                    </span>
                  </div>
                  <button className="absolute top-3 right-3 w-7 h-7 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition">
                    <Heart className="h-3.5 w-3.5 text-gray-600" />
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 backdrop-blur text-gray-900 text-sm font-bold px-2.5 py-1 rounded-lg">
                      {formatPrice(property.price, property.priceSuffix)}
                    </span>
                  </div>
                </div>
                <div className="p-3.5">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">
                    {property.title}
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mb-2">
                    <MapPin className="h-3 w-3" />
                    {property.city}, {property.state}
                  </p>
                  <div className="flex gap-3 text-xs text-gray-400 pt-2 border-t border-gray-50">
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

      {/* Stats */}
      <section ref={statsRef} className="py-16 bg-homez-primary">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15,000+', label: 'Properties Listed' },
              { value: '8,500+', label: 'Happy Customers' },
              { value: '200+', label: 'Expert Agents' },
              { value: '50+', label: 'Cities Covered' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl md:text-4xl font-bold text-white stat-value"
                  data-value={stat.value}
                >
                  0
                </div>
                <div className="text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties by Cities */}
      <section className="py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
          <div
            ref={(el) => { sectionRefs.current[2] = el; }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Properties by Cities</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Explore properties in the most sought-after locations
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

      {/* Explore Apartment Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
          <div
            ref={(el) => { sectionRefs.current[3] = el; }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Apartment Types</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Find the perfect property type that suits your needs
            </p>
          </div>

          <div ref={aptGridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {apartmentTypes.map((apt) => (
              <div
                key={apt.name}
                className="group bg-white rounded-xl p-5 border border-gray-100 text-center hover:shadow-lg hover:border-homez-primary/30 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-homez-primary/10 rounded-xl flex items-center justify-center group-hover:bg-homez-primary/20 transition-colors">
                  <apt.icon className="h-6 w-6 text-homez-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{apt.name}</h3>
                <p className="text-xs text-gray-400">{apt.count.toLocaleString()} listings</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
          <div
            ref={(el) => { sectionRefs.current[4] = el; }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">What Our Clients Say</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Trusted by thousands of homeowners nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredTestimonials.map((testimonial) => (
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
                    <p className="text-xs text-gray-500">{testimonial.role} · {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-homez-dark">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-homez-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-homez-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Join over 8,500 happy homeowners who found their perfect property through Homez.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-homez-primary hover:bg-homez-primary/90 text-white rounded-lg px-8">
                Get Started Free
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-lg px-8">
                <Search className="h-4 w-4 mr-2" />
                Browse Properties
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              {[
                'Free to browse',
                'No credit card required',
                'Cancel anytime',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/50">
                  <CheckCircle2 className="h-4 w-4 text-homez-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
