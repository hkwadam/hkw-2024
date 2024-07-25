/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface StyledTextColoredPunctProps {
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  fontFamily?: string;
  textColor?: string;
  punctColor? :string;
  textTransform? :string;
}

const StyledTextColoredPunct = styled.p<StyledTextColoredPunctProps>`
  width: 100%;
  font-size: ${({ fontSize }) => fontSize || '1rem'} ;
  font-weight: ${({ fontWeight }) => fontWeight || '400'} ;
  line-height: ${({ lineHeight }) => lineHeight || ''} ;
  font-family: ${({ fontFamily }) => fontFamily || ''} ;
  color: ${({ textColor }) => textColor || ''} ;
  text-transform: ${({ textTransform }) => textTransform || ''} ;
  span {
    color: ${({ punctColor }) => punctColor || ''} ;
  }
`;

export default StyledTextColoredPunct;