/** @jsxImportSource @emotion/react */
import React from 'react';
import Home from "../sections/Home";

interface LandingPageProps {
    setTheme: React.Dispatch<React.SetStateAction<string>>;
  }

const LandingPage: React.FC<LandingPageProps> = () => {

  return (
    <>
      {/* this provides the anchor link for home. we can't just wrap home in a div with id of "home"
      because then the styled components gridding wont work */}
      <div id="home"></div>
      <Home />
    </>
  );
};

export default LandingPage;
