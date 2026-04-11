'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, ArrowRight, Heart, Share2 } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  authorName: string;
  authorAvatar?: string;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  tags?: string[];
}

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'horizontal' | 'compact' | 'featured';
  showActions?: boolean;
}

export function BlogCard({ post, variant = 'default', showActions = false }: BlogCardProps) {
  if (variant === 'featured') {
    return (
      <Card className="overflow-hidden group">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 lg:h-80 bg-gray-200 overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <Badge className="absolute top-4 left-4 bg-homez-primary text-white">
              {post.category}
            </Badge>
          </div>
          <CardContent className="p-8 flex flex-col justify-center">
            <Badge className="w-fit mb-4 bg-homez-primary/10 text-homez-primary hover:bg-homez-primary/20">
              {post.category}
            </Badge>
            <h2 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-homez-primary transition-colors">
              <Link href={`/blogs/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              {post.authorAvatar && (
                <img
                  src={post.authorAvatar}
                  alt={post.authorName}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.authorName}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </span>
            </div>
            <Link
              href={`/blogs/${post.id}`}
              className="text-homez-primary font-medium flex items-center gap-1 hover:underline"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </div>
      </Card>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/3 h-48 md:h-auto bg-gray-200 overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <CardContent className="flex-1 p-6">
            <Badge variant="outline" className="mb-3">
              {post.category}
            </Badge>
            <h3 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-homez-primary transition-colors">
              <Link href={`/blogs/${post.id}`}>{post.title}</Link>
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.authorName}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
            <Link
              href={`/blogs/${post.id}`}
              className="text-homez-primary font-medium flex items-center gap-1 hover:underline"
            >
              Read Article <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </div>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href={`/blogs/${post.id}`} className="flex gap-4 group">
        <div className="relative w-24 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-200">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-homez-primary mb-1">{post.category}</p>
          <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-homez-primary transition-colors">
            {post.title}
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })}
          </p>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative h-52 bg-gray-200 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 right-3 bg-white/90 text-gray-900 hover:bg-white">
          {post.category}
        </Badge>
      </div>
      <CardContent className="p-5">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-homez-primary transition-colors">
          <Link href={`/blogs/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-3">
            {post.authorAvatar && (
              <img
                src={post.authorAvatar}
                alt={post.authorName}
                className="w-6 h-6 rounded-full object-cover"
              />
            )}
            <span>{post.authorName}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min</span>
          </div>
        </div>
        {showActions && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t">
            <Button variant="ghost" size="sm" className="text-gray-500">
              <Heart className="h-4 w-4 mr-1" />
              Save
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
