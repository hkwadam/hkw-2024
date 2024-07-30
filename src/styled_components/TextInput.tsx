/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const TextInput = styled.input<{ error?: boolean }>`
  background-color: transparent;
  border: 1px solid transparent;
  font-size: 1.25rem;
  border-bottom: 1px solid ${props => props.error ? 'red' : '#9E9E9E'};
  height: 1.5rem;
  padding: 0.5rem 0;
  :hover {
    border-bottom: 1px solid ${props => props.error ? 'red' : '#fff'};
  }
  transition: border-color 0.4s ease-in-out, padding 0.4s ease-in-out;
  color: #fff;
  &:focus {
    padding: 1rem 0;
    outline: none;
  }
`;

export default TextInput;
