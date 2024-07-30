/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const TextInput = styled.input<{ error?: boolean }>`
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom: 1px solid ${props => props.error ? 'red' : '#9E9E9E'};
  height: 1.5rem;
  :hover {
    border-bottom: 1px solid ${props => props.error ? 'red' : '#fff'};
  }
  transition: border-color 0.4s ease-in-out;
  color: #fff;
  padding: 0 1rem;
`;

export default TextInput;