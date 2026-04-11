'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useTranslation, useBlogDataSource } from '@/providers';
import type { BlogPost } from '@/types';

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
}

export default function BlogSection({
  title,
  subtitle,
}: BlogSectionProps) {
  const { t } = useTranslation();
  const blogDataSource = useBlogDataSource();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Default values from translations
  const displayTitle = title ?? t('blog.title', 'From Our Blog');
  const displaySubtitle = subtitle ?? t('blog.subtitle', 'Aliquam lacinia diam quis lacus euismod');

  // Fetch blog posts on mount
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const data = await blogDataSource.getFeaturedBlogPosts(3);
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
        // Fallback to empty array
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [blogDataSource]);

  // Intersection observer for animations
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

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleString('default', { month: 'long' }),
      day: date.getDate(),
    };
  };

  return (
    <section ref={sectionRef} className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#041e42] mb-3">
            {displayTitle}
          </h2>
          <p className="text-gray-500 text-lg">{displaySubtitle}</p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-[#eb6753]" />
          </div>
        )}

        {/* Blog Grid */}
        {!loading && posts.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const date = formatDate(post.publishedAt);
              return (
                <Card
                  key={post.id}
                  className={`group bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden ${
                    isVisible ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.coverImage || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop'}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-[#eb6753] text-white rounded-xl px-4 py-2 text-center">
                      <p className="text-xs font-medium uppercase">{date.month}</p>
                      <p className="text-xl font-bold">{date.day}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    {/* Category */}
                    <Link
                      href={`/blog?category=${post.category}`}
                      className="text-[#eb6753] text-sm font-medium hover:underline"
                    >
                      {post.category}
                    </Link>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[#041e42] mt-2 line-clamp-2 group-hover:text-[#eb6753] transition-colors">
                      <Link href={`/blogs/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Read Time */}
                    <p className="text-sm text-gray-500 mt-2">
                      {post.readTime} {t('blog.minRead', 'min read')}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!loading && posts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            {t('common.noResults', 'No blog posts found')}
          </div>
        )}
      </div>
    </section>
  );
}
