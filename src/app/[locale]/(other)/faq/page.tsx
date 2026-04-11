import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FAQAccordion, FAQItem } from '@/components/other';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, HelpCircle } from 'lucide-react';

const faqItems: FAQItem[] = [
  // Buying Questions
  {
    id: 'buying-1',
    question: 'How do I start the home buying process?',
    answer: 'Start by determining your budget and getting pre-approved for a mortgage. Then, browse our listings to find properties that match your criteria. You can contact our agents for personalized assistance throughout the process.',
    category: 'Buying',
  },
  {
    id: 'buying-2',
    question: 'What documents do I need to buy a property?',
    answer: 'You\'ll typically need proof of identity (passport/driver\'s license), proof of income (pay stubs, tax returns), bank statements, employment verification, and if applicable, proof of down payment funds. Our agents can provide a complete checklist.',
    category: 'Buying',
  },
  {
    id: 'buying-3',
    question: 'How much down payment do I need?',
    answer: 'Down payment requirements vary by loan type. Conventional loans typically require 5-20%, FHA loans as low as 3.5%, and VA loans may require 0% down for eligible veterans. We recommend speaking with a mortgage specialist for personalized advice.',
    category: 'Buying',
  },
  {
    id: 'buying-4',
    question: 'What is the difference between pre-qualification and pre-approval?',
    answer: 'Pre-qualification is a quick estimate of how much you might be able to borrow based on self-reported information. Pre-approval is a more rigorous process where a lender verifies your financial information and provides a conditional commitment for a specific loan amount.',
    category: 'Buying',
  },
  
  // Selling Questions
  {
    id: 'selling-1',
    question: 'How do I list my property on Homez?',
    answer: 'You can list your property by creating an account, navigating to "Add Property" in your dashboard, and filling out the property details. Our team will review your submission within 24 hours. Premium listings get priority placement.',
    category: 'Selling',
  },
  {
    id: 'selling-2',
    question: 'What are the fees for selling on Homez?',
    answer: 'Basic listings are free. Premium listings with enhanced visibility start at $29/month. Professional packages for agents and agencies with advanced features are available at $99/month. No commission fees are charged on successful sales.',
    category: 'Selling',
  },
  {
    id: 'selling-3',
    question: 'How long does it take to sell a property?',
    answer: 'The average time varies by market and property type. On our platform, properties typically sell within 30-90 days. Well-priced, well-presented properties in desirable locations often sell faster.',
    category: 'Selling',
  },
  
  // Renting Questions
  {
    id: 'renting-1',
    question: 'What do I need to rent a property?',
    answer: 'You\'ll typically need proof of identity, proof of income (usually 3x the monthly rent), employment verification, rental history, and references. Some landlords may require a credit check. Our agents can help prepare your application.',
    category: 'Renting',
  },
  {
    id: 'renting-2',
    question: 'Are pets allowed in rental properties?',
    answer: 'Pet policies vary by property. You can filter your search to show only pet-friendly properties. Some landlords may require an additional pet deposit or monthly pet fee. Always check the listing details or ask the agent.',
    category: 'Renting',
  },
  
  // Account Questions
  {
    id: 'account-1',
    question: 'How do I create an account?',
    answer: 'Click "Register" in the top right corner and fill in your details. You can also sign up using Google or Facebook. Email verification is required to activate your account.',
    category: 'Account',
  },
  {
    id: 'account-2',
    question: 'I forgot my password. What should I do?',
    answer: 'Click "Login" then "Forgot Password". Enter your registered email address and we\'ll send you a reset link. The link expires in 24 hours for security purposes.',
    category: 'Account',
  },
  {
    id: 'account-3',
    question: 'How do I save properties to my favorites?',
    answer: 'Click the heart icon on any property listing to save it to your favorites. You must be logged in to save properties. Access your saved properties from your dashboard under "My Favorites".',
    category: 'Account',
  },
  
  // Services Questions
  {
    id: 'services-1',
    question: 'Do you offer virtual tours?',
    answer: 'Yes! Many of our listings include virtual 3D tours and video walkthroughs. Look for the "Virtual Tour" badge on listings. You can also request a live virtual tour with an agent for any property.',
    category: 'Services',
  },
  {
    id: 'services-2',
    question: 'Can you connect me with mortgage lenders?',
    answer: 'Yes, we partner with trusted mortgage lenders and can connect you with professionals who can help with pre-approval and financing. Visit our Partners page or contact support for referrals.',
    category: 'Services',
  },
  {
    id: 'services-3',
    question: 'Do you provide home inspection services?',
    answer: 'While we don\'t provide inspections directly, we can recommend certified home inspectors in your area. We strongly recommend getting a professional inspection before finalizing any property purchase.',
    category: 'Services',
  },
  
  // Technical Questions
  {
    id: 'tech-1',
    question: 'Is my personal information secure?',
    answer: 'Yes, we take data security seriously. We use industry-standard encryption (SSL/TLS) for all data transmission. Your personal information is never sold to third parties. Read our Privacy Policy for details.',
    category: 'Technical',
  },
  {
    id: 'tech-2',
    question: 'How do I report a technical issue?',
    answer: 'You can report technical issues through the "Contact Us" form, email support@homez.com, or call our technical support line. Include screenshots and steps to reproduce the issue for faster resolution.',
    category: 'Technical',
  },
];

const categories = ['Buying', 'Selling', 'Renting', 'Account', 'Services', 'Technical'];

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-homez-primary to-homez-dark py-16">
        <div className="container-homez text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about buying, selling, renting, and using our platform
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-homez">
          <FAQAccordion items={faqItems} categories={categories} />
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-gray-50">
        <div className="container-homez">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-homez-primary/10 text-homez-primary">Still Need Help?</Badge>
            <h2 className="text-3xl font-bold mb-4">Contact Our Support Team</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our friendly support team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-homez-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-7 w-7 text-homez-primary" />
                </div>
                <h3 className="font-bold mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Chat with our support team in real-time
                </p>
                <Button className="w-full bg-homez-primary hover:bg-homez-primary/90">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-homez-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-7 w-7 text-homez-primary" />
                </div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Mon-Fri 9AM-6PM EST
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-homez-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-7 w-7 text-homez-primary" />
                </div>
                <h3 className="font-bold mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We reply within 24 hours
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:support@homez.com">support@homez.com</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
