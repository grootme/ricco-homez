/**
 * ricco-payment Client
 * Client for payment services at /v1/payment endpoint
 */

import { riccoPaymentConfig } from '@/lib/config';
import { apiClient, type ApiResponse } from '@/lib/api/client';

// Payment Method types
export interface PaymentMethod {
  id: string;
  type: 'card' | 'bank_account' | 'wallet';
  provider: 'stripe' | 'paypal' | 'coinex' | 'binance' | 'qvapay' | 'bybit';
  last4?: string;
  brand?: string;
  expMonth?: number;
  expYear?: number;
  bankName?: string;
  isDefault: boolean;
  createdAt: string;
}

export interface AddPaymentMethodRequest {
  type: 'card' | 'bank_account' | 'wallet';
  provider: PaymentMethod['provider'];
  token?: string; // Payment provider token
  cardNumber?: string;
  expMonth?: number;
  expYear?: number;
  cvc?: string;
  accountNumber?: string;
  routingNumber?: string;
  walletAddress?: string;
  setAsDefault?: boolean;
}

// Payment Intent types
export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'cancelled';
  description?: string;
  metadata: Record<string, unknown>;
  paymentMethod?: PaymentMethod;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePaymentIntentRequest {
  amount: number;
  currency: string;
  description?: string;
  metadata?: Record<string, unknown>;
  paymentMethodId?: string;
  confirmImmediately?: boolean;
}

// Subscription types
export interface Subscription {
  id: string;
  userId: string;
  packageId: string;
  status: 'active' | 'past_due' | 'cancelled' | 'expired';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  paymentMethod?: PaymentMethod;
  createdAt: string;
}

export interface CreateSubscriptionRequest {
  packageId: string;
  paymentMethodId: string;
  couponCode?: string;
  trialDays?: number;
}

// Invoice types
export interface PaymentInvoice {
  id: string;
  invoiceNumber: string;
  amount: number;
  currency: string;
  status: 'draft' | 'pending' | 'paid' | 'failed' | 'cancelled';
  dueDate: string;
  paidAt?: string;
  items: {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }[];
  downloadUrl?: string;
  createdAt: string;
}

// Transaction types
export interface Transaction {
  id: string;
  type: 'payment' | 'refund' | 'withdrawal' | 'deposit';
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  description?: string;
  fee: number;
  net: number;
  paymentMethod?: PaymentMethod;
  reference?: string;
  createdAt: string;
}

// Wallet types
export interface Wallet {
  id: string;
  currency: string;
  balance: number;
  pendingBalance: number;
  availableBalance: number;
  walletAddress?: string;
  createdAt: string;
}

export interface WalletTransaction {
  id: string;
  walletId: string;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'payment';
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  description?: string;
  reference?: string;
  createdAt: string;
}

// Refund types
export interface RefundRequest {
  paymentIntentId: string;
  amount?: number; // Partial refund if specified
  reason?: string;
}

export interface Refund {
  id: string;
  paymentIntentId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'succeeded' | 'failed' | 'cancelled';
  reason?: string;
  createdAt: string;
}

// Coupon types
export interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minAmount?: number;
  maxUses?: number;
  uses: number;
  validFrom: string;
  validUntil: string;
  isActive: boolean;
}

export interface ValidateCouponRequest {
  code: string;
  amount?: number;
}

// Payout types
export interface PayoutRequest {
  amount: number;
  currency: string;
  destination: {
    type: 'bank_account' | 'wallet';
    id?: string;
    details?: Record<string, unknown>;
  };
  description?: string;
}

export interface Payout {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  destination: {
    type: string;
    last4?: string;
    bankName?: string;
  };
  estimatedArrival?: string;
  createdAt: string;
}

