export interface Product {
  id: number;
  name: string;
  description: string;
  stock: number;
  is_out_of_stock: boolean;
  price: number;
  finalPrice?: number;
  discount?: {
    type: "percent" | "coupon";
    value: number;
    applied_at: string;
  } | null;
  hasCouponApplied: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateProductRequest {
  name: string;
  description?: string;
  stock: number;
  price: number;
}

export interface ProductsResponse {
  data: Product[];
  meta: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface ProductFilters {
  page?: number;
  limit?: number;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  hasDiscount?: boolean;
  sortBy?: "name" | "price" | "created_at" | "stock";
  sortOrder?: "asc" | "desc";
  includeDeleted?: boolean;
  onlyOutOfStock?: boolean;
  withCouponApplied?: boolean;
}

export interface Coupon {
  id: number;
  code: string;
  type: "fixed" | "percent";
  value: number;
  one_shot: boolean;
  max_uses: number;
  uses_count: number;
  valid_from: string;
  valid_until: string;
  created_at: string;
  updated_at: string;
}

export interface CreateCouponRequest {
  code: string;
  type: "fixed" | "percent";
  value: number;
  one_shot: boolean;
  max_uses?: number;
  valid_from: string;
  valid_until: string;
}

export interface ApplyCouponRequest {
  code: string;
}

export interface ApplyPercentDiscountRequest {
  percentage: number;
}

export interface ApiError {
  message: string;
  status: number;
}
