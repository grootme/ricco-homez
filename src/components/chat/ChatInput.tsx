'use client';

import { useState, useRef, type KeyboardEvent, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useChat } from './ChatProvider';

export function ChatInput() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendMessage, isLoading } = useChat();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput('');
    // Re-focus input
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-border/50">
      <Input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about properties, markets, neighborhoods..."
        disabled={isLoading}
        className={cn(
          'flex-1 h-10 rounded-xl text-sm border-border/60',
          'focus-visible:ring-1 focus-visible:ring-primary/30 focus-visible:border-primary/40',
          'bg-muted/50 placeholder:text-muted-foreground/60'
        )}
      />
      <Button
        type="submit"
        size="icon"
        disabled={!input.trim() || isLoading}
        className={cn(
          'h-10 w-10 rounded-xl shrink-0',
          'bg-primary hover:bg-primary/90',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          'transition-all duration-200'
        )}
      >
        <Send className="size-4" />
        <span className="sr-only">Send</span>
      </Button>
    </form>
  );
}
