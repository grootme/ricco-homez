'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  categories?: string[];
  showSearch?: boolean;
  title?: string;
}

export function FAQAccordion({ 
  items, 
  categories = [], 
  showSearch = true,
  title = 'Frequently Asked Questions'
}: FAQAccordionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = items.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories from items if not provided
  const allCategories = categories.length > 0 
    ? categories 
    : Array.from(new Set(items.map(item => item.category)));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HelpCircle className="h-6 w-6 text-homez-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-gray-500">Find answers to common questions</p>
      </div>

      {/* Search */}
      {showSearch && (
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 border-gray-200 focus:border-homez-primary focus:ring-homez-primary"
            />
          </div>
        </div>
      )}

      {/* Category Tabs */}
      {allCategories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className={selectedCategory === null ? 'bg-homez-primary hover:bg-homez-primary/90' : ''}
          >
            All
          </Button>
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-homez-primary hover:bg-homez-primary/90' : ''}
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      {/* FAQ Items */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {filteredItems.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className={`px-6 ${index !== filteredItems.length - 1 ? 'border-b' : ''}`}
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <div className="flex items-start gap-3">
                    <Badge 
                      variant="outline" 
                      className="mt-1 shrink-0 border-homez-primary text-homez-primary"
                    >
                      Q
                    </Badge>
                    <span className="font-medium text-gray-900">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="flex gap-3 pl-9">
                    <Badge 
                      variant="outline" 
                      className="mt-1 shrink-0 border-green-500 text-green-600"
                    >
                      A
                    </Badge>
                    <div className="text-gray-600 leading-relaxed">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No questions found matching your search.</p>
          <Button 
            variant="link" 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory(null);
            }}
            className="text-homez-primary"
          >
            Clear filters
          </Button>
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center justify-center gap-8 text-sm text-gray-500 pt-4">
        <span>{items.length} Questions</span>
        <span>{allCategories.length} Categories</span>
      </div>
    </div>
  );
}
