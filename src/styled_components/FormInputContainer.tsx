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
  @media (max-width: 1080px) {
    margin-bottom: 40px;
  }
`;

export default FormInputContainer;