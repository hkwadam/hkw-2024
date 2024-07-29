/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Form = styled.form`
  width: 100%;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 600px) {
    gap: 0;
  }
`;

export default Form;