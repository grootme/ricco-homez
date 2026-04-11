'use client';

import { useState } from 'react';
import { Property } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Star, ThumbsUp, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

interface PropertyReviewsProps {
  property: Property;
  variant?: 'default' | 'compact' | 'summary';
}

interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  response?: {
    agentName: string;
    content: string;
    date: string;
  };
}

// Mock reviews data
const mockReviews: Review[] = [
  {
    id: 'r-1',
    userName: 'Michael Johnson',
    userAvatar: '',
    rating: 5,
    date: '2024-02-15',
    title: 'Absolutely stunning property!',
    content: 'This property exceeded all my expectations. The views are breathtaking, and the smart home features make everyday living so convenient. The agent was incredibly helpful throughout the entire process.',
    helpful: 24,
    response: {
      agentName: 'Sarah Williams',
      content: 'Thank you so much for your kind words, Michael! It was a pleasure helping you find your dream home. Enjoy the beautiful views!',
      date: '2024-02-16',
    },
  },
  {
    id: 'r-2',
    userName: 'Emily Chen',
    userAvatar: '',
    rating: 4,
    date: '2024-01-28',
    title: 'Great location and amenities',
    content: 'The location is perfect - close to everything yet still private. The infinity pool is amazing. Only giving 4 stars because some minor repairs were needed, but the team was quick to address them.',
    helpful: 18,
  },
  {
    id: 'r-3',
    userName: 'David Thompson',
    userAvatar: '',
    rating: 5,
    date: '2024-01-10',
    title: 'Best investment we\'ve made',
    content: 'We purchased this as a vacation home and couldn\'t be happier. The property is even more beautiful in person. The wine cellar and home theater are our favorite features. Highly recommend!',
    helpful: 32,
    response: {
      agentName: 'Sarah Williams',
      content: 'Thank you, David! We\'re thrilled that you\'re enjoying your new vacation home. Cheers to many wonderful memories ahead!',
      date: '2024-01-11',
    },
  },
  {
    id: 'r-4',
    userName: 'Jessica Martinez',
    userAvatar: '',
    rating: 5,
    date: '2023-12-20',
    title: 'Dream home found!',
    content: 'After months of searching, we finally found our dream home. The property has everything we wanted and more. The ocean views never get old. The selling process was smooth and professional.',
    helpful: 15,
  },
];

// Rating distribution
const ratingDistribution = {
  5: 75,
  4: 20,
  3: 5,
  2: 0,
  1: 0,
};

export default function PropertyReviews({
  property,
  variant = 'default',
}: PropertyReviewsProps) {
  const [showAll, setShowAll] = useState(false);
  const [helpfulReviews, setHelpfulReviews] = useState<string[]>([]);

  const displayReviews = showAll ? mockReviews : mockReviews.slice(0, 2);

  const averageRating = mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length;

  const handleHelpful = (reviewId: string) => {
    if (!helpfulReviews.includes(reviewId)) {
      setHelpfulReviews([...helpfulReviews, reviewId]);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  if (variant === 'summary') {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-homez-primary">{averageRating.toFixed(1)}</p>
            {renderStars(Math.round(averageRating))}
            <p className="text-xs text-gray-500 mt-1">{mockReviews.length} reviews</p>
          </div>
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2 text-xs">
                <span className="w-3">{rating}</span>
                <Progress 
                  value={ratingDistribution[rating as keyof typeof ratingDistribution]} 
                  className="h-1.5 flex-1"
                />
                <span className="text-gray-400 w-8">{ratingDistribution[rating as keyof typeof ratingDistribution]}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Reviews</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="font-semibold">{averageRating.toFixed(1)}</span>
            <span className="text-gray-500 text-sm">({mockReviews.length})</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {mockReviews.slice(0, 2).map((review) => (
            <div key={review.id} className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={review.userAvatar} />
                <AvatarFallback className="bg-gray-100 text-xs">
                  {getInitials(review.userName)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm">{review.userName}</p>
                  {renderStars(review.rating)}
                </div>
                <p className="text-xs text-gray-500 line-clamp-2">{review.content}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="ghost" size="sm" className="w-full mt-3 text-homez-primary">
          View all {mockReviews.length} reviews
        </Button>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-homez-primary" />
          <h2 className="text-xl font-bold">Reviews</h2>
        </div>
        <Button variant="outline" size="sm">Write a Review</Button>
      </div>

      {/* Rating Summary */}
      <div className="flex items-center gap-6 mb-6 pb-6 border-b">
        <div className="text-center">
          <p className="text-4xl font-bold text-homez-primary">{averageRating.toFixed(1)}</p>
          {renderStars(Math.round(averageRating))}
          <p className="text-sm text-gray-500 mt-1">{mockReviews.length} reviews</p>
        </div>
        
        <div className="flex-1 space-y-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <span className="text-sm w-6">{rating} star</span>
              <Progress 
                value={ratingDistribution[rating as keyof typeof ratingDistribution]} 
                className="h-2 flex-1"
              />
              <span className="text-sm text-gray-500 w-10">
                {ratingDistribution[rating as keyof typeof ratingDistribution]}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {displayReviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-0">
            <div className="flex items-start gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={review.userAvatar} />
                <AvatarFallback className="bg-gray-100">
                  {getInitials(review.userName)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <p className="font-semibold">{review.userName}</p>
                    <div className="flex items-center gap-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="font-medium mt-2">{review.title}</h4>
                <p className="text-gray-600 mt-1">{review.content}</p>
                
                {/* Agent Response */}
                {review.response && (
                  <div className="mt-4 bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      Response from {review.response.agentName}
                    </p>
                    <p className="text-sm text-gray-600">{review.response.content}</p>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(review.response.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                )}

                {/* Helpful Button */}
                <button
                  onClick={() => handleHelpful(review.id)}
                  className={`flex items-center gap-1 mt-3 text-sm ${
                    helpfulReviews.includes(review.id)
                      ? 'text-homez-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <ThumbsUp className={`h-4 w-4 ${helpfulReviews.includes(review.id) ? 'fill-current' : ''}`} />
                  Helpful ({review.helpful + (helpfulReviews.includes(review.id) ? 1 : 0)})
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {mockReviews.length > 2 && (
        <Button
          variant="ghost"
          className="w-full mt-4 text-homez-primary"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? (
            <>
              Show Less
              <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Show All {mockReviews.length} Reviews
              <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}
