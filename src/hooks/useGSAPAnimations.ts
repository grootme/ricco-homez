'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAPAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero text fade up
      gsap.utils.toArray<HTMLElement>('.gsap-hero-text').forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
      });

      // Hero text fade in
      gsap.utils.toArray<HTMLElement>('.gsap-hero-fade').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.3 + i * 0.15 }
        );
      });

      // Section titles fade up on scroll
      gsap.utils.toArray<HTMLElement>('.gsap-section-title').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Cards stagger fade up
      gsap.utils.toArray<HTMLElement>('.gsap-cards-container').forEach((container) => {
        const cards = container.querySelectorAll<HTMLElement>('.gsap-card');
        gsap.fromTo(cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.12,
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Stats counter animation
      gsap.utils.toArray<HTMLElement>('.gsap-stats-container').forEach((container) => {
        const counters = container.querySelectorAll<HTMLElement>('.gsap-counter');
        counters.forEach((counter) => {
          const target = parseInt(counter.dataset.target || '0', 10);
          const suffix = counter.dataset.suffix || '';
          const prefix = counter.dataset.prefix || '';
          const obj = { val: 0 };

          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            onUpdate: () => {
              counter.textContent = prefix + Math.floor(obj.val).toLocaleString() + suffix;
            },
          });
        });
      });

      // General fade up element
      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Scale in elements
      gsap.utils.toArray<HTMLElement>('.gsap-scale-in').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Fade in from left
      gsap.utils.toArray<HTMLElement>('.gsap-slide-left').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -50 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Fade in from right
      gsap.utils.toArray<HTMLElement>('.gsap-slide-right').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: 50 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}

export function useGSAPCounter(target: number, suffix = '+', prefix = '') {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counterRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = prefix + Math.floor(obj.val).toLocaleString() + suffix;
          }
        },
      });
    });

    return () => ctx.revert();
  }, [target, suffix, prefix]);

  return counterRef;
}
