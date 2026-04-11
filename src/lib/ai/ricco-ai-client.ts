/**
 * ricco-ai Client
 * Client for AI services at /v1/ai endpoint
 */

import { riccoAiConfig } from '@/lib/config';
import { apiClient, type ApiResponse } from '@/lib/api/client';

// AI Message types
export interface AIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// AI Chat types
export interface AIChatRequest {
  messages: AIMessage[];
  model?: string;
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  stream?: boolean;
}

export interface AIChatResponse {
  id: string;
  message: AIMessage;
  model: string;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  createdAt: string;
}

// AI Property Description types
export interface PropertyDescriptionRequest {
  propertyType: string;
  features: string[];
  location: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  tone?: 'professional' | 'casual' | 'luxury';
  language?: string;
}

export interface PropertyDescriptionResponse {
  description: string;
  highlights: string[];
  suggestedTitle: string;
}

// AI Property Valuation types
export interface PropertyValuationRequest {
  address: string;
  city: string;
  state: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize?: number;
  yearBuilt?: number;
  features?: string[];
}

export interface PropertyValuationResponse {
  estimatedValue: number;
  valueRange: {
    low: number;
    high: number;
  };
  confidence: number;
  factors: {
    name: string;
    impact: 'positive' | 'negative' | 'neutral';
    description: string;
  }[];
  comparables: {
    address: string;
    price: number;
    sqft: number;
    pricePerSqft: number;
    distance: number;
  }[];
}

// AI Property Recommendation types
export interface PropertyRecommendationRequest {
  userId?: string;
  preferences: {
    propertyTypes?: string[];
    minPrice?: number;
    maxPrice?: number;
    minBedrooms?: number;
    minBathrooms?: number;
    minSqft?: number;
    locations?: string[];
    features?: string[];
  };
  limit?: number;
}

export interface PropertyRecommendationResponse {
  recommendations: {
    propertyId: string;
    score: number;
    reasons: string[];
  }[];
  explanation: string;
}

// AI Image Analysis types
export interface ImageAnalysisRequest {
  imageUrl: string;
  analysisType: 'property' | 'room' | 'exterior' | 'general';
}

export interface ImageAnalysisResponse {
  description: string;
  tags: string[];
  roomType?: string;
  condition?: 'excellent' | 'good' | 'fair' | 'poor';
  features: string[];
  suggestedImprovements?: string[];
}

// AI Search Assistance types
export interface SearchAssistanceRequest {
  query: string;
  context?: {
    recentSearches?: string[];
    viewedProperties?: string[];
    userProfile?: Record<string, unknown>;
  };
}

export interface SearchAssistanceResponse {
  interpretedQuery: string;
  suggestedFilters: {
    key: string;
    value: unknown;
    label: string;
  }[];
  relatedSearches: string[];
  tips: string[];
}

// AI Lead Scoring types
export interface LeadScoringRequest {
  leadData: {
    email?: string;
    phone?: string;
    name?: string;
    inquiryHistory?: {
      propertyId: string;
      timestamp: string;
    }[];
    searchHistory?: {
      query: string;
      timestamp: string;
    }[];
    engagementMetrics?: {
      pageViews: number;
      timeOnSite: number;
      savedProperties: number;
      toursScheduled: number;
    };
  };
}

export interface LeadScoringResponse {
  score: number; // 0-100
  tier: 'hot' | 'warm' | 'cold';
  factors: {
    name: string;
    score: number;
    weight: number;
  }[];
  recommendations: string[];
  bestContactTime?: string;
  preferredContactMethod?: 'email' | 'phone' | 'text';
}

// ricco-ai Client Class
class RiccoAiClient {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = riccoAiConfig.url;
    this.apiKey = riccoAiConfig.apiKey;
  }

  /**
   * Chat completion
   */
  async chat(request: AIChatRequest): Promise<AIChatResponse> {
    const response = await apiClient.post<ApiResponse<AIChatResponse>>(
      `${this.baseUrl}/chat`,
      {
        messages: request.messages,
        model: request.model ?? 'gpt-4',
        temperature: request.temperature ?? 0.7,
        maxTokens: request.maxTokens ?? 2000,
        topP: request.topP ?? 1,
        stream: false,
      },
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'AI chat request failed');
    }

    return response.data;
  }

  /**
   * Generate property description
   */
  async generatePropertyDescription(
    request: PropertyDescriptionRequest
  ): Promise<PropertyDescriptionResponse> {
    const response = await apiClient.post<ApiResponse<PropertyDescriptionResponse>>(
      `${this.baseUrl}/property/description`,
      request,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Property description generation failed');
    }

    return response.data;
  }

  /**
   * Estimate property value
   */
  async estimatePropertyValue(
    request: PropertyValuationRequest
  ): Promise<PropertyValuationResponse> {
    const response = await apiClient.post<ApiResponse<PropertyValuationResponse>>(
      `${this.baseUrl}/property/valuation`,
      request,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Property valuation failed');
    }

    return response.data;
  }

  /**
   * Get property recommendations
   */
  async getPropertyRecommendations(
    request: PropertyRecommendationRequest
  ): Promise<PropertyRecommendationResponse> {
    const response = await apiClient.post<ApiResponse<PropertyRecommendationResponse>>(
      `${this.baseUrl}/property/recommendations`,
      request,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Property recommendations failed');
    }

    return response.data;
  }

  /**
   * Analyze property image
   */
  async analyzeImage(request: ImageAnalysisRequest): Promise<ImageAnalysisResponse> {
    const response = await apiClient.post<ApiResponse<ImageAnalysisResponse>>(
      `${this.baseUrl}/image/analyze`,
      request,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Image analysis failed');
    }

    return response.data;
  }

  /**
   * Get search assistance
   */
  async getSearchAssistance(request: SearchAssistanceRequest): Promise<SearchAssistanceResponse> {
    const response = await apiClient.post<ApiResponse<SearchAssistanceResponse>>(
      `${this.baseUrl}/search/assist`,
      request,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Search assistance failed');
    }

    return response.data;
  }

  /**
   * Score a lead
   */
  async scoreLead(request: LeadScoringRequest): Promise<LeadScoringResponse> {
    const response = await apiClient.post<ApiResponse<LeadScoringResponse>>(
      `${this.baseUrl}/lead/score`,
      request,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Lead scoring failed');
    }

    return response.data;
  }

  /**
   * Generate text content
   */
  async generateText(prompt: string, options?: { temperature?: number; maxTokens?: number }): Promise<string> {
    const response = await this.chat({
      messages: [{ role: 'user', content: prompt }],
      temperature: options?.temperature,
      maxTokens: options?.maxTokens,
    });
    return response.message.content;
  }

  /**
   * Translate text
   */
  async translateText(text: string, targetLanguage: string, sourceLanguage?: string): Promise<string> {
    const prompt = `Translate the following text${sourceLanguage ? ` from ${sourceLanguage}` : ''} to ${targetLanguage}. Only return the translated text without any explanation:\n\n${text}`;
    return this.generateText(prompt);
  }

  /**
   * Summarize text
   */
  async summarizeText(text: string, maxLength?: number): Promise<string> {
    const prompt = `Summarize the following text${maxLength ? ` in no more than ${maxLength} characters` : ''}:\n\n${text}`;
    return this.generateText(prompt);
  }

  // Private helper methods
  private getHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };
  }
}

// Export singleton instance
export const riccoAiClient = new RiccoAiClient();

// Export class for testing
export { RiccoAiClient };
