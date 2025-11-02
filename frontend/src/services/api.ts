import axios, { AxiosResponse } from 'axios';
import type {
  LoginResponse,
  User,
  Calculation,
  CreateCalculationDto,
  PresetPlatform,
  Gateway,
  ExchangeRate,
  CalculationFilters,
  PaginatedResponse,
  CalculationResult,
} from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
          refreshToken,
        });

        const { accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh failed, redirect to login
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Auth API
export const authApi = {
  async googleLogin(code: string): Promise<LoginResponse> {
    const response: AxiosResponse<LoginResponse> = await api.post('/auth/google', {
      code,
    });
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },

  async getProfile(): Promise<User> {
    const response: AxiosResponse<User> = await api.get('/auth/profile');
    return response.data;
  },

  async refreshToken(refreshToken: string): Promise<{ accessToken: string }> {
    const response = await api.post('/auth/refresh', { refreshToken });
    return response.data;
  },
};

// Calculations API
export const calculationsApi = {
  async create(data: CreateCalculationDto): Promise<Calculation> {
    const response: AxiosResponse<Calculation> = await api.post('/calculations', data);
    return response.data;
  },

  async simulate(data: CreateCalculationDto): Promise<CalculationResult> {
    const response: AxiosResponse<CalculationResult> = await api.post('/calculations/simulate', data);
    return response.data;
  },

  async getHistory(filters?: CalculationFilters): Promise<PaginatedResponse<Calculation>> {
    const response: AxiosResponse<PaginatedResponse<Calculation>> = await api.get('/calculations', {
      params: filters,
    });
    return response.data;
  },

  async getById(id: string): Promise<Calculation> {
    const response: AxiosResponse<Calculation> = await api.get(`/calculations/${id}`);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/calculations/${id}`);
  },

  async export(filters?: CalculationFilters): Promise<Blob> {
    const response = await api.get('/calculations/export', {
      params: filters,
      responseType: 'blob',
    });
    return response.data;
  },
};

// Presets API
export const presetsApi = {
  async getPlatforms(): Promise<PresetPlatform[]> {
    const response: AxiosResponse<PresetPlatform[]> = await api.get('/presets/platforms');
    return response.data;
  },

  async getGateways(): Promise<Gateway[]> {
    const response: AxiosResponse<Gateway[]> = await api.get('/presets/gateways');
    return response.data;
  },
};

// Exchange API
export const exchangeApi = {
  async getCurrentRate(from: string, to: string = 'BRL'): Promise<ExchangeRate> {
    const response: AxiosResponse<ExchangeRate> = await api.get(
      `/exchange/rate?from=${from}&to=${to}`
    );
    return response.data;
  },

  async getSupportedCurrencies(): Promise<string[]> {
    const response: AxiosResponse<string[]> = await api.get('/exchange/currencies');
    return response.data;
  },
};

export default api;