import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  gap: 14px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 26px 0px 19px 0px;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 24px 41px 17px;
  border-bottom: 2px solid #a3a3a333;
`;

export const TableHeaderItem = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.text};
  width: 25%;
  text-align: center;
`;
