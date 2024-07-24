/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface StyledSelectProps {
  padding?: string;
  margin?: string;
}

const StyledSelect = styled.select<StyledSelectProps>`
  background: ${({ theme }) => theme.colors.selectBackground};
  color: ${({ theme }) => theme.colors.selectText};
  padding: ${({ padding }) => padding || '0'} ;
  margin: ${({ margin }) => margin || '0'} ;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  width: 100%;
`;

export default StyledSelect;
