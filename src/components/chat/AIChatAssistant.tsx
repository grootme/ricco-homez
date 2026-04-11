'use client';

import { useState, useRef, useCallback } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import React from 'react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const STORAGE_KEY = 'homez-chat-history';

function loadMessages(): ChatMessage[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored).map((msg: ChatMessage) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
      }));
    }
  } catch { /* ignore */ }
  return [];
}

function saveMessagesToStorage(messages: ChatMessage[]) {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages)); } catch { /* ignore */ }
}

function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => loadMessages());
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const hasMessages = messages.some((m) => m.content.length > 0);

  // Scroll to bottom on new messages
  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send message to AI
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;
    if (abortRef.current) abortRef.current.abort();

    const userMsg: ChatMessage = {
      id: Date.now().toString() + '-user',
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    const asstId = Date.now().toString() + '-asst';
    const asstMsg: ChatMessage = {
      id: asstId,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg, asstMsg]);
    setIsLoading(true);
    setInput('');

    const apiMsgs = messages
      .filter((m) => m.content.length > 0)
      .concat(userMsg)
      .map((m) => ({ role: m.role, content: m.content }));

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMsgs, context: 'property_search' }),
        signal: controller.signal,
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const reader = res.body?.getReader();
      if (!reader) throw new Error('No response stream');

      const decoder = new TextDecoder();
      let accumulated = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value, { stream: true });
        for (const line of text.split('\n')) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.type === 'token' && data.content) {
                accumulated += data.content;
                setMessages((prev) =>
                  prev.map((m) => (m.id === asstId ? { ...m, content: accumulated } : m))
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

      setMessages((prev) => {
        const final = prev.map((m) =>
          m.id === asstId
            ? { ...m, content: accumulated || 'Sorry, I could not generate a response.' }
            : m
        );
        saveMessagesToStorage(final);
        return final;
      });
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      const errMsg = error instanceof Error ? error.message : 'Something went wrong';
      setMessages((prev) => {
        const updated = prev.map((m) =>
          m.id === asstId ? { ...m, content: `Error: ${errMsg}` } : m
        );
        saveMessagesToStorage(updated);
        return updated;
      });
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Chat Button - always rendered */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          title="Open Chat"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--primary, #2563eb)',
            color: '#fff',
            boxShadow: '0 4px 15px rgba(37,99,235,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(37,99,235,0.4)';
          }}
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            width: '380px',
            maxWidth: 'calc(100vw - 32px)',
            height: '500px',
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              borderBottom: '1px solid #e5e7eb',
              background: 'linear-gradient(to right, rgba(37,99,235,0.05), transparent)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(37,99,235,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={16} color="#2563eb" />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>Homez AI Assistant</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: isLoading ? '#fbbf24' : '#34d399',
                    }}
                  />
                  <span style={{ fontSize: '10px', color: '#6b7280' }}>
                    {isLoading ? 'Thinking...' : 'Online'}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
              }}
              title="Close Chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '8px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {!hasMessages && !isLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '12px', padding: '24px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(52,211,153,0.1))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Sparkles size={24} color="#2563eb" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '14px', fontWeight: 500, margin: '0 0 4px', color: '#111827' }}>How can I help you?</p>
                  <p style={{ fontSize: '12px', margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                    Ask me about properties, market trends, mortgage calculations, and more.
                  </p>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
                  {[
                    'Find apartments in Miami under $300K',
                    'Is it a good time to buy property?',
                    'How much house can I afford?',
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      style={{
                        textAlign: 'left',
                        border: '1px solid transparent',
                        borderRadius: '8px',
                        padding: '8px 12px',
                        fontSize: '12px',
                        color: '#6b7280',
                        backgroundColor: '#f9fafb',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.15s',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                        e.currentTarget.style.color = '#111827';
                        e.currentTarget.style.borderColor = '#e5e7eb';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#f9fafb';
                        e.currentTarget.style.color = '#6b7280';
                        e.currentTarget.style.borderColor = 'transparent';
                      }}
                    >
                      <span style={{ color: '#2563eb', fontWeight: 500 }}>&#8594;</span>
                      <span>{q}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message) => {
                const isUser = message.role === 'user';
                return (
                  <div
                    key={message.id}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      padding: '8px 16px',
                      flexDirection: isUser ? 'row-reverse' : 'row',
                    }}
                  >
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 600,
                      flexShrink: 0,
                      backgroundColor: isUser ? '#2563eb' : '#d1fae5',
                      color: isUser ? '#fff' : '#047857',
                    }}>
                      {isUser ? 'U' : 'AI'}
                    </div>
                    <div style={{
                      maxWidth: '80%',
                      borderRadius: '16px',
                      padding: '10px 14px',
                      fontSize: '13px',
                      lineHeight: '1.6',
                      backgroundColor: isUser ? '#2563eb' : '#f3f4f6',
                      color: isUser ? '#fff' : '#111827',
                      borderBottomRightRadius: isUser ? '4px' : '16px',
                      borderBottomLeftRadius: isUser ? '16px' : '4px',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}>
                      {message.content || (
                        <span style={{ display: 'inline-flex', gap: '4px' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#9ca3af', animation: 'bounce 1s infinite 0ms' }} />
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#9ca3af', animation: 'bounce 1s infinite 150ms' }} />
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#9ca3af', animation: 'bounce 1s infinite 300ms' }} />
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
              borderTop: '1px solid #e5e7eb',
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about properties, markets..."
              disabled={isLoading}
              style={{
                flex: 1,
                height: '40px',
                borderRadius: '12px',
                border: '1px solid #d1d5db',
                padding: '0 12px',
                fontSize: '13px',
                outline: 'none',
                backgroundColor: '#f9fafb',
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: input.trim() && !isLoading ? '#2563eb' : '#d1d5db',
                color: '#fff',
                cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background-color 0.2s',
              }}
            >
              <MessageCircle size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export function AIChatAssistant() {
  return <ChatPanel />;
}

export default AIChatAssistant;
