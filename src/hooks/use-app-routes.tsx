import { useMemo } from "react";
import { RoutesUrls } from "../utils/enums/routes-url";
import { ProductListController } from "../pages/product-list/controller/product-list.controller";
import { ProductFormController } from "../pages/product-form/controller/product-form.controller";

export interface RouteConfig {
  path: string;
  element: React.ReactElement;
  title: string;
}

export const useAppRoutes = (): RouteConfig[] => {
  return useMemo(
    () => [
      {
        path: RoutesUrls.BASE_URL,
        element: <ProductListController />,
        title: "Dashboard",
      },
      {
        path: RoutesUrls.CONFIG,
        element: <ProductListController />,
        title: "Configurações",
      },
      {
        path: RoutesUrls.PRODUCT_LIST,
        element: <ProductListController />,
        title: "Lista de Produtos",
      },
      {
        path: RoutesUrls.PRODUCT_ADD,
        element: <ProductFormController />,
        title: "Adicionar Produto",
      },
      {
        path: RoutesUrls.PRODUCT_EDIT,
        element: <ProductFormController />,
        title: "Editar Produto",
      },
      {
        path: RoutesUrls.REPORTS,
        element: <ProductListController />,
        title: "Relatórios",
      },
    ],
    []
  );
};
