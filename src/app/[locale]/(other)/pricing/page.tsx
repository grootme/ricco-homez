'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PricingCard, PricingPlan, FAQAccordion, FAQItem } from '@/components/other';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Crown,
  Building2,
  Users,
  BarChart,
  HeadphonesIcon,
  Shield
} from 'lucide-react';

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for individuals exploring the market',
    price: 0,
    period: 'month',
    features: [
      { name: 'Browse all listings', included: true, highlight: true },
      { name: 'Save up to 10 properties', included: true },
      { name: 'Basic search filters', included: true },
      { name: 'Email alerts', included: true },
      { name: 'Mobile app access', included: true },
      { name: 'Unlimited property saves', included: false },
      { name: 'Advanced search filters', included: false },
      { name: 'Priority support', included: false },
      { name: 'Market insights', included: false },
      { name: 'Agent dashboard', included: false },
    ],
    popular: false,
    ctaText: 'Get Started Free',
    ctaLink: '/register',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Best for serious buyers and sellers',
    price: 29,
    period: 'month',
    features: [
      { name: 'All Basic features', included: true, highlight: true },
      { name: 'Unlimited property saves', included: true },
      { name: 'Advanced search filters', included: true },
      { name: 'Priority support', included: true },
      { name: 'Market insights & analytics', included: true },
      { name: 'Virtual tours access', included: true },
      { name: 'Price drop alerts', included: true },
      { name: 'Agent contact info', included: true },
      { name: 'Agent dashboard', included: false },
      { name: 'Custom branding', included: false },
    ],
    popular: true,
    ctaText: 'Start 14-Day Trial',
    ctaLink: '/register?plan=premium',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For agents and real estate professionals',
    price: 99,
    period: 'month',
    features: [
      { name: 'All Premium features', included: true, highlight: true },
      { name: 'Agent dashboard', included: true },
      { name: 'Unlimited listings', included: true },
      { name: 'Listing analytics', included: true },
      { name: 'Lead generation tools', included: true },
      { name: 'Custom branding', included: true },
      { name: 'API access', included: true },
      { name: 'Team collaboration', included: true },
      { name: 'White-label option', included: true },
      { name: 'Dedicated account manager', included: true },
    ],
    popular: false,
    ctaText: 'Contact Sales',
    ctaLink: '/contact?subject=professional',
  },
];

const faqItems: FAQItem[] = [
  {
    id: 'pricing-1',
    question: 'Can I change my plan at any time?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.',
    category: 'Pricing',
  },
  {
    id: 'pricing-2',
    question: 'Is there a free trial available?',
    answer: 'Yes, Premium and Professional plans come with a 14-day free trial. No credit card required to start. Cancel anytime during the trial period.',
    category: 'Pricing',
  },
  {
    id: 'pricing-3',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual Professional plans.',
    category: 'Billing',
  },
  {
    id: 'pricing-4',
    question: 'Do you offer annual billing discounts?',
    answer: 'Yes! Save 20% when you choose annual billing. Professional annual plans also include priority onboarding and a dedicated account manager.',
    category: 'Billing',
  },
  {
    id: 'pricing-5',
    question: 'What happens to my saved properties if I downgrade?',
    answer: 'If you downgrade from Premium to Basic, you\'ll keep your first 10 saved properties. Additional saves will be archived and restored if you upgrade again.',
    category: 'Account',
  },
  {
    id: 'pricing-6',
    question: 'Is there a setup fee for Professional plans?',
    answer: 'No setup fees! Professional plans include free onboarding assistance and access to our support team to help you get started.',
    category: 'Professional',
  },
];

