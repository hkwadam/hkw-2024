/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface StyledTextProps {
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
}

const StyledText = styled.p<StyledTextProps>`
  width: 100%;
  font-size: ${({ fontSize }) => fontSize || '1rem'} ;
  font-weight: ${({ fontWeight }) => fontWeight || '400'} ;
  line-height: ${({ lineHeight }) => lineHeight || ''} ;
`;

export default StyledText;