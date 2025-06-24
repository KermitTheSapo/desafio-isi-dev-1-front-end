import * as S from "./index.styles";
import React from "react";
import type { SearchInputProps } from "./types";

function SearchInput({
  placeholder = "Pesquisar...",
  icon,
  value,
  onChange,
  width,
}: Readonly<SearchInputProps>) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <S.Container>
      {icon && <S.IconContainer src={icon} alt="" />}
      <S.Input
        $hasIcon={!!icon}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        width={width}
      />
    </S.Container>
  );
}

export default React.memo(SearchInput);
