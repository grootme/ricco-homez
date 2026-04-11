'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useChat } from './ChatProvider';

export function SuggestedQuestions() {
  const { suggestedQuestions, sendMessage, isLoading, messages } = useChat();

  // Don't show suggestions if there are messages (after conversation starts)
  const hasConversation = messages.some((m) => m.content.length > 0 && m.role === 'assistant');
  if (hasConversation || isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={suggestedQuestions.join('-')}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
        className="flex flex-col gap-2 px-4 pb-2"
      >
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground/70 px-1">
          <Sparkles className="size-3" />
          <span>Suggested questions</span>
        </div>
        <div className="flex flex-col gap-1.5">
          {suggestedQuestions.map((question, index) => (
            <motion.button
              key={question}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => sendMessage(question)}
              className={cn(
                'flex items-start gap-2 rounded-lg px-3 py-2 text-left text-xs',
                'bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground',
                'transition-all duration-150 group cursor-pointer',
                'border border-transparent hover:border-border/50'
              )}
            >
              <span className="text-primary/60 font-medium mt-0.5 shrink-0">→</span>
              <span className="leading-relaxed group-hover:text-foreground/90">{question}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
