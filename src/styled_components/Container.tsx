/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 0;
  grid-column: 1 / 13;
  display: flex;;
  gap: 0;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default StyledContainer;
