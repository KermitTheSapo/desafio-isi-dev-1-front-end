import type { ProductsResponse } from "../../types/api";

export type ProductListProps = {
  bagIcon: string;
  searchIcon: string;
  handleRedirectToCreateProduct: () => void;
  plusIcon: string;
  data: ProductsResponse;
};
