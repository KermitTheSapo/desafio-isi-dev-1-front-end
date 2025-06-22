import styled from "styled-components";

export const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const InputLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.labelInput};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const SearchAndCreateProduct = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  gap: 36px;
`;

export const FilterPriceSection = styled.div`
  display: flex;
  gap: 16px;
`;

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 30%;
  justify-content: center;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
`;
