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
  Calendar,
  Home,
  Car
} from 'lucide-react';

interface SinglePropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleV3({ params }: SinglePropertyPageProps) {
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
      {/* Compact Header with Gallery */}
      <div className="bg-white border-b">
        <div className="container-homez py-4">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-homez-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/grid-default" className="hover:text-homez-primary">Properties</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="container-homez py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Compact Gallery */}
            <PropertyGallery property={property} />

            {/* Compact Title Section */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <Badge className={`${statusColors[property.status]} mb-2`}>
                    {property.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                  <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
                  <p className="text-gray-500 flex items-center gap-1 mt-1 text-sm">
                    <MapPin className="h-4 w-4" />
                    {property.address}, {property.city}, {property.state}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-homez-primary">
                    {formatPrice(property.price, property.priceSuffix)}
                  </p>
                </div>
              </div>

              {/* Compact Stats Grid */}
              <div className="grid grid-cols-4 md:grid-cols-7 gap-3 mt-4 pt-4 border-t">
                <div className="text-center">
                  <BedDouble className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <p className="font-semibold text-sm">{property.bedrooms}</p>
                  <p className="text-xs text-gray-500">Beds</p>
                </div>
                <div className="text-center">
                  <Bath className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <p className="font-semibold text-sm">{property.bathrooms}</p>
                  <p className="text-xs text-gray-500">Baths</p>
                </div>
                <div className="text-center">
                  <Maximize className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <p className="font-semibold text-sm">{property.sqft.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">Sqft</p>
                </div>
                <div className="text-center">
                  <Car className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <p className="font-semibold text-sm">{property.garage || 0}</p>
                  <p className="text-xs text-gray-500">Garage</p>
                </div>
                <div className="text-center">
                  <Calendar className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <p className="font-semibold text-sm">{property.yearBuilt || 'N/A'}</p>
                  <p className="text-xs text-gray-500">Built</p>
                </div>
                <div className="text-center">
                  <Home className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <p className="font-semibold text-sm capitalize">{property.propertyType}</p>
                  <p className="text-xs text-gray-500">Type</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-1" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Printer className="h-4 w-4 mr-1" />
                  Print
                </Button>
              </div>
            </div>

            {/* Description - Compact */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h2 className="text-lg font-bold mb-3">Description</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features - Compact */}
            <PropertyFeatures property={property} variant="compact" />

            {/* Floor Plans */}
            <PropertyFloorPlans property={property} />

            {/* Video & Virtual Tour - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PropertyVideo property={property} variant="compact" />
              <PropertyVirtualTour property={property} variant="compact" />
            </div>

            {/* Location Map */}
            <PropertyMap property={property} variant="default" />

            {/* Nearby - Compact */}
            <PropertyNearby property={property} variant="compact" />

            {/* Reviews - Compact */}
            <PropertyReviews property={property} variant="compact" />

            {/* Similar Properties */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Similar Properties</h2>
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

          {/* Sidebar - Right */}
          <div className="space-y-4">
            {/* Mortgage Calculator - Compact */}
            <MortgageCalculator property={property} variant="compact" />

            {/* Agent Card */}
            {agent && (
              <AgentCard agent={agent} variant="sidebar" />
            )}

            {/* Schedule Tour */}
            <ScheduleTour property={property} agent={agent} variant="compact" />

            {/* Inquiry Form - Compact */}
            <InquiryForm property={property} agent={agent} variant="compact" />
          </div>
        </div>
      </div>
    </main>
  );
}
