import styled from "styled-components";

export const Row = styled.section`
  display: flex;
  justify-content: end;
  gap: 16px;
  width: 85%;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.background.primary};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderColor};
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.profile};
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.black};
`;
