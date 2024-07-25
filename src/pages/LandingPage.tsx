/** @jsxImportSource @emotion/react */
import React from 'react';
import Home from "../sections/Home";
import Services from "../sections/Services";
import Contact from "../sections/Contact";

interface LandingPageProps {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  homeRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const LandingPage: React.FC<LandingPageProps> = ({ homeRef, servicesRef, contactRef }) => {
  return (
    <>
      <div ref={homeRef}></div>
      <Home homeRef={homeRef} servicesRef={servicesRef} contactRef={contactRef} />
      <div ref={servicesRef}></div>
      <Services />
      <div ref={contactRef}></div>
      <Contact />
    </>
  );
};

export default LandingPage;
