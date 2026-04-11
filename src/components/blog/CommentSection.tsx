'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, ThumbsUp, Reply, MoreHorizontal, Send } from 'lucide-react';

export interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  publishedAt: string;
  likes: number;
  replies?: Comment[];
}

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
  commentCount: number;
}

export function CommentSection({ postId, comments: initialComments, commentCount }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: `comment-${Date.now()}`,
      author: {
        name: 'You',
        avatar: '/images/avatars/user.jpg',
      },
      content: newComment,
      publishedAt: new Date().toISOString(),
      likes: 0,
      replies: [],
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleSubmitReply = (parentId: string) => {
    if (!replyContent.trim()) return;
    
    const reply: Comment = {
      id: `reply-${Date.now()}`,
      author: {
        name: 'You',
        avatar: '/images/avatars/user.jpg',
      },
      content: replyContent,
      publishedAt: new Date().toISOString(),
      likes: 0,
    };
    
    setComments(comments.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply],
        };
      }
      return comment;
    }));
    
    setReplyContent('');
    setReplyingTo(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <MessageCircle className="h-5 w-5 text-homez-primary" />
        <h3 className="text-xl font-bold">Comments ({commentCount})</h3>
      </div>

      {/* Comment Form */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/images/avatars/user.jpg" alt="Your avatar" />
              <AvatarFallback>Y</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[80px] resize-none border-gray-200 focus:border-homez-primary"
              />
              <div className="flex justify-end mt-3">
                <Button
                  onClick={handleSubmitComment}
                  disabled={!newComment.trim()}
                  className="bg-homez-primary hover:bg-homez-primary/90"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Post Comment
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            {/* Main Comment */}
            <Card className={replyingTo === comment.id ? 'border-homez-primary' : ''}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <Avatar className="w-10 h-10 shrink-0">
                    <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                    <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{comment.author.name}</span>
                      <span className="text-sm text-gray-500">{formatDate(comment.publishedAt)}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{comment.content}</p>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500 hover:text-homez-primary h-8 px-2"
                      >
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {comment.likes > 0 && <span>{comment.likes}</span>}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500 hover:text-homez-primary h-8 px-2"
                        onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                      >
                        <Reply className="h-4 w-4 mr-1" />
                        Reply
                      </Button>
                    </div>

                    {/* Reply Form */}
                    {replyingTo === comment.id && (
                      <div className="mt-4 flex gap-3">
                        <Avatar className="w-8 h-8 shrink-0">
                          <AvatarImage src="/images/avatars/user.jpg" alt="Your avatar" />
                          <AvatarFallback>Y</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <Textarea
                            placeholder="Write a reply..."
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            className="min-h-[60px] resize-none text-sm"
                          />
                          <div className="flex gap-2 mt-2">
                            <Button
                              size="sm"
                              onClick={() => handleSubmitReply(comment.id)}
                              disabled={!replyContent.trim()}
                              className="bg-homez-primary hover:bg-homez-primary/90"
                            >
                              Reply
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setReplyingTo(null)}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-12 space-y-3">
                {comment.replies.map((reply) => (
                  <Card key={reply.id} className="bg-gray-50 border-0 shadow-none">
                    <CardContent className="p-3">
                      <div className="flex gap-3">
                        <Avatar className="w-8 h-8 shrink-0">
                          <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
                          <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-sm">{reply.author.name}</span>
                            <span className="text-xs text-gray-500">{formatDate(reply.publishedAt)}</span>
                          </div>
                          <p className="text-gray-700 text-sm">{reply.content}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 hover:text-homez-primary h-6 px-2 mt-1"
                          >
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            {reply.likes > 0 && <span className="text-xs">{reply.likes}</span>}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
