export const theme = {
  colors: {
    text: "#3F3F46",
    title: "#0F172A",
    subtitle: "#555555D1",
    buttonWhite: "#0F172A",
    buttonDark: "#F8FAFC",
    placeholder: "#64748B",
    black: "#000000",
    profile: "#E2E8F0",
    borderColor: "#F1F5F9",
    logoutButton: "#F87171",
    hoverButton: "#F8FAFC",
    labelInput: "#020617",
    borderInput: "#A8B5D3",
    placeholderInput: "#475569",
    textButtonWhite: "#FFFFFF",
    discountText: "#158046",
    formBorder: "#E9F2FA",
    formDescription: "#3E424DCC",
  },
  borderRadius: {
    small: "4px",
    medium: "6px",
    large: "8px",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
    xLarge: "48px",
  },
  fontSizes: {
    small: "0.875rem",
    medium: "1rem",
    large: "1.25rem",
    xLarge: "1.5rem",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  background: {
    primary: "#FFFFFF",
    primaryForeground: "#F8FAFC",
    darkButton: "#0F172A",
    discount: "#DCFCE7",
  },
};

export type ThemeType = typeof theme;
