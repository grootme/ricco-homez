'use client';

import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star, Zap } from 'lucide-react';

export interface PricingFeature {
  name: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: 'month' | 'year' | 'one-time';
  features: PricingFeature[];
  popular?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  variant?: 'default' | 'compact' | 'featured';
  onSelect?: (planId: string) => void;
}

export function PricingCard({ plan, variant = 'default', onSelect }: PricingCardProps) {
  const {
    name,
    description,
    price,
    period,
    features,
    popular,
    ctaText = 'Get Started',
    ctaLink = '#',
  } = plan;

  if (variant === 'compact') {
    return (
      <Card className={`relative overflow-hidden ${popular ? 'border-homez-primary border-2' : ''}`}>
        {popular && (
          <div className="absolute top-0 right-0">
            <Badge className="bg-homez-primary text-white rounded-none rounded-bl-lg">
              <Star className="h-3 w-3 mr-1" />
              Popular
            </Badge>
          </div>
        )}
        <CardContent className="p-6 text-center">
          <h3 className="font-bold text-lg mb-1">{name}</h3>
          <div className="flex items-baseline justify-center gap-1 mb-3">
            <span className="text-3xl font-bold">
              ${price}
            </span>
            <span className="text-gray-500 text-sm">
              /{period === 'month' ? 'mo' : period === 'year' ? 'yr' : ''}
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">{description}</p>
          <Button
            className={`w-full ${popular ? 'bg-homez-primary hover:bg-homez-primary/90' : ''}`}
            variant={popular ? 'default' : 'outline'}
            onClick={() => onSelect?.(plan.id)}
            asChild
          >
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
      popular 
        ? 'border-homez-primary border-2 scale-105 z-10' 
        : 'hover:border-gray-300'
    }`}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 left-0 right-0 bg-homez-primary text-white text-center py-2 text-sm font-medium flex items-center justify-center gap-2">
          <Zap className="h-4 w-4" />
          Most Popular
        </div>
      )}

      <CardHeader className={`text-center ${popular ? 'pt-14' : 'pt-8'}`}>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-500 text-sm mb-6">{description}</p>
        
        {/* Price */}
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl md:text-5xl font-bold">
            ${price === 0 ? '0' : price.toLocaleString()}
          </span>
          {price > 0 && (
            <span className="text-gray-500">
              /{period === 'month' ? 'month' : period === 'year' ? 'year' : ''}
            </span>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        {/* Features List */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-start gap-3 ${
                feature.highlight ? 'text-homez-primary font-medium' : 'text-gray-600'
              }`}
            >
              {feature.included ? (
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  feature.highlight 
                    ? 'bg-homez-primary text-white' 
                    : 'bg-green-100 text-green-600'
                }`}>
                  <Check className="h-3 w-3" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <X className="h-3 w-3 text-gray-400" />
                </div>
              )}
              <span className="text-sm">{feature.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="px-6 pb-8">
        <Button
          className={`w-full h-12 text-base ${
            popular 
              ? 'bg-homez-primary hover:bg-homez-primary/90' 
              : 'bg-gray-900 hover:bg-gray-800'
          }`}
          variant={popular ? 'default' : 'default'}
          onClick={() => onSelect?.(plan.id)}
          asChild
        >
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
}

// Comparison Table Component
interface PricingComparisonProps {
  plans: PricingPlan[];
  features: { name: string; key: string }[];
}

export function PricingComparison({ plans, features }: PricingComparisonProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="py-4 px-4 text-left font-semibold">Features</th>
            {plans.map((plan) => (
              <th key={plan.id} className="py-4 px-4 text-center font-semibold">
                {plan.name}
                {plan.popular && (
                  <Badge className="ml-2 bg-homez-primary text-white">Popular</Badge>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={feature.key} className={index !== features.length - 1 ? 'border-b' : ''}>
              <td className="py-4 px-4 text-gray-600">{feature.name}</td>
              {plans.map((plan) => {
                const planFeature = plan.features.find(f => f.name === feature.name);
                return (
                  <td key={plan.id} className="py-4 px-4 text-center">
                    {planFeature?.included ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
          <tr className="border-t-2 border-gray-200">
            <td className="py-4 px-4"></td>
            {plans.map((plan) => (
              <td key={plan.id} className="py-4 px-4 text-center">
                <Button
                  className={`${plan.popular ? 'bg-homez-primary hover:bg-homez-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="sm"
                >
                  {plan.price === 0 ? 'Start Free' : `Get ${plan.name}`}
                </Button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
