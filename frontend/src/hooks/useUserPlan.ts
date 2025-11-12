import { useMemo } from 'react';

export type PlanType = 'basic' | 'gold' | 'premium';

export interface PlanLimits {
  maxCurrencies: number;
  maxPlatforms: number;
  maxGateways: number;
  maxCalculationsPerMonth: number | null;
  hasAutoCalc: boolean;
  hasExchangeUpdate: boolean;
  hasAI: boolean;
  hasHistory: boolean;
  supportType: 'email' | 'priority';
}

const PLAN_LIMITS: Record<PlanType, PlanLimits> = {
  basic: {
    maxCurrencies: 2,
    maxPlatforms: 2,
    maxGateways: 2,
    maxCalculationsPerMonth: 10,
    hasAutoCalc: false,
    hasExchangeUpdate: false,
    hasAI: false,
    hasHistory: false,
    supportType: 'email',
  },
  gold: {
    maxCurrencies: 10,
    maxPlatforms: 4,
    maxGateways: 4,
    maxCalculationsPerMonth: null,
    hasAutoCalc: true,
    hasExchangeUpdate: true,
    hasAI: false,
    hasHistory: false,
    supportType: 'email',
  },
  premium: {
    maxCurrencies: 70,
    maxPlatforms: 99,
    maxGateways: 99,
    maxCalculationsPerMonth: null,
    hasAutoCalc: true,
    hasExchangeUpdate: true,
    hasAI: true,
    hasHistory: true,
    supportType: 'priority',
  },
};

export function useUserPlan() {
  // Recupera plano do localStorage ou backend
  const plan: PlanType = (localStorage.getItem('userPlan') as PlanType) || 'basic';
  const limits = useMemo(() => PLAN_LIMITS[plan], [plan]);

  return {
    plan,
    limits,
    isBasic: plan === 'basic',
    isGold: plan === 'gold',
    isPremium: plan === 'premium',
  };
}
