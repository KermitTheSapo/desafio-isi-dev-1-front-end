import * as S from "./index.styles";
import SearchInput from "../../../../components/search-input/index.component";
import type { FilterProps } from "./types";
import Button from "../../../../components/button/index.component";

export function Filter({
  searchIcon,
  plusIcon,
  handleRedirectToCreateProduct,
}: Readonly<FilterProps>) {
  return (
    <S.FilterSection>
      <S.FilterPriceSection>
        <S.PriceSection>
          <S.InputLabel>Preço mínimo</S.InputLabel>
          <SearchInput placeholder="R$ 0,00" width="100%" />
        </S.PriceSection>
        <S.PriceSection>
          <S.InputLabel>Preço máximo</S.InputLabel>
          <SearchInput placeholder="R$ 999,99" width="100%" />
        </S.PriceSection>
        <S.ButtonSection>
          <Button text="Filtrar" onClick={() => {}} />
        </S.ButtonSection>
      </S.FilterPriceSection>
      <S.SearchAndCreateProduct>
        <SearchInput
          icon={searchIcon}
          width="306px"
          placeholder="Buscar produtos..."
        />
        <Button
          text="Criar Produto"
          onClick={handleRedirectToCreateProduct}
          icon={plusIcon}
        />
      </S.SearchAndCreateProduct>
    </S.FilterSection>
  );
}
