/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface StyledSectionProps {
  columnStart?: string;
  columnEnd?: string;
  padding?: string;
  gap?: string;
  backgroundColor?: string;
}

const StyledSection = styled.div<StyledSectionProps>`
  background: ${({ backgroundColor }) => backgroundColor || 'transparent'} ;
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ padding }) => padding || '0'} ;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.root.gridTemplateColumns};
  grid-column: ${({ columnStart, columnEnd }) => columnStart && columnEnd ? `${columnStart} / ${columnEnd}` : ''} ;
  gap: ${({ gap, theme }) => gap || theme.root.gap || '0'};
`;

export default StyledSection;