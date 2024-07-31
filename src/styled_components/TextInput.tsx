/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const TextInput = styled.input<{ error?: boolean }>`
  background-color: transparent;
  border: 1px solid transparent;
  font-size: 1.25rem;
  font-family: "neue-haas-grotesk-display", sans-serif;
  font-weight: 450;
  border-bottom: 1px solid ${props => props.error ? 'red' : '#9E9E9E'};
  height: 4rem;
  padding: 0;
  :hover {
    border-bottom: 1px solid ${props => props.error ? 'red' : '#fff'};
  }
  transition: border-color 0.4s ease-in-out, padding 0.4s ease-in-out;
  color: #fff;
  &:focus {
    outline: none;
  }
`;

export default TextInput;
