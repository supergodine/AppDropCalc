// Mercado Pago integration service
// This file provides functions to create payment preferences and handle checkout

import axios from 'axios';

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

  // Delegate Mercado Pago preference creation to backend to avoid exposing secrets in the client
  const response = await axios.post(`${BACKEND_BASE}/payments/create-preference`, preference, {
    headers: {
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
    // Require backend-provided externalReference. If missing, fail immediately.
    if (!res || !res.data || !res.data.externalReference) {
      throw new Error('PENDING_FAILED');
    }
    externalRef = res.data.externalReference;
  } catch (err) {
    // Hard-fail: do not create preference if pending registration failed
    throw new Error('PENDING_FAILED');
  }

  // proceed to create Mercado Pago preference
  // include metadata.period so backend can read period from MP payment
  const preferenceOpts: any = {
    ...opts,
    metadata: { period: opts.period || 'monthly' },
  };
  if (externalRef) preferenceOpts.externalReference = externalRef;

  return createPaymentPreference(preferenceOpts as any);
}
