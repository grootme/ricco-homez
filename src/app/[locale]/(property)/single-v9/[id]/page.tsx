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
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Expand
} from 'lucide-react';

interface SinglePropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleV9({ params }: SinglePropertyPageProps) {
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

  const images = property.images.length > 0 ? property.images : ['/images/placeholder.jpg'];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b sticky top-0 z-40">
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

      {/* Split Layout - Sticky Gallery */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-52px)]">
        {/* Left - Sticky Gallery */}
        <div className="lg:w-1/2 lg:sticky lg:top-[52px] lg:h-[calc(100vh-52px)]">
          <div className="relative h-80 lg:h-full">
            {/* Main Image */}
            <div className="relative h-full">
              <img
                src={images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              
              {/* Status Badge */}
              <Badge className={`absolute top-4 left-4 ${statusColors[property.status]}`}>
                {property.status.replace('-', ' ').toUpperCase()}
              </Badge>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                1 / {images.length}
              </div>

              {/* Expand Button */}
              <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow">
                <Expand className="h-5 w-5" />
              </button>

              {/* Navigation */}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow">
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
              {images.slice(0, 5).map((img, idx) => (
                <div
                  key={idx}
                  className={`w-16 h-12 rounded-lg overflow-hidden border-2 ${
                    idx === 0 ? 'border-white' : 'border-transparent opacity-70'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Scrollable Content */}
        <div className="lg:w-1/2">
          <div className="container-homez py-6 space-y-6">
            {/* Title Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>
              <p className="text-gray-500 flex items-center gap-1 mb-4">
                <MapPin className="h-4 w-4" />
                {property.address}, {property.city}, {property.state}
              </p>
              <p className="text-3xl font-bold text-homez-primary mb-4">
                {formatPrice(property.price, property.priceSuffix)}
              </p>
              
              <div className="flex flex-wrap gap-3">
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

            {/* Overview */}
            <PropertyOverview property={property} variant="grid" />

            {/* Mortgage Calculator */}
            <MortgageCalculator property={property} variant="compact" />

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <PropertyFeatures property={property} variant="compact" />

            {/* Floor Plans */}
            <PropertyFloorPlans property={property} />

            {/* Video & Virtual Tour */}
            <PropertyVideo property={property} variant="default" />
            <PropertyVirtualTour property={property} variant="default" />

            {/* Location */}
            <PropertyMap property={property} variant="default" />
            <PropertyNearby property={property} variant="compact" />

            {/* Reviews */}
            <PropertyReviews property={property} variant="compact" />

            {/* Agent Card */}
            {agent && <AgentCard agent={agent} variant="featured" />}

            {/* Schedule Tour & Inquiry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScheduleTour property={property} agent={agent} variant="compact" />
              <InquiryForm property={property} agent={agent} variant="compact" />
            </div>

            {/* Similar Properties */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Similar Properties</h2>
                <Link href="/grid-default" className="text-homez-primary text-sm hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {similarProperties.map((p) => (
                  <PropertyCard key={p.id} property={p} variant="horizontal" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
