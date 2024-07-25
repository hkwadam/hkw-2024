/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Select = styled.select`
  background: ${({ theme }) => theme.colors.selectBackground};
  color: ${({ theme }) => theme.colors.selectText};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export default Select;
