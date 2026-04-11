import { getDataSource } from '@/lib/datasource';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PropertyCard } from '@/components/property';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Building2, 
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

interface AgentSingleProps {
  params: Promise<{ id: string }>;
}

export default async function AgentSingle({ params }: AgentSingleProps) {
  const { id } = await params;
  const dataSource = getDataSource();

  const [agent, agentProperties] = await Promise.all([
    dataSource.agents.getAgentById(id),
    dataSource.properties.getPropertiesByAgent(id),
  ]);

  if (!agent) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-homez-dark py-16">
        <div className="container-homez">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
              <img
                src={agent.avatar}
                alt={agent.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <h1 className="text-3xl font-bold text-white">{agent.name}</h1>
                {agent.verified && (
                  <Badge className="bg-homez-primary text-white">Verified</Badge>
                )}
              </div>
              <p className="text-white/70 mb-2">{agent.title}</p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-white/70">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  {agent.rating} ({agent.reviewCount} reviews)
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {agent.city}, {agent.state}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-homez py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">{agent.bio}</p>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {agent.specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline" className="text-sm">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Agent's Properties */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Listed Properties ({agentProperties.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {agentProperties.slice(0, 4).map((property) => (
                  <PropertyCard key={property.id} property={property} variant="compact" />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Building2 className="h-6 w-6 text-homez-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{agent.totalListings}</p>
                  <p className="text-sm text-gray-500">Listings</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Building2 className="h-6 w-6 text-homez-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{agent.totalSales}</p>
                  <p className="text-sm text-gray-500">Sales</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <Button className="w-full bg-homez-primary hover:bg-homez-primary/90">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  {agent.phone}
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">Follow</h3>
              <div className="flex gap-3">
                {agent.socialLinks.facebook && (
                  <a href={agent.socialLinks.facebook} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-homez-primary hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
                {agent.socialLinks.twitter && (
                  <a href={agent.socialLinks.twitter} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-homez-primary hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {agent.socialLinks.linkedin && (
                  <a href={agent.socialLinks.linkedin} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-homez-primary hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {agent.socialLinks.instagram && (
                  <a href={agent.socialLinks.instagram} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-homez-primary hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">Experience</h3>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">Agent since {new Date(agent.joinedAt).getFullYear()}</p>
                  <p className="text-sm text-gray-500">{new Date().getFullYear() - new Date(agent.joinedAt).getFullYear()} years experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
