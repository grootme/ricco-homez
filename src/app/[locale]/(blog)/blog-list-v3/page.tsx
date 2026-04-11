'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, User, ArrowRight, Search, Tag, TrendingUp, Clock } from 'lucide-react';
import { useTranslation, useBlogDataSource } from '@/providers';
import type { BlogPost } from '@/types';

export default function BlogListV3() {
  const { t } = useTranslation();
  const blogDataSource = useBlogDataSource();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        const result = await blogDataSource.getBlogPosts({ limit: 20 });
        setPosts(result.data);
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
        setError(t('errors.somethingWentWrong', 'Failed to load blog posts'));
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [blogDataSource, t]);

  const categories = useMemo(() => {
    const cats = new Set(posts.map(p => p.category));
    return ['all', ...Array.from(cats)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let result = posts;
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags?.some(tag => tag.toLowerCase().includes(q))
      );
    }
    return result;
  }, [posts, activeCategory, searchQuery]);

  const featuredPosts = useMemo(() => posts.filter(p => p.featured).slice(0, 2), [posts]);
  const popularPosts = useMemo(() => [...posts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 4), [posts]);
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach(p => p.tags?.forEach(tag => tagSet.add(tag)));
    return Array.from(tagSet).slice(0, 12);
  }, [posts]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-homez-secondary py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-homez text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {t('blog.title', 'Our Blog')}
          </h1>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            {t('blog.subtitle', 'Expert insights, market trends, and tips for buyers and sellers')}
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder={t('blog.searchPlaceholder', 'Search articles...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 rounded-full bg-white/95 backdrop-blur border-0 shadow-lg text-gray-900 placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="container-homez py-10">
        {loading && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {[1, 2, 3, 4].map(i => (
                <Skeleton key={i} className="h-64 w-full rounded-xl" />
              ))}
            </div>
            <div className="space-y-6">
              <Skeleton className="h-80 rounded-xl" />
              <Skeleton className="h-64 rounded-xl" />
            </div>
          </div>
        )}

        {error && !loading && (
          <Card className="border-red-200 bg-red-50 max-w-lg mx-auto">
            <CardContent className="p-8 text-center">
              <p className="text-red-600">{error}</p>
              <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
                {t('common.tryAgain', 'Try Again')}
              </Button>
            </CardContent>
          </Card>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setVisibleCount(4); }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? 'bg-homez-primary text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border'
                    }`}
                  >
                    {cat === 'all' ? t('blog.allCategories', 'All') : cat}
                  </button>
                ))}
              </div>

              {/* Blog Posts - Alternating Layout */}
              {visiblePosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500">{t('blog.noResults', 'No articles found matching your criteria.')}</p>
                  <Button variant="outline" className="mt-4" onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}>
                    {t('blog.clearFilters', 'Clear Filters')}
                  </Button>
                </div>
              )}

              {visiblePosts.map((post, index) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="w-full md:w-2/5 h-56 md:h-auto bg-gray-200 overflow-hidden">
                      {post.images?.[0] || post.coverImage ? (
                        <img
                          src={post.images?.[0] || post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-homez-primary/10 to-homez-secondary/10">
                          <span className="text-4xl opacity-30">📰</span>
                        </div>
                      )}
                    </div>
                    <CardContent className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-homez-primary/10 text-homez-primary border-homez-primary/20 hover:bg-homez-primary/20">
                          {post.category}
                        </Badge>
                        {post.featured && (
                          <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-bold text-xl mb-3 group-hover:text-homez-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1.5">
                          <User className="h-4 w-4" />
                          {post.authorName}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {post.readTime || 5} min
                        </span>
                      </div>
                      <Link
                        href={`/blogs/${post.id}`}
                        className="text-homez-primary font-semibold flex items-center gap-1.5 hover:gap-3 transition-all"
                      >
                        {t('blog.readArticle', 'Read Article')}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              ))}

              {/* Load More */}
              {hasMore && (
                <div className="text-center pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8"
                    onClick={() => setVisibleCount(prev => prev + 4)}
                  >
                    {t('common.loadMore', 'Load More Articles')}
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <Card className="overflow-hidden">
                  <div className="bg-homez-primary text-white p-5">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      {t('blog.featured', 'Featured Posts')}
                    </h3>
                  </div>
                  <CardContent className="p-4 space-y-4">
                    {featuredPosts.map(post => (
                      <Link key={post.id} href={`/blogs/${post.id}`} className="flex gap-3 group">
                        <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                          {post.coverImage && (
                            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-homez-primary transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Categories */}
              <Card>
                <div className="bg-gray-900 text-white p-5">
                  <h3 className="font-bold text-lg">{t('blog.categories', 'Categories')}</h3>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {categories.filter(c => c !== 'all').map(cat => {
                      const count = posts.filter(p => p.category === cat).length;
                      return (
                        <button
                          key={cat}
                          onClick={() => { setActiveCategory(cat); setVisibleCount(4); }}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all ${
                            activeCategory === cat
                              ? 'bg-homez-primary/10 text-homez-primary font-semibold'
                              : 'hover:bg-gray-50 text-gray-600'
                          }`}
                        >
                          <span>{cat}</span>
                          <Badge variant="secondary" className="text-xs">
                            {count}
                          </Badge>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card>
                <div className="bg-homez-dark text-white p-5">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    {t('blog.popular', 'Most Popular')}
                  </h3>
                </div>
                <CardContent className="p-4 space-y-4">
                  {popularPosts.map((post, idx) => (
                    <Link key={post.id} href={`/blogs/${post.id}`} className="flex gap-3 group">
                      <div className="w-8 h-8 rounded-full bg-homez-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-homez-primary font-bold text-sm">{idx + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-homez-primary transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-0.5">{(post.views || 0).toLocaleString()} views</p>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <div className="bg-gray-100 p-5">
                  <h3 className="font-bold text-lg flex items-center gap-2 text-gray-900">
                    <Tag className="h-5 w-5" />
                    {t('blog.tags', 'Popular Tags')}
                  </h3>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-homez-primary/10 hover:text-homez-primary hover:border-homez-primary/30 transition-colors"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter CTA */}
              <Card className="overflow-hidden border-0 shadow-md">
                <div className="bg-gradient-to-br from-homez-primary to-homez-primary/80 p-6 text-white text-center">
                  <h3 className="font-bold text-lg mb-2">{t('blog.newsletter', 'Subscribe to Newsletter')}</h3>
                  <p className="text-white/80 text-sm mb-4">
                    {t('blog.newsletterDesc', 'Get the latest articles delivered to your inbox.')}
                  </p>
                  <Input
                    placeholder={t('blog.emailPlaceholder', 'Your email address')}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 mb-3"
                  />
                  <Button className="w-full bg-white text-homez-primary hover:bg-white/90 font-semibold">
                    {t('blog.subscribe', 'Subscribe')}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
