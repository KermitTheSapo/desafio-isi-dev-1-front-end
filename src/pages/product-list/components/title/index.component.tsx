import * as S from "./index.styles";
import type { TitleProps } from "./types";

export function Title({ icon, title }: Readonly<TitleProps>) {
  return (
    <S.TitleSection>
      <img src={icon} alt="" />
      <S.TitleSectionText>{title}</S.TitleSectionText>
    </S.TitleSection>
  );
}
