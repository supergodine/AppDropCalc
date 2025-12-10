// Mercado Pago integration service
// This file provides functions to create payment preferences and handle checkout

import axios from 'axios';

const MP_BASE_URL = 'https://api.mercadopago.com';
const MP_ACCESS_TOKEN = import.meta.env.VITE_MP_ACCESS_TOKEN;

const BACKEND_BASE = import.meta.env.VITE_API_URL || '';

export async function createPaymentPreference({
  title,
  description,
  price,
  quantity = 1,
  planId,
  userId,
  externalReference,
  metadata,
}: {
  title: string;
  description: string;
  price: number;
  quantity?: number;
  planId: string;
  userId: string;
  externalReference?: string;
  metadata?: any;
}) {
  const extRef = externalReference || `${planId}_${userId}`;
  const preference: any = {
    items: [
      {
        title,
        description,
        quantity,
        currency_id: 'BRL',
        unit_price: price,
      },
    ],
    external_reference: extRef,
    back_urls: {
      success: `${window.location.origin}/payment-success`,
      failure: `${window.location.origin}/payment-failure`,
      pending: `${window.location.origin}/payment-pending`,
    },
    auto_return: 'approved',
    payer: {
      id: userId,
    },
  };

  if (metadata) {
    // Mercado Pago supports a metadata object in some flows
    preference.metadata = metadata;
  }

  const response = await axios.post(`${MP_BASE_URL}/checkout/preferences`, preference, {
    headers: {
      Authorization: `Bearer ${MP_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}

// Wrapper that registers a pending payment in backend before creating preference
export async function createPaymentPreferenceWithPending(opts: {
  title: string;
  description: string;
  price: number;
  quantity?: number;
  planId: string;
  userId: string;
  period?: 'monthly' | 'quarterly' | 'annual';
}) {
  // Register pending payment in backend
  let externalRef: string | undefined = undefined;
  try {
    const token = localStorage.getItem('accessToken');
    const external = `${opts.planId}_${opts.userId}`;
    const res = await axios.post(
      `${BACKEND_BASE}/payments/create-pending`,
      {
        planId: opts.planId,
        amount: opts.price,
        externalReference: external,
      },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      }
    );
    // prefer backend-provided external reference if available
    externalRef = res?.data?.externalReference || external;
  } catch (err) {
    console.error('Failed to register pending payment in backend', err);
    // continue anyway, to not break checkout flow
  }

  // proceed to create Mercado Pago preference
  // include metadata.period so backend can read period from MP payment
  const preferenceOpts: any = {
    ...opts,
    metadata: { period: opts.period || 'monthly' },
    externalReference: externalRef,
  };

  return createPaymentPreference(preferenceOpts as any);
}
