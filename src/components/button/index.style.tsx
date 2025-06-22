import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  padding: 16px 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.background.darkButton};
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.textButtonWhite};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const ButtonIcon = styled.img`
  width: 16px;
`;
