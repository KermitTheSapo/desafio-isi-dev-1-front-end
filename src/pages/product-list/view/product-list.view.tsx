import { Filter } from "../components/filter/index.component";
import Table from "../components/table/index.component";
import { Title } from "../../../components/title/index.component";
import type { ProductListProps } from "../types";
import * as S from "./index.styles";

export function ProductList({
  icons,
  productsData,
  isLoading,
  error,
  onCreateProduct,
  onRefresh,
}: Readonly<ProductListProps>) {
  if (error) {
    return (
      <S.ProductSection>
        <p>Erro: {error}</p>
        <button onClick={onRefresh}>Tentar novamente</button>
      </S.ProductSection>
    );
  }

  return (
    <S.ProductSection>
      <Title icon={icons.bag} title="Produtos" />
      <Filter
        plusIcon={icons.plus}
        searchIcon={icons.search}
        handleRedirectToCreateProduct={onCreateProduct}
      />
      <Table data={productsData.data} isLoading={isLoading} />
    </S.ProductSection>
  );
}
