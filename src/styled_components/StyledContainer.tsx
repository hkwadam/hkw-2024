/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.padding};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  grid-column-start: 2;
  grid-column-end: 3;
`;

export default StyledContainer;
