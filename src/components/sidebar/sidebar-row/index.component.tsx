import type { SidebarRowProps } from "./types";
import * as S from "./index.style";
import React from "react";

function SidebarRow({ icon, label, description }: Readonly<SidebarRowProps>) {
  return (
    <S.Row>
      <img src={icon} alt={label} />
      <S.Description>{description}</S.Description>
    </S.Row>
  );
}

export default React.memo(SidebarRow);
