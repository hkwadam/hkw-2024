/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Section = styled.div`
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  grid-template-columns: ${({ theme }) => theme.root.gridTemplateColumns};
  grid-column: 1 / 13;
  gap: ${({ theme }) => theme.root.gap || '1rem'};
  padding: 0;
`;

export default Section;