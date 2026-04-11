'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, MapPin, Phone, Mail, Building2, AlertCircle } from 'lucide-react';
import { useTranslation, useAgentDataSource } from '@/providers';
import type { Agent } from '@/types';

export default function AgentsPage() {
  const { t } = useTranslation();
  const agentDataSource = useAgentDataSource();

  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch agents
  useEffect(() => {
    async function fetchAgents() {
      setLoading(true);
      setError(null);

      try {
        const result = await agentDataSource.getAgents({ limit: 50 });
        setAgents(result.data);
      } catch (err) {
        console.error('Failed to fetch agents:', err);
        setError(t('errors.somethingWentWrong', 'Failed to load agents'));
      } finally {
        setLoading(false);
      }
    }

    fetchAgents();
  }, [agentDataSource, t]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-homez-dark py-16">
        <div className="container-homez text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('agent.agents', 'Our Expert Agents')}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t('profile.connectExperts', 'Connect with experienced real estate professionals ready to help you find your perfect property')}
          </p>
        </div>
      </div>

      <div className="container-homez section-padding">
        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48" />
                <CardContent className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-4 w-full mb-3" />
                  <div className="flex gap-2">
                    <Skeleton className="h-10 flex-1" />
                    <Skeleton className="h-10 flex-1" />
                  </div>
                </CardContent>
              </Card>
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

        {/* Empty State */}
        {!loading && !error && agents.length === 0 && (
          <Card className="py-16">
            <CardContent className="text-center">
              <Building2 className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('common.noResults', 'No agents found')}</h3>
              <p className="text-gray-500">{t('profile.noAgents', 'No agents are currently available.')}</p>
            </CardContent>
          </Card>
        )}

        {/* Agents Grid */}
        {!loading && !error && agents.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <Card key={agent.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gray-200">
                  {agent.avatar ? (
                    <img
                      src={agent.avatar}
                      alt={agent.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <span className="text-4xl font-bold text-gray-400">
                        {agent.name?.charAt(0)?.toUpperCase() || 'A'}
                      </span>
                    </div>
                  )}
                  {agent.featured && (
                    <Badge className="absolute top-3 right-3 bg-homez-primary text-white">
                      {t('agent.featured', 'Featured')}
                    </Badge>
                  )}
                  {agent.verified && (
                    <Badge className="absolute top-3 left-3 bg-green-500 text-white">
                      {t('agent.verified', 'Verified')}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{agent.rating?.toFixed(1) || '0.0'}</span>
                    <span className="text-gray-500 text-sm">({agent.reviewCount || 0} {t('agent.reviews', 'reviews')})</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{agent.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{agent.title}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                    <MapPin className="h-4 w-4" />
                    {agent.city}, {agent.state}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {agent.totalListings || 0} {t('property.properties', 'listings')}
                    </span>
                    <span className="flex items-center gap-1">
                      {agent.totalSales || 0} {t('agent.totalSales', 'sales')}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/agent-single/${agent.id}`}>{t('agent.viewProfile', 'View Profile')}</Link>
                    </Button>
                    <Button size="sm" className="flex-1 bg-homez-primary hover:bg-homez-primary/90" asChild>
                      <Link href={`/agent-single/${agent.id}`}>{t('agent.contact', 'Contact')}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
