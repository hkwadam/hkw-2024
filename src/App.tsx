import React, { useState } from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import ThemeSelector from './components/ThemeSelector';
import GlobalGrid from './styled_components/GlobalGrid';
import { darkTheme, lightTheme, brightTheme, Theme } from './themes';

const themeMap: { [key: string]: Theme } = {
  dark: darkTheme,
  light: lightTheme,
  bright: brightTheme,
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  return (
    <ThemeProvider theme={themeMap[theme]}>
      <Global
        styles={(theme: Theme) => css`
          body {
            margin: 0;
            padding: 0;
            background-color: ${theme.colors.background};
            color: ${theme.colors.text};
            font-size: ${theme.typography.fontSize};
          }
        `}
      />
    <GlobalGrid >      
      <ThemeSelector setTheme={setTheme} />
      <p>other stuff</p>
    </GlobalGrid>
    </ThemeProvider>
  );
}

export default App;
