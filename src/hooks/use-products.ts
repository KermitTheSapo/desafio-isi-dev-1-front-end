import { useState, useCallback } from "react";
import { apiService } from "../services/api.service";
import type {
  Product,
  CreateProductRequest,
  ProductsResponse,
  ProductFilters,
  ApplyCouponRequest,
  ApplyPercentDiscountRequest,
  ApiError,
} from "../types/api";

interface UseProductsState {
  products: Product[];
  currentProduct: Product | null;
  meta: ProductsResponse["meta"] | null;
  isLoading: boolean;
  error: string | null;
}

interface UseProductsReturn extends UseProductsState {
  actions: {
    fetchProducts: (filters?: ProductFilters) => Promise<ProductsResponse>;
    fetchProductById: (id: number) => Promise<Product>;
    createProduct: (productData: CreateProductRequest) => Promise<Product>;
    updateProduct: (
      id: number,
      updates: Partial<CreateProductRequest>
    ) => Promise<Product>;
    deleteProduct: (id: number) => Promise<void>;
    restoreProduct: (id: number) => Promise<Product>;
    applyPercentDiscount: (
      id: number,
      discountData: ApplyPercentDiscountRequest
    ) => Promise<Product>;
    applyCoupon: (
      id: number,
      couponData: ApplyCouponRequest
    ) => Promise<Product>;
    removeDiscount: (id: number) => Promise<void>;
    clearError: () => void;
  };
}

export const useProducts = (): UseProductsReturn => {
  const [state, setState] = useState<UseProductsState>({
    products: [],
    currentProduct: null,
    meta: null,
    isLoading: false,
    error: null,
  });

  const setLoading = (isLoading: boolean) => {
    setState((prev) => ({
      ...prev,
      isLoading,
      error: isLoading ? null : prev.error,
    }));
  };

  const setError = (error: string) => {
    setState((prev) => ({ ...prev, error, isLoading: false }));
  };

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  const handleApiError = (error: unknown): string => {
    if (error && typeof error === "object" && "message" in error) {
      return (error as ApiError).message;
    }
    return "Erro inesperado";
  };

  const fetchProducts = useCallback(async (filters: ProductFilters = {}) => {
    setLoading(true);
    try {
      const data = await apiService.fetchProducts(filters);
      setState((prev) => ({
        ...prev,
        products: data.data,
        meta: data.meta,
        isLoading: false,
        error: null,
      }));
      return data;
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  const fetchProductById = useCallback(async (id: number) => {
    setLoading(true);
    try {
      const product = await apiService.fetchProductById(id);
      setState((prev) => ({
        ...prev,
        currentProduct: product,
        isLoading: false,
        error: null,
      }));
      return product;
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  const createProduct = useCallback(
    async (productData: CreateProductRequest) => {
      setLoading(true);
      try {
        const product = await apiService.createProduct(productData);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: null,
        }));
        return product;
      } catch (error: unknown) {
        const errorMessage = handleApiError(error);
        setError(errorMessage);
        throw error;
      }
    },
    []
  );

  const updateProduct = useCallback(
    async (id: number, updates: Partial<CreateProductRequest>) => {
      setLoading(true);
      try {
        const product = await apiService.updateProduct(id, updates);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: null,
        }));
        return product;
      } catch (error: unknown) {
        const errorMessage = handleApiError(error);
        setError(errorMessage);
        throw error;
      }
    },
    []
  );

  const deleteProduct = useCallback(async (id: number) => {
    setLoading(true);
    try {
      await apiService.deleteProduct(id);
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: null,
      }));
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  const restoreProduct = useCallback(async (id: number) => {
    setLoading(true);
    try {
      const product = await apiService.restoreProduct(id);
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: null,
      }));
      return product;
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  const applyPercentDiscount = useCallback(
    async (id: number, discountData: ApplyPercentDiscountRequest) => {
      setLoading(true);
      try {
        const product = await apiService.applyPercentDiscount(id, discountData);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: null,
        }));
        return product;
      } catch (error: unknown) {
        const errorMessage = handleApiError(error);
        setError(errorMessage);
        throw error;
      }
    },
    []
  );

  const applyCoupon = useCallback(
    async (id: number, couponData: ApplyCouponRequest) => {
      setLoading(true);
      try {
        const product = await apiService.applyCoupon(id, couponData);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: null,
        }));
        return product;
      } catch (error: unknown) {
        const errorMessage = handleApiError(error);
        setError(errorMessage);
        throw error;
      }
    },
    []
  );

  const removeDiscount = useCallback(async (id: number) => {
    setLoading(true);
    try {
      await apiService.removeDiscount(id);
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: null,
      }));
    } catch (error: unknown) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      throw error;
    }
  }, []);

  return {
    ...state,
    actions: {
      fetchProducts,
      fetchProductById,
      createProduct,
      updateProduct,
      deleteProduct,
      restoreProduct,
      applyPercentDiscount,
      applyCoupon,
      removeDiscount,
      clearError,
    },
  };
};
