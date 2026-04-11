'use client';

import { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Tag, Key, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Buy a property',
    description: 'Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.',
    icon: Home,
    linkText: 'Find a home',
    link: '/grid-default',
  },
  {
    id: 2,
    title: 'Sell a property',
    description: 'Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.',
    icon: Tag,
    linkText: 'Place an ad',
    link: '/dashboard/add-property',
  },
  {
    id: 3,
    title: 'Rent a property',
    description: 'Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.',
    icon: Key,
    linkText: 'Find a rental',
    link: '/grid-default?status=for-rent',
  },
];

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ServicesSection({
  title = 'See How Realton Can Help',
  subtitle = 'Aliquam lacinia diam quis lacus euismod',
}: ServicesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#041e42] mb-3">
            {title}
          </h2>
          <p className="text-gray-500 text-lg">{subtitle}</p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`group bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#fef3f2] flex items-center justify-center mb-6 group-hover:bg-[#eb6753] transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-[#eb6753] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#041e42] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center text-[#eb6753] font-medium hover:gap-2 transition-all group/link"
                >
                  {service.linkText}
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
