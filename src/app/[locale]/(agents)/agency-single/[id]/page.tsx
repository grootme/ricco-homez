import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  Users,
  Building2,
  Star,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const agencies = [
  {
    id: 'agency-001',
    name: 'Homez Premier Properties',
    logo: '/images/agencies/agency-1.jpg',
    coverImage: '/images/agencies/cover-1.jpg',
    description: 'Leading luxury real estate agency specializing in premium waterfront properties and luxury estates. With over 15 years of experience, we have helped thousands of clients find their dream homes in the most desirable locations.',
    email: 'contact@homezpremier.com',
    phone: '+1 (305) 555-0100',
    website: 'www.homezpremier.com',
    address: '1200 Brickell Avenue, Suite 800',
    city: 'Miami',
    state: 'Florida',
    zipCode: '33131',
    totalAgents: 15,
    totalListings: 125,
    totalSales: 450,
    rating: 4.9,
    reviewCount: 89,
    verified: true,
    foundedYear: 2008,
    socialLinks: {
      facebook: 'https://facebook.com/homezpremier',
      twitter: 'https://twitter.com/homezpremier',
      linkedin: 'https://linkedin.com/company/homezpremier',
      instagram: 'https://instagram.com/homezpremier',
    },
  },
];

interface AgencySingleProps {
  params: Promise<{ id: string }>;
}

export default async function AgencySingle({ params }: AgencySingleProps) {
  const { id } = await params;
  const agency = agencies.find(a => a.id === id);
  
  if (!agency) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-64 bg-gradient-to-r from-homez-dark via-homez-secondary to-homez-dark">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-homez">
            <div className="flex items-end gap-6 -mb-12">
              <div className="w-24 h-24 rounded-lg bg-white shadow-lg overflow-hidden">
                <img
                  src={agency.logo}
                  alt={agency.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-white">{agency.name}</h1>
                  {agency.verified && (
                    <Badge className="bg-homez-primary text-white">Verified</Badge>
                  )}
                </div>
                <p className="text-white/70 flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {agency.city}, {agency.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-homez pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">{agency.description}</p>
            </div>

            {/* Office Location */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Office Location</h2>
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-600">{agency.address}</p>
              <p className="text-gray-600">{agency.city}, {agency.state} {agency.zipCode}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-6 w-6 text-homez-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{agency.totalAgents}</p>
                  <p className="text-sm text-gray-500">Agents</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Building2 className="h-6 w-6 text-homez-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{agency.totalListings}</p>
                  <p className="text-sm text-gray-500">Listings</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">{agency.rating}</span>
                <span className="text-gray-500">({agency.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="space-y-3 mb-4">
                <a href={`tel:${agency.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-homez-primary">
                  <Phone className="h-5 w-5" />
                  {agency.phone}
                </a>
                <a href={`mailto:${agency.email}`} className="flex items-center gap-3 text-gray-600 hover:text-homez-primary">
                  <Mail className="h-5 w-5" />
                  {agency.email}
                </a>
                <a href={`https://${agency.website}`} className="flex items-center gap-3 text-gray-600 hover:text-homez-primary">
                  <Globe className="h-5 w-5" />
                  {agency.website}
                </a>
              </div>
              <Button className="w-full bg-homez-primary hover:bg-homez-primary/90">
                Send Message
              </Button>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a href={agency.socialLinks.facebook} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-homez-primary hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href={agency.socialLinks.twitter} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-homez-primary hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={agency.socialLinks.linkedin} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-homez-primary hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={agency.socialLinks.instagram} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-homez-primary hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Founded */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-sm text-gray-500">Founded</p>
              <p className="font-semibold">{agency.foundedYear}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
