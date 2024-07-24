/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface StyledContainerProps {
  columnStart?: string;
  columnEnd?: string;
  padding?: string;
}

const StyledContainer = styled.div<StyledContainerProps>`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ padding }) => padding || '0'} ;
  grid-column-start: ${({ columnStart }) => columnStart || ''} ;
  grid-column-end: ${({ columnEnd }) => columnEnd || ''} ;
  display: flex;
`;

export default StyledContainer;
