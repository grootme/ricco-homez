/**
 * AI Chat Types
 * Type definitions for the AI Chat Assistant system
 */

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  skill?: string;
}

export interface ChatSkill {
  id: string;
  name: string;
  icon: string;
  description: string;
  systemPrompt: string;
  suggestedQuestions: string[];
}

export interface ChatState {
  messages: ChatMessage[];
  currentSkill: string;
  isLoading: boolean;
  isOpen: boolean;
}

export interface ChatRequestBody {
  messages: Array<{
    role: 'system' | 'user' | 'assistant';
    content: string;
  }>;
  context?: string;
}

export interface ChatStreamChunk {
  type: 'token' | 'done' | 'error';
  content?: string;
  error?: string;
}
