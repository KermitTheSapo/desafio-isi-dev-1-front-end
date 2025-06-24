import { useState, useCallback } from 'react';
import type { 
  Coupon, 
  CreateCouponRequest
} from '../types/api';

const API_BASE_URL = 'http://localhost:3001/api/v1';

interface UseCouponsState {
  coupons: Coupon[];
  currentCoupon: Coupon | null;
  loading: boolean;
  error: string | null;
}

export const useCoupons = () => {
  const [state, setState] = useState<UseCouponsState>({
    coupons: [],
    currentCoupon: null,
    loading: false,
    error: null,
  });

  const setLoading = (loading: boolean) => {
    setState(prev => ({ ...prev, loading, error: loading ? null : prev.error }));
  };

  const setError = (error: string) => {
    setState(prev => ({ ...prev, error, loading: false }));
  };

  const handleApiError = (error: unknown): string => {
    if (error && typeof error === 'object' && 'response' in error) {
      const apiError = error as { response?: { data?: { message?: string } }; message?: string };
      if (apiError.response?.data?.message) {
        return apiError.response.data.message;
      }
    }
    if (error && typeof error === 'object' && 'message' in error) {
      return (error as { message: string }).message ?? 'Erro inesperado';
    }
    return 'Erro inesperado';
  };

  const fetchCoupons = useCallback(async () => {
    setLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/coupons`);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const coupons: Coupon[] = await response.json();
      
      setState(prev => ({
        ...prev,
        coupons,
        loading: false,
        error: null,
      }));
      
      return coupons;
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  const fetchCouponById = useCallback(async (id: number) => {
    setLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/coupons/${id}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Cupom não encontrado');
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const coupon: Coupon = await response.json();
      
      setState(prev => ({
        ...prev,
        currentCoupon: coupon,
        loading: false,
        error: null,
      }));
      
      return coupon;
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  const fetchCouponByCode = useCallback(async (code: string) => {
    setLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/coupons/code/${encodeURIComponent(code)}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Cupom não encontrado');
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const coupon: Coupon = await response.json();
      
      setState(prev => ({
        ...prev,
        currentCoupon: coupon,
        loading: false,
        error: null,
      }));
      
      return coupon;
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  const createCoupon = useCallback(async (couponData: CreateCouponRequest) => {
    setLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/coupons`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(couponData),
      });

      if (!response.ok) {
        if (response.status === 409) {
          throw new Error('Cupom com este código já existe');
        }
        if (response.status === 400) {
          throw new Error('Dados inválidos para criação do cupom');
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const coupon: Coupon = await response.json();
      
      setState(prev => ({
        ...prev,
        loading: false,
        error: null,
      }));
      
      return coupon;
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  const updateCoupon = useCallback(async (id: number, updates: Partial<Omit<CreateCouponRequest, 'code'>>) => {
    setLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/coupons/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Cupom não encontrado');
        }
        if (response.status === 400) {
          throw new Error('Dados inválidos para atualização');
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const coupon: Coupon = await response.json();
      
      setState(prev => ({
        ...prev,
        currentCoupon: coupon,
        loading: false,
        error: null,
      }));
      
      return coupon;
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  const deleteCoupon = useCallback(async (id: number) => {
    setLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/coupons/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Cupom não encontrado');
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      setState(prev => ({
        ...prev,
        loading: false,
        error: null,
      }));
      
      return true;
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  const restoreCoupon = useCallback(async (id: number) => {
    setLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/coupons/${id}/restore`, {
        method: 'POST',
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Cupom não encontrado');
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const coupon: Coupon = await response.json();
      
      setState(prev => ({
        ...prev,
        loading: false,
        error: null,
      }));
      
      return coupon;
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  const fetchCouponStats = useCallback(async (id: number) => {
    setLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/coupons/${id}/stats`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Cupom não encontrado');
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const stats = await response.json();
      
      setState(prev => ({
        ...prev,
        loading: false,
        error: null,
      }));
      
      return stats;
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  return {
    ...state,
    actions: {
      fetchCoupons,
      fetchCouponById,
      fetchCouponByCode,
      createCoupon,
      updateCoupon,
      deleteCoupon,
      restoreCoupon,
      fetchCouponStats,
    },
  };
};
