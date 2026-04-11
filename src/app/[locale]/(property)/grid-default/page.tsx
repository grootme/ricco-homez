'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { PropertyCard } from '@/components/property';
import { SortDropdown, Pagination } from '@/components/listing';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  LayoutGrid,
  LayoutList,
  Map,
  SlidersHorizontal,
  Home,
  AlertCircle,
} from 'lucide-react';
import { useTranslation, usePropertyDataSource } from '@/providers';
import type { Property, PropertySearchFilters } from '@/types';

const ITEMS_PER_PAGE = 9;

export default function GridDefaultPage() {
  const { t } = useTranslation();
  const propertyDataSource = usePropertyDataSource();

  const [filters, setFilters] = useState<PropertySearchFilters>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [properties, setProperties] = useState<Property[]>([]);
  const [totalProperties, setTotalProperties] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch properties
  useEffect(() => {
    async function fetchProperties() {
      setLoading(true);
      setError(null);

      try {
        const result = await propertyDataSource.getProperties({
          page: currentPage,
          limit: ITEMS_PER_PAGE,
          ...filters,
        });
        setProperties(result.data);
        setTotalProperties(result.total);
      } catch (err) {
        console.error('Failed to fetch properties:', err);
        setError(t('errors.somethingWentWrong', 'Failed to load properties'));
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, [currentPage, filters, propertyDataSource, t]);

  const totalPages = Math.ceil(totalProperties / ITEMS_PER_PAGE);

  const handleFilterChange = (newFilters: PropertySearchFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({});
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-homez-dark py-12">
        <div className="container-homez text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('property.properties', 'Browse Properties')}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t('search.browseAll', 'Discover your perfect property from our extensive collection of homes, apartments, and more')}
          </p>
        </div>
      </div>

      <div className="container-homez py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Sidebar Filter */}
              <div className="bg-white rounded-xl border shadow-sm p-5">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  {t('common.filter', 'Filters')}
                </h3>

                {/* Quick Filters */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">{t('search.propertyType', 'Property Type')}</label>
                    <div className="space-y-2">
                      {['house', 'apartment', 'condo', 'villa', 'townhouse'].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-homez-primary focus:ring-homez-primary"
                            checked={filters.propertyType?.includes(type as any) || false}
                            onChange={(e) => {
                              const currentTypes = filters.propertyType || [];
                              const newTypes = e.target.checked
                                ? [...currentTypes, type as any]
                                : currentTypes.filter((t) => t !== type);
                              handleFilterChange({
                                ...filters,
                                propertyType: newTypes.length > 0 ? newTypes : undefined,
                              });
                            }}
                          />
                          <span className="text-sm text-gray-600 capitalize">{t(`propertyTypes.${type}`, type)}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">{t('search.propertyStatus', 'Status')}</label>
                    <div className="space-y-2">
                      {[
                        { value: 'for-sale', label: t('property.forSale', 'For Sale') },
                        { value: 'for-rent', label: t('property.forRent', 'For Rent') },
                      ].map((status) => (
                        <label key={status.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-homez-primary focus:ring-homez-primary"
                            checked={filters.status?.includes(status.value as any) || false}
                            onChange={(e) => {
                              const currentStatuses = filters.status || [];
                              const newStatuses = e.target.checked
                                ? [...currentStatuses, status.value as any]
                                : currentStatuses.filter((s) => s !== status.value);
                              handleFilterChange({
                                ...filters,
                                status: newStatuses.length > 0 ? newStatuses : undefined,
                              });
                            }}
                          />
                          <span className="text-sm text-gray-600">{status.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">{t('search.priceRange', 'Price Range')}</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        placeholder={t('search.minPrice', 'Min')}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        value={filters.minPrice || ''}
                        onChange={(e) =>
                          handleFilterChange({
                            ...filters,
                            minPrice: e.target.value ? parseInt(e.target.value) : undefined,
                          })
                        }
                      />
                      <input
                        type="number"
                        placeholder={t('search.maxPrice', 'Max')}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        value={filters.maxPrice || ''}
                        onChange={(e) =>
                          handleFilterChange({
                            ...filters,
                            maxPrice: e.target.value ? parseInt(e.target.value) : undefined,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">{t('property.bedrooms', 'Bedrooms')}</label>
                    <div className="flex flex-wrap gap-2">
                      {[t('common.all', 'Any'), '1', '2', '3', '4', '5+'].map((num) => (
                        <Button
                          key={num}
                          variant={
                            (num === t('common.all', 'Any') && !filters.minBedrooms) ||
                            (num !== t('common.all', 'Any') && filters.minBedrooms === parseInt(num.replace('+', '')))
                              ? 'default'
                              : 'outline'
                          }
                          size="sm"
                          onClick={() =>
                            handleFilterChange({
                              ...filters,
                              minBedrooms: num === t('common.all', 'Any') ? undefined : parseInt(num.replace('+', '')),
                            })
                          }
                          className="flex-1 min-w-[40px]"
                        >
                          {num}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">{t('property.bathrooms', 'Bathrooms')}</label>
                    <div className="flex flex-wrap gap-2">
                      {[t('common.all', 'Any'), '1', '2', '3', '4+'].map((num) => (
                        <Button
                          key={num}
                          variant={
                            (num === t('common.all', 'Any') && !filters.minBathrooms) ||
                            (num !== t('common.all', 'Any') && filters.minBathrooms === parseInt(num.replace('+', '')))
                              ? 'default'
                              : 'outline'
                          }
                          size="sm"
                          onClick={() =>
                            handleFilterChange({
                              ...filters,
                              minBathrooms: num === t('common.all', 'Any') ? undefined : parseInt(num.replace('+', '')),
                            })
                          }
                          className="flex-1 min-w-[40px]"
                        >
                          {num}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={handleClearFilters}
                  >
                    {t('search.clearFilters', 'Clear All Filters')}
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white rounded-xl border shadow-sm p-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  {t('search.results', '{count} results', { count: totalProperties })}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <SortDropdown
                  value={filters.sortBy}
                  onChange={(sortBy) => handleFilterChange({ ...filters, sortBy })}
                />

                {/* View Toggle */}
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <Button
                    variant={view === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setView('grid')}
                    className="rounded-none"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={view === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setView('list')}
                    className="rounded-none"
                  >
                    <LayoutList className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-none"
                    disabled
                  >
                    <Map className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton key={i} className="h-80" />
                ))}
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6 text-center">
                  <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-red-700 mb-2">{t('errors.errorOccurred', 'Error Occurred')}</h3>
                  <p className="text-red-600 mb-4">{error}</p>
                  <Button onClick={() => window.location.reload()}>
                    {t('common.tryAgain', 'Try Again')}
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Property Grid/List */}
            {!loading && !error && properties.length > 0 && (
              <>
                {view === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {properties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {properties.map((property) => (
                      <PropertyCard key={property.id} property={property} variant="horizontal" />
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Empty State */}
            {!loading && !error && properties.length === 0 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('search.noResults', 'No properties found')}</h3>
                <p className="text-gray-600 mb-6">{t('search.tryAdjusting', 'Try adjusting your search filters')}</p>
                <Button variant="outline" onClick={handleClearFilters}>
                  {t('search.clearFilters', 'Clear Filters')}
                </Button>
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
        </div>
      </div>
    </main>
  );
}
