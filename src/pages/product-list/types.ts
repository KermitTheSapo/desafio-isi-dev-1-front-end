import type { ProductsResponse } from "../../types/api";

export interface ProductListIcons {
  bag: string;
  search: string;
  plus: string;
}

export interface ProductListProps {
  icons: ProductListIcons;
  productsData: ProductsResponse;
  isLoading: boolean;
  error: string | null;
  onCreateProduct: () => void;
  onRefresh: () => Promise<void>;
}
