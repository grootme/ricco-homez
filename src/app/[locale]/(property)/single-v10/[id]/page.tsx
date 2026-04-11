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
  Maximize,
  Calendar,
  Home,
  Car,
  Play
} from 'lucide-react';

interface SinglePropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleV10({ params }: SinglePropertyPageProps) {
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
      {/* Hero Banner */}
      <div 
        className="relative h-[40vh] min-h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[0]})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        
        <div className="absolute inset-0 flex flex-col">
          {/* Breadcrumb */}
          <div className="container-homez pt-6">
            <div className="flex items-center text-sm text-white/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/grid-default" className="hover:text-white">Properties</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-white">{property.title}</span>
            </div>
          </div>

          {/* Quick Info */}
          <div className="flex-1 flex items-end">
            <div className="container-homez pb-6 w-full">
              <Badge className={`${statusColors[property.status]} mb-3`}>
                {property.status.replace('-', ' ').toUpperCase()}
              </Badge>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 max-w-2xl">
                {property.title}
              </h1>
              <p className="text-white/90 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {property.city}, {property.state}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-homez py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-3xl font-bold text-homez-primary">
                    {formatPrice(property.price, property.priceSuffix)}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Est. ${Math.round(property.price / 360).toLocaleString()}/mo
                  </p>
                </div>
                <div className="flex gap-2">
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

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <BedDouble className="h-6 w-6 text-homez-primary mx-auto mb-2" />
                <p className="font-bold text-lg">{property.bedrooms}</p>
                <p className="text-xs text-gray-500">Bedrooms</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <Bath className="h-6 w-6 text-homez-primary mx-auto mb-2" />
                <p className="font-bold text-lg">{property.bathrooms}</p>
                <p className="text-xs text-gray-500">Bathrooms</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <Maximize className="h-6 w-6 text-homez-primary mx-auto mb-2" />
                <p className="font-bold text-lg">{property.sqft.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Sqft</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <Calendar className="h-6 w-6 text-homez-primary mx-auto mb-2" />
                <p className="font-bold text-lg">{property.yearBuilt || 'N/A'}</p>
                <p className="text-xs text-gray-500">Year Built</p>
              </div>
            </div>

            {/* Image Gallery Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden">
                  <img
                    src={images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                {images.slice(1, 5).map((img, idx) => (
                  <div key={idx} className="relative rounded-lg overflow-hidden aspect-square">
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    {idx === 3 && images.length > 5 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-semibold">+{images.length - 5}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-3">About This Property</h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features Card */}
            <PropertyFeatures property={property} variant="compact" />

            {/* Floor Plans Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <PropertyFloorPlans property={property} />
            </div>

            {/* Video & Virtual Tour Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PropertyVideo property={property} variant="compact" />
              <PropertyVirtualTour property={property} variant="compact" />
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-homez-primary" />
                  Location
                </h2>
              </div>
              <PropertyMap property={property} variant="compact" />
              <div className="p-4 border-t">
                <p className="text-sm text-gray-600">{property.address}</p>
                <p className="text-sm text-gray-500">{property.city}, {property.state} {property.zipCode}</p>
              </div>
            </div>

            {/* Nearby Card */}
            <PropertyNearby property={property} variant="compact" />

            {/* Reviews Card */}
            <PropertyReviews property={property} variant="compact" />

            {/* Similar Properties */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
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

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Mortgage Calculator Card */}
            <MortgageCalculator property={property} variant="card" />

            {/* Agent Card */}
            {agent && (
              <AgentCard agent={agent} variant="sidebar" />
            )}

            {/* Schedule Tour Card */}
            <ScheduleTour property={property} agent={agent} variant="compact" />

            {/* Inquiry Form Card */}
            <InquiryForm property={property} agent={agent} variant="default" />

            {/* Property Details Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-3">Property Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Type</span>
                  <span className="font-medium capitalize">{property.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <span className="font-medium capitalize">{property.status.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Garage</span>
                  <span className="font-medium">{property.garage || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Lot Size</span>
                  <span className="font-medium">{property.lotSize ? `${property.lotSize.toLocaleString()} sqft` : 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">MLS #</span>
                  <span className="font-medium">12345678</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
