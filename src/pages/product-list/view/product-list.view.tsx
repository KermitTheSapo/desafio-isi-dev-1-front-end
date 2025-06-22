import { Filter } from "../components/filter/index.component";
import Table from "../components/table/index.component";
import { Title } from "../components/title/index.component";
import type { ProductListProps } from "../types";
import * as S from "./index.styles";

export function ProductList({
  bagIcon,
  searchIcon,
  tableData,
  plusIcon,
}: Readonly<ProductListProps>) {
  return (
    <S.ProductSection>
      <Title icon={bagIcon} title="Produtos" />
      <Filter plusIcon={plusIcon} searchIcon={searchIcon} />
      <Table tableItens={tableData} />
    </S.ProductSection>
  );
}
