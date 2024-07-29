/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  &:focus-within label {
    color: #fff;
    font-size: 0.75rem;
  }
`;

export default FormInputContainer;