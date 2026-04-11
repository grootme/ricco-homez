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
  Maximize
} from 'lucide-react';

interface SinglePropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleV4({ params }: SinglePropertyPageProps) {
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
      {/* Full-width Gallery at top */}
      <div className="w-full">
        <PropertyGallery property={property} showThumbnails={false} />
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-homez py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-homez-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/grid-default" className="hover:text-homez-primary">Properties</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="container-homez py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Left */}
          <div className="lg:w-80 lg:order-first space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Badge className={`${statusColors[property.status]} mb-3`}>
                {property.status.replace('-', ' ').toUpperCase()}
              </Badge>
              <p className="text-3xl font-bold text-homez-primary mb-2">
                {formatPrice(property.price, property.priceSuffix)}
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {property.city}, {property.state}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">Property Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Property Type</span>
                  <span className="font-medium capitalize">{property.propertyType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Bedrooms</span>
                  <span className="font-medium">{property.bedrooms}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Bathrooms</span>
                  <span className="font-medium">{property.bathrooms}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Square Feet</span>
                  <span className="font-medium">{property.sqft.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Year Built</span>
                  <span className="font-medium">{property.yearBuilt || 'N/A'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Garage</span>
                  <span className="font-medium">{property.garage || 0}</span>
                </div>
              </div>
            </div>

            {/* Agent Card */}
            {agent && (
              <AgentCard agent={agent} variant="sidebar" />
            )}

            {/* Schedule Tour */}
            <ScheduleTour property={property} agent={agent} variant="default" />

            {/* Inquiry Form */}
            <InquiryForm property={property} agent={agent} variant="default" />

            {/* Mortgage Calculator */}
            <MortgageCalculator property={property} variant="compact" />
          </div>

          {/* Main Content - Right */}
          <div className="flex-1 lg:order-last space-y-6">
            {/* Title Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>
              <p className="text-gray-500 flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {property.address}, {property.city}, {property.state} {property.zipCode}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
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

            {/* Overview - Cards Style */}
            <PropertyOverview property={property} variant="cards" />

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

            {/* Location Map */}
            <PropertyMap property={property} variant="large" />

            {/* Nearby */}
            <PropertyNearby property={property} variant="list" />

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
        </div>
      </div>
    </main>
  );
}
