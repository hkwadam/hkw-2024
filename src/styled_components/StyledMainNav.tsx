/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface StyledMainNavProps {
  columnStart?: string;
  columnEnd?: string;
  padding?: string;
}

const StyledMainNav = styled.div<StyledMainNavProps>`
  background: ${({ theme }) => theme.colors.mainNavBackground};
  color: ${({ theme }) => theme.colors.mainNavText};
  padding: ${({ padding }) => padding || '0'} ;
  grid-column-start: ${({ columnStart }) => columnStart || '1'} ;
  grid-column-end: ${({ columnEnd }) => columnEnd || '13'} ;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
`;

export default StyledMainNav;
