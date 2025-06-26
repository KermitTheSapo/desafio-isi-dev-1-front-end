import { API_CONFIG } from "../config/api";
import type {
  Product,
  CreateProductRequest,
  ProductsResponse,
  ProductFilters,
  ApplyCouponRequest,
  ApplyPercentDiscountRequest,
  ApiError,
} from "../types/api";

class ApiService {
  private readonly baseUrl = API_CONFIG.BASE_URL;

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const error: ApiError = {
        message:
          errorData.message ??
          `HTTP ${response.status}: ${response.statusText}`,
        status: response.status,
      };
      throw error;
    }
    return response.json();
  }

  private buildQueryString(filters: ProductFilters): string {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.append(key, value.toString());
      }
    });

    return params.toString();
  }

  async fetchProducts(filters: ProductFilters = {}): Promise<ProductsResponse> {
    const queryString = this.buildQueryString(filters);
    const url = queryString
      ? `${this.baseUrl}${API_CONFIG.ENDPOINTS.PRODUCTS}?${queryString}`
      : `${this.baseUrl}${API_CONFIG.ENDPOINTS.PRODUCTS}`;

    const response = await fetch(url);
    return this.handleResponse<ProductsResponse>(response);
  }

  async fetchProductById(id: number): Promise<Product> {
    const response = await fetch(
      `${this.baseUrl}${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}`
    );
    return this.handleResponse<Product>(response);
  }

  async createProduct(productData: CreateProductRequest): Promise<Product> {
    const response = await fetch(
      `${this.baseUrl}${API_CONFIG.ENDPOINTS.PRODUCTS}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    );
    return this.handleResponse<Product>(response);
  }

  async updateProduct(
    id: number,
    updates: Partial<CreateProductRequest>
  ): Promise<Product> {
    const patches = Object.entries(updates)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => ({
        op: "replace",
        path: `/${key}`,
        value,
      }));

    const response = await fetch(
      `${this.baseUrl}${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json-patch+json",
        },
        body: JSON.stringify(patches),
      }
    );
    return this.handleResponse<Product>(response);
  }

  async deleteProduct(id: number): Promise<void> {
    const response = await fetch(
      `${this.baseUrl}${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}`,
      {
        method: "DELETE",
      }
    );
    await this.handleResponse<void>(response);
  }

  async restoreProduct(id: number): Promise<Product> {
    const response = await fetch(
      `${this.baseUrl}${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}/restore`,
      {
        method: "PATCH",
      }
    );
    return this.handleResponse<Product>(response);
  }

  async applyPercentDiscount(
    id: number,
    discountData: ApplyPercentDiscountRequest
  ): Promise<Product> {
    const response = await fetch(
      `${this.baseUrl}${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}/discount/percent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discountData),
      }
    );
    return this.handleResponse<Product>(response);
  }

  async applyCoupon(
    id: number,
    couponData: ApplyCouponRequest
  ): Promise<Product> {
    const response = await fetch(
      `${this.baseUrl}${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}/discount/coupon`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(couponData),
      }
    );
    return this.handleResponse<Product>(response);
  }

  async removeDiscount(id: number): Promise<void> {
    const response = await fetch(
      `${this.baseUrl}${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}/discount`,
      {
        method: "DELETE",
      }
    );
    await this.handleResponse<void>(response);
  }
}

export const apiService = new ApiService();
