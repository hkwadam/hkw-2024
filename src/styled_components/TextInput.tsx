/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const TextInput = styled.input`
  background-color: #292929;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  height: 2.5rem;
  :hover {
    border-color: #fff;
  }
  transition: border-color 0.4s ease-in-out;
  color: #fff;
  padding: 0 1rem;
`;

export default TextInput;