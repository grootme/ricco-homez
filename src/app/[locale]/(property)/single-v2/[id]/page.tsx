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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

export default async function SingleV2({ params }: SinglePropertyPageProps) {
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

  return (
    <main className="min-h-screen bg-white">
      {/* Full-width Gallery */}
      <PropertyGallery property={property} showThumbnails={false} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Inline Overview - Gallery-focused style */}
            <PropertyOverview property={property} variant="inline" />

            {/* Compact Stats Bar */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <BedDouble className="h-5 w-5 text-gray-400" />
                  <span className="font-semibold">{property.bedrooms}</span>
                  <span className="text-gray-500 text-sm">Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-gray-400" />
                  <span className="font-semibold">{property.bathrooms}</span>
                  <span className="text-gray-500 text-sm">Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-gray-400" />
                  <span className="font-semibold">{property.sqft.toLocaleString()}</span>
                  <span className="text-gray-500 text-sm">Sqft</span>
                </div>
                <div className="flex items-center gap-2 ml-auto">
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

            {/* Description */}
            <div className="border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">About This Property</h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Tabbed Content */}
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                <TabsTrigger 
                  value="features" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-homez-primary data-[state=active]:bg-transparent"
                >
                  Features
                </TabsTrigger>
                <TabsTrigger 
                  value="floorplans"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-homez-primary data-[state=active]:bg-transparent"
                >
                  Floor Plans
                </TabsTrigger>
                <TabsTrigger 
                  value="media"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-homez-primary data-[state=active]:bg-transparent"
                >
                  Video & Virtual Tour
                </TabsTrigger>
                <TabsTrigger 
                  value="location"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-homez-primary data-[state=active]:bg-transparent"
                >
                  Location
                </TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="pt-6">
                <PropertyFeatures property={property} variant="grouped" />
              </TabsContent>

              <TabsContent value="floorplans" className="pt-6">
                <PropertyFloorPlans property={property} />
              </TabsContent>

              <TabsContent value="media" className="pt-6 space-y-6">
                <PropertyVideo property={property} variant="default" />
                <PropertyVirtualTour property={property} variant="default" />
              </TabsContent>

              <TabsContent value="location" className="pt-6 space-y-6">
                <PropertyMap property={property} variant="default" />
                <PropertyNearby property={property} variant="list" />
              </TabsContent>
            </Tabs>

            {/* Reviews */}
            <PropertyReviews property={property} variant="default" />

            {/* Similar Properties */}
            <div className="border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">You May Also Like</h2>
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
            <ScheduleTour property={property} agent={agent} variant="compact" />

            {/* Inquiry Form */}
            <InquiryForm property={property} agent={agent} variant="compact" />

            {/* Location Summary */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-homez-primary" />
                Property Location
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {property.address}
              </p>
              <p className="text-sm text-gray-500">
                {property.city}, {property.state} {property.zipCode}
              </p>
              {property.neighborhood && (
                <p className="text-sm text-gray-500 mt-1">
                  Neighborhood: {property.neighborhood}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