const features = [
  { icon: Building2, title: 'Unlimited Listings', description: 'List as many properties as you need' },
  { icon: Users, title: 'Team Collaboration', description: 'Work together with your team seamlessly' },
  { icon: BarChart, title: 'Analytics Dashboard', description: 'Track performance and insights' },
  { icon: HeadphonesIcon, title: 'Priority Support', description: '24/7 dedicated support team' },
  { icon: Shield, title: 'Secure Platform', description: 'Enterprise-grade security' },
  { icon: Zap, title: 'Fast Performance', description: 'Lightning-fast search and loading' },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const adjustedPlans = pricingPlans.map(plan => ({
    ...plan,
    price: billingPeriod === 'year' ? Math.round(plan.price * 0.8) : plan.price,
    period: billingPeriod,
  }));

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-homez-dark to-homez-secondary py-16">
        <div className="container-homez text-center">
          <Badge className="mb-4 bg-white/10 text-white">
            <Zap className="h-3 w-3 mr-1" />
            Simple Pricing
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Whether you&apos;re buying, selling, or a real estate professional, 
            we have a plan that fits your needs.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white/10 rounded-full p-1">
            <button
              onClick={() => setBillingPeriod('month')}
              className={`px-6 py-2 rounded-full transition-colors ${
                billingPeriod === 'month'
                  ? 'bg-white text-homez-dark font-medium'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('year')}
              className={`px-6 py-2 rounded-full transition-colors ${
                billingPeriod === 'year'
                  ? 'bg-white text-homez-dark font-medium'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Yearly
              <Badge className="ml-2 bg-homez-primary text-white">Save 20%</Badge>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="container-homez">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {adjustedPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-homez">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-homez-primary/10 text-homez-primary">All Plans Include</Badge>
            <h2 className="text-3xl font-bold">Powerful Features</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-homez-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-homez-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container-homez">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-homez-primary/10 text-homez-primary">Compare Plans</Badge>
            <h2 className="text-3xl font-bold">Feature Comparison</h2>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="py-4 px-6 text-left font-semibold">Feature</th>
                      <th className="py-4 px-6 text-center font-semibold">Basic</th>
                      <th className="py-4 px-6 text-center font-semibold bg-homez-primary/5">
                        Premium
                        <Badge className="ml-2 bg-homez-primary text-white">Popular</Badge>
                      </th>
                      <th className="py-4 px-6 text-center font-semibold">Professional</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Browse listings', basic: true, premium: true, pro: true },
                      { name: 'Saved properties', basic: '10', premium: 'Unlimited', pro: 'Unlimited' },
                      { name: 'Search filters', basic: 'Basic', premium: 'Advanced', pro: 'Advanced' },
                      { name: 'Email alerts', basic: true, premium: true, pro: true },
                      { name: 'Market insights', basic: false, premium: true, pro: true },
                      { name: 'Virtual tours', basic: false, premium: true, pro: true },
                      { name: 'Priority support', basic: false, premium: true, pro: true },
                      { name: 'Agent dashboard', basic: false, premium: false, pro: true },
                      { name: 'API access', basic: false, premium: false, pro: true },
                      { name: 'Custom branding', basic: false, premium: false, pro: true },
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-4 px-6 font-medium">{row.name}</td>
                        <td className="py-4 px-6 text-center">
                          {typeof row.basic === 'boolean' ? (
                            row.basic ? (
                              <Check className="h-5 w-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm">{row.basic}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center bg-homez-primary/5">
                          {typeof row.premium === 'boolean' ? (
                            row.premium ? (
                              <Check className="h-5 w-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-medium">{row.premium}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof row.pro === 'boolean' ? (
                            row.pro ? (
                              <Check className="h-5 w-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm">{row.pro}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-homez">
          <FAQAccordion items={faqItems} title="Pricing FAQ" showSearch={false} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-homez-primary to-homez-dark">
        <div className="container-homez text-center">
          <Crown className="h-12 w-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Join thousands of users who trust Homez for their real estate needs.
            Start with our free plan today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-homez-primary hover:bg-gray-100" asChild>
              <a href="/register">Create Free Account</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="/contact">Contact Sales</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
