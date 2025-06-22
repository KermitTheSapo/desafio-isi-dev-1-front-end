import styled from "styled-components";

export const Row = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
`;

export const Name = styled.p``;

export const Description = styled.p``;

export const Category = styled.p``;

export const Price = styled.p``;

export const FinalPrice = styled.p<{ hasCouponApplied: boolean }>`
  text-decoration: ${({ hasCouponApplied }) =>
    hasCouponApplied ? "line-through" : "none"};
`;

export const Stock = styled.p``;

export const Discount = styled.p`
  color: red;
`;
