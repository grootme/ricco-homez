'use client';

import { useState } from 'react';
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
import { Property, Agent } from '@/types';
import Link from 'next/link';
import { 
  Heart,
  Share2,
  Printer,
  ChevronRight,
  MapPin,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Image as ImageIcon,
  Map,
  Video,
  Bed,
  Bath,
  Maximize,
  Eye,ArrowRight,
  Clock,
  ArrowLeftRight,
} from 'lucide-react';

interface SingleV6ClientProps {
  property: Property;
  agent: Agent | undefined;
  similarProperties: Property[];
}

export default function SingleV6Client({ property, agent, similarProperties }: SingleV6ClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('images');
  const [isFavorited, setIsFavorited] = useState(false);
  const images = property.images.length > 0 ? property.images : ['/images/placeholder.jpg'];

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

  const statusLabels: Record<string, string> = {
    'for-sale': 'For Sale',
    'for-rent': 'For Rent',
    'sold': 'Sold',
    'rented': 'Rented',
    'pending': 'Pending',
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const pricePerSqft = property.sqft ? property.price / property.sqft : 0;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-homez py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-homez-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/grid-default" className="hover:text-homez-primary transition-colors">Properties</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="container-homez py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Header - Title, Price, Meta */}
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              {/* Title Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={statusColors[property.status] || 'bg-gray-200 text-gray-700'}>
                      {statusLabels[property.status] || property.status}
                    </Badge>
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {new Date(property.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      {property.views || Math.floor(Math.random() * 10000 + 1000).toLocaleString()} views
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <p className="text-gray-500 flex items-center gap-1.5 text-sm">
                    <MapPin className="h-4 w-4 text-homez-primary flex-shrink-0" />
                    <span>{property.address}, {property.city}, {property.state}</span>
                  </p>
                </div>
              </div>

              {/* Price & Specs Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t">
                <div>
                  <p className="text-3xl font-bold text-homez-primary">
                    {formatPrice(property.price, property.priceSuffix)}
                  </p>
                  {pricePerSqft > 0 && (
                    <p className="text-sm text-gray-400 mt-0.5">
                      {formatPrice(Math.round(pricePerSqft))}/sqft
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bed className="h-5 w-5 text-gray-400" />
                    <span className="font-semibold">{property.bedrooms}</span>
                    <span className="text-sm text-gray-400 hidden sm:inline">Beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bath className="h-5 w-5 text-gray-400" />
                    <span className="font-semibold">{property.bathrooms}</span>
                    <span className="text-sm text-gray-400 hidden sm:inline">Baths</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Maximize className="h-5 w-5 text-gray-400" />
                    <span className="font-semibold">{property.sqft}</span>
                    <span className="text-sm text-gray-400 hidden sm:inline">Sqft</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-3 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  className={`gap-1.5 ${isFavorited ? 'text-red-500 border-red-200 bg-red-50' : ''}`}
                  onClick={() => setIsFavorited(!isFavorited)}
                >
                  <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500' : ''}`} />
                  <span className="hidden sm:inline">{isFavorited ? 'Saved' : 'Save'}</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Share2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Share</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Printer className="h-4 w-4" />
                  <span className="hidden sm:inline">Print</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <ArrowLeftRight className="h-4 w-4" />
                  <span className="hidden sm:inline">Compare</span>
                </Button>
              </div>
            </div>

            {/* Vertical Slider Gallery with Tabs */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab('images')}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'images'
                      ? 'text-homez-primary border-b-2 border-homez-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <ImageIcon className="h-4 w-4" />
                  Images ({images.length})
                </button>
                <button
                  onClick={() => setActiveTab('map')}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'map'
                      ? 'text-homez-primary border-b-2 border-homez-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Map className="h-4 w-4" />
                  Map
                </button>
                <button
                  onClick={() => setActiveTab('video')}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'video'
                      ? 'text-homez-primary border-b-2 border-homez-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Video className="h-4 w-4" />
                  Video
                </button>
              </div>

              {/* Tab Content */}
              <div className="flex">
                {/* Thumbnails */}
                {activeTab === 'images' && (
                  <div className="hidden md:flex w-24 bg-gray-100 p-2 flex-col gap-2 overflow-y-auto max-h-[500px]">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-full aspect-square rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                          currentImageIndex === idx
                            ? 'ring-2 ring-homez-primary shadow-md'
                            : 'opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={`${property.title} ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Main Content */}
                <div className="flex-1">
                  {activeTab === 'images' && (
                    <div className="relative aspect-video bg-gray-100">
                      <img
                        src={images[currentImageIndex]}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white shadow-lg transition-colors"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white shadow-lg transition-colors"
                      >
                        <ChevronRightIcon className="h-6 w-6" />
                      </button>
                      {/* Counter */}
                      <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-sm">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                      {/* Mobile Thumbnails */}
                      <div className="absolute bottom-4 right-4 md:hidden">
                        <div className="bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                          Swipe to browse
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'map' && (
                    <div className="aspect-video">
                      <PropertyMap property={property} variant="large" />
                    </div>
                  )}

                  {activeTab === 'video' && (
                    <div className="aspect-video">
                      <PropertyVideo property={property} variant="hero" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tabbed Overview */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                <TabsTrigger
                  value="overview"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-homez-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-homez-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
                >
                  Features
                </TabsTrigger>
                <TabsTrigger
                  value="floorplans"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-homez-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
                >
                  Floor Plans
                </TabsTrigger>
                <TabsTrigger
                  value="location"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-homez-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
                >
                  Location
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="pt-6 space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{property.description}</p>
                </div>
                {/* Property Details Grid */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Property Details</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { label: 'Property ID', value: `HZ-${property.id}` },
                      { label: 'Property Type', value: property.propertyType || 'House' },
                      { label: 'Status', value: statusLabels[property.status] || property.status },
                      { label: 'Bedrooms', value: property.bedrooms },
                      { label: 'Bathrooms', value: property.bathrooms },
                      { label: 'Area', value: `${property.sqft} sqft` },
                      { label: 'Year Built', value: property.yearBuilt || '2020' },
                      { label: 'Garage', value: property.garage ? `${property.garage} Cars` : 'None' },
                      { label: 'Price', value: formatPrice(property.price, property.priceSuffix) },
                    ].map(item => (
                      <div key={item.label} className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                        <p className="font-semibold text-gray-900 text-sm">{String(item.value)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="pt-6">
                <PropertyFeatures property={property} variant="grouped" />
              </TabsContent>

              <TabsContent value="floorplans" className="pt-6">
                <PropertyFloorPlans property={property} />
              </TabsContent>

              <TabsContent value="location" className="pt-6 space-y-6">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <PropertyMap property={property} variant="large" />
                </div>
                <PropertyNearby property={property} variant="default" />
              </TabsContent>
            </Tabs>

            {/* Virtual Tour */}
            <PropertyVirtualTour property={property} variant="default" />

            {/* Reviews */}
            <PropertyReviews property={property} variant="default" />

            {/* Similar Properties */}
            {similarProperties.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Similar Properties</h2>
                  <Link href="/grid-default" className="text-homez-primary text-sm font-medium hover:underline flex items-center gap-1">
                    View All <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {similarProperties.map((p) => (
                    <PropertyCard key={p.id} property={p} variant="compact" />
                  ))}
                </div>
              </div>
            )}
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
