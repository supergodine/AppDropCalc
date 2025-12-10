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
  userId
}: {
  title: string;
  description: string;
  price: number;
  quantity?: number;
  planId: string;
  userId: string;
}) {
  const preference = {
    items: [
      {
        title,
        description,
        quantity,
        currency_id: 'BRL',
        unit_price: price
      }
    ],
    external_reference: `${planId}_${userId}`,
    back_urls: {
      success: `${window.location.origin}/payment-success`,
      failure: `${window.location.origin}/payment-failure`,
      pending: `${window.location.origin}/payment-pending`
    },
    auto_return: 'approved',
    payer: {
      id: userId
    }
  };

  const response = await axios.post(
    `${MP_BASE_URL}/checkout/preferences`,
    preference,
    {
      headers: {
        Authorization: `Bearer ${MP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    }
  );

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
}) {
  // Register pending payment in backend
  try {
    const token = localStorage.getItem('accessToken');
    const external = `${opts.planId}_${opts.userId}`;
    await axios.post(
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
  } catch (err) {
    console.error('Failed to register pending payment in backend', err);
    // continue anyway, to not break checkout flow
  }

  // proceed to create Mercado Pago preference
  return createPaymentPreference(opts as any);
}
