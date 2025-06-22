import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};
  gap: ${({ theme }) => theme.spacing.medium};
  cursor: pointer;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  height: 4.3vh;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
    transition: background-color 0.3s ease;
  }
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
`;
