import styled from "styled-components";

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 14px;
`;

export const TitleSectionText = styled.h2`
  font-weight: ${ ({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.black};
`;
