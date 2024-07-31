/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Label = styled.label`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  transition: color 0.4s ease, font-size 0.4s ease;
  @media (max-width: 600px) {
    font-size: 18px;
    font-weight: 450;
  }
`;

export default Label;