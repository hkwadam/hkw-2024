export interface Theme {
    root: {
      padding: string;
    },
    colors: {
      background: string;
      text: string;
      selectBackground: string;
      selectText: string;
      border: string;
      mainNavBackground: string;
      mainNavText: string;
    };
    nav: {
      padding: string;
      fontSize: string;
      buttonBackground: string;
      buttonColor: string;
      buttonPadding: string;
    }
  }
  
  export { default as darkTheme } from './1darkTheme';
  export { default as lightTheme } from './1lightTheme';
  export { default as baseTheme } from './baseTheme'
  