import type { Product } from "../../../../types/api";

export interface TableProps {
  data: Product[];
  isLoading?: boolean;
}
