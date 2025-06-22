export const RoutesUrls = {
  BASE_URL: "/",
  PRODUCT_LIST: "/product-list",
  PRODUCT_ADD: "/product-form/add",
  PRODUCT_EDIT: "/product-form/edit/:id",
  REPORTS: "/reports",
  CONFIG: "/config",
} as const;

export type RouteUrl = (typeof RoutesUrls)[keyof typeof RoutesUrls];
