import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      title: string;
      subtitle: string;
      buttonWhite: string;
      buttonDark: string;
      primaryForeground: string;
      placeholder: string;
    };
    fontWeight: {
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
    background: {
      primary: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
  }
}
