'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from 'react';
import { SKILLS, DEFAULT_SKILL } from '@/lib/ai/skills';
import type { ChatMessage, ChatSkill } from '@/lib/ai/types';

interface ChatContextType {
  messages: ChatMessage[];
  currentSkill: string;
  currentSkillData: ChatSkill;
  isLoading: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleOpen: () => void;
  setSkill: (skillId: string) => void;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  suggestedQuestions: string[];
  abortController: React.MutableRefObject<AbortController | null>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const STORAGE_KEY = 'homez-chat-history';
const SKILL_STORAGE_KEY = 'homez-chat-skill';

function loadMessages(): ChatMessage[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.map((msg: ChatMessage) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
      }));
    }
  } catch {
    // Ignore parse errors
  }
  return [];
}

function saveMessages(messages: ChatMessage[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {
    // Ignore storage errors
  }
}

function loadSkill(): string {
  if (typeof window === 'undefined') return DEFAULT_SKILL;
  return localStorage.getItem(SKILL_STORAGE_KEY) || DEFAULT_SKILL;
}

function saveSkill(skillId: string) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SKILL_STORAGE_KEY, skillId);
  } catch {
    // Ignore storage errors
  }
}

interface ChatProviderProps {
  children: ReactNode;
}

export function ChatProvider({ children }: ChatProviderProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(loadMessages);
  const [currentSkill, setCurrentSkill] = useState<string>(loadSkill);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const abortController = useRef<AbortController | null>(null);

  const currentSkillData = SKILLS[currentSkill] || SKILLS[DEFAULT_SKILL];
  const suggestedQuestions = currentSkillData.suggestedQuestions;

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const setSkill = useCallback((skillId: string) => {
    if (SKILLS[skillId]) {
      setCurrentSkill(skillId);
      saveSkill(skillId);
    }
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      // Abort any ongoing request
      if (abortController.current) {
        abortController.current.abort();
      }

      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'user',
        content: content.trim(),
        timestamp: new Date(),
        skill: currentSkill,
      };

      // Create assistant placeholder
      const assistantId = crypto.randomUUID();
      const assistantMessage: ChatMessage = {
        id: assistantId,
        role: 'assistant',
        content: '',
        timestamp: new Date(),
        skill: currentSkill,
      };

      const updatedMessages = [...messages, userMessage, assistantMessage];
      setMessages(updatedMessages);
      setIsLoading(true);

      // Prepare messages for API (exclude the empty assistant placeholder)
      const apiMessages = updatedMessages
        .filter((m) => m.content !== '' || m.role === 'user')
        .slice(0, -1) // Remove the empty assistant placeholder
        .map((m) => ({
          role: m.role as 'user' | 'assistant',
          content: m.content,
        }));

      const controller = new AbortController();
      abortController.current = controller;

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: apiMessages,
            context: currentSkill,
          }),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error('No reader available');

        const decoder = new TextDecoder();
        let accumulated = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const text = decoder.decode(value, { stream: true });
          const lines = text.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.slice(6));
                if (data.type === 'token' && data.content) {
                  accumulated += data.content;
                  setMessages((prev) =>
                    prev.map((m) =>
                      m.id === assistantId
                        ? { ...m, content: accumulated }
                        : m
                    )
                  );
                } else if (data.type === 'error') {
                  throw new Error(data.error);
                }
              } catch (e) {
                if (e instanceof SyntaxError) continue;
                throw e;
              }
            }
          }
        }

        // Save to localStorage
        setMessages((prev) => {
          const final = prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: accumulated || 'Sorry, I could not generate a response.' }
              : m
          );
          saveMessages(final);
          return final;
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          // User cancelled, keep partial content
          return;
        }
        const errorMessage =
          error instanceof Error ? error.message : 'Something went wrong';
        setMessages((prev) => {
          const updated = prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: `⚠️ ${errorMessage}. Please try again.` }
              : m
          );
          saveMessages(updated);
          return updated;
        });
      } finally {
        setIsLoading(false);
        abortController.current = null;
      }
    },
    [messages, currentSkill, isLoading]
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    saveMessages([]);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages,
        currentSkill,
        currentSkillData,
        isLoading,
        isOpen,
        setIsOpen,
        toggleOpen,
        setSkill,
        sendMessage,
        clearMessages,
        suggestedQuestions,
        abortController,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat(): ChatContextType {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}

export default ChatProvider;
