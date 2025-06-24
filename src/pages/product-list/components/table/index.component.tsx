import type { TableProps } from "./types";
import * as S from "./index.styles.tsx";
import React from "react";
import TableRow from "./table-row/index.component.tsx";

function Table({ data }: Readonly<TableProps>) {
  return (
    <S.Table>
      <S.TableHeader>
        <S.TableHeaderItem>Nome</S.TableHeaderItem>
        <S.TableHeaderItem>Descrição</S.TableHeaderItem>
        <S.TableHeaderItem>Categoria</S.TableHeaderItem>
        <S.TableHeaderItem>Preço</S.TableHeaderItem>
        <S.TableHeaderItem>Estoque</S.TableHeaderItem>
        <S.TableHeaderItem>Ações</S.TableHeaderItem>
      </S.TableHeader>
      {data.map((item) => (
        <TableRow key={item.id} {...item} />
      ))}
    </S.Table>
  );
}

export default React.memo(Table);
