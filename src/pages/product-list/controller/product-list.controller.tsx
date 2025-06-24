import { useNavigate } from "react-router-dom";
import { useIcon } from "../../../hooks/use-icons";
import { ProductList } from "../view/product-list.view";
import { RoutesUrls } from "../../../utils/enums/routes-url";
import { useProducts } from "../../../hooks";
import React from "react";
import type { ProductsResponse } from "../../../types/api";

export function ProductListController() {
  const bagIcon = useIcon("product-list/shopping-bag.svg");
  const searchIcon = useIcon("product-list/search.svg");
  const plusIcon = useIcon("product-list/plus.svg");
  const navigate = useNavigate();
  const [data, setData] = React.useState<ProductsResponse>({
    data: [],
    meta: {
      limit: 10,
      page: 1,
      totalItems: 0,
      totalPages: 0,
    },
  });

  const { actions } = useProducts();

  const fetchData = React.useCallback(async () => {
    try {
      const data = await actions.fetchProducts();
      setData(data);
    } catch (error) {
      console.error("error:", error);
    }
  }, [actions]);

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRedirectToCreateProduct = React.useCallback(() => {
    navigate(RoutesUrls.PRODUCT_ADD);
  }, [navigate]);
  return (
    <ProductList
      bagIcon={bagIcon}
      handleRedirectToCreateProduct={handleRedirectToCreateProduct}
      searchIcon={searchIcon}
      data={data}
      plusIcon={plusIcon}
    />
  );
}
