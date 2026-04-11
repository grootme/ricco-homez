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
  Play
} from 'lucide-react';

interface SinglePropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleV5({ params }: SinglePropertyPageProps) {
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
      {/* Split Screen Hero */}
      <div className="flex flex-col lg:flex-row min-h-[60vh]">
        {/* Left - Gallery */}
        <div className="lg:w-1/2 relative">
          <PropertyGallery property={property} showThumbnails={false} />
          
          {/* Floating Price Badge */}
          <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
            <Badge className={`${statusColors[property.status]} mb-2`}>
              {property.status.replace('-', ' ').toUpperCase()}
            </Badge>
            <p className="text-2xl font-bold text-homez-primary">
              {formatPrice(property.price, property.priceSuffix)}
            </p>
          </div>

          {/* Video Button */}
          {property.videos && property.videos.length > 0 && (
            <button className="absolute top-4 right-4 bg-homez-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-homez-primary/90 transition-colors">
              <Play className="h-4 w-4" />
              Video
            </button>
          )}
        </div>

        {/* Right - Quick Info */}
        <div className="lg:w-1/2 bg-white p-6 lg:p-10 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {property.title}
            </h1>
            <p className="text-gray-500 flex items-center gap-2 mb-6">
              <MapPin className="h-5 w-5" />
              {property.address}, {property.city}, {property.state}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <BedDouble className="h-6 w-6 text-homez-primary mx-auto mb-2" />
                <p className="font-bold text-xl">{property.bedrooms}</p>
                <p className="text-sm text-gray-500">Beds</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Bath className="h-6 w-6 text-homez-primary mx-auto mb-2" />
                <p className="font-bold text-xl">{property.bathrooms}</p>
                <p className="text-sm text-gray-500">Baths</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Maximize className="h-6 w-6 text-homez-primary mx-auto mb-2" />
                <p className="font-bold text-xl">{property.sqft.toLocaleString()}</p>
                <p className="text-sm text-gray-500">Sqft</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Calendar className="h-6 w-6 text-homez-primary mx-auto mb-2" />
                <p className="font-bold text-xl">{property.yearBuilt || 'N/A'}</p>
                <p className="text-sm text-gray-500">Built</p>
              </div>
            </div>

            {/* Description Preview */}
            <p className="text-gray-600 mb-6 line-clamp-3">
              {property.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <ScheduleTour property={property} agent={agent} variant="modal" />
              <InquiryForm property={property} agent={agent} variant="modal" />
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-1" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </div>
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

      {/* Content Below */}
      <div className="container-homez py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">About This Property</h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <PropertyFeatures property={property} variant="grouped" />

            {/* Floor Plans */}
            <PropertyFloorPlans property={property} />

            {/* Video & Virtual Tour */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PropertyVideo property={property} variant="default" />
              <PropertyVirtualTour property={property} variant="card" />
            </div>

            {/* Location */}
            <PropertyMap property={property} variant="large" />
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
            {/* Mortgage Calculator */}
            <MortgageCalculator property={property} variant="default" />

            {/* Agent Card */}
            {agent && (
              <AgentCard agent={agent} variant="featured" />
            )}

            {/* Schedule Tour */}
            <ScheduleTour property={property} agent={agent} variant="default" />

            {/* Inquiry Form */}
            <InquiryForm property={property} agent={agent} variant="default" />
          </div>
        </div>
      </div>
    </main>
  );
}
