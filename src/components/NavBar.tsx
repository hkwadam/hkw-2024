/** @jsxImportSource @emotion/react */
import React from 'react';
import StyledMainNav from '../styled_components/StyledMainNav';

interface NavBarProps {
  homeRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const NavBar: React.FC<NavBarProps> = ({ homeRef, servicesRef, contactRef }) => {
  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    // TODO: change the offset based on the actual breakpoints and needed value
    let offset = 100; // default (desktop) offset so that when you scroll to a region it will fall below the navbar

    // mobile offset
    if (window.innerWidth < 600) {
      offset = 50;
      // tablet offset
    } else if (window.innerWidth < 1024) {
      offset = 75; 
    }

    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <StyledMainNav>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleScroll(homeRef)}>HKW</button>
          </li>
          {/* <li>
            <button onClick={() => handleScroll(servicesRef)}>Services</button>
          </li> */}
          <li>
            <button onClick={() => handleScroll(contactRef)}>Contact</button>
          </li>
        </ul>
      </nav>
    </StyledMainNav>
  );
};

export default NavBar;
