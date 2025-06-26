import { apiService } from "../../services/api.service";
import { API_CONFIG } from "../../config/api";
import type {
  Product,
  CreateProductRequest,
  ProductsResponse,
  ProductFilters,
  ApplyPercentDiscountRequest,
  ApplyCouponRequest,
} from "../../types/api";

global.fetch = jest.fn();

const mockProduct: Product = {
  id: 1,
  name: "Test Product",
  price: 100,
  description: "Test description",
  stock: 10,
  is_out_of_stock: false,
  hasCouponApplied: false,
  created_at: "2023-01-01",
  updated_at: "2023-01-01",
};

describe("ApiService", () => {
  const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

  beforeEach(() => {
    mockFetch.mockClear();
  });

  describe("fetchProducts", () => {
    it("should fetch products successfully", async () => {
      const mockResponse: ProductsResponse = {
        data: [mockProduct],
        meta: {
          page: 1,
          limit: 10,
          totalItems: 1,
          totalPages: 1,
        },
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      } as unknown as Response);

      const result = await apiService.fetchProducts();

      expect(mockFetch).toHaveBeenCalledWith(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}`
      );
      expect(result).toEqual(mockResponse);
    });

    it("should fetch products with filters", async () => {
      const filters: ProductFilters = {
        search: "test",
        page: 1,
        limit: 5,
        hasDiscount: true,
      };

      const mockResponse: ProductsResponse = {
        data: [],
        meta: {
          page: 1,
          limit: 5,
          totalItems: 0,
          totalPages: 0,
        },
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      } as unknown as Response);

      await apiService.fetchProducts(filters);

      expect(mockFetch).toHaveBeenCalledWith(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}?search=test&page=1&limit=5&hasDiscount=true`
      );
    });

    it("should handle fetch error", async () => {
      const errorResponse = {
        message: "Internal Server Error",
      };

      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
        json: jest.fn().mockResolvedValueOnce(errorResponse),
      } as unknown as Response);

      await expect(apiService.fetchProducts()).rejects.toEqual({
        message: "Internal Server Error",
        status: 500,
      });
    });
  });

  describe("fetchProductById", () => {
    it("should fetch product by id successfully", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockProduct),
      } as unknown as Response);

      const result = await apiService.fetchProductById(1);

      expect(mockFetch).toHaveBeenCalledWith(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}/1`
      );
      expect(result).toEqual(mockProduct);
    });
  });

  describe("createProduct", () => {
    it("should create product successfully", async () => {
      const productData: CreateProductRequest = {
        name: "New Product",
        price: 150,
        description: "New product description",
        stock: 5,
      };

      const newProduct: Product = {
        id: 2,
        name: productData.name,
        price: productData.price,
        description: productData.description ?? "",
        stock: productData.stock,
        is_out_of_stock: false,
        hasCouponApplied: false,
        created_at: "2023-01-01",
        updated_at: "2023-01-01",
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(newProduct),
      } as unknown as Response);

      const result = await apiService.createProduct(productData);

      expect(mockFetch).toHaveBeenCalledWith(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );
      expect(result).toEqual(newProduct);
    });
  });

  describe("updateProduct", () => {
    it("should update product successfully", async () => {
      const updates: Partial<CreateProductRequest> = {
        name: "Updated Product",
        price: 200,
      };

      const expectedPatches = [
        { op: "replace", path: "/name", value: "Updated Product" },
        { op: "replace", path: "/price", value: 200 },
      ];

      const updatedProduct: Product = {
        ...mockProduct,
        name: "Updated Product",
        price: 200,
        updated_at: "2023-01-02",
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(updatedProduct),
      } as unknown as Response);

      const result = await apiService.updateProduct(1, updates);

      expect(mockFetch).toHaveBeenCalledWith(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}/1`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json-patch+json",
          },
          body: JSON.stringify(expectedPatches),
        }
      );
      expect(result).toEqual(updatedProduct);
    });
  });

  describe("deleteProduct", () => {
    it("should delete product successfully", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({}),
      } as unknown as Response);

      await apiService.deleteProduct(1);

      expect(mockFetch).toHaveBeenCalledWith(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}/1`,
        {
          method: "DELETE",
        }
      );
    });
  });

  describe("applyPercentDiscount", () => {
    it("should apply percent discount successfully", async () => {
      const discountData: ApplyPercentDiscountRequest = {
        percentage: 10,
      };

      const discountedProduct: Product = {
        ...mockProduct,
        finalPrice: 90,
        discount: {
          type: "percent",
          value: 10,
          applied_at: "2023-01-02",
        },
        updated_at: "2023-01-02",
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(discountedProduct),
      } as unknown as Response);

      const result = await apiService.applyPercentDiscount(1, discountData);

      expect(mockFetch).toHaveBeenCalledWith(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}/1/discount/percent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(discountData),
        }
      );
      expect(result).toEqual(discountedProduct);
    });
  });

  describe("applyCoupon", () => {
    it("should apply coupon successfully", async () => {
      const couponData: ApplyCouponRequest = {
        code: "SAVE10",
      };

      const couponProduct: Product = {
        ...mockProduct,
        finalPrice: 90,
        hasCouponApplied: true,
        discount: {
          type: "coupon",
          value: 10,
          applied_at: "2023-01-02",
        },
        updated_at: "2023-01-02",
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(couponProduct),
      } as unknown as Response);

      const result = await apiService.applyCoupon(1, couponData);

      expect(mockFetch).toHaveBeenCalledWith(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}/1/discount/coupon`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(couponData),
        }
      );
      expect(result).toEqual(couponProduct);
    });
  });

  describe("removeDiscount", () => {
    it("should remove discount successfully", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({}),
      } as unknown as Response);

      await apiService.removeDiscount(1);

      expect(mockFetch).toHaveBeenCalledWith(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}/1/discount`,
        {
          method: "DELETE",
        }
      );
    });
  });

  describe("buildQueryString", () => {
    it("should handle empty filters", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({
          data: [],
          meta: { page: 1, limit: 10, totalItems: 0, totalPages: 0 },
        }),
      } as unknown as Response);

      await apiService.fetchProducts({});

      expect(mockFetch).toHaveBeenCalledWith(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}`
      );
    });

    it("should filter out null, undefined, and empty string values", async () => {
      const filters: ProductFilters = {
        search: "",
        page: undefined,
        limit: 10,
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({
          data: [],
          meta: { page: 1, limit: 10, totalItems: 0, totalPages: 0 },
        }),
      } as unknown as Response);

      await apiService.fetchProducts(filters);

      expect(mockFetch).toHaveBeenCalledWith(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}?limit=10`
      );
    });
  });
});
