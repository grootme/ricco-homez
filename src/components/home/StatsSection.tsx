'use client';

import { useRef, useEffect, useState } from 'react';
import { stats } from '@/lib/data';

interface StatsSectionProps {
  variant?: 'default' | 'overlay';
  backgroundImage?: string;
}

export default function StatsSection({
  variant = 'default',
  backgroundImage = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=800&fit=crop',
}: StatsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          stats.forEach((stat) => {
            const value = parseInt(stat.value.replace(/[^0-9]/g, ''));
            let current = 0;
            const increment = value / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= value) {
                current = value;
                clearInterval(timer);
              }
              setCounters((prev) => ({
                ...prev,
                [stat.label]: Math.floor(current),
              }));
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (variant === 'overlay') {
    return (
      <section ref={sectionRef} className="relative py-20">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold text-orange-400 mb-2">
                  {counters[stat.label]?.toLocaleString() || 0}+
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                {counters[stat.label]?.toLocaleString() || 0}+
              </div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
