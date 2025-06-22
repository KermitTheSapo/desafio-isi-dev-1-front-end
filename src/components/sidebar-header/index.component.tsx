import React from "react";
import Header from "../header/index.component.tsx";
import Sidebar from "../sidebar/index.component.tsx";
import * as S from "./index.style";

function SideBarHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <S.FixedSection>
      <Sidebar />
      <S.HeaderContent>
        <Header description="Arthur Morgan" />
        {children}
      </S.HeaderContent>
    </S.FixedSection>
  );
}

export default React.memo(SideBarHeader);
