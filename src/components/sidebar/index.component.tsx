import SidebarRow from "./sidebar-row/index.component";
import * as S from "./index.styles";
import React from "react";
import { useIcon, useSidebarItems } from "../../hooks/use-icons";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const sidebarItems = useSidebarItems();
  const navigate = useNavigate();
  const favicon = useIcon("sidebar/favicon.svg");

  const handleRowClick = React.useCallback(
    (url: string) => {
      navigate(url);
    },
    [navigate]
  );

  return (
    <S.SideBarSection>
      <S.TitleRowSection>
        <S.TitleSection>
          <S.Title>grupo</S.Title>
          <img src={favicon} alt="" />
        </S.TitleSection>
        <S.RowsSection>
          {sidebarItems.map((item) => (
            <SidebarRow
              key={item.id}
              icon={item.iconPath}
              label={item.label}
              description={item.description}
              onClick={() => handleRowClick(item.url)}
            />
          ))}
        </S.RowsSection>
      </S.TitleRowSection>
      <S.LogoutSection>
        <S.LogoutButton>
          <img src={useIcon("sidebar/log-out.svg")} alt="Logout" /> Sair
        </S.LogoutButton>
      </S.LogoutSection>
    </S.SideBarSection>
  );
}

export default React.memo(Sidebar);
