'use client';

import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

interface SellingOptionsSectionProps {
  title?: string;
  subtitle?: string;
}

export default function SellingOptionsSection({
  title = "Let's find the right selling option for you",
  subtitle = 'As the complexity of buildings to increase, the field of architecture',
}: SellingOptionsSectionProps) {
  const features = [
    'Find excellent deals',
    'Friendly host & Fast support',
    'List your own property',
  ];

  const images = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#041e42] mb-4">
              {title}
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              {subtitle}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#eb6753] flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="bg-[#eb6753] hover:bg-[#d65a5a] text-white px-8 py-6 text-lg rounded-xl">
              Learn More
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Right Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-48">
                <img
                  src={images[0]}
                  alt="Property 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-32">
                <img
                  src={images[1]}
                  alt="Property 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden h-32">
                <img
                  src={images[2]}
                  alt="Property 3"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <img
                  src={images[3]}
                  alt="Property 4"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
