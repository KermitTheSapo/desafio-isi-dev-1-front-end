import styled from "styled-components";

export const ProductSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 28px;
  padding: ${({ theme }) => theme.spacing.xLarge} 34px;
`;