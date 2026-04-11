'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useProperties } from '@/hooks/useAsyncData';
import { BannerSearch, Pagination, SortDropdown } from '@/components/listing';
import { PropertyCard } from '@/components/property';
import { PropertySearchFilters } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Home, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

// Mortgage Calculator Component
function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);

  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return (
    <Card className="overflow-hidden">
      <div className="bg-homez-dark p-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Mortgage Calculator
        </h3>
      </div>
      <CardContent className="p-5 space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Home Price</label>
          <input
            type="range"
            min="100000"
            max="2000000"
            step="10000"
            value={homePrice}
            onChange={(e) => setHomePrice(parseInt(e.target.value))}
            className="w-full accent-homez-primary"
          />
          <p className="text-sm text-gray-600 mt-1">${homePrice.toLocaleString()}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Down Payment</label>
          <input
            type="range"
            min="0"
            max={homePrice * 0.5}
            step="5000"
            value={downPayment}
            onChange={(e) => setDownPayment(parseInt(e.target.value))}
            className="w-full accent-homez-primary"
          />
          <p className="text-sm text-gray-600 mt-1">${downPayment.toLocaleString()} ({((downPayment / homePrice) * 100).toFixed(0)}%)</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Loan Term</label>
          <div className="flex gap-2">
            {[15, 20, 30].map((term) => (
              <Button
                key={term}
                variant={loanTerm === term ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLoanTerm(term)}
                className="flex-1"
              >
                {term} yrs
              </Button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Interest Rate</label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-gray-500 mb-1">Estimated Monthly Payment</p>
          <p className="text-3xl font-bold text-homez-primary">
            ${Math.round(monthlyPayment).toLocaleString()}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Loan Amount: ${loanAmount.toLocaleString()}
          </p>
        </div>

        <Button className="w-full bg-homez-primary hover:bg-homez-primary/90">
          Get Pre-Approved
        </Button>
      </CardContent>
    </Card>
  );
}

export default function BannerSearchV1Page() {
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
      {/* Hero Banner with Search */}
      <BannerSearch
        variant="v1"
        title="Find Your Perfect Home"
        subtitle="Search from thousands of properties across the country"
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

      <div className="container-homez py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Featured Properties</h2>
                <p className="text-gray-500">{filteredProperties.length} properties found</p>
              </div>
              <SortDropdown
                value={filters.sortBy}
                onChange={(sortBy) => setFilters({ ...filters, sortBy })}
              />
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <Home className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No properties found matching your criteria</p>
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

          {/* Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 space-y-6">
            <MortgageCalculator />

            {/* Contact Card */}
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our experienced agents are here to help you find your dream home.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-homez-primary" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-homez-primary" />
                    <span>support@homez.com</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>

            {/* Featured Agent */}
            <Card>
              <CardContent className="p-5">
                <Badge className="mb-3">Featured Agent</Badge>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                    alt="Agent"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">John Smith</p>
                    <p className="text-sm text-gray-500">Top Agent</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  15+ years experience, 500+ properties sold
                </p>
                <Button className="w-full bg-homez-primary hover:bg-homez-primary/90">
                  Contact Agent
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
