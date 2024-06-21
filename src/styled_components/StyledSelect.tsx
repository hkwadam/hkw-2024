/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledSelect = styled.select`
  background: ${({ theme }) => theme.colors.selectBackground};
  color: ${({ theme }) => theme.colors.selectText};
  padding: ${({ theme }) => theme.spacing.padding};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  margin: ${({ theme }) => theme.spacing.margin};
`;

export default StyledSelect;
