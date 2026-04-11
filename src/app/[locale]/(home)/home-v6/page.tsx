'use client';

import { useRef, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, MapPin, Heart, ArrowRight, Star, Check } from 'lucide-react';
import { useProperties, useCities, useTestimonials } from '@/hooks/useAsyncData';
import { properties, cities, testimonials } from '@/lib/data';
import { Header, Footer } from '@/components/layout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    name: 'Basic',
    price: '$2,800',
    period: '/mo',
    description: 'Perfect for individual property seekers',
    features: [
      'Browse all listings',
      'Save up to 10 properties',
      'Basic search filters',
      'Email alerts',
      'Community support',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$14,000',
    period: '/mo',
    description: 'Ideal for professional real estate agents',
    features: [
      'All Basic features',
      'Unlimited saved properties',
      'Advanced search & analytics',
      'Priority support',
      'Featured listings',
      'Lead generation tools',
    ],
    popular: true,
  },
  {
    name: 'Business',
    price: 'Custom',
    period: '',
    description: 'Enterprise solutions for agencies',
    features: [
      'All Professional features',
      'Custom branding',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
    ],
    popular: false,
  },
];

const propertyTypeTabs = ['All', 'For Sale', 'For Rent', 'Sold'];

function formatPrice(price: number, suffix?: string) {
  const formatted = price >= 1000000
    ? `$${(price / 1000000).toFixed(2)}M`
    : price >= 1000
      ? `$${(price / 1000).toFixed(0)}K`
      : `$${price.toLocaleString()}`;
  return `${formatted}${suffix ? ' ' + suffix : ''}`;
}

export default function HomeV6() {
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
  const sectionTitleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cityRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pricingRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      if (titleRef.current && subtitleRef.current && searchRef.current) {
        gsap.from(titleRef.current, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.from(subtitleRef.current, {
          y: 40,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
        });
        gsap.from(searchRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
        });
      }

      // Section titles fade up
      sectionTitleRefs.current.forEach((ref) => {
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
      const cardContainer = cardRefs.current[0]?.parentElement;
      if (cardContainer) {
        gsap.from(cardRefs.current.filter(Boolean), {
          scrollTrigger: {
            trigger: cardContainer,
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

      // City cards stagger
      const cityContainer = cityRefs.current[0]?.parentElement;
      if (cityContainer) {
        gsap.from(cityRefs.current.filter(Boolean), {
          scrollTrigger: {
            trigger: cityContainer,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }

      // Pricing cards stagger
      const pricingContainer = pricingRefs.current[0]?.parentElement;
      if (pricingContainer) {
        gsap.from(pricingRefs.current.filter(Boolean), {
          scrollTrigger: {
            trigger: pricingContainer,
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

      // Stats counter animation
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

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 6);
  const featuredCities = cities.filter((c) => c.featured).slice(0, 4);
  const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 3);

  return (
    <>
      <Header variant="transparent" />

      {/* Hero - Minimal Design */}
      <section
        ref={heroRef}
        className="relative min-h-[600px] flex items-center bg-homez-dark"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-homez-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-20 text-center">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Find Your Perfect <br />
            <span className="font-light">Property</span>
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Discover premium properties tailored to your lifestyle. Search smarter, live better.
          </p>

          {/* Tabbed Search */}
          <div
            ref={searchRef}
            className="bg-white rounded-xl p-2 shadow-2xl max-w-3xl mx-auto"
          >
            <Tabs defaultValue="buy" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-2 h-auto p-1">
                <TabsTrigger value="buy" className="rounded-lg py-2.5 text-sm font-medium data-[state=active]:bg-homez-primary data-[state=active]:text-white">
                  Buy
                </TabsTrigger>
                <TabsTrigger value="rent" className="rounded-lg py-2.5 text-sm font-medium data-[state=active]:bg-homez-primary data-[state=active]:text-white">
                  Rent
                </TabsTrigger>
                <TabsTrigger value="sold" className="rounded-lg py-2.5 text-sm font-medium data-[state=active]:bg-homez-primary data-[state=active]:text-white">
                  Sold
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex flex-col sm:flex-row gap-2 p-1">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Location"
                  className="pl-10 h-12 border-0 bg-gray-50 focus:bg-white rounded-lg"
                />
              </div>
              <div className="w-full sm:w-36">
                <Input
                  placeholder="Min Price"
                  className="h-12 border-0 bg-gray-50 focus:bg-white rounded-lg"
                />
              </div>
              <div className="w-full sm:w-36">
                <Input
                  placeholder="Max Price"
                  className="h-12 border-0 bg-gray-50 focus:bg-white rounded-lg"
                />
              </div>
              <Button className="h-12 px-8 bg-homez-primary hover:bg-homez-primary/90 rounded-lg text-white font-medium">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15,000+', label: 'Properties Listed' },
              { value: '8,500+', label: 'Happy Customers' },
              { value: '200+', label: 'Expert Agents' },
              { value: '50+', label: 'Cities Covered' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl md:text-4xl font-bold text-homez-primary stat-value"
                  data-value={stat.value}
                >
                  0
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={(el) => { sectionTitleRefs.current[0] = el; }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Featured Listings
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Hand-picked properties that match the highest standards of quality and design
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {propertyTypeTabs.map((tab) => (
              <Button
                key={tab}
                variant={tab === 'All' ? 'default' : 'outline'}
                className={
                  tab === 'All'
                    ? 'bg-homez-primary hover:bg-homez-primary/90 text-white rounded-full px-6'
                    : 'rounded-full px-6 border-gray-200'
                }
              >
                {tab}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property, i) => (
              <div
                key={property.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-homez-primary text-white text-xs font-medium px-3 py-1 rounded-full">
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
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span>{property.bedrooms} Beds</span>
                    <span>{property.bathrooms} Baths</span>
                    <span>{property.sqft.toLocaleString()} Sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="rounded-full px-8 border-homez-primary text-homez-primary hover:bg-homez-primary hover:text-white">
              View All Listings
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Explore Cities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={(el) => { sectionTitleRefs.current[1] = el; }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Explore Cities
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Browse properties in the most popular cities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCities.map((city, i) => (
              <div
                key={city.id}
                ref={(el) => { cityRefs.current[i] = el; }}
                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-1">{city.name}</h3>
                  <p className="text-white/80 text-sm">
                    {city.totalProperties.toLocaleString()} Properties
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={(el) => { sectionTitleRefs.current[2] = el; }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Pricing Options
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div
                key={plan.name}
                ref={(el) => { pricingRefs.current[i] = el; }}
                className={`rounded-xl p-6 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-homez-primary shadow-lg scale-105 relative'
                    : 'border-gray-100 hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-homez-primary text-white text-xs font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-homez-primary mt-0.5 shrink-0" />
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
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={(el) => { sectionTitleRefs.current[3] = el; }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Real stories from real homeowners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
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
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied homeowners who found their perfect property through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-white text-homez-primary hover:bg-gray-100 rounded-lg px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-lg px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
