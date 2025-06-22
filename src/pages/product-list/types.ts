import type { TableRowProps } from "./components/table/types";

export type ProductListProps = {
  bagIcon: string;
  searchIcon: string;
  plusIcon: string;
  tableData: ReadonlyArray<TableRowProps>;
};
