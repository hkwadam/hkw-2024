/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface StyledContainerProps {
  columnStart?: string;
  columnEnd?: string;
  flexDirection?: string;
}

const StyledContainer = styled.div<StyledContainerProps>`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.padding};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  grid-column-start: ${({ columnStart }) => columnStart || ''} ;
  grid-column-end: ${({ columnEnd }) => columnEnd || ''} ;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'} ;
`;

export default StyledContainer;
