/**
 * AI Skill Contexts
 * Configuration for different AI assistant skill modes
 */

import type { ChatSkill } from './types';

export const SKILLS: Record<string, ChatSkill> = {
  property_search: {
    id: 'property_search',
    name: 'Property Search',
    icon: 'Search',
    description: 'Find properties matching your criteria',
    systemPrompt:
      'You are a property search expert. Help users find properties by location, type, price range, bedrooms, and other criteria. Reference the available property types: Apartment, House, Villa, Condo, Townhouse, Office.',
    suggestedQuestions: [
      'Find apartments in Miami under $300K',
      'What 3-bedroom houses are available in Los Angeles?',
      'Show me luxury villas with pool',
      'Properties near the beach',
      'New listings in New York this week',
    ],
  },
  market_analysis: {
    id: 'market_analysis',
    name: 'Market Analysis',
    icon: 'TrendingUp',
    description: 'Get real estate market insights',
    systemPrompt:
      'You are a real estate market analyst. Provide insights about property trends, pricing, market conditions, and investment opportunities.',
    suggestedQuestions: [
      'Is it a good time to buy in Miami?',
      'What are the hottest neighborhoods in 2025?',
      'How have property prices changed this year?',
      'Best areas for investment returns',
      'Rental market trends in my area',
    ],
  },
  mortgage_calculator: {
    id: 'mortgage_calculator',
    name: 'Mortgage Calculator',
    icon: 'Calculator',
    description: 'Calculate mortgage payments',
    systemPrompt:
      'You are a mortgage calculator expert. Help users estimate monthly payments, understand loan terms, compare rates, and calculate affordability.',
    suggestedQuestions: [
      'Calculate monthly payment for $500K at 6.5%',
      'How much house can I afford on $80K salary?',
      'Compare 15-year vs 30-year mortgage',
      'What is PMI and when is it required?',
      'Best mortgage rates for first-time buyers',
    ],
  },
  neighborhood_guide: {
    id: 'neighborhood_guide',
    name: 'Neighborhood Guide',
    icon: 'MapPin',
    description: 'Learn about neighborhoods',
    systemPrompt:
      'You are a neighborhood guide expert. Provide information about schools, safety, amenities, transportation, walkability, and lifestyle in different areas.',
    suggestedQuestions: [
      'Best neighborhoods for families in Austin',
      'Safest areas in Chicago with good schools',
      'Walkable neighborhoods with nightlife',
      'Best areas for remote workers',
      'Up and coming neighborhoods to watch',
    ],
  },
  investment_advice: {
    id: 'investment_advice',
    name: 'Investment Advice',
    icon: 'DollarSign',
    description: 'Real estate investment guidance',
    systemPrompt:
      'You are a real estate investment advisor. Help users understand investment strategies, ROI calculations, property valuation, and portfolio management.',
    suggestedQuestions: [
      'Is flipping houses still profitable?',
      'Best cities for rental property investment',
      'How to calculate ROI on a rental property',
      'REITs vs direct property investment',
      'Tax benefits of real estate investing',
    ],
  },
  selling_tips: {
    id: 'selling_tips',
    name: 'Selling Tips',
    icon: 'Home',
    description: 'Tips for selling your property',
    systemPrompt:
      'You are a home selling expert. Help users prepare their property for sale, price it correctly, stage it, and negotiate offers.',
    suggestedQuestions: [
      'How to increase my home value before selling',
      'Best time of year to sell a house',
      'How to stage my home for quick sale',
      'Should I use a realtor or sell by owner?',
      'How to negotiate the best offer',
    ],
  },
};

export const DEFAULT_SKILL = 'property_search';

export function getSkill(skillId: string): ChatSkill | undefined {
  return SKILLS[skillId];
}

export function getSkillList(): ChatSkill[] {
  return Object.values(SKILLS);
}

export function getSkillSystemPrompt(skillId: string): string {
  const basePrompt =
    'You are Homez AI Assistant, an expert real estate advisor for the Homez platform. You help users find properties, understand market trends, calculate mortgage payments, and provide neighborhood insights. Be friendly, professional, and concise. Respond in the same language the user uses.';
  const skill = SKILLS[skillId];
  if (skill) {
    return `${basePrompt}\n\n${skill.systemPrompt}`;
  }
  return basePrompt;
}
