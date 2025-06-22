export const theme = {
  colors: {
    text: "#3F3F46",
    title: "#0F172A",
    subtitle: "#555555D1",
    buttonWhite: "#0F172A",
    buttonDark: "#F8FAFC",
    primaryForeground: "#F8FAFC",
    placeholder: "#64748B",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  fontSizes: {
    small: "0.875rem",
    medium: "1rem",
    large: "1.25rem",
    xLarge: "1.5rem",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  background: {
    primary: "#FFFFFF",
  },
};

export type ThemeType = typeof theme;
