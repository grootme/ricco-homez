'use client';

import { useState } from 'react';
import { Property, Agent } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CalendarIcon, Clock, User, Mail, Phone, Video, MapPin, Check } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface ScheduleTourProps {
  property: Property;
  agent?: Agent;
  variant?: 'default' | 'compact' | 'modal';
}

export default function ScheduleTour({
  property,
  agent,
  variant = 'default',
}: ScheduleTourProps) {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourType: 'in-person',
    time: '09:00',
    message: '',
  });

  // Available time slots
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate) {
      toast({
        title: 'Please select a date',
        variant: 'destructive',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Tour Scheduled!',
      description: `Your tour is scheduled for ${format(selectedDate, 'MMMM d, yyyy')} at ${formData.time}.`,
    });
    
    setIsSubmitting(false);
    setIsOpen(false);
    setSelectedDate(undefined);
    setFormData({
      name: '',
      email: '',
      phone: '',
      tourType: 'in-person',
      time: '09:00',
      message: '',
    });
  };

  const tourTypes = [
    { value: 'in-person', label: 'In-Person Tour', icon: MapPin, description: 'Visit the property with an agent' },
    { value: 'video', label: 'Video Tour', icon: Video, description: 'Live video call with an agent' },
    { value: 'virtual', label: 'Virtual Tour', icon: Video, description: 'Self-guided 360° tour' },
  ];

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Tour Type */}
      <div>
        <Label className="text-sm font-medium mb-2 block">Tour Type</Label>
        <RadioGroup
          value={formData.tourType}
          onValueChange={(value) => setFormData({ ...formData, tourType: value })}
          className="grid grid-cols-1 gap-2"
        >
          {tourTypes.map((type) => (
            <div
              key={type.value}
              className={cn(
                'flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors',
                formData.tourType === type.value
                  ? 'border-homez-primary bg-homez-primary/5'
                  : 'border-gray-200 hover:border-gray-300'
              )}
              onClick={() => setFormData({ ...formData, tourType: type.value })}
            >
              <type.icon className={cn(
                'h-5 w-5',
                formData.tourType === type.value ? 'text-homez-primary' : 'text-gray-400'
              )} />
              <div className="flex-1">
                <p className="font-medium text-sm">{type.label}</p>
                <p className="text-xs text-gray-500">{type.description}</p>
              </div>
              {formData.tourType === type.value && (
                <Check className="h-4 w-4 text-homez-primary" />
              )}
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium mb-2 block">Select Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, 'MMM d, yyyy') : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date() || date > addDays(new Date(), 60)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div>
          <Label className="text-sm font-medium mb-2 block">Select Time</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <Clock className="mr-2 h-4 w-4" />
                {formData.time}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2" align="start">
              <div className="grid grid-cols-2 gap-1">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData({ ...formData, time })}
                    className={cn(
                      'px-2 py-1.5 text-sm rounded transition-colors',
                      formData.time === time
                        ? 'bg-homez-primary text-white'
                        : 'hover:bg-gray-100'
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <Label htmlFor="tour-name">Full Name *</Label>
        <div className="relative mt-1">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="tour-name"
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
        <Label htmlFor="tour-email">Email *</Label>
        <div className="relative mt-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="tour-email"
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
        <Label htmlFor="tour-phone">Phone *</Label>
        <div className="relative mt-1">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="tour-phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="tour-message">Additional Notes</Label>
        <Textarea
          id="tour-message"
          placeholder="Any special requests or questions..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-homez-primary hover:bg-homez-primary/90"
        disabled={isSubmitting || !selectedDate}
      >
        {isSubmitting ? 'Scheduling...' : 'Schedule Tour'}
      </Button>
    </form>
  );

  if (variant === 'modal') {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-homez-primary hover:bg-homez-primary/90">
            <CalendarIcon className="h-4 w-4 mr-2" />
            Schedule a Tour
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-homez-primary" />
              Schedule a Tour
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
        <h3 className="font-semibold mb-3">Schedule a Tour</h3>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-homez-primary hover:bg-homez-primary/90">
              <CalendarIcon className="h-4 w-4 mr-2" />
              Request Tour
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Schedule a Tour</DialogTitle>
            </DialogHeader>
            {formContent}
          </DialogContent>
        </Dialog>

        <div className="grid grid-cols-2 gap-2 mt-2">
          <Button variant="outline" size="sm">
            <Video className="h-4 w-4 mr-1" />
            Video Tour
          </Button>
          <Button variant="outline" size="sm">
            <MapPin className="h-4 w-4 mr-1" />
            Virtual Tour
          </Button>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon className="h-5 w-5 text-homez-primary" />
        <h2 className="text-xl font-bold">Schedule a Tour</h2>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Book a tour of <span className="font-medium">{property.title}</span>
        {agent && <> with <span className="font-medium">{agent.name}</span></>}
      </p>

      {formContent}
    </div>
  );
}
