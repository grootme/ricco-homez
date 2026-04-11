'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Check,
  Crown,
  Zap,
  Building2,
  CreditCard,
  Calendar,
  Download,
  AlertCircle,
} from 'lucide-react';
import { useTranslation, useAuth, usePaymentDataSource } from '@/providers';
import type { Package, Invoice } from '@/types';

export default function DashboardMyPackage() {
  const { t } = useTranslation();
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const paymentDataSource = usePaymentDataSource();

  const [packages, setPackages] = useState<Package[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [currentPlan, setCurrentPlan] = useState<{
    id: string;
    name: string;
    price: number;
    renewalDate: string;
    status: string;
    usage: {
      listings: { used: number; limit: number };
      featuredListings: { used: number; limit: number };
      photos: { used: number; limit: number };
    };
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  // Fetch data
  useEffect(() => {
    async function fetchData() {
      if (!user?.id) return;

      setLoading(true);
      setError(null);

      try {
        const [packagesData, invoicesData] = await Promise.all([
          paymentDataSource.getPackages(),
          paymentDataSource.getInvoices(user.id),
        ]);
        setPackages(packagesData);
        setInvoices(invoicesData);

        // Set mock current plan (would come from user subscription in production)
        if (packagesData.length > 0) {
          const proPlan = packagesData.find((p) => p.name.toLowerCase() === 'pro') || packagesData[1];
          setCurrentPlan({
            id: proPlan.id,
            name: proPlan.name,
            price: proPlan.price,
            renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
            status: 'active',
            usage: {
              listings: { used: 18, limit: proPlan.limits?.listings || -1 },
              featuredListings: { used: 3, limit: proPlan.limits?.featuredListings || 5 },
              photos: { used: 156, limit: 360 },
            },
          });
        }
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError(t('errors.somethingWentWrong', 'Failed to load package data'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [user?.id, paymentDataSource, t]);

  const getYearlyPrice = (monthlyPrice: number) => Math.round(monthlyPrice * 12 * 0.8);

  // Loading state
  if (authLoading || loading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>
        <Skeleton className="h-64" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-80" />
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
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
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.myPackage', 'My Package')}</h1>
          <p className="text-gray-500">{t('profile.manageSubscription', 'Manage your subscription plan')}</p>
        </div>
        <Button variant="outline">
          <CreditCard className="h-4 w-4 mr-2" />
          {t('profile.manageBilling', 'Manage Billing')}
        </Button>
      </div>

      {/* Current Plan Card */}
      {currentPlan && (
        <Card className="border-homez-primary border-2">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-homez-primary/10 flex items-center justify-center">
                  <Crown className="h-7 w-7 text-homez-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-gray-900">{currentPlan.name} {t('pricing.plan', 'Plan')}</h2>
                    <Badge className="bg-green-100 text-green-700">{t('common.active', 'Active')}</Badge>
                  </div>
                  <p className="text-gray-500 mt-1">
                    ${currentPlan.price}/{t('pricing.monthly', 'month')} • {t('profile.renews', 'Renews')} {new Date(currentPlan.renewalDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">{t('profile.changePlan', 'Change Plan')}</Button>
                <Button variant="outline" className="text-red-600 hover:bg-red-50">
                  {t('profile.cancelSubscription', 'Cancel Subscription')}
                </Button>
              </div>
            </div>

            {/* Usage Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{t('dashboard.myProperties', 'Listings')}</span>
                  <span className="text-sm font-medium">
                    {currentPlan.usage.listings.used} / {currentPlan.usage.listings.limit === -1 ? '∞' : currentPlan.usage.listings.limit}
                  </span>
                </div>
                {currentPlan.usage.listings.limit !== -1 && (
                  <Progress value={(currentPlan.usage.listings.used / currentPlan.usage.listings.limit) * 100} className="h-2" />
                )}
                {currentPlan.usage.listings.limit === -1 && (
                  <div className="h-2 bg-green-100 rounded-full">
                    <div className="h-full bg-green-500 rounded-full w-full" />
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{t('profile.featuredListings', 'Featured Listings')}</span>
                  <span className="text-sm font-medium">
                    {currentPlan.usage.featuredListings.used} / {currentPlan.usage.featuredListings.limit}
                  </span>
                </div>
                <Progress value={(currentPlan.usage.featuredListings.used / currentPlan.usage.featuredListings.limit) * 100} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{t('profile.photosUploaded', 'Photos Uploaded')}</span>
                  <span className="text-sm font-medium">
                    {currentPlan.usage.photos.used} / {currentPlan.usage.photos.limit}
                  </span>
                </div>
                <Progress value={(currentPlan.usage.photos.used / currentPlan.usage.photos.limit) * 100} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Plans Comparison */}
      {packages.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">{t('profile.availablePlans', 'Available Plans')}</h2>
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  billingPeriod === 'monthly' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                {t('pricing.monthly', 'Monthly')}
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  billingPeriod === 'yearly' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                {t('pricing.yearly', 'Yearly')} <span className="text-green-600 text-xs">{t('pricing.save', 'Save 20%')}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((plan) => {
              const isCurrentPlan = plan.id === currentPlan?.id;
              const price = billingPeriod === 'yearly' ? getYearlyPrice(plan.price) : plan.price;
              
              return (
                <Card
                  key={plan.id}
                  className={`relative overflow-hidden ${
                    plan.popular ? 'border-homez-primary border-2' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-homez-primary text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                      {t('pricing.popular', 'Most Popular')}
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-2">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
                      {plan.name.toLowerCase() === 'enterprise' ? (
                        <Crown className="h-6 w-6 text-yellow-500" />
                      ) : plan.name.toLowerCase() === 'pro' ? (
                        <Zap className="h-6 w-6 text-homez-primary" />
                      ) : (
                        <Building2 className="h-6 w-6 text-gray-500" />
                      )}
                    </div>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">${price}</span>
                      <span className="text-gray-500">
                        /{billingPeriod === 'yearly' ? t('pricing.perYear', 'year') : t('pricing.perMonth', 'month')}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={isCurrentPlan ? 'outline' : 'default'}
                      disabled={isCurrentPlan}
                    >
                      {isCurrentPlan ? t('pricing.currentPlan', 'Current Plan') : plan.price === 0 ? t('pricing.downgrade', 'Downgrade') : t('pricing.upgrade', 'Upgrade')}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Billing History */}
      {invoices.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{t('profile.billingHistory', 'Billing History')}</CardTitle>
            <CardDescription>{t('profile.viewInvoices', 'View your past invoices and payments')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {invoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{invoice.invoiceNumber}</p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(invoice.issueDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">${invoice.total}</span>
                    <Badge className={`capitalize ${
                      invoice.status === 'paid' ? 'bg-green-100 text-green-700' : 
                      invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {invoice.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
