/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from "react-router-dom";
import StyledMainNav from '../styled_components/StyledMainNav';

const NavBar: React.FC = () => {

  return (
    <>
    <StyledMainNav columnStart={'1'} columnEnd={'13'} padding={'0'}>
        <nav>
          <ul>
            <li>
              <Link to="/#home">HKW</Link>
            </li>
            <li>
              <Link to="/#services">Services</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>   
        </StyledMainNav>
    </>
  );
};

export default NavBar;
