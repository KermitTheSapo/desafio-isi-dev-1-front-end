export const API_CONFIG = {
  BASE_URL: "http://localhost:3001/api/v1",
  ENDPOINTS: {
    PRODUCTS: "/products",
    COUPONS: "/coupons",
  },
  DEFAULT_PAGINATION: {
    PAGE: 1,
    LIMIT: 10,
  },
} as const;
