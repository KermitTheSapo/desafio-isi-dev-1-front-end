import styled from "styled-components";

export const SideBarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 15%;
  border-right: 0.5px solid ${({ theme }) => theme.colors.borderColor};
  gap: ${({ theme }) => theme.spacing.small};
  height: 100vh;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const TitleRowSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.medium};
`;
export const RowsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.black};
  font-family: "Kanit", sans-serif;
`;

export const LogoutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 0.5px solid ${({ theme }) => theme.colors.borderColor};
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const LogoutButton = styled.a`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background.primary};
  border: 0.5px solid ${({ theme }) => theme.colors.borderColor};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.logoutButton};
  width: 90%;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
    transition: background-color 0.3s ease;
  }
`;
