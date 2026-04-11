import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Star, MapPin } from 'lucide-react';

const agencies = [
  {
    id: 'agency-001',
    name: 'Homez Premier Properties',
    logo: '/images/agencies/agency-1.jpg',
    coverImage: '/images/agencies/cover-1.jpg',
    description: 'Leading luxury real estate agency',
    city: 'Miami',
    state: 'Florida',
    totalAgents: 15,
    totalListings: 125,
    rating: 4.9,
    reviewCount: 89,
    verified: true,
    featured: true,
  },
  {
    id: 'agency-002',
    name: 'Coastal Realty Group',
    logo: '/images/agencies/agency-2.jpg',
    coverImage: '/images/agencies/cover-2.jpg',
    description: 'Your trusted partner in coastal properties',
    city: 'Los Angeles',
    state: 'California',
    totalAgents: 22,
    totalListings: 189,
    rating: 4.8,
    reviewCount: 156,
    verified: true,
    featured: true,
  },
  {
    id: 'agency-003',
    name: 'Metro City Real Estate',
    logo: '/images/agencies/agency-3.jpg',
    coverImage: '/images/agencies/cover-3.jpg',
    description: 'Urban living specialists',
    city: 'New York',
    state: 'New York',
    totalAgents: 35,
    totalListings: 245,
    rating: 4.7,
    reviewCount: 203,
    verified: true,
    featured: false,
  },
  {
    id: 'agency-004',
    name: 'Pacific Dream Homes',
    logo: '/images/agencies/agency-4.jpg',
    coverImage: '/images/agencies/cover-4.jpg',
    description: 'Making dreams come true',
    city: 'San Francisco',
    state: 'California',
    totalAgents: 18,
    totalListings: 92,
    rating: 4.9,
    reviewCount: 78,
    verified: true,
    featured: true,
  },
];

export default function AgencyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-homez-dark py-16">
        <div className="container-homez text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real Estate Agencies
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Browse top-rated real estate agencies and find the perfect team for your property needs
          </p>
        </div>
      </div>

      <div className="container-homez section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agencies.map((agency) => (
            <Card key={agency.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-32 bg-gradient-to-r from-homez-dark to-homez-secondary">
                <div className="absolute -bottom-10 left-6">
                  <div className="w-20 h-20 rounded-lg bg-white shadow-lg overflow-hidden">
                    <img
                      src={agency.logo}
                      alt={agency.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <CardContent className="pt-14 p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg">{agency.name}</h3>
                      {agency.verified && (
                        <Badge className="bg-homez-primary text-white text-xs">Verified</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      {agency.city}, {agency.state}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{agency.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{agency.description}</p>

                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {agency.totalAgents} Agents
                  </span>
                  <span className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    {agency.totalListings} Listings
                  </span>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">View Profile</Button>
                  <Button className="flex-1 bg-homez-primary hover:bg-homez-primary/90">Contact</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
