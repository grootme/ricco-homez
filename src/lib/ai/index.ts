/**
 * AI Exports
 * Central export for AI related modules
 */

// ricco-ai Client
export {
  riccoAiClient,
  RiccoAiClient,
  type AIMessage,
  type AIChatRequest,
  type AIChatResponse,
  type PropertyDescriptionRequest,
  type PropertyDescriptionResponse,
  type PropertyValuationRequest,
  type PropertyValuationResponse,
  type PropertyRecommendationRequest,
  type PropertyRecommendationResponse,
  type ImageAnalysisRequest,
  type ImageAnalysisResponse,
  type SearchAssistanceRequest,
  type SearchAssistanceResponse,
  type LeadScoringRequest,
  type LeadScoringResponse,
} from './ricco-ai-client';

// Skills & Types
export { SKILLS, DEFAULT_SKILL, getSkill, getSkillList, getSkillSystemPrompt } from './skills';
export type { ChatMessage, ChatSkill, ChatState, ChatRequestBody, ChatStreamChunk } from './types';

// Re-export config
export { riccoAiConfig } from '@/lib/config';
