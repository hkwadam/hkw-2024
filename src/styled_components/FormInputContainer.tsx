/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
  margin-bottom: 2rem;

  label {
    position: absolute;
    left: 0;
    top: 2rem;
    font-size: 20px;
    @media (max-width: 600px) {
      font-size: 18px; 
    }
    color: #9E9E9E;
    transition: all 0.3s ease;
    pointer-events: none;

    &.shrink {
      color: #fff;
      font-size: 1rem;
      top: -0.5rem;
    }
  }

  .error-message {
    margin-top: 0.5rem;
  }
`;

export default FormInputContainer;
