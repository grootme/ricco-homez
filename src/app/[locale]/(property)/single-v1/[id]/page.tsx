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
import { getDataSource } from '@/lib/datasource';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  MapPin, 
  Heart,
  Share2,
  Printer,
  ChevronRight,
  Home
} from 'lucide-react';

interface SinglePropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleV1({ params }: SinglePropertyPageProps) {
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

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-homez py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-homez-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/grid-default" className="hover:text-homez-primary">Properties</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 truncate">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="container-homez py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <PropertyGallery property={property} />

            {/* Overview - Grid Style */}
            <PropertyOverview property={property} variant="grid" />

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features & Amenities */}
            <PropertyFeatures property={property} variant="grouped" />

            {/* Floor Plans */}
            <PropertyFloorPlans property={property} />

            {/* Video Section */}
            <PropertyVideo property={property} variant="default" />

            {/* Virtual Tour */}
            <PropertyVirtualTour property={property} variant="default" />

            {/* Location Map */}
            <PropertyMap property={property} variant="default" />

            {/* Nearby Places */}
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

          {/* Sidebar - Right */}
          <div className="space-y-6">
            {/* Mortgage Calculator */}
            <MortgageCalculator property={property} variant="default" />

            {/* Agent Card */}
            {agent && (
              <AgentCard agent={agent} variant="sidebar" />
            )}

            {/* Schedule Tour */}
            <ScheduleTour property={property} agent={agent} variant="default" />

            {/* Inquiry Form */}
            <InquiryForm property={property} agent={agent} variant="default" />

            {/* Quick Contact */}
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <div className="space-y-2">
                <Link href="#features" className="flex items-center text-sm text-gray-600 hover:text-homez-primary">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Features & Amenities
                </Link>
                <Link href="#floorplans" className="flex items-center text-sm text-gray-600 hover:text-homez-primary">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Floor Plans
                </Link>
                <Link href="#video" className="flex items-center text-sm text-gray-600 hover:text-homez-primary">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Video Tour
                </Link>
                <Link href="#map" className="flex items-center text-sm text-gray-600 hover:text-homez-primary">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Location & Nearby
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
