import styled from "styled-components";

export const Row = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  padding-left: 26px;
  padding-right: 19px;
`;

export const Name = styled.p`
  width: 15%;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.p`
  width: 15%;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.placeholder};
`;

export const Category = styled.p`
  width: 15%;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
`;

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const PriceDiscountSection = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  gap: 4px;
`;

export const Price = styled.p<{ $hasCouponApplied: boolean }>`
  text-decoration: ${({ $hasCouponApplied }) =>
    $hasCouponApplied ? "line-through" : "none"};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const FinalPrice = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
`;

export const DiscountSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.background.discount};
`;

export const Discount = styled.p`
  color: ${({ theme }) => theme.colors.discountText};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 4px 8px;
`;

export const StockSection = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Stock = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonsSection = styled.div`
  display: flex;
  width: 15%;
  gap: 12px;
`;
