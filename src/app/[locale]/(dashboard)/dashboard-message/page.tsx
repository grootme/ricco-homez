'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import {
  MessageSquare,
  Send,
  Search,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Image as ImageIcon,
  Smile,
  Check,
  CheckCheck,
  Plus,
  Star,
  AlertCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation, useAuth, useMessageDataSource } from '@/providers';
import type { Conversation, Message } from '@/types';

export default function DashboardMessage() {
  const { t } = useTranslation();
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const messageDataSource = useMessageDataSource();

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  // Fetch conversations
  useEffect(() => {
    async function fetchConversations() {
      if (!user?.id) return;

      setLoading(true);
      setError(null);

      try {
        const result = await messageDataSource.getConversations(user.id);
        setConversations(result);
        if (result.length > 0) {
          setSelectedConversation(result[0]);
        }
      } catch (err) {
        console.error('Failed to fetch conversations:', err);
        setError(t('errors.somethingWentWrong', 'Failed to load messages'));
      } finally {
        setLoading(false);
      }
    }

    fetchConversations();
  }, [user?.id, messageDataSource, t]);

  // Fetch messages for selected conversation
  useEffect(() => {
    async function fetchMessages() {
      if (!selectedConversation) return;

      try {
        const result = await messageDataSource.getConversationMessages(selectedConversation.id);
        setMessages(result.data);
      } catch (err) {
        console.error('Failed to fetch messages:', err);
      }
    }

    fetchMessages();
  }, [selectedConversation, messageDataSource]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation || !user) return;

    try {
      const message = await messageDataSource.sendMessage(selectedConversation.id, {
        senderId: user.id,
        senderName: user.name || 'User',
        senderAvatar: user.avatar,
        content: newMessage,
      });
      setMessages([...messages, message]);
      setNewMessage('');
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  const handleSelectConversation = (conv: Conversation) => {
    setSelectedConversation(conv);
  };

  const filteredConversations = conversations.filter((conv) =>
    conv.participants.some((p: string) => p.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Loading state
  if (authLoading || loading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-10 w-36" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-240px)] min-h-[500px]">
          <Skeleton className="h-full" />
          <Skeleton className="h-full lg:col-span-2" />
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
          <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.messages', 'Messages')}</h1>
          <p className="text-gray-500">{t('profile.communicateClients', 'Communicate with your clients')}</p>
        </div>
        <Button className="bg-homez-primary hover:bg-homez-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          {t('profile.newMessage', 'New Message')}
        </Button>
      </div>

      {/* Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-240px)] min-h-[500px]">
        {/* Conversations List */}
        <Card className="overflow-hidden">
          <CardHeader className="border-b p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={t('search.searchPlaceholder', 'Search messages...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0 overflow-hidden">
            <ScrollArea className="h-[calc(100vh-340px)] min-h-[400px]">
              {filteredConversations.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <MessageSquare className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>{t('common.noResults', 'No conversations')}</p>
                </div>
              ) : (
                filteredConversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => handleSelectConversation(conv)}
                    className={cn(
                      'p-4 border-b cursor-pointer transition-colors',
                      selectedConversation?.id === conv.id
                        ? 'bg-homez-primary/5 border-l-2 border-l-homez-primary'
                        : 'hover:bg-gray-50'
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative shrink-0">
                        <Avatar>
                          <AvatarFallback>{conv.id.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-gray-900 truncate">{conv.id}</p>
                          <span className="text-xs text-gray-400">
                            {new Date(conv.updatedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{conv.id}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2 flex flex-col overflow-hidden">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{selectedConversation.id.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{selectedConversation.id}</CardTitle>
                      <p className="text-sm text-gray-500">{t('profile.conversation', 'Conversation')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Star className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-hidden p-0">
                <ScrollArea className="h-[calc(100vh-500px)] min-h-[300px] p-4" ref={scrollRef}>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          'flex',
                          message.senderId === user?.id ? 'justify-end' : 'justify-start'
                        )}
                      >
                        <div
                          className={cn(
                            'max-w-[70%] rounded-2xl p-3',
                            message.senderId === user?.id
                              ? 'bg-homez-primary text-white rounded-br-none'
                              : 'bg-gray-100 text-gray-900 rounded-bl-none'
                          )}
                        >
                          <p className="text-sm">{message.content}</p>
                          <div
                            className={cn(
                              'flex items-center justify-end gap-1 mt-1',
                              message.senderId === user?.id ? 'text-white/70' : 'text-gray-400'
                            )}
                          >
                            <span className="text-xs">
                              {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                            {message.senderId === user?.id && (
                              message.read ? (
                                <CheckCheck className="h-3 w-3" />
                              ) : (
                                <Check className="h-3 w-3" />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex items-end gap-2">
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="shrink-0">
                      <Paperclip className="h-4 w-4 text-gray-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="shrink-0">
                      <ImageIcon className="h-4 w-4 text-gray-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="shrink-0">
                      <Smile className="h-4 w-4 text-gray-400" />
                    </Button>
                  </div>
                  <Input
                    placeholder={t('profile.typeMessage', 'Type your message...')}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    className="bg-homez-primary hover:bg-homez-primary/90 shrink-0"
                    onClick={handleSendMessage}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MessageSquare className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                <p>{t('profile.selectConversation', 'Select a conversation to start messaging')}</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
