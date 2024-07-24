/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface StyledContainerProps {
  columnStart?: string;
  columnEnd?: string;
  padding?: string;
  flexDirection? :string;
  gap? :string;
  justifyContent? :string;
  alignItems? :string;
}

const StyledContainer = styled.div<StyledContainerProps>`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ padding }) => padding || '0'};
  grid-column: ${({ columnStart, columnEnd }) => `${columnStart} / ${columnEnd}`};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || ''};
  gap: ${({ gap }) => gap || '0'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
`;

export default StyledContainer;
