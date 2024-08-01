/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
  margin-bottom: 2rem;
  margin-top: 1rem;
  label {
    position: absolute;
    left: 0;
    top: 1rem;
    font-size: 1.389vw;
    @media (max-width: 1439px) {
      font-size: 20px;
    }
    @media (max-width: 600px) {
      font-size: 18px; 
    }
    color: #9E9E9E;
    transition: all 0.3s ease;
    pointer-events: none;
    &.shrink {
      color: #fff;
      font-size: 1rem;
      top: -1.5rem;
    }
    &.textarea {
      top: 1.75rem;
      &.shrink {
        top: -.75rem;
      }
      @media (max-width: 1080px) {
        top: 1.75rem;
        &.shrink {
          top: -.75rem;
        }
      }
      @media (max-width: 600px) {
        top: 1.75rem;
        &.shrink {
          top: -.5rem;
        }
      }
    }
  }
  .error-message {
    margin-top: 0.5rem;
  }
`;

export default FormInputContainer;
