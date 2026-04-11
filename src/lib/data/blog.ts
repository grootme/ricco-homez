import { BlogPost } from '@/types';

// Blog images from Unsplash
const blogImages = {
  homeBuying: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
  homeStaging: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop',
  mortgage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
  investment: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=500&fit=crop',
  neighborhood: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
  ecoFriendly: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=500&fit=crop',
};

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    title: '10 Essential Tips for First-Time Home Buyers',
    slug: '10-essential-tips-first-time-home-buyers',
    excerpt: 'Navigate the home buying process with confidence using these essential tips for first-time buyers. From getting pre-approved to closing day, we cover everything you need to know.',
    content: `Buying your first home is one of the most significant financial decisions you'll ever make. It's an exciting journey, but it can also be overwhelming if you're not prepared.

## 1. Get Your Finances in Order

Before you start house hunting, take a close look at your financial situation. Check your credit score, save for a down payment, and get pre-approved for a mortgage. This will give you a clear picture of what you can afford.

## 2. Determine Your Budget

Don't just rely on what lenders will approve. Consider your monthly expenses, future plans, and emergency fund. A good rule of thumb is to keep your housing costs at or below 28% of your gross monthly income.

## 3. Research Neighborhoods

Location is everything in real estate. Research school districts, commute times, local amenities, and future development plans. Visit neighborhoods at different times of day to get a true feel for the area.

## 4. Hire a Qualified Real Estate Agent

A good agent can save you time, money, and stress. Look for someone with local expertise, good reviews, and who you feel comfortable communicating with.

## 5. Don't Skip the Home Inspection

Never waive the inspection contingency. A professional inspector can uncover potential issues that could cost thousands in repairs down the line.

## 6. Consider Resale Value

Even if you plan to stay in your home for years, life can be unpredictable. Consider how easy it will be to sell the property in the future.

## 7. Understand the Total Cost of Ownership

Your mortgage is just the beginning. Factor in property taxes, insurance, maintenance, and potential HOA fees when determining affordability.

## 8. Don't Make Major Purchases Before Closing

Avoid buying furniture, cars, or making other large purchases before closing. This can affect your debt-to-income ratio and potentially derail your loan approval.

## 9. Be Prepared for Closing Costs

Closing costs typically range from 2% to 5% of the home price. Budget for these expenses upfront so there are no surprises.

## 10. Take Your Time

Don't rush into a decision. The right home is worth waiting for. Trust the process and don't let emotions override your judgment.`,
    coverImage: blogImages.homeBuying,
    authorId: 'agent-001',
    authorName: 'Sarah Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
    category: 'Buying Tips',
    tags: ['first-time buyers', 'home buying', 'real estate tips', 'mortgage'],
    views: 15420,
    readTime: 8,
    publishedAt: '2024-01-15T10:00:00Z',
    createdAt: '2024-01-14T14:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    status: 'published',
    featured: true,
  },
  {
    id: 'blog-002',
    title: 'How to Stage Your Home for a Quick Sale',
    slug: 'how-to-stage-home-quick-sale',
    excerpt: 'Learn the secrets of professional home staging that can help sell your property faster and for more money. From decluttering to curb appeal, we cover all the essentials.',
    content: `Home staging is one of the most effective ways to make your property stand out in a competitive market. Studies show that staged homes sell faster and often for higher prices than unstaged properties.

## The Power of First Impressions

When potential buyers walk through your door, they're not just looking at a house—they're imagining their future home. Effective staging helps them see that vision.

## Start with Decluttering

Remove personal items, excess furniture, and anything that makes rooms feel cramped. The goal is to create a clean, spacious environment where buyers can envision their own belongings.

## Deep Clean Everything

A spotless home signals that the property has been well-maintained. Pay special attention to kitchens, bathrooms, and windows. Consider hiring professional cleaners for the best results.

## Neutralize Your Color Palette

Bold colors can be polarizing. Repaint walls in neutral tones like beige, gray, or white to appeal to a broader range of buyers.

## Highlight Key Features

Draw attention to your home's best features. If you have beautiful hardwood floors, remove area rugs. If there's a stunning view, make sure window treatments don't obstruct it.

## Create Inviting Spaces

Stage rooms for their intended purpose. A spare room used for storage should be transformed into a bedroom, office, or nursery to help buyers see its potential.

## Don't Forget Curb Appeal

The exterior is the first thing buyers see. Maintain your lawn, add fresh mulch, paint the front door, and ensure walkways are clean and welcoming.

## Lighting Matters

Good lighting makes spaces feel larger and more inviting. Open curtains, clean windows, and add lamps to dark corners. Replace outdated fixtures if needed.

## Add Finishing Touches

Fresh flowers, throw pillows, and area rugs can add warmth and style without major investment. Keep it simple and elegant.

## Consider Professional Help

Professional stagers have expertise in maximizing a home's appeal. If your budget allows, their services can be a worthwhile investment.`,
    coverImage: blogImages.homeStaging,
    authorId: 'agent-002',
    authorName: 'Michael Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    category: 'Selling Tips',
    tags: ['home staging', 'selling tips', 'home improvement', 'interior design'],
    views: 12350,
    readTime: 7,
    publishedAt: '2024-01-12T10:00:00Z',
    createdAt: '2024-01-11T14:00:00Z',
    updatedAt: '2024-01-12T10:00:00Z',
    status: 'published',
    featured: true,
  },
  {
    id: 'blog-003',
    title: 'Understanding Mortgage Rates in 2024',
    slug: 'understanding-mortgage-rates-2024',
    excerpt: 'A comprehensive guide to current mortgage rates and what they mean for buyers and homeowners. Learn about rate trends, refinancing, and how to get the best deal.',
    content: `Mortgage rates play a crucial role in determining what you can afford when buying a home. Understanding how they work and what drives them can help you make informed decisions.

## What Affects Mortgage Rates?

Mortgage rates are influenced by various factors including the Federal Reserve's policies, inflation, economic growth, and the overall bond market. When the economy is strong, rates tend to rise; when it's weak, rates often fall.

## Fixed vs. Adjustable Rate Mortgages

Fixed-rate mortgages offer stability with consistent payments throughout the loan term. Adjustable-rate mortgages (ARMs) start with lower rates that can change over time. Choosing between them depends on your plans and risk tolerance.

## The Impact of Your Credit Score

Your credit score significantly affects the rate you'll receive. Higher scores typically mean lower rates. Before applying for a mortgage, check your credit report and address any issues.

## Down Payment Considerations

A larger down payment can help you secure a better rate. It also reduces your loan amount and eliminates the need for private mortgage insurance (PMI) if you put down 20% or more.

## Rate Lock Strategies

When you find a rate you like, consider locking it in. Rate locks protect you from market fluctuations during the closing process. Just be aware that longer lock periods may come with slightly higher rates.

## Refinancing Opportunities

If rates drop significantly below your current rate, refinancing could save you money. Consider the closing costs and how long you plan to stay in your home when evaluating this option.

## Shopping for the Best Rate

Don't settle for the first offer. Get quotes from multiple lenders and compare not just rates but also fees and terms. Even small differences can add up to significant savings over the life of your loan.

## Points and Credits

You can often lower your rate by paying discount points upfront. Conversely, you can accept a higher rate in exchange for lender credits toward closing costs. Evaluate the break-even point to determine if points make sense for your situation.

## Current Market Outlook

While rates fluctuate, understanding general trends can help with timing decisions. Consult with mortgage professionals for the most current information and personalized advice.`,
    coverImage: blogImages.mortgage,
    authorId: 'agent-003',
    authorName: 'Emily Rodriguez',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
    category: 'Finance',
    tags: ['mortgage rates', 'finance', 'home buying', 'refinancing'],
    views: 9870,
    readTime: 6,
    publishedAt: '2024-01-10T10:00:00Z',
    createdAt: '2024-01-09T14:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z',
    status: 'published',
    featured: true,
  },
  {
    id: 'blog-004',
    title: 'Real Estate Investment Strategies for Beginners',
    slug: 'real-estate-investment-strategies-beginners',
    excerpt: 'Discover the best strategies for getting started in real estate investing. From rental properties to REITs, learn how to build wealth through real estate.',
    content: `Real estate investing has long been a pathway to building wealth. For beginners, understanding the various strategies and choosing the right approach is essential for success.

## Rental Properties

Owning rental properties is one of the most traditional forms of real estate investing. You purchase a property and rent it out to tenants, generating monthly income while potentially building equity.

### Pros:
- Regular monthly income
- Property appreciation over time
- Tax benefits including depreciation
- Leverage through mortgage financing

### Cons:
- Property management responsibilities
- Vacancy risks
- Maintenance costs
- Less liquidity than other investments

## House Hacking

House hacking involves buying a multi-unit property, living in one unit, and renting out the others. This strategy can significantly reduce or eliminate your housing costs while building equity.

## REITs (Real Estate Investment Trusts)

REITs allow you to invest in real estate without owning physical property. They're companies that own and manage income-producing real estate, and they're required to distribute most of their taxable income to shareholders.

## Fix and Flip

This strategy involves purchasing undervalued properties, renovating them, and selling for a profit. It requires construction knowledge, good contractor relationships, and understanding of local market values.

## Real Estate Wholesaling

Wholesalers find discounted properties and assign the contracts to other buyers for a fee. This strategy requires little capital but demands strong networking and negotiation skills.

## Getting Started

Before investing, educate yourself thoroughly. Read books, attend seminars, and connect with experienced investors. Start small and scale up as you gain experience and confidence.

## Due Diligence

Never invest without proper research. Analyze neighborhoods, market trends, property values, and potential returns. Run the numbers carefully and always have a contingency plan.

## Building Your Team

Successful real estate investors build networks of professionals including agents, lenders, contractors, property managers, and attorneys. These relationships are invaluable throughout your investing journey.`,
    coverImage: blogImages.investment,
    authorId: 'agent-004',
    authorName: 'David Park',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    category: 'Investment',
    tags: ['real estate investing', 'investment properties', 'rental income', 'wealth building'],
    views: 8450,
    readTime: 9,
    publishedAt: '2024-01-08T10:00:00Z',
    createdAt: '2024-01-07T14:00:00Z',
    updatedAt: '2024-01-08T10:00:00Z',
    status: 'published',
    featured: false,
  },
  {
    id: 'blog-005',
    title: 'How to Choose the Right Neighborhood',
    slug: 'how-to-choose-right-neighborhood',
    excerpt: 'Finding the perfect neighborhood is just as important as finding the right home. Learn what factors to consider when evaluating potential areas to live.',
    content: `They say the three most important things in real estate are location, location, location. But what makes a location right for you? Here's what to consider when evaluating neighborhoods.

## School Districts

Even if you don't have children, school district quality affects property values. Good schools typically mean higher resale value and more stable neighborhoods. Research ratings and test scores for local schools.

## Commute and Transportation

Consider your daily commute. How long will it take to get to work? Is public transportation available? Easy access to highways can be a significant advantage.

## Safety and Crime Rates

Research crime statistics for any neighborhood you're considering. Many cities provide online crime maps, and websites like NeighborhoodScout offer detailed safety data.

## Local Amenities

Think about what's important to your lifestyle. Do you need nearby grocery stores, restaurants, parks, or gyms? A walkable neighborhood with convenient amenities can significantly improve your quality of life.

## Future Development

Research planned developments in the area. New schools, shopping centers, or public transit can increase property values. However, unwanted commercial development could impact your enjoyment of the area.

## Property Values and Trends

Look at historical property values in the neighborhood. Are values increasing, stable, or declining? Understanding trends can help you make a sound investment.

## Neighborhood Character

Visit the neighborhood at different times of day and week. Is it quiet or bustling? Are homes well-maintained? Do neighbors interact? Get a feel for the community's personality.

## HOA Considerations

If the neighborhood has a homeowners association, understand the rules, fees, and what they cover. Some HOAs provide valuable services, while others may have restrictive regulations.

## Walkability Score

Walkable neighborhoods are increasingly desirable. Check the Walk Score to see how easy it is to accomplish daily errands on foot.

## Talk to Residents

Nothing beats firsthand experience. If possible, talk to current residents about their experiences living in the neighborhood. They can provide insights you won't find online.`,
    coverImage: blogImages.neighborhood,
    authorId: 'agent-006',
    authorName: 'James Wilson',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    category: 'Buying Tips',
    tags: ['neighborhoods', 'location', 'home buying', 'community'],
    views: 7630,
    readTime: 7,
    publishedAt: '2024-01-05T10:00:00Z',
    createdAt: '2024-01-04T14:00:00Z',
    updatedAt: '2024-01-05T10:00:00Z',
    status: 'published',
    featured: false,
  },
  {
    id: 'blog-006',
    title: 'Eco-Friendly Home Features That Add Value',
    slug: 'eco-friendly-home-features-add-value',
    excerpt: 'Sustainable home features are increasingly popular with buyers. Learn which eco-friendly upgrades can increase your home value while reducing your environmental impact.',
    content: `As environmental consciousness grows, eco-friendly home features are becoming increasingly valuable. Not only do they reduce environmental impact, but they can also lower utility costs and attract environmentally conscious buyers.

## Solar Panels

Solar panels are one of the most valuable eco-friendly upgrades. They can significantly reduce or eliminate electricity bills and may qualify for tax incentives. Many buyers are willing to pay a premium for homes with existing solar installations.

## Energy-Efficient Windows

Double or triple-pane windows with low-E coatings reduce heat transfer, keeping homes cooler in summer and warmer in winter. They also reduce outside noise and can qualify for energy efficiency rebates.

## Smart Thermostats

Smart thermostats learn your habits and optimize heating and cooling accordingly. They're relatively inexpensive to install and can reduce energy costs by 10-20% annually.

## LED Lighting

LED bulbs use 75% less energy than incandescent bulbs and last 25 times longer. Consider installing LED fixtures throughout your home for maximum efficiency.

## Energy-Efficient Appliances

Energy Star-rated appliances use significantly less energy than standard models. When upgrading appliances, look for the Energy Star label to maximize efficiency.

## Improved Insulation

Proper insulation in walls, attics, and crawl spaces prevents heat loss and gain. This is one of the most cost-effective ways to improve energy efficiency.

## Tankless Water Heaters

Tankless water heaters heat water on demand rather than storing it. They're more energy-efficient and provide endless hot water, making them attractive to buyers.

## Low-Flow Fixtures

Low-flow toilets, showerheads, and faucets reduce water consumption without sacrificing performance. They're inexpensive to install and can significantly reduce water bills.

## Native Landscaping

Using native plants in your landscaping reduces water consumption and maintenance needs. Native plants are adapted to local conditions and support local ecosystems.

## Green Certifications

Homes with green certifications like LEED or Energy Star may sell faster and for more money. These certifications provide third-party verification of a home's efficiency features.

## ROI Considerations

While some eco-friendly upgrades have higher upfront costs, many pay for themselves over time through reduced utility bills. Consider both immediate and long-term returns when planning improvements.`,
    coverImage: blogImages.ecoFriendly,
    authorId: 'agent-005',
    authorName: 'Amanda Thompson',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    category: 'Home Improvement',
    tags: ['eco-friendly', 'green home', 'energy efficiency', 'home improvement'],
    views: 6890,
    readTime: 6,
    publishedAt: '2024-01-03T10:00:00Z',
    createdAt: '2024-01-02T14:00:00Z',
    updatedAt: '2024-01-03T10:00:00Z',
    status: 'published',
    featured: false,
  },
];

// Helper functions
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(p => p.id === id);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(p => p.slug === slug);
};

export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogPosts.filter(p => p.featured);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(p => 
    p.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

export const searchBlogPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(p => 
    p.title.toLowerCase().includes(lowercaseQuery) ||
    p.excerpt.toLowerCase().includes(lowercaseQuery) ||
    p.content.toLowerCase().includes(lowercaseQuery) ||
    p.tags.some(t => t.toLowerCase().includes(lowercaseQuery))
  );
};
