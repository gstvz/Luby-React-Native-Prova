import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      action: string,
      background_primary: string,
      background_secondary: string,
      background_tertiary: string,
      light: string,
      numberButton: string,
      placeholder: string,
      titles: string,
      text: string
    };
    fonts: {
      regular_400: string,
      italic_400: string,
      regular_700: string,
      italic_700: string
    };
  }
}