import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      title: string;
      subtitle: string;
      buttonWhite: string;
      buttonDark: string;
      placeholder: string;
      black: string;
      profile: string;
      borderColor: string;
      logoutButton: string;
      hoverButton: string;
      labelInput: string;
      borderInput: string;
      placeholderInput: string;
      textButtonWhite: string;
      discountText: string;
      formBorder: string;
      formDescription: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeight: {
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
    background: {
      primary: string;
      discount: string;
      darkButton: string;
      primaryForeground: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
  }
}
