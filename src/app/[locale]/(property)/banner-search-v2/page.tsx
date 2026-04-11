'use client';

import { useState, useMemo } from 'react';
import { useProperties } from '@/hooks/useAsyncData';
import { BannerSearch, Pagination, SortDropdown } from '@/components/listing';
import { PropertyCard } from '@/components/property';
import { PropertySearchFilters } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, MapPin, TrendingUp, Shield, Clock, Award } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

export default function BannerSearchV2Page() {
  const { data: propertiesData, isLoading } = useProperties();
  
  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading properties...</div>
      </main>
    );
  }
  
  const properties = propertiesData ?? [];

  const [filters, setFilters] = useState<PropertySearchFilters>({});
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (filters.query) {
      const query = filters.query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.city.toLowerCase().includes(query)
      );
    }

    if (filters.propertyType && filters.propertyType.length > 0) {
      result = result.filter((p) => filters.propertyType!.includes(p.propertyType));
    }

    if (filters.status && filters.status.length > 0) {
      result = result.filter((p) => filters.status!.includes(p.status));
    }

    return result;
  }, [filters]);

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner with Search V2 */}
      <BannerSearch
        variant="v2"
        title="Discover Your Dream Property"
        subtitle="Browse our curated selection of premium homes and apartments"
        onSearch={(searchFilters) => {
          setFilters({
            query: searchFilters.query,
            location: searchFilters.location,
            propertyType: searchFilters.type ? [searchFilters.type as any] : undefined,
            status: searchFilters.status ? [searchFilters.status as any] : undefined,
            minPrice: searchFilters.minPrice,
            maxPrice: searchFilters.maxPrice,
            minBedrooms: searchFilters.bedrooms,
            minBathrooms: searchFilters.bathrooms,
          });
          setCurrentPage(1);
        }}
      />

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container-homez">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-homez-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-7 w-7 text-homez-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Best Prices</h3>
              <p className="text-sm text-gray-500">Competitive market rates</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-homez-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="h-7 w-7 text-homez-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Verified Listings</h3>
              <p className="text-sm text-gray-500">100% authentic properties</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-homez-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="h-7 w-7 text-homez-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Quick Response</h3>
              <p className="text-sm text-gray-500">24/7 customer support</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-homez-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className="h-7 w-7 text-homez-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Top Agents</h3>
              <p className="text-sm text-gray-500">Expert guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-12">
        <div className="container-homez">
          {/* Results Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Available Properties</h2>
              <p className="text-gray-500">
                Showing {paginatedProperties.length} of {filteredProperties.length} properties
              </p>
            </div>
            <SortDropdown
              value={filters.sortBy}
              onChange={(sortBy) => setFilters({ ...filters, sortBy })}
            />
          </div>

          {/* Properties Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <Home className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No properties found</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-homez-dark py-16">
        <div className="container-homez text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Let our expert agents help you find your perfect property. 
            Tell us what you need and we&apos;ll do the rest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-homez-primary hover:bg-homez-primary/90">
              Contact an Agent
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-homez-dark">
              Save Your Search
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
