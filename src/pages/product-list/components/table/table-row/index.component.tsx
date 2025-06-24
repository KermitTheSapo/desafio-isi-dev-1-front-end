import { useIcon } from "../../../../../hooks/use-icons.ts";
import type { Product } from "../../../../../types/api.ts";
import * as S from "./index.styles.tsx";
import React from "react";

function TableRow({
  hasCouponApplied,
  name,
  price,
  stock,
  description,
  discount,
  finalPrice,
}: Readonly<Product>) {
  const editIcon = useIcon("product-list/edit.svg");
  const moneyIcon = useIcon("product-list/dollar-sign.svg");
  const deleteIcon = useIcon("product-list/trash.svg");
  return (
    <S.Row>
      <S.Name>{name}</S.Name>
      <S.Description>
        {description.length > 25
          ? description.slice(0, 25) + "..."
          : description}
      </S.Description>
      <S.Category>category</S.Category>{" "}
      <S.PriceDiscountSection>
        <S.PriceSection>
          {hasCouponApplied && (
            <S.Price $hasCouponApplied={hasCouponApplied}>
              R$ {finalPrice?.toFixed(2)}
            </S.Price>
          )}
          <S.FinalPrice>R$ {price?.toFixed(2)}</S.FinalPrice>
        </S.PriceSection>
        {hasCouponApplied && (
          <S.DiscountSection>
            <S.Discount>{discount?.value}</S.Discount>
          </S.DiscountSection>
        )}
      </S.PriceDiscountSection>
      <S.StockSection>
        <S.Stock>{stock}</S.Stock>
      </S.StockSection>
      <S.ButtonsSection>
        <img src={editIcon} alt="Edit" />
        <img src={moneyIcon} alt="Money" />
        <img src={deleteIcon} alt="Delete" />
      </S.ButtonsSection>
    </S.Row>
  );
}

export default React.memo(TableRow);
