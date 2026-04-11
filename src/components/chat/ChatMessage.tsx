'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import type { ChatMessage as ChatMessageType } from '@/lib/ai/types';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: ChatMessageType;
  isStreaming?: boolean;
}

function ChatMessageComponent({ message, isStreaming }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn('flex gap-2.5 px-4 py-2', isUser ? 'flex-row-reverse' : 'flex-row')}
    >
      <Avatar className="size-7 shrink-0 mt-0.5">
        <AvatarFallback
          className={cn(
            'text-xs',
            isUser
              ? 'bg-primary text-primary-foreground'
              : 'bg-emerald-100 text-emerald-700'
          )}
        >
          {isUser ? <User className="size-3.5" /> : <Bot className="size-3.5" />}
        </AvatarFallback>
      </Avatar>

      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
          isUser
            ? 'bg-primary text-primary-foreground rounded-br-md'
            : 'bg-muted text-foreground rounded-bl-md'
        )}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="prose prose-sm max-w-none prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-pre:my-2 prose-blockquote:my-1">
            <ReactMarkdown>{message.content}</ReactMarkdown>
            {isStreaming && !message.content && (
              <div className="flex items-center gap-1 py-1">
                <motion.span
                  className="size-1.5 rounded-full bg-muted-foreground/50"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                />
                <motion.span
                  className="size-1.5 rounded-full bg-muted-foreground/50"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                />
                <motion.span
                  className="size-1.5 rounded-full bg-muted-foreground/50"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                />
              </div>
            )}
            {isStreaming && message.content && (
              <motion.span
                className="inline-block w-0.5 h-4 bg-muted-foreground/60 ml-0.5 align-text-bottom"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export const ChatMessage = memo(ChatMessageComponent);
