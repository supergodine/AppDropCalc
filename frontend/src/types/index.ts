export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
  plan: 'FREE' | 'PRO' | 'PREMIUM';
  createdAt: string;
  updatedAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  user: User;
  tokens: AuthTokens;
}

export interface CreateCalculationDto {
  supplierCost: number;
  currency: string;
  platformId: string;
  gatewayId: string;
  desiredMargin: number;
  advertisingCost?: number;
  shippingCost?: number;
  additionalCosts?: number;
  description?: string;
}

export interface Calculation {
  id: string;
  user: User;
  supplierCost: number;
  currency: string;
  exchangeRate: number;
  supplierCostBRL: number;
  platformFee: number;
  gatewayFee: number;
  shippingCost: number;
  advertisingCost: number;
  additionalCosts: number;
  totalCosts: number;
  desiredMargin: number;
  salePrice: number;
  finalMargin: number;
  description?: string;
  platform: PresetPlatform;
  gateway: Gateway;
  createdAt: string;
  updatedAt: string;
}

export interface PresetPlatform {
  id: string;
  name: string;
  type: 'MARKETPLACE' | 'ECOMMERCE';
  feePercentage: number;
  fixedFee: number;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Gateway {
  id: string;
  name: string;
  feePercentage: number;
  fixedFee: number;
  description: string;
  paymentMethods: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ExchangeRate {
  base: string;
  target: string;
  rate: number;
  date: string;
  source: string;
}

export interface CalculationFilters {
  page?: number;
  limit?: number;
  platformId?: string;
  gatewayId?: string;
  currency?: string;
  startDate?: string;
  endDate?: string;
  minValue?: number;
  maxValue?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
  timestamp: string;
  path: string;
}

export interface CalculationResult {
  supplierCostBRL: number;
  platformFee: number;
  gatewayFee: number;
  totalCosts: number;
  salePrice: number;
  finalMargin: number;
  exchangeRate?: number;
}