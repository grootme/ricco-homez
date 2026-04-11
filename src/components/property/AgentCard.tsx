'use client';

import { Agent } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Phone, Mail, MessageSquare, Star, Home, Check, ExternalLink } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
  variant?: 'default' | 'compact' | 'sidebar' | 'featured';
  onContact?: () => void;
}

export default function AgentCard({
  agent,
  variant = 'default',
  onContact,
}: AgentCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (variant === 'sidebar') {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold mb-4">Listed by</h3>
        
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={agent.avatar} alt={agent.name} />
            <AvatarFallback className="bg-homez-primary/10 text-homez-primary text-lg font-semibold">
              {getInitials(agent.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-semibold truncate">{agent.name}</p>
              {agent.verified && (
                <Check className="h-4 w-4 text-blue-500 shrink-0" />
              )}
            </div>
            <p className="text-sm text-gray-500 truncate">{agent.title}</p>
            {agent.rating > 0 && (
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-xs font-medium">{agent.rating.toFixed(1)}</span>
                <span className="text-xs text-gray-400">({agent.reviewCount})</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <Button 
            className="w-full bg-homez-primary hover:bg-homez-primary/90"
            onClick={onContact}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Send Message
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <a href={`tel:${agent.phone}`}>
              <Phone className="h-4 w-4 mr-2" />
              {agent.phone}
            </a>
          </Button>
        </div>

        <div className="mt-4 pt-4 border-t flex items-center justify-between text-sm">
          <span className="text-gray-500">{agent.totalListings} listings</span>
          <a href={`/agent-single/${agent.id}`} className="text-homez-primary hover:underline flex items-center gap-1">
            View Profile
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={agent.avatar} alt={agent.name} />
          <AvatarFallback className="bg-homez-primary/10 text-homez-primary text-sm font-semibold">
            {getInitials(agent.name)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="font-medium text-sm truncate">{agent.name}</p>
          <p className="text-xs text-gray-500 truncate">{agent.title}</p>
        </div>
        {agent.verified && (
          <Check className="h-4 w-4 text-blue-500 shrink-0" />
        )}
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="bg-gradient-to-br from-homez-dark to-gray-800 rounded-xl p-6 text-white">
        <div className="flex items-start gap-4">
          <Avatar className="w-20 h-20 border-2 border-white/20">
            <AvatarImage src={agent.avatar} alt={agent.name} />
            <AvatarFallback className="bg-white/10 text-white text-xl font-semibold">
              {getInitials(agent.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg">{agent.name}</h3>
              {agent.verified && (
                <Badge className="bg-blue-500 text-white text-xs">Verified</Badge>
              )}
            </div>
            <p className="text-white/70 text-sm mb-2">{agent.title}</p>
            {agent.rating > 0 && (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(agent.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-white/30'
                    }`}
                  />
                ))}
                <span className="text-sm ml-1">{agent.rating.toFixed(1)}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">{agent.totalListings}</p>
            <p className="text-white/60 text-xs">Listings</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{agent.totalSales}</p>
            <p className="text-white/60 text-xs">Sales</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{agent.reviewCount}</p>
            <p className="text-white/60 text-xs">Reviews</p>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Button className="flex-1 bg-homez-primary hover:bg-homez-primary/90" onClick={onContact}>
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact
          </Button>
          <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10" asChild>
            <a href={`tel:${agent.phone}`}>
              <Phone className="h-4 w-4 mr-2" />
              Call
            </a>
          </Button>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <Avatar className="w-14 h-14">
          <AvatarImage src={agent.avatar} alt={agent.name} />
          <AvatarFallback className="bg-homez-primary/10 text-homez-primary font-semibold">
            {getInitials(agent.name)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold truncate">{agent.name}</h3>
            {agent.verified && (
              <Check className="h-4 w-4 text-blue-500 shrink-0" />
            )}
          </div>
          <p className="text-sm text-gray-500">{agent.title}</p>
          <p className="text-xs text-gray-400 mt-1">{agent.city}, {agent.state}</p>
        </div>
      </div>

      {agent.rating > 0 && (
        <div className="flex items-center gap-1 mt-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.round(agent.rating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-200'
              }`}
            />
          ))}
          <span className="text-sm ml-1 font-medium">{agent.rating.toFixed(1)}</span>
          <span className="text-sm text-gray-400">({agent.reviewCount} reviews)</span>
        </div>
      )}

      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Home className="h-4 w-4" />
          {agent.totalListings} listings
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4" />
          {agent.totalSales} sales
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <Button size="sm" className="flex-1 bg-homez-primary hover:bg-homez-primary/90" onClick={onContact}>
          <MessageSquare className="h-4 w-4 mr-1" />
          Message
        </Button>
        <Button size="sm" variant="outline" asChild>
          <a href={`tel:${agent.phone}`}>
            <Phone className="h-4 w-4" />
          </a>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <a href={`mailto:${agent.email}`}>
            <Mail className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
