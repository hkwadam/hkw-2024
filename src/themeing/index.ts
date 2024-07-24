export interface Theme {
    colors: {
      background: string;
      text: string;
      selectBackground: string;
      selectText: string;
      border: string;
      mainNavBackground: string;
      mainNavText: string;
    };
  }
  
  export { default as darkTheme } from './1darkTheme';
  export { default as lightTheme } from './1lightTheme';
  