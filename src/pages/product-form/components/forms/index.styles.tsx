import styled from "styled-components";

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderForm = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.formBorder};
  width: 100%;
  gap: 8px;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 20px 0px 20px 34px;
`;

export const HeaderFormTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
`;

export const HeaderFormDescription = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.formDescription};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 34px;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 4px;
`;

export const Required = styled.span`
  color: #e74c3c;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.formDescription};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.borderInput};
  }
`;

export const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.borderInput};
  }

  option {
    background-color: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.colors.black};
  resize: vertical;
  min-height: 100px;
  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.colors.formDescription};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.borderInput};
  }
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
