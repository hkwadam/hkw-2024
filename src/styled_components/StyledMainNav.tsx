/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledMainNav = styled.div`
  background: ${({ theme }) => theme.colors.mainNavBackground};
  color: ${({ theme }) => theme.colors.mainNavText};
  padding: ${({ theme }) => theme.nav.padding || '0'} ;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 100;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  li button {
    font-size: ${({ theme }) => theme.nav.fontSize || '20px'} ;
    background-color: ${({ theme }) => theme.nav.buttonBackground || 'transparent'} ;
    color: ${({ theme }) => theme.nav.buttonColor || '#fff'} ;
    border: none;
    cursor: pointer;
    padding: ${({ theme }) => theme.nav.buttonPadding || '0'} ;
  }
`;

export default StyledMainNav;
