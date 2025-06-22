import styled from "styled-components";

export const FixedSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background.primaryForeground};
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
