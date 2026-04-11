'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { agents } from '@/lib/data/agents';

interface AgentsSectionProps {
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
}

export default function AgentsSection({
  title = 'Our Exclusive Agents',
  subtitle = 'Aliquam lacinia diam quis lacus euismod',
  showViewAll = true,
}: AgentsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#041e42] mb-3">
              {title}
            </h2>
            <p className="text-gray-500 text-lg">{subtitle}</p>
          </div>
          {showViewAll && (
            <Link
              href="/agents"
              className="inline-flex items-center text-[#eb6753] font-medium hover:gap-2 transition-all mt-4 md:mt-0"
            >
              View All Agents
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          )}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border-gray-100 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </Button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {agents.slice(0, 7).map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border-gray-100 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Agent } from '@/types';

interface AgentCardProps {
  agent: Agent;
}

function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card
      className="min-w-[260px] flex-shrink-0 bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={agent.avatar || `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop`}
          alt={agent.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <CardContent className="p-5 text-center">
        {/* Name */}
        <h3 className="text-lg font-semibold text-[#041e42] mb-1">
          <Link href={`/agent-single/${agent.id}`} className="hover:text-[#eb6753] transition-colors">
            {agent.name}
          </Link>
        </h3>

        {/* Role */}
        <p className="text-sm text-gray-500 mb-3">{agent.title || 'Broker'}</p>

        {/* Property Count */}
        <p className="text-sm text-[#eb6753] font-medium">
          {agent.propertyCount || 0} Properties
        </p>
      </CardContent>
    </Card>
  );
}
