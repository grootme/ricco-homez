'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  department?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  variant?: 'default' | 'compact' | 'detailed';
  showSocial?: boolean;
  showContact?: boolean;
}

export function TeamMemberCard({ 
  member, 
  variant = 'default',
  showSocial = true,
  showContact = false 
}: TeamMemberCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
        <Avatar className="w-12 h-12">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback className="bg-homez-primary text-white">
            {getInitials(member.name)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="font-semibold truncate">{member.name}</p>
          <p className="text-sm text-gray-500 truncate">{member.role}</p>
        </div>
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
        <div className="relative h-48 bg-gradient-to-br from-homez-dark to-homez-secondary">
          <div className="absolute inset-0 flex items-center justify-center">
            <Avatar className="w-28 h-28 border-4 border-white shadow-lg">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback className="bg-homez-primary text-white text-2xl">
                {getInitials(member.name)}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-1 group-hover:text-homez-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-homez-primary font-medium mb-2">{member.role}</p>
          {member.department && (
            <Badge variant="outline" className="mb-3">{member.department}</Badge>
          )}
          {member.bio && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
          )}
          
          {/* Contact Info */}
          {showContact && (
            <div className="space-y-2 mb-4 text-sm">
              {member.email && (
                <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-homez-primary">
                  <Mail className="h-4 w-4" />
                  {member.email}
                </a>
              )}
              {member.phone && (
                <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-homez-primary">
                  <Phone className="h-4 w-4" />
                  {member.phone}
                </a>
              )}
            </div>
          )}

          {/* Social Links */}
          {showSocial && (
            <div className="flex items-center justify-center gap-3">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-homez-primary hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-homez-primary hover:text-white transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-homez-primary hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative h-56 bg-gray-200 overflow-hidden">
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-homez-primary/20 to-homez-dark/20">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="bg-homez-primary text-white text-2xl">
                {getInitials(member.name)}
              </AvatarFallback>
            </Avatar>
          </div>
        )}
        {/* Social Overlay */}
        {showSocial && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
            <div className="flex items-center gap-2">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-homez-primary hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-homez-primary hover:text-white transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-homez-primary hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-5 text-center">
        <h3 className="font-bold text-lg mb-1 group-hover:text-homez-primary transition-colors">
          {member.name}
        </h3>
        <p className="text-homez-primary text-sm mb-2">{member.role}</p>
        {member.bio && (
          <p className="text-gray-500 text-sm line-clamp-2">{member.bio}</p>
        )}
      </CardContent>
    </Card>
  );
}
