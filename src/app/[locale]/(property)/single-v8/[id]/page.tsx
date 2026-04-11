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
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { getDataSource } from '@/lib/datasource';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Heart,
  Share2,
  Printer,
  ChevronRight,
  MapPin,
  Expand,
  X,
  ChevronLeft
} from 'lucide-react';

interface SinglePropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleV8({ params }: SinglePropertyPageProps) {
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

      {/* Masonry Gallery */}
      <div className="container-homez py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[150px] md:auto-rows-[200px]">
          {/* Large feature image */}
          <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group cursor-pointer">
            <img
              src={images[0]}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <Expand className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Price Badge */}
            <div className="absolute bottom-4 left-4 bg-homez-primary text-white px-4 py-2 rounded-lg">
              <p className="text-xl font-bold">{formatPrice(property.price, property.priceSuffix)}</p>
            </div>
            {/* Status Badge */}
            <Badge className={`absolute top-4 left-4 ${statusColors[property.status]}`}>
              {property.status.replace('-', ' ').toUpperCase()}
            </Badge>
          </div>

          {/* Smaller images in masonry layout */}
          {images.slice(1, 7).map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                idx === 0 || idx === 3 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={img}
                alt={`${property.title} ${idx + 2}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Expand className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}

          {/* View All Button */}
          {images.length > 7 && (
            <div className="relative rounded-xl overflow-hidden group cursor-pointer bg-gray-200 flex items-center justify-center">
              <img
                src={images[7]}
                alt={`${property.title} 8`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">+{images.length - 7} more</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container-homez pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>
              <p className="text-gray-500 flex items-center gap-1 mb-4">
                <MapPin className="h-4 w-4" />
                {property.address}, {property.city}, {property.state}
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

            {/* Overview - Grid Style */}
            <PropertyOverview property={property} variant="grid" />

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
