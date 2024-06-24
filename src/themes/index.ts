export interface Theme {
    global: {
      padding: string;
    }
    grid: {
      columns: string;
      horizPadding: string;
      gap: string;
    }
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
  