'use client';

import { useState, useEffect } from 'react';
import { Property } from '@/types';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, RefreshCw } from 'lucide-react';

interface MortgageCalculatorProps {
  property: Property;
  variant?: 'default' | 'compact' | 'card';
}

export default function MortgageCalculator({
  property,
  variant = 'default',
}: MortgageCalculatorProps) {
  // Default values
  const price = property.price;
  const [homePrice, setHomePrice] = useState(price);
  const [downPayment, setDownPayment] = useState(Math.round(price * 0.2));
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  // Calculated values
  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  // Calculate monthly payment using mortgage formula
  const calculateMonthlyPayment = () => {
    if (loanAmount <= 0 || monthlyRate <= 0 || numberOfPayments <= 0) return 0;
    return (
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    );
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - loanAmount;

  // Handlers
  const handleDownPaymentChange = (value: number[]) => {
    const percent = value[0];
    setDownPaymentPercent(percent);
    setDownPayment(Math.round(homePrice * (percent / 100)));
  };

  const handleDownPaymentAmountChange = (value: string) => {
    const amount = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    setDownPayment(amount);
    setDownPaymentPercent(Math.round((amount / homePrice) * 100));
  };

  const handleHomePriceChange = (value: string) => {
    const newPrice = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    setHomePrice(newPrice);
    setDownPayment(Math.round(newPrice * (downPaymentPercent / 100)));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const resetToDefaults = () => {
    setHomePrice(price);
    setDownPayment(Math.round(price * 0.2));
    setDownPaymentPercent(20);
    setInterestRate(6.5);
    setLoanTerm(30);
  };

  if (variant === 'card') {
    return (
      <div className="bg-gradient-to-br from-homez-primary to-homez-primary/80 rounded-xl p-6 text-white">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="h-5 w-5" />
          <h3 className="font-semibold text-lg">Monthly Payment</h3>
        </div>
        <p className="text-4xl font-bold mb-2">{formatCurrency(monthlyPayment)}</p>
        <p className="text-white/80 text-sm mb-4">
          Estimated {loanTerm}-yr fixed mortgage
        </p>
        <div className="text-sm text-white/70">
          <div className="flex justify-between mb-1">
            <span>Down Payment:</span>
            <span>{formatCurrency(downPayment)} ({downPaymentPercent}%)</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Interest Rate:</span>
            <span>{interestRate}%</span>
          </div>
          <div className="flex justify-between">
            <span>Loan Amount:</span>
            <span>{formatCurrency(loanAmount)}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Calculator className="h-5 w-5 text-homez-primary" />
          <h3 className="font-semibold">Mortgage Calculator</h3>
        </div>
        
        <div className="text-center py-4 bg-gray-50 rounded-lg mb-3">
          <p className="text-sm text-gray-500">Monthly Payment</p>
          <p className="text-3xl font-bold text-homez-primary">{formatCurrency(monthlyPayment)}</p>
        </div>

        <div className="space-y-3">
          <div>
            <Label className="text-xs text-gray-500">Down Payment ({downPaymentPercent}%)</Label>
            <Slider
              value={[downPaymentPercent]}
              onValueChange={handleDownPaymentChange}
              min={0}
              max={50}
              step={1}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">Interest Rate: {interestRate}%</Label>
            <Slider
              value={[interestRate]}
              onValueChange={(v) => setInterestRate(v[0])}
              min={1}
              max={15}
              step={0.125}
              className="mt-1"
            />
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-homez-primary" />
          <h2 className="text-xl font-bold">Mortgage Calculator</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={resetToDefaults}>
          <RefreshCw className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>

      {/* Monthly Payment Display */}
      <div className="text-center py-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-6">
        <p className="text-sm text-gray-500 mb-1">Estimated Monthly Payment</p>
        <p className="text-4xl font-bold text-homez-primary">{formatCurrency(monthlyPayment)}</p>
        <p className="text-sm text-gray-500 mt-1">
          {loanTerm}-year fixed rate at {interestRate}%
        </p>
      </div>

      <div className="space-y-6">
        {/* Home Price */}
        <div>
          <Label className="text-sm font-medium">Home Price</Label>
          <Input
            type="text"
            value={formatCurrency(homePrice).replace('$', '')}
            onChange={(e) => handleHomePriceChange(e.target.value)}
            className="mt-1"
          />
        </div>

        {/* Down Payment */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label className="text-sm font-medium">Down Payment</Label>
            <span className="text-sm text-gray-500">{downPaymentPercent}%</span>
          </div>
          <Slider
            value={[downPaymentPercent]}
            onValueChange={handleDownPaymentChange}
            min={0}
            max={50}
            step={1}
            className="mb-2"
          />
          <Input
            type="text"
            value={formatCurrency(downPayment).replace('$', '')}
            onChange={(e) => handleDownPaymentAmountChange(e.target.value)}
          />
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label className="text-sm font-medium">Interest Rate</Label>
            <span className="text-sm text-gray-500">{interestRate}%</span>
          </div>
          <Slider
            value={[interestRate]}
            onValueChange={(v) => setInterestRate(v[0])}
            min={1}
            max={15}
            step={0.125}
          />
        </div>

        {/* Loan Term */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Loan Term</Label>
          <div className="grid grid-cols-3 gap-2">
            {[15, 20, 30].map((term) => (
              <button
                key={term}
                onClick={() => setLoanTerm(term)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  loanTerm === term
                    ? 'bg-homez-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {term} years
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Loan Amount</span>
          <span className="font-medium">{formatCurrency(loanAmount)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total of {numberOfPayments} Payments</span>
          <span className="font-medium">{formatCurrency(totalPayment)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total Interest</span>
          <span className="font-medium">{formatCurrency(totalInterest)}</span>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 mt-4">
        * This calculator provides estimates only. Actual payments may vary based on taxes, insurance, and other factors. Consult with a financial advisor for accurate figures.
      </p>
    </div>
  );
}
