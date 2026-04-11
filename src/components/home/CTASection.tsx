'use client';

import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, ArrowRight, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface CTASectionProps {
  variant?: 'default' | 'selling' | 'contact';
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  variant = 'default',
  title = 'Need help? Talk to our expert.',
  subtitle = 'Talk to our experts or Browse through more properties.',
}: CTASectionProps) {
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

  if (variant === 'selling') {
    return (
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className={`overflow-hidden bg-gradient-to-r from-[#eb6753] to-[#d65a5a] ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}>
            <CardContent className="p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Thinking of Selling?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free property valuation and connect with our expert agents to maximize your sale price.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#eb6753] hover:bg-white/90">
                  Get Free Valuation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (variant === 'contact') {
    return (
      <section ref={sectionRef} className="py-16 bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl font-bold text-[#041e42] mb-4">
                Need Help? Contact Us
              </h2>
              <p className="text-gray-500 mb-6">
                Our team of experienced agents is ready to help you with all your real estate needs.
              </p>
              <div className="space-y-4">
                <a href="tel:+1234567890" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#fef3f2] rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-[#eb6753]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#041e42]">Call Us</p>
                    <p className="text-gray-500">+1 (234) 567-890</p>
                  </div>
                </a>
                <a href="mailto:info@homez.com" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#fef3f2] rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[#eb6753]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#041e42]">Email Us</p>
                    <p className="text-gray-500">info@homez.com</p>
                  </div>
                </a>
              </div>
            </div>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb6753] focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb6753] focus:border-transparent"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb6753] focus:border-transparent resize-none"
                  />
                  <Button className="w-full bg-[#eb6753] hover:bg-[#d65a5a] h-12">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  // Default variant - Home v1 style
  return (
    <section ref={sectionRef} className="py-16 bg-[#041e42]">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-[#eb6753] hover:bg-[#d65a5a] text-white">
                Contact Us
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <a
                href="tel:9208519087"
                className="inline-flex items-center text-white hover:text-[#eb6753] transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                920 851 9087
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-white/60 text-sm mb-1">Total Free Customer Care</p>
                <a href="tel:+012305094502" className="text-white hover:text-[#eb6753] font-medium">
                  +(0) 123 050 945 02
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">Need Live Support?</p>
                <a href="mailto:hi@homez.com" className="text-white hover:text-[#eb6753] font-medium">
                  hi@homez.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Apps & Social */}
          <div className="lg:pl-12">
            {/* Apps Section */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Apps</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <p className="text-white/60 text-xs">Download on the</p>
                    <p className="text-white font-semibold">Apple Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  <div>
                    <p className="text-white/60 text-xs">Get it on</p>
                    <p className="text-white font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow us on social media</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#eb6753] transition-colors"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#eb6753] transition-colors"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#eb6753] transition-colors"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#eb6753] transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
