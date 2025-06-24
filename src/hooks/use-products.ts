import { useState, useCallback } from "react";
import type {
  Product,
  CreateProductRequest,
  ProductsResponse,
  ProductFilters,
  ApplyCouponRequest,
  ApplyPercentDiscountRequest,
} from "../types/api";

const API_BASE_URL = "http://localhost:3001/api/v1";

interface UseProductsState {
  products: Product[];
  currentProduct: Product | null;
  meta: ProductsResponse["meta"] | null;
  loading: boolean;
  error: string | null;
}

export const useProducts = () => {
  const [state, setState] = useState<UseProductsState>({
    products: [],
    currentProduct: null,
    meta: null,
    loading: false,
    error: null,
  });

  const setLoading = (loading: boolean) => {
    setState((prev) => ({
      ...prev,
      loading,
      error: loading ? null : prev.error,
    }));
  };

  const setError = (error: string) => {
    setState((prev) => ({ ...prev, error, loading: false }));
  };

  const buildQueryString = (filters: ProductFilters): string => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.append(key, value.toString());
      }
    });

    return params.toString();
  };

  const handleApiError = (error: unknown): string => {
    if (error && typeof error === "object" && "response" in error) {
      const apiError = error as {
        response?: { data?: { message?: string } };
        message?: string;
      };
      if (apiError.response?.data?.message) {
        return apiError.response.data.message;
      }
    }
    if (error && typeof error === "object" && "message" in error) {
      return (error as { message: string }).message ?? "Erro inesperado";
    }
    return "Erro inesperado";
  };

  const fetchProducts = useCallback(async (filters: ProductFilters = {}) => {
    setLoading(true);

    try {
      const queryString = buildQueryString(filters);
      const baseUrl = `${API_BASE_URL}/products`;
      const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data: ProductsResponse = await response.json();

      setState((prev) => ({
        ...prev,
        products: data.data,
        meta: data.meta,
        loading: false,
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
      const response = await fetch(`${API_BASE_URL}/products/${id}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Produto não encontrado");
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const product: Product = await response.json();

      setState((prev) => ({
        ...prev,
        currentProduct: product,
        loading: false,
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
        const response = await fetch(`${API_BASE_URL}/products`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        });

        if (!response.ok) {
          if (response.status === 409) {
            throw new Error("Produto com este nome já existe");
          }
          if (response.status === 400) {
            throw new Error("Dados inválidos para criação do produto");
          }
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const product: Product = await response.json();

        setState((prev) => ({
          ...prev,
          loading: false,
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
        const patches = Object.entries(updates)
          .filter(([, value]) => value !== undefined)
          .map(([key, value]) => ({
            op: "replace",
            path: `/${key}`,
            value,
          }));

        const response = await fetch(`${API_BASE_URL}/products/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json-patch+json",
          },
          body: JSON.stringify(patches),
        });

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Produto não encontrado");
          }
          if (response.status === 400) {
            throw new Error("Dados inválidos para atualização");
          }
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const product: Product = await response.json();

        setState((prev) => ({
          ...prev,
          currentProduct: product,
          loading: false,
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
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Produto não encontrado");
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      setState((prev) => ({
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

  const restoreProduct = useCallback(async (id: number) => {
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}/restore`, {
        method: "POST",
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Produto não encontrado");
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const product: Product = await response.json();

      setState((prev) => ({
        ...prev,
        loading: false,
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
        const response = await fetch(
          `${API_BASE_URL}/products/${id}/discount/percent`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(discountData),
          }
        );

        if (!response.ok) {
          if (response.status === 409) {
            throw new Error("Produto já possui um desconto aplicado");
          }
          if (response.status === 422) {
            throw new Error("Desconto resultaria em preço menor que R$ 0,01");
          }
          if (response.status === 400) {
            throw new Error(
              "Percentual de desconto inválido (deve estar entre 1% e 80%)"
            );
          }
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const product: Product = await response.json();

        setState((prev) => ({
          ...prev,
          currentProduct: product,
          loading: false,
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
        const response = await fetch(
          `${API_BASE_URL}/products/${id}/discount/coupon`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(couponData),
          }
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Produto ou cupom não encontrado");
          }
          if (response.status === 409) {
            throw new Error(
              "Produto já possui um desconto aplicado ou cupom já foi usado"
            );
          }
          if (response.status === 422) {
            throw new Error("Cupom resultaria em preço menor que R$ 0,01");
          }
          if (response.status === 400) {
            throw new Error("Cupom inválido ou expirado");
          }
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const product: Product = await response.json();

        setState((prev) => ({
          ...prev,
          currentProduct: product,
          loading: false,
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
      const response = await fetch(`${API_BASE_URL}/products/${id}/discount`, {
        method: "DELETE",
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Produto não encontrado");
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      setState((prev) => ({
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
    },
  };
};
