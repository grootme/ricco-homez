import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 'blog-001',
    title: '10 Tips for First-Time Home Buyers',
    excerpt: 'Navigate the home buying process with confidence.',
    coverImage: '/images/blog/blog-1.jpg',
    category: 'Buying Tips',
    authorName: 'Sarah Johnson',
    publishedAt: '2024-02-15',
    readTime: 5,
  },
  {
    id: 'blog-002',
    title: 'Understanding Mortgage Rates in 2024',
    excerpt: 'A comprehensive guide to current mortgage rates.',
    coverImage: '/images/blog/blog-2.jpg',
    category: 'Market Trends',
    authorName: 'Michael Chen',
    publishedAt: '2024-02-12',
    readTime: 7,
  },
  {
    id: 'blog-003',
    title: 'How to Stage Your Home for a Quick Sale',
    excerpt: 'Learn the art of home staging.',
    coverImage: '/images/blog/blog-3.jpg',
    category: 'Selling Tips',
    authorName: 'Emily Rodriguez',
    publishedAt: '2024-02-10',
    readTime: 6,
  },
  {
    id: 'blog-004',
    title: 'Investment Properties Guide',
    excerpt: 'Everything about real estate investing.',
    coverImage: '/images/blog/blog-4.jpg',
    category: 'Investment',
    authorName: 'David Park',
    publishedAt: '2024-02-08',
    readTime: 8,
  },
  {
    id: 'blog-005',
    title: 'Best Neighborhoods in Miami',
    excerpt: 'Discover the best areas to live in Miami.',
    coverImage: '/images/blog/blog-5.jpg',
    category: 'Local Guides',
    authorName: 'Sarah Johnson',
    publishedAt: '2024-02-05',
    readTime: 6,
  },
  {
    id: 'blog-006',
    title: 'Smart Home Technology Trends',
    excerpt: 'The latest in home automation.',
    coverImage: '/images/blog/blog-6.jpg',
    category: 'Technology',
    authorName: 'Amanda Thompson',
    publishedAt: '2024-02-03',
    readTime: 5,
  },
];

export default function BlogListV2() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-homez-primary to-homez-dark py-16">
        <div className="container-homez text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-white/70">Insights and guides for property buyers</p>
        </div>
      </div>

      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="h-52 bg-gray-200">
                <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="bg-homez-primary/10 text-homez-primary mb-3">{post.category}</Badge>
                <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.authorName}
                  </span>
                  <span>{post.readTime} min</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
