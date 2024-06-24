import React, { useState } from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import NavBar from './components/NavBar';
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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
            padding: ${theme.global.padding};
            background-color: ${theme.colors.background};
            color: ${theme.colors.text};
            font-size: ${theme.typography.fontSize};
          }
          #root {
            display: grid;
            grid-template-columns: ${theme.grid.columns};
          }
        `}
      />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage setTheme={setTheme} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
