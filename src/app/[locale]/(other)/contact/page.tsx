'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  Building2,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Office',
    details: ['123 Real Estate Blvd', 'Miami, FL 33139', 'United States'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@homez.com', 'support@homez.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM', 'Sun: Closed'],
  },
];

const offices = [
  {
    city: 'Miami',
    address: '123 Real Estate Blvd, Miami, FL 33139',
    phone: '+1 (555) 123-4567',
    email: 'miami@homez.com',
    image: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=400&h=250&fit=crop',
  },
  {
    city: 'New York',
    address: '456 Park Avenue, New York, NY 10001',
    phone: '+1 (555) 234-5678',
    email: 'newyork@homez.com',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=250&fit=crop',
  },
  {
    city: 'Los Angeles',
    address: '789 Sunset Blvd, Los Angeles, CA 90028',
    phone: '+1 (555) 345-6789',
    email: 'losangeles@homez.com',
    image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400&h=250&fit=crop',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-80 bg-gradient-to-r from-homez-dark to-homez-secondary">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 -mt-16 relative z-10">
        <div className="container-homez">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-homez-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-7 w-7 text-homez-primary" />
                  </div>
                  <h3 className="font-bold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="container-homez">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Badge className="mb-4 bg-homez-primary/10 text-homez-primary">Get in Touch</Badge>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <Card className="border-0 shadow-lg bg-green-50">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-gray-200 focus:border-homez-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-gray-200 focus:border-homez-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-gray-200 focus:border-homez-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({...formData, subject: value})}
                      >
                        <SelectTrigger className="border-gray-200 focus:border-homez-primary">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="buying">Buying Property</SelectItem>
                          <SelectItem value="selling">Selling Property</SelectItem>
                          <SelectItem value="renting">Renting Property</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      required
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-gray-200 focus:border-homez-primary resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-homez-primary hover:bg-homez-primary/90 h-12 px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
            
            {/* Map */}
            <div>
              <Badge className="mb-4 bg-homez-primary/10 text-homez-primary">Our Location</Badge>
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              
              <div className="bg-gray-100 rounded-xl overflow-hidden h-80 mb-6 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Real Estate Blvd, Miami, FL</p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="font-medium">Follow Us:</span>
                <div className="flex gap-2">
                  {[
                    { icon: Facebook, href: 'https://facebook.com' },
                    { icon: Twitter, href: 'https://twitter.com' },
                    { icon: Linkedin, href: 'https://linkedin.com' },
                    { icon: Instagram, href: 'https://instagram.com' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-homez-primary hover:text-white transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container-homez">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-homez-primary/10 text-homez-primary">Our Offices</Badge>
            <h2 className="text-3xl font-bold">Visit Our Locations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">{office.city} Office</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-start gap-2 text-gray-600">
                      <Building2 className="h-4 w-4 mt-0.5 shrink-0" />
                      {office.address}
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Phone className="h-4 w-4 shrink-0" />
                      {office.phone}
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Mail className="h-4 w-4 shrink-0" />
                      {office.email}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-white">
        <div className="container-homez text-center">
          <MessageCircle className="h-12 w-12 text-homez-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Check out our FAQ page for answers to common questions, or reach out to our support team.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-homez-primary hover:bg-homez-primary/90">
              <a href="/faq">View FAQ</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:support@homez.com">Email Support</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
