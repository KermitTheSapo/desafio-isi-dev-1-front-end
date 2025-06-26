import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import SearchInput from "../../components/search-input/index.component";
import { theme } from "../../styles/theme";

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("SearchInput Component", () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it("should render with default placeholder", () => {
    render(
      <TestWrapper>
        <SearchInput />
      </TestWrapper>
    );

    expect(screen.getByPlaceholderText("Pesquisar...")).toBeInTheDocument();
  });

  it("should render with custom placeholder", () => {
    render(
      <TestWrapper>
        <SearchInput placeholder="Digite aqui..." />
      </TestWrapper>
    );

    expect(screen.getByPlaceholderText("Digite aqui...")).toBeInTheDocument();
  });

  it("should display the provided value", () => {
    render(
      <TestWrapper>
        <SearchInput value="test value" onChange={mockOnChange} />
      </TestWrapper>
    );

    const input = screen.getByDisplayValue("test value");
    expect(input).toBeInTheDocument();
  });

  it("should call onChange when input value changes", () => {
    render(
      <TestWrapper>
        <SearchInput onChange={mockOnChange} />
      </TestWrapper>
    );

    const input = screen.getByPlaceholderText("Pesquisar...");
    fireEvent.change(input, { target: { value: "new value" } });

    expect(mockOnChange).toHaveBeenCalledWith("new value");
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("should render icon when provided", () => {
    const iconSrc = "/search-icon.svg";
    render(
      <TestWrapper>
        <SearchInput icon={iconSrc} />
      </TestWrapper>
    );

    const icon = screen.getByAltText("");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", iconSrc);
  });

  it("should not render icon when not provided", () => {
    render(
      <TestWrapper>
        <SearchInput />
      </TestWrapper>
    );

    expect(screen.queryByAltText("")).not.toBeInTheDocument();
  });

  it("should handle input changes correctly", () => {
    render(
      <TestWrapper>
        <SearchInput onChange={mockOnChange} />
      </TestWrapper>
    );

    const input = screen.getByPlaceholderText("Pesquisar...");

    fireEvent.change(input, { target: { value: "a" } });
    expect(mockOnChange).toHaveBeenCalledWith("a");

    fireEvent.change(input, { target: { value: "ab" } });
    expect(mockOnChange).toHaveBeenCalledWith("ab");

    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });

  it("should work without onChange callback", () => {
    render(
      <TestWrapper>
        <SearchInput />
      </TestWrapper>
    );

    const input = screen.getByPlaceholderText("Pesquisar...");

    expect(() => {
      fireEvent.change(input, { target: { value: "test" } });
    }).not.toThrow();
  });
});
