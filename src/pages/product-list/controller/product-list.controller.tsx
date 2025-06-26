import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductList } from "../view/product-list.view";
import { RoutesUrls } from "../../../utils/enums/routes-url";
import { useProducts } from "../../../hooks";
import { useIcon } from "../../../hooks/use-icons";
import type { ProductsResponse } from "../../../types/api";

export function ProductListController() {
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState<ProductsResponse>({
    data: [],
    meta: {
      limit: 10,
      page: 1,
      totalItems: 0,
      totalPages: 0,
    },
  });

  const { actions, isLoading, error } = useProducts();

  const icons = {
    bag: useIcon("product-list/shopping-bag.svg"),
    search: useIcon("product-list/search.svg"),
    plus: useIcon("product-list/plus.svg"),
  };

  const loadProducts = useCallback(async () => {
    try {
      const data = await actions.fetchProducts();
      setProductsData(data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  }, [actions]);

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateProduct = useCallback(() => {
    navigate(RoutesUrls.PRODUCT_ADD);
  }, [navigate]);

  return (
    <ProductList
      icons={icons}
      productsData={productsData}
      isLoading={isLoading}
      error={error}
      onCreateProduct={handleCreateProduct}
      onRefresh={loadProducts}
    />
  );
}
