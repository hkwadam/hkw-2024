/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Form = styled.form<{ isFormSubmitted: boolean }>`
  width: 100%;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  gap: 0;
  max-height: ${({ isFormSubmitted }) => (isFormSubmitted ? '100px' : '1000px')};
  opacity: ${({ isFormSubmitted }) => (isFormSubmitted ? '0' : '1')};
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
`;

export default Form;
