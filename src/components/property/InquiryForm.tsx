'use client';

import { useState } from 'react';
import { Property, Agent } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MessageSquare, Send, Phone, User, Mail, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface InquiryFormProps {
  property: Property;
  agent?: Agent;
  variant?: 'default' | 'compact' | 'modal';
}

export default function InquiryForm({
  property,
  agent,
  variant = 'default',
}: InquiryFormProps) {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message Sent!',
      description: `Your inquiry has been sent to ${agent?.name || 'the listing agent'}.`,
    });
    
    setIsSubmitting(false);
    setIsOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      message: '',
    });
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'showing', label: 'Schedule a Showing' },
    { value: 'price', label: 'Price Inquiry' },
    { value: 'financing', label: 'Financing Options' },
    { value: 'similar', label: 'Similar Properties' },
    { value: 'other', label: 'Other' },
  ];

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <div className="relative mt-1">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <div className="relative mt-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <div className="relative mt-1">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="pl-10"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="inquiryType">Inquiry Type</Label>
        <Select
          value={formData.inquiryType}
          onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent>
            {inquiryTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <div className="relative mt-1">
          <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Textarea
            id="message"
            placeholder="I'm interested in this property..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="pl-10 min-h-[100px]"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-homez-primary hover:bg-homez-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Send Inquiry
          </>
        )}
      </Button>
    </form>
  );

  if (variant === 'modal') {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-homez-primary hover:bg-homez-primary/90">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Agent
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-homez-primary" />
              Inquire About This Property
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-500 -mt-2">
            {property.title}
          </p>
          {formContent}
        </DialogContent>
      </Dialog>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold mb-3">Quick Inquiry</h3>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-homez-primary hover:bg-homez-primary/90">
              <MessageSquare className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Inquire About This Property</DialogTitle>
            </DialogHeader>
            {formContent}
          </DialogContent>
        </Dialog>

        {agent && (
          <Button variant="outline" className="w-full mt-2" asChild>
            <a href={`tel:${agent.phone}`}>
              <Phone className="h-4 w-4 mr-2" />
              Call Agent
            </a>
          </Button>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="h-5 w-5 text-homez-primary" />
        <h2 className="text-xl font-bold">Inquire About This Property</h2>
      </div>

      {agent && (
        <p className="text-sm text-gray-500 mb-4">
          Your message will be sent to <span className="font-medium">{agent.name}</span>
        </p>
      )}

      {formContent}
    </div>
  );
}
