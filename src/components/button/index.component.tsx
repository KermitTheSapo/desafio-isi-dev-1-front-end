import type { ButtonProps } from "./types";
import * as S from "./index.style";
import React from "react";

function Button({ onClick, text, icon }: Readonly<ButtonProps>) {
  return (
    <S.Button onClick={onClick}>
      {icon && <S.ButtonIcon src={icon} alt={text} />}
      {text}
    </S.Button>
  );
}

export default React.memo(Button);
