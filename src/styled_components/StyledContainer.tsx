/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.padding};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export default StyledContainer;
