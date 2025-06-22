export const RoutesUrls = {
  BASE_URL: "/",
  PRODUCT_ADD: "/product/add",
  PRODUCT_LIST: "/product/list",
  PRODUCT_EDIT: "/product/edit",
  REPORTS: "/reports",
  CONFIG: "/config",
} as const;

export type RouteUrl = (typeof RoutesUrls)[keyof typeof RoutesUrls];
