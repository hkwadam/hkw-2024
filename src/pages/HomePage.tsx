/** @jsxImportSource @emotion/react */
import React from 'react';
import ThemeSelector from '../components/ThemeSelector';

interface HomePageProps {
    setTheme: React.Dispatch<React.SetStateAction<string>>;
  }

const HomePage: React.FC<HomePageProps> = ({ setTheme }) => {

  return (
    <>
        <p>home page</p>
        <ThemeSelector setTheme={setTheme} />
    </>
  );
};

export default HomePage;
