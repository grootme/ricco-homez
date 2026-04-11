import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { TeamMemberCard, TeamMember } from '@/components/other';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  Award, 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Lightbulb,
  CheckCircle,
  Home,
  TrendingUp,
  Globe
} from 'lucide-react';

const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 20+ years in real estate industry',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    department: 'Executive',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'sarah@homez.com',
  },
  {
    id: 'team-2',
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Tech innovator driving our digital transformation',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    department: 'Technology',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'michael@homez.com',
  },
  {
    id: 'team-3',
    name: 'Emily Rodriguez',
    role: 'Head of Sales',
    bio: 'Expert negotiator with exceptional client relationships',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    department: 'Sales',
    linkedin: 'https://linkedin.com',
    email: 'emily@homez.com',
  },
  {
    id: 'team-4',
    name: 'David Wilson',
    role: 'Marketing Director',
    bio: 'Creative strategist building brand awareness',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    department: 'Marketing',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'david@homez.com',
  },
];

const stats = [
  { label: 'Properties Listed', value: '15,000+', icon: Home },
  { label: 'Happy Customers', value: '8,500+', icon: Users },
  { label: 'Expert Agents', value: '200+', icon: Award },
  { label: 'Cities Covered', value: '50+', icon: Globe },
];

const values = [
  { icon: Shield, title: 'Integrity', description: 'We uphold the highest ethical standards in all our dealings.' },
  { icon: Users, title: 'Client Focus', description: 'Your needs are at the center of everything we do.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We continuously improve our services with cutting-edge technology.' },
  { icon: Heart, title: 'Passion', description: 'We love what we do and it shows in our results.' },
];

const milestones = [
  { year: '2010', title: 'Founded', description: 'Homez was established with a vision to transform real estate.' },
  { year: '2013', title: 'First 1,000 Clients', description: 'Reached our first major milestone of satisfied customers.' },
  { year: '2016', title: 'National Expansion', description: 'Expanded operations to 20 major cities across the country.' },
  { year: '2019', title: 'Digital Platform Launch', description: 'Launched our innovative online property platform.' },
  { year: '2022', title: '10,000+ Properties', description: 'Listed our 10,000th property on the platform.' },
  { year: '2024', title: 'Industry Leader', description: 'Recognized as the fastest-growing real estate platform.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-r from-homez-dark to-homez-secondary">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Homez</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Your trusted partner in finding the perfect home. We&apos;re committed to making real estate simple, transparent, and accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-homez">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-homez-primary/10 text-homez-primary">Our Story</Badge>
              <h2 className="text-3xl font-bold mb-6">
                Building Dreams, One Home at a Time
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2010, Homez began with a simple mission: to make finding your dream home easier than ever before. 
                What started as a small team of passionate real estate professionals has grown into one of the nation&apos;s 
                leading property platforms.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we connect thousands of buyers, sellers, and renters with their perfect properties. 
                Our combination of cutting-edge technology and personalized service sets us apart in the industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Trusted by 8,500+ customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Operating in 50+ cities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop"
                  alt="Homez Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-homez-primary text-white p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-3xl font-bold">14+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-homez">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-homez-primary/10 text-homez-primary">Our Purpose</Badge>
            <h2 className="text-3xl font-bold">Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-homez-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-homez-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower individuals and families to find their perfect home through innovative technology, 
                  exceptional service, and unwavering commitment to our clients&apos; success.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-homez-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-homez-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted and innovative real estate platform globally, 
                  setting new standards for excellence in property services and customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container-homez">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-homez-primary/10 text-homez-primary">What We Stand For</Badge>
            <h2 className="text-3xl font-bold">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-homez-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-homez-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section className="py-16 bg-gradient-to-r from-homez-primary to-homez-dark">
        <div className="container-homez">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="h-10 w-10 mx-auto mb-4 opacity-80" />
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-homez">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-homez-primary/10 text-homez-primary">Our Journey</Badge>
            <h2 className="text-3xl font-bold">Milestones</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200" />
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                    <Card className="inline-block border-0 shadow-md">
                      <CardContent className="p-4">
                        <Badge className="bg-homez-primary text-white mb-2">{milestone.year}</Badge>
                        <h3 className="font-bold">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-homez-primary rounded-full border-4 border-white shadow" />
                  
                  <div className="flex-1 ml-12 md:ml-0 md:hidden">
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-4">
                        <Badge className="bg-homez-primary text-white mb-2">{milestone.year}</Badge>
                        <h3 className="font-bold">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="container-homez">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-homez-primary/10 text-homez-primary">Our Team</Badge>
            <h2 className="text-3xl font-bold mb-4">Meet the Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of professionals is dedicated to helping you find your perfect property.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} variant="default" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-homez">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Find Your Dream Home?
                </h2>
                <p className="text-gray-600 mb-6">
                  Join thousands of satisfied customers who found their perfect property with Homez. 
                  Our expert team is here to guide you every step of the way.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/grid-default"
                    className="inline-flex items-center justify-center px-6 py-3 bg-homez-primary text-white font-semibold rounded-lg hover:bg-homez-primary/90 transition-colors"
                  >
                    Browse Properties
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="h-64 lg:h-auto bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop"
                  alt="Find your home"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
