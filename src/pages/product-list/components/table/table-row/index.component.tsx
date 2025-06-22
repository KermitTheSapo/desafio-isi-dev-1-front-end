import type { TableRowProps } from "../types.ts";
import * as S from "./index.styles.tsx";
import React from "react";

function TableRow({
  category,
  description,
  discount,
  finalPrice,
  hasCouponApplied,
  name,
  price,
  stock,
  deleteIcon,
  editIcon,
  moneyIcon,
}: Readonly<TableRowProps>) {
  return (
    <S.Row>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
      <S.Category>{category}</S.Category>
      <S.Price>{price.toFixed(2)}</S.Price>
      <S.FinalPrice hasCouponApplied={hasCouponApplied}>
        {finalPrice.toFixed(2)}
      </S.FinalPrice>
      <S.Stock>{stock}</S.Stock>
      <S.Discount>{discount}</S.Discount>
      <div>
        <img src={editIcon} alt="Edit" />
        <img src={moneyIcon} alt="Money" />
        <img src={deleteIcon} alt="Delete" />
      </div>
    </S.Row>
  );
}

export default React.memo(TableRow);
