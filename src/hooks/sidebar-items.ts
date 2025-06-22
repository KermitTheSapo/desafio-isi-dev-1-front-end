import { RoutesUrls } from "../utils/enums/routes-url";

export const sidebarItems = [
  {
    id: "dashboard",
    icon: "house.svg",
    label: "Casa",
    description: "Dashboard",
    url: RoutesUrls.BASE_URL,
  },
  {
    id: "products",
    icon: "product.svg",
    label: "Bolsa",
    description: "Produtos",
    url: RoutesUrls.PRODUCT_LIST,
  },
  {
    id: "reports",
    icon: "file-text.svg",
    label: "Relatórios",
    description: "Relatórios",
    url: RoutesUrls.REPORTS,
  },
  {
    id: "settings",
    icon: "settings.svg",
    label: "Engrenagem",
    description: "Administração",
    url: RoutesUrls.CONFIG,
  },
];
