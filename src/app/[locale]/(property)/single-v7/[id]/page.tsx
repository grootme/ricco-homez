import PropertyGallery from '@/components/property/PropertyGallery';
import PropertyOverview from '@/components/property/PropertyOverview';
import PropertyFeatures from '@/components/property/PropertyFeatures';
import PropertyFloorPlans from '@/components/property/PropertyFloorPlans';
import PropertyVideo from '@/components/property/PropertyVideo';
import PropertyVirtualTour from '@/components/property/PropertyVirtualTour';
import PropertyMap from '@/components/property/PropertyMap';
import PropertyNearby from '@/components/property/PropertyNearby';
import MortgageCalculator from '@/components/property/MortgageCalculator';
import AgentCard from '@/components/property/AgentCard';
import InquiryForm from '@/components/property/InquiryForm';
import ScheduleTour from '@/components/property/ScheduleTour';
import PropertyReviews from '@/components/property/PropertyReviews';
import PropertyCard from '@/components/property/PropertyCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getDataSource } from '@/lib/datasource';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Heart,
  Share2,
  Printer,
  ChevronRight,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Play
} from 'lucide-react';

interface SinglePropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleV7({ params }: SinglePropertyPageProps) {
  const { id } = await params;
  const dataSource = getDataSource();

  const property = await dataSource.properties.getPropertyById(id);
  
  if (!property) {
    notFound();
  }

  const [agent, featuredProperties] = await Promise.all([
    dataSource.agents.getAgentById(property.agentId),
    dataSource.properties.getFeaturedProperties(10),
  ]);

  const similarProperties = featuredProperties
    .filter(p => p.id !== property.id)
    .slice(0, 3);

  const formatPrice = (price: number, suffix?: string) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
    return suffix ? `${formatted}${suffix}` : formatted;
  };

  const statusColors: Record<string, string> = {
    'for-sale': 'bg-homez-primary text-white',
    'for-rent': 'bg-homez-dark text-white',
    'sold': 'bg-gray-500 text-white',
    'rented': 'bg-gray-500 text-white',
    'pending': 'bg-orange-500 text-white',
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Header with Background Image */}
      <div 
        className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: property.images[0] 
            ? `url(${property.images[0]})` 
            : 'url(/images/placeholder.jpg)',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col">
          {/* Top Navigation */}
          <div className="container-homez pt-6">
            <div className="flex items-center text-sm text-white/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/grid-default" className="hover:text-white">Properties</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-white">{property.title}</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-end">
            <div className="container-homez pb-8 w-full">
              <Badge className={`${statusColors[property.status]} mb-4`}>
                {property.status.replace('-', ' ').toUpperCase()}
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 max-w-3xl">
                {property.title}
              </h1>
              
              <p className="text-white/90 text-lg flex items-center gap-2 mb-6">
                <MapPin className="h-5 w-5" />
                {property.address}, {property.city}, {property.state}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center gap-6 text-white mb-6">
                <div className="flex items-center gap-2">
                  <BedDouble className="h-5 w-5" />
                  <span className="font-semibold">{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5" />
                  <span className="font-semibold">{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5" />
                  <span className="font-semibold">{property.sqft.toLocaleString()} Sqft</span>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-4xl font-bold text-white">
                  {formatPrice(property.price, property.priceSuffix)}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Heart className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Printer className="h-4 w-4 mr-1" />
                    Print
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-homez py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery Section */}
            <PropertyGallery property={property} />

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <PropertyFeatures property={property} variant="grouped" />

            {/* Floor Plans */}
            <PropertyFloorPlans property={property} />

            {/* Video */}
            <PropertyVideo property={property} variant="default" />

            {/* Virtual Tour */}
            <PropertyVirtualTour property={property} variant="default" />

            {/* Location */}
            <PropertyMap property={property} variant="default" />
            <PropertyNearby property={property} variant="default" />

            {/* Reviews */}
            <PropertyReviews property={property} variant="default" />

            {/* Similar Properties */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Similar Properties</h2>
                <Link href="/grid-default" className="text-homez-primary text-sm hover:underline">
                  View All
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {similarProperties.map((p) => (
                  <PropertyCard key={p.id} property={p} variant="compact" />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <MortgageCalculator property={property} variant="default" />
            {agent && <AgentCard agent={agent} variant="sidebar" />}
            <ScheduleTour property={property} agent={agent} variant="default" />
            <InquiryForm property={property} agent={agent} variant="default" />
          </div>
        </div>
      </div>
    </main>
  );
}
