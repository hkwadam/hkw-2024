/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  input {
    height: 2rem;
  }
  label {
    position: relative;
    top: 2rem;
    transition: all 0.3s ease;
    pointer-events: none;
  }
  &:focus-within label {
    color: #fff;
    font-size: 0.75rem;
    top: 0;
  }
  margin-bottom: 1rem;
`;

export default FormInputContainer;