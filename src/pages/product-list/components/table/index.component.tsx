import type { TableProps } from "./types";
import * as S from "./index.styles.tsx";
import React from "react";
import TableRow from "./table-row/index.component.tsx";

function Table({ tableItens }: Readonly<TableProps>) {
  return (
    <S.Table>
      {tableItens.map((item) => (
        <TableRow key={item.id} {...item} />
      ))}
    </S.Table>
  );
}

export default React.memo(Table);
