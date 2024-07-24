import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react'; // allows for theme changes
import ThemeSelector from './components/ThemeSelector';
import NavBar from './components/NavBar'; 
import LandingPage from "./pages/LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { darkTheme, lightTheme, Theme } from './themeing'; // our defined themes
import GlobalStyles from './themeing/GlobalStyles';  // controls things like global padding, font size, and general themeing


const themeMap: { [key: string]: Theme } = {
  dark: darkTheme,
  light: lightTheme,
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  return (
    <ThemeProvider theme={themeMap[theme]}>
      <GlobalStyles />
      <ThemeSelector setTheme={setTheme} />
      {/* even though we only have 1 route rn we can still use router for anchor links and it'll set 
      us up well when we move to more than 1 page */}
      <Router> 
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage setTheme={setTheme} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
