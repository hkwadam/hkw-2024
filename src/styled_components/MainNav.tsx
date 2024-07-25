/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const MainNav = styled.div`
  background: ${({ theme }) => theme.colors.mainNavBackground};
  color: ${({ theme }) => theme.colors.mainNavText};
  padding: ${({ theme }) => theme.nav.padding || '0'} ;
  grid-column-start: 1;
  grid-column-end: 13;
  width: 100%;
  box-sizing: border-box;
  z-index: 100;
  display: grid;
  align-items: center;
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
    display: flex;
    font-size: ${({ theme }) => theme.nav.fontSize || '20px'} ;
    font-weight: ${({ theme }) => theme.nav.fontWeight || '700'} ;
    line-height: ${({ theme }) => theme.nav.lineHeight || ''} ;
    background-color: ${({ theme }) => theme.nav.buttonBackground || 'transparent'} ;
    color: ${({ theme }) => theme.nav.buttonColor || '#fff'} ;
    border: none;
    cursor: pointer;
    padding: ${({ theme }) => theme.nav.buttonPadding || '0'} ;
  }
`;

export default MainNav;
