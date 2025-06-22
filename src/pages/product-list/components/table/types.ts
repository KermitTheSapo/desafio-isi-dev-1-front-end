export type TableProps = {
  tableItens: ReadonlyArray<TableRowProps>;
};

export type TableRowProps = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  finalPrice: number;
  stock: number;
  discount: string;
  hasCouponApplied: boolean;
  editIcon: string;
  moneyIcon: string;
  deleteIcon: string;
};
