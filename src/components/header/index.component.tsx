import type { HeaderProps } from "./types";
import * as S from "./index.styles.tsx";
import React from "react";
import { getInitials } from "../../utils/get-initials.ts";

function Header({ description }: Readonly<HeaderProps>) {
  return (
    <S.Row>
      <S.Profile>
        <S.Description>{getInitials(description)}</S.Description>
      </S.Profile>
      <S.Description>{description}</S.Description>
    </S.Row>
  );
}

export default React.memo(Header);
