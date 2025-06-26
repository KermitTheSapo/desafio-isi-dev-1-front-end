import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { Title } from "../../components/title/index.component";
import { theme } from "../../styles/theme";

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Title Component", () => {
  const defaultProps = {
    icon: "/test-icon.svg",
    title: "Test Title",
  };

  it("should render title text", () => {
    render(
      <TestWrapper>
        <Title {...defaultProps} />
      </TestWrapper>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should render icon with correct src", () => {
    render(
      <TestWrapper>
        <Title {...defaultProps} />
      </TestWrapper>
    );

    const icon = screen.getByRole("presentation");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "/test-icon.svg");
    expect(icon).toHaveAttribute("alt", "");
  });

  it("should render with different title", () => {
    render(
      <TestWrapper>
        <Title icon="/another-icon.svg" title="Another Title" />
      </TestWrapper>
    );

    expect(screen.getByText("Another Title")).toBeInTheDocument();
  });

  it("should render with different icon", () => {
    render(
      <TestWrapper>
        <Title icon="/different-icon.png" title="Test Title" />
      </TestWrapper>
    );

    const icon = screen.getByRole("presentation");
    expect(icon).toHaveAttribute("src", "/different-icon.png");
  });

  it("should render both icon and title together", () => {
    render(
      <TestWrapper>
        <Title {...defaultProps} />
      </TestWrapper>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("should handle empty title gracefully", () => {
    render(
      <TestWrapper>
        <Title icon="/test-icon.svg" title="" />
      </TestWrapper>
    );

    expect(screen.getByRole("presentation")).toBeInTheDocument();
    const titleElement = screen.getByRole("heading");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent("");
  });

  it("should handle special characters in title", () => {
    const specialTitle = "Título com Acentos & Símbolos!";
    render(
      <TestWrapper>
        <Title icon="/test-icon.svg" title={specialTitle} />
      </TestWrapper>
    );

    expect(screen.getByText(specialTitle)).toBeInTheDocument();
  });

  it("should handle long titles", () => {
    const longTitle =
      "This is a very long title that should still render correctly and not cause any issues";
    render(
      <TestWrapper>
        <Title icon="/test-icon.svg" title={longTitle} />
      </TestWrapper>
    );

    expect(screen.getByText(longTitle)).toBeInTheDocument();
  });
});
