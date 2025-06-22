import houseIcon from "../assets/sidebar/house.svg";
import productIcon from "../assets/sidebar/product.svg";
import fileTextIcon from "../assets/sidebar/file-text.svg";
import settingsIcon from "../assets/sidebar/settings.svg";
import logOutIcon from "../assets/sidebar/log-out.svg";
import favicon from "../assets/sidebar/favicon.svg";

import filePlusIcon from "../assets/product-form/file-plus.svg";
import editProductIcon from "../assets/product-form/edit.svg";

import darkPercentIcon from "../assets/modal/dark-percent.svg";
import darkTagIcon from "../assets/modal/dark-tag.svg";
import lightPercentIcon from "../assets/modal/light-percent.svg";
import lightTagIcon from "../assets/modal/light-tag.svg";

import dollarSignIcon from "../assets/product-list/dollar-sign.svg";
import editIcon from "../assets/product-list/edit.svg";
import plusIcon from "../assets/product-list/plus.svg";
import refreshIcon from "../assets/product-list/refresh.svg";
import searchIcon from "../assets/product-list/search.svg";
import shoppingBagIcon from "../assets/product-list/shopping-bag.svg";
import trashIcon from "../assets/product-list/trash.svg";

import { RoutesUrls } from "../utils/enums/routes-url";

const sidebarItems = [
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

type IconCategory = "sidebar";

interface SidebarItem {
  id: string;
  icon: string;
  label: string;
  description: string;
  iconPath: string;
  url: string;
}

const globalIconMap: Record<string, string> = {
  "sidebar/house.svg": houseIcon,
  "sidebar/product.svg": productIcon,
  "sidebar/file-text.svg": fileTextIcon,
  "sidebar/settings.svg": settingsIcon,
  "sidebar/log-out.svg": logOutIcon,
  "sidebar/favicon.svg": favicon,

  "product-form/file-plus.svg": filePlusIcon,
  "product-form/edit.svg": editProductIcon,

  "modal/dark-percent.svg": darkPercentIcon,
  "modal/dark-tag.svg": darkTagIcon,
  "modal/light-percent.svg": lightPercentIcon,
  "modal/light-tag.svg": lightTagIcon,

  "product-list/dollar-sign.svg": dollarSignIcon,
  "product-list/edit.svg": editIcon,
  "product-list/plus.svg": plusIcon,
  "product-list/refresh.svg": refreshIcon,
  "product-list/search.svg": searchIcon,
  "product-list/shopping-bag.svg": shoppingBagIcon,
  "product-list/trash.svg": trashIcon,
};

const iconsByCategory: Record<IconCategory, Record<string, string>> = {
  sidebar: {
    "house.svg": houseIcon,
    "product.svg": productIcon,
    "file-text.svg": fileTextIcon,
    "settings.svg": settingsIcon,
    "log-out.svg": logOutIcon,
  },
};

export function useIcon(fullPath: string): string {
  return globalIconMap[fullPath] || "";
}

export function useSidebarItems(): SidebarItem[] {
  return sidebarItems.map((item) => ({
    ...item,
    iconPath: iconsByCategory.sidebar[item.icon] || "",
  }));
}
