'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, User, ArrowRight, AlertCircle } from 'lucide-react';
import { useTranslation, useBlogDataSource } from '@/providers';
import type { BlogPost } from '@/types';

export default function BlogListV1() {
  const { t } = useTranslation();
  const blogDataSource = useBlogDataSource();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blog posts
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

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-homez-dark py-16">
        <div className="container-homez text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('blog.title', 'Real Estate Blog')}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t('blog.subtitle', 'Expert insights, market trends, and tips for buyers and sellers')}
          </p>
        </div>
      </div>

      <div className="container-homez section-padding">
        {/* Loading State */}
        {loading && (
          <>
            <Skeleton className="h-80 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-72" />
              ))}
            </div>
          </>
        )}

        {/* Error State */}
        {error && !loading && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-6 text-center">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-red-700 mb-2">{t('errors.errorOccurred', 'Error Occurred')}</h3>
              <p className="text-red-600 mb-4">{error}</p>
              <Button onClick={() => window.location.reload()}>
                {t('common.tryAgain', 'Try Again')}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <Card className="py-16">
            <CardContent className="text-center">
              <AlertCircle className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('common.noResults', 'No blog posts found')}</h3>
              <p className="text-gray-500">{t('blog.noPosts', 'Check back later for new articles.')}</p>
            </CardContent>
          </Card>
        )}

        {/* Blog Content */}
        {!loading && !error && posts.length > 0 && (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <Card className="mb-8 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto bg-gray-200">
                    {featuredPost.images?.[0] ? (
                      <img
                        src={featuredPost.images[0]}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <span className="text-gray-400">{t('blog.noImage', 'No image')}</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-homez-primary text-white">{featuredPost.category}</Badge>
                    <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.authorName}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.publishedAt).toLocaleDateString()}
                      </span>
                      <span>{featuredPost.readTime || 5} {t('blog.minRead', 'min read')}</span>
                    </div>
                    <Link href={`/blogs/${featuredPost.id}`} className="text-homez-primary font-medium flex items-center gap-1 hover:underline">
                      {t('blog.readMore', 'Read More')} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200">
                    {post.images?.[0] ? (
                      <img
                        src={post.images[0]}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <span className="text-gray-400">{t('blog.noImage', 'No image')}</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">{post.category}</Badge>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                      <span>{post.readTime || 5} {t('blog.minRead', 'min read')}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            {regularPosts.length >= 9 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  {t('common.loadMore', 'Load More')}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
