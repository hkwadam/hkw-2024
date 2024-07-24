/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface StyledSectionProps {
  columnStart?: string;
  columnEnd?: string;
  padding?: string;
  backgroundColor?: string;
  gridColumns?: string;
}

const StyledSection = styled.div<StyledSectionProps>`
  background: ${({ backgroundColor }) => backgroundColor || 'transparent'} ;
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ padding }) => padding || '0'} ;
  grid-column: ${({ columnStart, columnEnd }) => columnStart && columnEnd ? `${columnStart} / ${columnEnd}` : ''} ;
  display: grid;
  grid-template-columns: ${({ gridColumns }) => gridColumns || ''};
  height: 100vh;
`;

export default StyledSection;