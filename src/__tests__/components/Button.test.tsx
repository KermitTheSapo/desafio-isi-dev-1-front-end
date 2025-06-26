import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import Button from "../../components/button/index.component";
import { theme } from "../../styles/theme";

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Button Component", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it("should render button with text", () => {
    render(
      <TestWrapper>
        <Button text="Click me" onClick={mockOnClick} />
      </TestWrapper>
    );

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    render(
      <TestWrapper>
        <Button text="Click me" onClick={mockOnClick} />
      </TestWrapper>
    );

    const button = screen.getByText("Click me");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("should render button with icon when provided", () => {
    const iconSrc = "/test-icon.svg";
    render(
      <TestWrapper>
        <Button text="Button with icon" icon={iconSrc} onClick={mockOnClick} />
      </TestWrapper>
    );

    const icon = screen.getByAltText("Button with icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", iconSrc);
  });

  it("should render button without icon when not provided", () => {
    render(
      <TestWrapper>
        <Button text="Button without icon" onClick={mockOnClick} />
      </TestWrapper>
    );

    expect(
      screen.queryByAltText("Button without icon")
    ).not.toBeInTheDocument();
  });

  it("should be accessible", () => {
    render(
      <TestWrapper>
        <Button text="Accessible button" onClick={mockOnClick} />
      </TestWrapper>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Accessible button");
  });
});