// ricco-payment Client Class
class RiccoPaymentClient {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = riccoPaymentConfig.url;
    this.apiKey = riccoPaymentConfig.apiKey;
  }

  // =====================
  // Payment Methods
  // =====================

  /**
   * Get user's payment methods
   */
  async getPaymentMethods(userId: string): Promise<PaymentMethod[]> {
    const response = await apiClient.get<ApiResponse<PaymentMethod[]>>(
      `${this.baseUrl}/payment-methods?userId=${userId}`,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get payment methods');
    }

    return response.data;
  }

  /**
   * Add a payment method
   */
  async addPaymentMethod(userId: string, request: AddPaymentMethodRequest): Promise<PaymentMethod> {
    const response = await apiClient.post<ApiResponse<PaymentMethod>>(
      `${this.baseUrl}/payment-methods`,
      { ...request, userId },
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to add payment method');
    }

    return response.data;
  }

  /**
   * Remove a payment method
   */
  async removePaymentMethod(paymentMethodId: string): Promise<void> {
    const response = await apiClient.delete<ApiResponse<void>>(
      `${this.baseUrl}/payment-methods/${paymentMethodId}`,
      { headers: this.getHeaders() }
    );

    if (!response.success) {
      throw new Error(response.error?.message ?? 'Failed to remove payment method');
    }
  }

  /**
   * Set default payment method
   */
  async setDefaultPaymentMethod(paymentMethodId: string): Promise<PaymentMethod> {
    const response = await apiClient.patch<ApiResponse<PaymentMethod>>(
      `${this.baseUrl}/payment-methods/${paymentMethodId}/default`,
      {},
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to set default payment method');
    }

    return response.data;
  }

  // =====================
  // Payment Intents
  // =====================

  /**
   * Create a payment intent
   */
  async createPaymentIntent(request: CreatePaymentIntentRequest): Promise<PaymentIntent> {
    const response = await apiClient.post<ApiResponse<PaymentIntent>>(
      `${this.baseUrl}/payment-intents`,
      request,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to create payment intent');
    }

    return response.data;
  }

  /**
   * Get payment intent
   */
  async getPaymentIntent(paymentIntentId: string): Promise<PaymentIntent> {
    const response = await apiClient.get<ApiResponse<PaymentIntent>>(
      `${this.baseUrl}/payment-intents/${paymentIntentId}`,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get payment intent');
    }

    return response.data;
  }

  /**
   * Confirm payment intent
   */
  async confirmPaymentIntent(paymentIntentId: string, paymentMethodId?: string): Promise<PaymentIntent> {
    const response = await apiClient.post<ApiResponse<PaymentIntent>>(
      `${this.baseUrl}/payment-intents/${paymentIntentId}/confirm`,
      { paymentMethodId },
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to confirm payment intent');
    }

    return response.data;
  }

  /**
   * Cancel payment intent
   */
  async cancelPaymentIntent(paymentIntentId: string): Promise<PaymentIntent> {
    const response = await apiClient.post<ApiResponse<PaymentIntent>>(
      `${this.baseUrl}/payment-intents/${paymentIntentId}/cancel`,
      {},
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to cancel payment intent');
    }

    return response.data;
  }

  // =====================
  // Subscriptions
  // =====================

  /**
   * Create subscription
   */
  async createSubscription(userId: string, request: CreateSubscriptionRequest): Promise<Subscription> {
    const response = await apiClient.post<ApiResponse<Subscription>>(
      `${this.baseUrl}/subscriptions`,
      { ...request, userId },
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to create subscription');
    }

    return response.data;
  }

  /**
   * Get subscription
   */
  async getSubscription(subscriptionId: string): Promise<Subscription> {
    const response = await apiClient.get<ApiResponse<Subscription>>(
      `${this.baseUrl}/subscriptions/${subscriptionId}`,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get subscription');
    }

    return response.data;
  }

  /**
   * Get user's subscriptions
   */
  async getUserSubscriptions(userId: string): Promise<Subscription[]> {
    const response = await apiClient.get<ApiResponse<Subscription[]>>(
      `${this.baseUrl}/subscriptions?userId=${userId}`,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get subscriptions');
    }

    return response.data;
  }

  /**
   * Cancel subscription
   */
  async cancelSubscription(subscriptionId: string, immediately = false): Promise<Subscription> {
    const response = await apiClient.post<ApiResponse<Subscription>>(
      `${this.baseUrl}/subscriptions/${subscriptionId}/cancel`,
      { immediately },
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to cancel subscription');
    }

    return response.data;
  }

  /**
   * Update subscription payment method
   */
  async updateSubscriptionPaymentMethod(subscriptionId: string, paymentMethodId: string): Promise<Subscription> {
    const response = await apiClient.patch<ApiResponse<Subscription>>(
      `${this.baseUrl}/subscriptions/${subscriptionId}/payment-method`,
      { paymentMethodId },
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to update subscription payment method');
    }

    return response.data;
  }

  // =====================
  // Invoices
  // =====================

  /**
   * Get user's invoices
   */
  async getInvoices(userId: string): Promise<PaymentInvoice[]> {
    const response = await apiClient.get<ApiResponse<PaymentInvoice[]>>(
      `${this.baseUrl}/invoices?userId=${userId}`,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get invoices');
    }

    return response.data;
  }

  /**
   * Get invoice
   */
  async getInvoice(invoiceId: string): Promise<PaymentInvoice> {
    const response = await apiClient.get<ApiResponse<PaymentInvoice>>(
      `${this.baseUrl}/invoices/${invoiceId}`,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get invoice');
    }

    return response.data;
  }

  /**
   * Pay invoice
   */
  async payInvoice(invoiceId: string, paymentMethodId?: string): Promise<PaymentInvoice> {
    const response = await apiClient.post<ApiResponse<PaymentInvoice>>(
      `${this.baseUrl}/invoices/${invoiceId}/pay`,
      { paymentMethodId },
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to pay invoice');
    }

    return response.data;
  }

  // =====================
  // Transactions
  // =====================

  /**
   * Get transactions
   */
  async getTransactions(userId: string, params?: { limit?: number; offset?: number }): Promise<Transaction[]> {
    const queryParams = new URLSearchParams({ userId: userId.toString() });
    if (params?.limit) queryParams.set('limit', params.limit.toString());
    if (params?.offset) queryParams.set('offset', params.offset.toString());

    const response = await apiClient.get<ApiResponse<Transaction[]>>(
      `${this.baseUrl}/transactions?${queryParams.toString()}`,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get transactions');
    }

    return response.data;
  }

  // =====================
  // Wallet
  // =====================

  /**
   * Get user's wallets
   */
  async getWallets(userId: string): Promise<Wallet[]> {
    const response = await apiClient.get<ApiResponse<Wallet[]>>(
      `${this.baseUrl}/wallets?userId=${userId}`,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get wallets');
    }

    return response.data;
  }

  /**
   * Get wallet transactions
   */
  async getWalletTransactions(walletId: string): Promise<WalletTransaction[]> {
    const response = await apiClient.get<ApiResponse<WalletTransaction[]>>(
      `${this.baseUrl}/wallets/${walletId}/transactions`,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get wallet transactions');
    }

    return response.data;
  }

  // =====================
  // Refunds
  // =====================

  /**
   * Create refund
   */
  async createRefund(request: RefundRequest): Promise<Refund> {
    const response = await apiClient.post<ApiResponse<Refund>>(
      `${this.baseUrl}/refunds`,
      request,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to create refund');
    }

    return response.data;
  }

  /**
   * Get refund
   */
  async getRefund(refundId: string): Promise<Refund> {
    const response = await apiClient.get<ApiResponse<Refund>>(
      `${this.baseUrl}/refunds/${refundId}`,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get refund');
    }

    return response.data;
  }

  // =====================
  // Coupons
  // =====================

  /**
   * Validate coupon
   */
  async validateCoupon(request: ValidateCouponRequest): Promise<Coupon> {
    const response = await apiClient.post<ApiResponse<Coupon>>(
      `${this.baseUrl}/coupons/validate`,
      request,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Invalid coupon');
    }

    return response.data;
  }

  // =====================
  // Payouts
  // =====================

  /**
   * Create payout
   */
  async createPayout(userId: string, request: PayoutRequest): Promise<Payout> {
    const response = await apiClient.post<ApiResponse<Payout>>(
      `${this.baseUrl}/payouts`,
      { ...request, userId },
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to create payout');
    }

    return response.data;
  }

  /**
   * Get payout
   */
  async getPayout(payoutId: string): Promise<Payout> {
    const response = await apiClient.get<ApiResponse<Payout>>(
      `${this.baseUrl}/payouts/${payoutId}`,
      { headers: this.getHeaders() }
    );

    if (!response.success || !response.data) {
      throw new Error(response.error?.message ?? 'Failed to get payout');
    }

    return response.data;
  }

  // =====================
  // Webhooks
  // =====================

  /**
   * Verify webhook signature
   */
  verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
    // In a real implementation, this would verify the signature using crypto
    // For now, we return true if both signature and secret are provided
    return !!(signature && secret);
  }

  // Private helper methods
  private getHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };
  }
}

// Export singleton instance
export const riccoPaymentClient = new RiccoPaymentClient();

// Export class for testing
export { RiccoPaymentClient };
