'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Star,
  MessageSquare,
  ThumbsUp,
  Filter,
  Send,
  X,
  Building2,
  AlertCircle,
} from 'lucide-react';
import { useTranslation, useAuth, useReviewDataSource } from '@/providers';
import type { Review } from '@/types';

interface ReviewWithProperty extends Review {
  propertyTitle?: string;
}

export default function DashboardReviews() {
  const { t } = useTranslation();
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const reviewDataSource = useReviewDataSource();

  const [reviews, setReviews] = useState<ReviewWithProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  // Fetch reviews
  useEffect(() => {
    async function fetchReviews() {
      if (!user?.id) return;

      setLoading(true);
      setError(null);

      try {
        const result = await reviewDataSource.getReviews({ agentId: user.id });
        setReviews(result.data);
      } catch (err) {
        console.error('Failed to fetch reviews:', err);
        setError(t('errors.somethingWentWrong', 'Failed to load reviews'));
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [user?.id, reviewDataSource, t]);

  // Calculate rating summary
  const ratingSummary = {
    average: reviews.length > 0 
      ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length 
      : 0,
    total: reviews.length,
    distribution: [5, 4, 3, 2, 1].map((stars) => ({
      stars,
      count: reviews.filter((r) => r.rating === stars).length,
      percentage: reviews.length > 0 
        ? (reviews.filter((r) => r.rating === stars).length / reviews.length) * 100 
        : 0,
    })),
  };

  const filteredReviews = filterRating
    ? reviews.filter((r) => r.rating === filterRating)
    : reviews;

  const handleReply = async (reviewId: string) => {
    if (!replyContent.trim()) return;
    
    try {
      await reviewDataSource.updateReview(reviewId, {
        response: {
          content: replyContent,
          date: new Date().toISOString(),
        },
      });
      
      setReviews((prev) =>
        prev.map((r) =>
          r.id === reviewId
            ? {
                ...r,
                response: {
                  content: replyContent,
                  date: new Date().toISOString(),
                },
              }
            : r
        )
      );
      setReplyingTo(null);
      setReplyContent('');
    } catch (err) {
      console.error('Failed to submit response:', err);
    }
  };

  // Loading state
  if (authLoading || loading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>
        <Skeleton className="h-48" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48" />
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
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
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.myReviews', 'Reviews')}</h1>
          <p className="text-gray-500">{t('profile.manageReviews', 'Manage reviews from your clients')}</p>
        </div>
        <Button variant="outline" onClick={() => setFilterRating(null)}>
          <Filter className="h-4 w-4 mr-2" />
          {t('common.clear', 'Clear Filters')}
        </Button>
      </div>

      {/* Rating Summary */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Overall Rating */}
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold text-gray-900">{ratingSummary.average.toFixed(1)}</div>
              <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.round(ratingSummary.average)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">{ratingSummary.total} {t('property.reviews', 'reviews')}</p>
            </div>

            {/* Rating Distribution */}
            <div className="flex-1">
              <div className="space-y-2">
                {ratingSummary.distribution.map((item) => (
                  <button
                    key={item.stars}
                    onClick={() => setFilterRating(item.stars === filterRating ? null : item.stars)}
                    className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                      filterRating === item.stars ? 'bg-homez-primary/10' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-1 w-12">
                      <span className="text-sm font-medium">{item.stars}</span>
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </div>
                    <Progress value={item.percentage} className="flex-1 h-2" />
                    <span className="text-sm text-gray-500 w-8">{item.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Empty State */}
      {reviews.length === 0 ? (
        <Card className="py-16">
          <CardContent className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('common.noResults', 'No reviews yet')}</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              {t('profile.noReviewsDesc', 'Reviews from your clients will appear here.')}
            </p>
          </CardContent>
        </Card>
      ) : (
        /* Reviews List */
        <div className="space-y-4">
          {filteredReviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={review.userAvatar} />
                      <AvatarFallback>{review.userName?.charAt(0) || 'U'}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">{review.userName}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {review.rating}.0
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {review.propertyId && (
                      <Link
                        href={`/single-v1/${review.propertyId}`}
                        className="text-sm font-medium text-homez-primary hover:underline flex items-center gap-1"
                      >
                        <Building2 className="h-4 w-4" />
                        {review.propertyTitle || t('property.property', 'Property')}
                      </Link>
                    )}
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-4">{review.content}</p>

                {/* Response */}
                {review.response ? (
                  <div className="bg-gray-50 rounded-lg p-4 ml-8 border-l-2 border-homez-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-homez-primary" />
                      <span className="text-sm font-medium text-gray-900">{t('profile.yourResponse', 'Your Response')}</span>
                      <span className="text-xs text-gray-400">
                        {new Date(review.response.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{review.response.content}</p>
                  </div>
                ) : replyingTo === review.id ? (
                  <div className="ml-8 space-y-3">
                    <Textarea
                      placeholder={t('profile.writeResponse', 'Write your response...')}
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      rows={3}
                    />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-homez-primary hover:bg-homez-primary/90"
                        onClick={() => handleReply(review.id)}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        {t('profile.sendReply', 'Send Reply')}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setReplyingTo(null);
                          setReplyContent('');
                        }}
                      >
                        <X className="h-4 w-4 mr-2" />
                        {t('common.cancel', 'Cancel')}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="ml-8"
                    onClick={() => setReplyingTo(review.id)}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {t('profile.reply', 'Reply')}
                  </Button>
                )}

                {/* Actions */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                  <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-homez-primary">
                    <ThumbsUp className="h-4 w-4" />
                    {t('profile.helpful', 'Helpful')}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
