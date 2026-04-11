import { NextRequest } from 'next/server';
import { getSkillSystemPrompt } from '@/lib/ai/skills';

const BASE_SYSTEM_PROMPT =
  'You are Homez AI Assistant, an expert real estate advisor for the Homez platform. You help users find properties, understand market trends, calculate mortgage payments, and provide neighborhood insights. Be friendly, professional, and concise. Respond in the same language the user uses.';

// Mock responses for when AI SDK is not available
const MOCK_RESPONSES: Record<string, string[]> = {
  property_search: [
    "I'd be happy to help you find a property! Could you tell me more about what you're looking for? For example:\n- Location preference\n- Budget range\n- Number of bedrooms\n- Property type (house, apartment, condo)",
    "Based on current market trends, here are some popular areas to consider:\n\n1. **Downtown** - Great for urban living with easy access to amenities\n2. **Suburbs** - More space and family-friendly neighborhoods\n3. **Waterfront** - Premium properties with scenic views\n\nWould you like me to narrow down the search?",
  ],
  market_analysis: [
    "Here's a quick market overview:\n\n📊 **Current Trends:**\n- Property prices have seen steady growth of 3-5% annually\n- Urban areas remain in high demand\n- Interest rates are stabilizing, making it a good time to explore financing options\n\nWould you like specific insights for a particular area?",
  ],
  mortgage_calculator: [
    "I can help you estimate mortgage payments! Here's a quick example:\n\n🏠 **$400,000 home**\n- 20% down payment: $80,000\n- Loan amount: $320,000\n- At 6.5% interest for 30 years\n- **Monthly payment: ~$2,023**\n\nThis includes principal and interest only. Property taxes and insurance would add approximately $200-400/month.\n\nWant me to calculate for different numbers?",
  ],
};

function getRandomMockResponse(context: string): string {
  const responses = MOCK_RESPONSES[context] || MOCK_RESPONSES['property_search'];
  return responses[Math.floor(Math.random() * responses.length)];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, context } = body as {
      messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
      context?: string;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Messages are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Build system prompt
    const systemPrompt = context
      ? getSkillSystemPrompt(context)
      : BASE_SYSTEM_PROMPT;

    const fullMessages = [
      { role: 'system' as const, content: systemPrompt },
      ...messages,
    ];

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        try {
          // Try to use z-ai-web-dev-sdk
          let zai;
          try {
            const ZAI = (await import('z-ai-web-dev-sdk')).default;
            zai = await ZAI.create();
          } catch {
            // SDK not available, fall back to mock
            zai = null;
          }

          let content = '';

          if (zai) {
            // Use real AI
            const completion = await zai.chat.completions.create({
              messages: fullMessages,
              temperature: 0.7,
              max_tokens: 2048,
            });
            content = completion.choices[0]?.message?.content || '';
          } else {
            // Use mock response
            content = getRandomMockResponse(context || 'property_search');
            // Simulate a small delay before starting to stream
            await new Promise((resolve) => setTimeout(resolve, 500));
          }

          if (!content) {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ type: 'done', content: '' })}\n\n`)
            );
            controller.close();
            return;
          }

          // Stream the response token by token
          for (let i = 0; i < content.length; i++) {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ type: 'token', content: content[i] })}\n\n`)
            );
            // Simulate streaming
            if (i % 3 === 0) {
              await new Promise((resolve) => setTimeout(resolve, 5));
            }
          }

          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: 'done', content: '' })}\n\n`)
          );
          controller.close();
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : 'An error occurred';
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ type: 'error', error: errorMessage })}\n\n`
            )
          );
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Internal server error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
