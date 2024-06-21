export interface Theme {
    colors: {
      background: string;
      text: string;
      selectBackground: string;
      selectText: string;
      border: string;
    };
    typography: {
      fontFamily: string;
      fontSize: string;
    };
    spacing: {
      padding: string;
      margin: string;
    };
  }
  
  export { default as darkTheme } from './darkTheme';
  export { default as lightTheme } from './lightTheme';
  export { default as brightTheme } from './brightTheme';
  