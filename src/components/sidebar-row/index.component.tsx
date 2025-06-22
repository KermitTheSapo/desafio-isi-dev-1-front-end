import type { SidebarRowProps } from "./types";
import * as S from "./index.style";

export default function SidebarRow({
  icon,
  label,
  description,
}: Readonly<SidebarRowProps>) {
  return (
    <S.Row>
      <img src={icon} alt={label} />
      <S.Description>{description}</S.Description>
    </S.Row>
  );
}
