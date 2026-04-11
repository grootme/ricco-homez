'use client';

import { useState, useCallback } from 'react';
import { Link } from '@/i18n/routing';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Check,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/providers';

const footerLinks = {
  quickLinks: [
    { labelKey: 'footer.quickLinks.about', label: 'About Us', href: '/about' },
    { labelKey: 'footer.quickLinks.careers', label: 'Careers', href: '/careers' },
    { labelKey: 'footer.quickLinks.blog', label: 'Blog', href: '/blog-list-v1' },
  ],
  propertyTypes: [
    { labelKey: 'propertyTypes.house', label: 'Houses', href: '/grid-default?type=house' },
    { labelKey: 'propertyTypes.apartment', label: 'Apartments', href: '/grid-default?type=apartment' },
    { labelKey: 'propertyTypes.condo', label: 'Condos', href: '/grid-default?type=condo' },
    { labelKey: 'propertyTypes.villa', label: 'Villas', href: '/grid-default?type=villa' },
    { labelKey: 'propertyTypes.commercial', label: 'Commercial', href: '/grid-default?type=commercial' },
  ],
  support: [
    { labelKey: 'footer.support.help', label: 'Help Center', href: '/faq' },
    { labelKey: 'footer.support.faq', label: 'FAQ', href: '/faq' },
    { labelKey: 'footer.support.contact', label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { labelKey: 'footer.legal.terms', label: 'Terms of Service', href: '/terms' },
    { labelKey: 'footer.legal.privacy', label: 'Privacy Policy', href: '/privacy' },
    { labelKey: 'footer.legal.cookies', label: 'Cookie Policy', href: '/cookies' },
  ],
};

type SubscriptionStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubscriptionStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again later.');
    }
  }, [email]);

  return (
    <footer className="bg-homez-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-homez py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {t('footer.newsletter.title', 'Subscribe to Our Newsletter')}
              </h3>
              <p className="text-gray-400">
                {t('footer.newsletter.description', 'Get the latest property listings and real estate news.')}
              </p>
            </div>
            <div className="flex w-full md:w-auto flex-col gap-2">
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder', 'Enter your email')}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-w-64"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== 'idle') {
                      setStatus('idle');
                      setMessage('');
                    }
                  }}
                  disabled={status === 'loading'}
                />
                <Button
                  className="bg-homez-primary hover:bg-homez-primary/90 shrink-0"
                  type="submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4 mr-2" />
                  )}
                  {t('footer.newsletter.button', 'Subscribe')}
                </Button>
              </form>
              {status === 'success' && (
                <div className="flex items-center gap-1.5 text-sm text-green-400">
                  <Check className="h-4 w-4" />
                  {message}
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-1.5 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-homez py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-homez-primary">Homez</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.about.description', 'Find your dream home with Homez. We provide the best real estate services to help you buy, sell, or rent properties.')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-homez-primary transition-colors" aria-label={t('footer.social.facebook', 'Facebook')}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-homez-primary transition-colors" aria-label={t('footer.social.twitter', 'Twitter')}>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-homez-primary transition-colors" aria-label={t('footer.social.instagram', 'Instagram')}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-homez-primary transition-colors" aria-label={t('footer.social.linkedin', 'LinkedIn')}>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks.title', 'Quick Links')}</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:pl-1 transition-all"
                  >
                    {t(link.labelKey, link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('propertyTypes.title', 'Property Types')}</h4>
            <ul className="space-y-3">
              {footerLinks.propertyTypes.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:pl-1 transition-all"
                  >
                    {t(link.labelKey, link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.support.contact', 'Contact Us')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-homez-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Real Estate Avenue,<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-homez-primary shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-homez-primary shrink-0" />
                <a href="mailto:info@homez.com" className="text-gray-400 hover:text-white transition-colors">
                  info@homez.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-homez py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright', `© ${currentYear} Homez. All rights reserved.`)}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t(link.labelKey, link.label)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
