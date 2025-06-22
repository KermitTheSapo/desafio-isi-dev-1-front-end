import { useIcon } from "../../../hooks/use-icons";
import type { TableRowProps } from "../components/table/types";
import { ProductList } from "../view/product-list.view";

export function ProductListController() {
  const bagIcon = useIcon("product-list/shopping-bag.svg");
  const searchIcon = useIcon("product-list/search.svg");
  const plusIcon = useIcon("product-list/plus.svg");
  const editIcon = useIcon("product-list/edit.svg");
  const moneyIcon = useIcon("product-list/dollar-sign.svg");
  const deleteIcon = useIcon("product-list/trash.svg");
  const tableData: ReadonlyArray<TableRowProps> = [
    {
      id: "1",
      name: "Smartphone XYZ",
      price: 1799.99,
      category: "Eletrônicos",
      description: "Smartphone premium com camera",
      discount: "10%",
      finalPrice: 1619.99,
      hasCouponApplied: true,
      stock: 10,
      deleteIcon: deleteIcon,
      editIcon: editIcon,
      moneyIcon: moneyIcon,
    },
    {
      id: "2",
      name: "Smartphone XYZ",
      price: 1799.99,
      category: "Eletrônicos",
      description: "Smartphone premium com camera",
      discount: "10%",
      finalPrice: 1619.99,
      hasCouponApplied: false,
      stock: 10,
      deleteIcon: deleteIcon,
      editIcon: editIcon,
      moneyIcon: moneyIcon,
    },
    {
      id: "3",
      name: "Smartphone XYZ",
      price: 1799.99,
      category: "Eletrônicos",
      description: "Smartphone premium com camera",
      discount: "10%",
      finalPrice: 1619.99,
      hasCouponApplied: true,
      stock: 10,
      deleteIcon: deleteIcon,
      editIcon: editIcon,
      moneyIcon: moneyIcon,
    },
  ];
  return (
    <ProductList
      bagIcon={bagIcon}
      searchIcon={searchIcon}
      tableData={tableData}
      plusIcon={plusIcon}
    />
  );
}
