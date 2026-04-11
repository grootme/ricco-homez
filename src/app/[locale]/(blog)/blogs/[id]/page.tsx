import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Share2, Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const blogPost = {
  id: 'blog-001',
  title: '10 Essential Tips for First-Time Home Buyers',
  content: `
    <p>Buying your first home is an exciting milestone, but it can also be overwhelming. Here are ten essential tips to help you navigate the process with confidence.</p>
    
    <h2>1. Know Your Budget</h2>
    <p>Before you start house hunting, determine how much you can afford. Consider your monthly income, expenses, and how much you've saved for a down payment.</p>
    
    <h2>2. Get Pre-Approved</h2>
    <p>Getting pre-approved for a mortgage shows sellers you're a serious buyer and helps you understand exactly how much you can borrow.</p>
    
    <h2>3. Research Neighborhoods</h2>
    <p>Take time to explore different neighborhoods. Consider factors like commute times, school districts, and future development plans.</p>
    
    <h2>4. Work with a Real Estate Agent</h2>
    <p>A knowledgeable real estate agent can guide you through the process, negotiate on your behalf, and help you avoid common pitfalls.</p>
    
    <h2>5. Don't Skip the Inspection</h2>
    <p>Always get a professional home inspection. It can reveal hidden issues that could cost you thousands of dollars down the road.</p>
  `,
  coverImage: '/images/blog/blog-1.jpg',
  category: 'Buying Tips',
  tags: ['First-Time Buyers', 'Tips', 'Real Estate'],
  authorName: 'Sarah Johnson',
  authorAvatar: '/images/agents/agent-1.jpg',
  publishedAt: '2024-02-15',
  readTime: 5,
};

interface BlogSingleProps {
  params: Promise<{ id: string }>;
}

export default async function BlogSingle({ params }: BlogSingleProps) {
  const { id } = await params;
  
  if (!id) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-80 bg-gray-300">
        <img
          src={blogPost.coverImage}
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-homez">
            <Link href="/blog-list-v1" className="text-white/70 hover:text-white flex items-center gap-1 mb-4">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <Badge className="bg-homez-primary text-white mb-4">{blogPost.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{blogPost.title}</h1>
          </div>
        </div>
      </div>

      <div className="container-homez py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b">
              <img
                src={blogPost.authorAvatar}
                alt={blogPost.authorName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{blogPost.authorName}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogPost.publishedAt}
                  </span>
                  <span>{blogPost.readTime} min read</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 mt-6">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={blogPost.authorAvatar}
                    alt={blogPost.authorName}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{blogPost.authorName}</p>
                    <p className="text-sm text-gray-500">Senior Agent</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Profile</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Related Posts</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-20 h-14 bg-gray-200 rounded shrink-0" />
                    <div>
                      <p className="text-sm font-medium line-clamp-2">Understanding Mortgage Rates</p>
                      <p className="text-xs text-gray-500">Feb 12, 2024</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-20 h-14 bg-gray-200 rounded shrink-0" />
                    <div>
                      <p className="text-sm font-medium line-clamp-2">Home Staging Tips</p>
                      <p className="text-xs text-gray-500">Feb 10, 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
