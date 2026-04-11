'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Star, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { Agent } from '@/types';

interface AgentCardProps {
  agent: Agent;
  variant?: 'default' | 'compact';
}

function renderStars(rating: number) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <Star 
          key={i} 
          className="w-4 h-4 fill-amber-400 text-amber-400" 
        />
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <div key={i} className="relative w-4 h-4">
          <Star className="absolute inset-0 w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
        </div>
      );
    } else {
      stars.push(
        <Star 
          key={i} 
          className="w-4 h-4 text-gray-300" 
        />
      );
    }
  }

  return stars;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function AgentCard({ agent, variant = 'default' }: AgentCardProps) {
  const [imageError, setImageError] = React.useState(false);
  const agentUrl = `/agent/${agent.slug}`;

  if (variant === 'compact') {
    return (
      <Link 
        href={agentUrl}
        className="group flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
      >
        <Avatar className="w-12 h-12 flex-shrink-0">
          {agent.photo && !imageError ? (
            <AvatarImage 
              src={agent.photo} 
              alt={agent.name}
              onError={() => setImageError(true)}
            />
          ) : null}
          <AvatarFallback className="bg-[#e33e3e]/10 text-[#e33e3e] font-semibold">
            {getInitials(agent.name)}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#e33e3e] transition-colors truncate">
            {agent.name}
          </h3>
          {agent.title && (
            <p className="text-xs text-gray-500 truncate">{agent.title}</p>
          )}
        </div>

        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-gray-700">
            {agent.rating.toFixed(1)}
          </span>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1">
      {/* Photo Section */}
      <Link href={agentUrl} className="block relative">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {agent.photo && !imageError ? (
            <Image
              src={agent.photo}
              alt={agent.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-[#e33e3e]/10 text-[#e33e3e] text-2xl font-semibold">
                  {getInitials(agent.name)}
                </AvatarFallback>
              </Avatar>
            </div>
          )}
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-4">
        {/* Name and Title */}
        <Link href={agentUrl}>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#e33e3e] transition-colors truncate">
            {agent.name}
          </h3>
        </Link>
        {agent.title && (
          <p className="text-sm text-gray-500 mt-0.5 truncate">{agent.title}</p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center">
            {renderStars(agent.rating)}
          </div>
          <span className="text-sm text-gray-500">
            ({agent.reviewCount} reviews)
          </span>
        </div>

        {/* Property Count */}
        <div className="flex items-center gap-2 mt-3 text-gray-600">
          <Home className="w-4 h-4" />
          <span className="text-sm">{agent.propertyCount} Properties</span>
        </div>

        {/* Contact Buttons */}
        <div className="flex gap-2 mt-4">
          {agent.phone && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-gray-200 hover:border-[#e33e3e] hover:text-[#e33e3e]"
              asChild
            >
              <a href={`tel:${agent.phone}`}>
                <Phone className="w-4 h-4 mr-1" />
                Call
              </a>
            </Button>
          )}
          {agent.email && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-gray-200 hover:border-[#e33e3e] hover:text-[#e33e3e]"
              asChild
            >
              <a href={`mailto:${agent.email}`}>
                <Mail className="w-4 h-4 mr-1" />
                Email
              </a>
            </Button>
          )}
        </div>

        {/* Agency */}
        {agent.agency && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <Link 
              href={`/agency/${agent.agency.slug}`}
              className="text-xs text-gray-500 hover:text-[#e33e3e] transition-colors"
            >
              {agent.agency.name}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default AgentCard;
