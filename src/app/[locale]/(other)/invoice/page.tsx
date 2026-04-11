'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Printer, 
  Download, 
  Mail, 
  Building2, 
  MapPin, 
  Phone, 
  Mail as MailIcon,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

const invoiceData = {
  invoiceNumber: 'INV-2024-001234',
  issuedDate: '2024-02-15',
  dueDate: '2024-03-15',
  status: 'paid' as const,
  
  company: {
    name: 'Homez Real Estate',
    address: '123 Real Estate Blvd, Miami, FL 33139',
    email: 'billing@homez.com',
    phone: '+1 (555) 123-4567',
    logo: '/images/logo.png',
  },
  
  client: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '456 Oak Street, New York, NY 10001',
    phone: '+1 (555) 987-6543',
  },
  
  items: [
    {
      description: 'Premium Subscription - Monthly',
      quantity: 1,
      unitPrice: 29.00,
      total: 29.00,
    },
    {
      description: 'Featured Listing Upgrade',
      quantity: 2,
      unitPrice: 19.00,
      total: 38.00,
    },
    {
      description: 'Virtual Tour Service',
      quantity: 1,
      unitPrice: 49.00,
      total: 49.00,
    },
  ],
  
  subtotal: 116.00,
  tax: 10.44,
  taxRate: 9,
  total: 126.44,
  
  paymentMethod: 'Credit Card ending in 4242',
  paymentDate: '2024-02-15',
  
  notes: 'Thank you for your business! This invoice has been paid in full.',
};

export default function InvoicePage() {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    window.print();
    setTimeout(() => setIsPrinting(false), 500);
  };

  const handleDownload = () => {
    // In a real app, this would generate a PDF
    alert('PDF download would be generated here');
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'paid':
        return {
          label: 'Paid',
          className: 'bg-green-100 text-green-700 border-green-200',
          icon: CheckCircle,
        };
      case 'pending':
        return {
          label: 'Pending',
          className: 'bg-yellow-100 text-yellow-700 border-yellow-200',
          icon: Clock,
        };
      case 'overdue':
        return {
          label: 'Overdue',
          className: 'bg-red-100 text-red-700 border-red-200',
          icon: AlertCircle,
        };
      default:
        return {
          label: status,
          className: 'bg-gray-100 text-gray-700 border-gray-200',
          icon: Clock,
        };
    }
  };

  const statusConfig = getStatusConfig(invoiceData.status);
  const StatusIcon = statusConfig.icon;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-8">
        <div className="container-homez">
          {/* Actions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 print:hidden">
            <div>
              <h1 className="text-2xl font-bold">Invoice {invoiceData.invoiceNumber}</h1>
              <p className="text-gray-500">
                Issued on {new Date(invoiceData.issuedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>
          </div>

          {/* Invoice Card */}
          <Card className="border-0 shadow-lg overflow-hidden" id="invoice-content">
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-gradient-to-r from-homez-dark to-homez-secondary p-8 text-white">
                <div className="flex flex-wrap justify-between gap-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">INVOICE</h2>
                    <p className="text-white/70">#{invoiceData.invoiceNumber}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-homez-primary mb-2">Homez</div>
                    <p className="text-white/70 text-sm">{invoiceData.company.address}</p>
                    <p className="text-white/70 text-sm">{invoiceData.company.phone}</p>
                  </div>
                </div>
              </div>

              {/* Status & Dates */}
              <div className="p-8 border-b bg-gray-50">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <Badge className={`${statusConfig.className} px-4 py-2 text-sm font-medium`}>
                    <StatusIcon className="h-4 w-4 mr-2" />
                    {statusConfig.label}
                  </Badge>
                  <div className="flex gap-8 text-sm">
                    <div>
                      <p className="text-gray-500">Issue Date</p>
                      <p className="font-medium">{new Date(invoiceData.issuedDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Due Date</p>
                      <p className="font-medium">{new Date(invoiceData.dueDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bill To / Bill From */}
              <div className="p-8 border-b">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-500 text-sm mb-2">Bill To</p>
                    <h3 className="font-bold text-lg mb-2">{invoiceData.client.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {invoiceData.client.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <MailIcon className="h-4 w-4" />
                        {invoiceData.client.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {invoiceData.client.phone}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-2">Pay To</p>
                    <h3 className="font-bold text-lg mb-2">{invoiceData.company.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        {invoiceData.company.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <MailIcon className="h-4 w-4" />
                        {invoiceData.company.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {invoiceData.company.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div className="p-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 text-gray-500 font-medium">Description</th>
                      <th className="text-center py-3 text-gray-500 font-medium">Qty</th>
                      <th className="text-right py-3 text-gray-500 font-medium">Unit Price</th>
                      <th className="text-right py-3 text-gray-500 font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.items.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-4">{item.description}</td>
                        <td className="py-4 text-center">{item.quantity}</td>
                        <td className="py-4 text-right">${item.unitPrice.toFixed(2)}</td>
                        <td className="py-4 text-right font-medium">${item.total.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Totals */}
                <div className="flex justify-end mt-6">
                  <div className="w-64 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${invoiceData.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax ({invoiceData.taxRate}%)</span>
                      <span>${invoiceData.tax.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-homez-primary">${invoiceData.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              {invoiceData.status === 'paid' && (
                <div className="p-8 bg-green-50 border-t">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">Payment Received</p>
                      <p className="text-sm text-green-700">
                        Paid on {new Date(invoiceData.paymentDate).toLocaleDateString()} via {invoiceData.paymentMethod}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Notes */}
              <div className="p-8 bg-gray-50 border-t">
                <p className="text-sm text-gray-500 mb-2">Notes</p>
                <p className="text-gray-700">{invoiceData.notes}</p>
              </div>
            </CardContent>
          </Card>

          {/* Footer Actions */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center print:hidden">
            <Button variant="outline" asChild>
              <a href="/dashboard-my-package">View All Invoices</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/pricing">Upgrade Plan</a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
