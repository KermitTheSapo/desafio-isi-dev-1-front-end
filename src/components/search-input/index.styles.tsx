import styled from "styled-components";

interface InputProps {
  $hasIcon: boolean;
  width?: string;
}
interface InputContainerProps {
  width?: string;
}

export const Container = styled.div<InputContainerProps>`
  position: relative;
  height: 42px;
`;

export const Input = styled.input<InputProps>`
  height: 100%;
  width: ${({ width }) => width ?? "100%"};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  background-color: ${({ theme }) => theme.background.primary};
  padding: 0 12px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? "40px" : "12px")};
  font-size: ${({ theme }) => theme.fontSizes.small};
  outline: none;
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderInput};
  }
`;

export const IconContainer = styled.img`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.placeholderInput};
`;
