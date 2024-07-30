/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
  margin: 1rem 0;
  height: 3rem;

  label {
    position: absolute;
    left: 0;
    top: 1rem;
    font-size: 1rem;
    color: #9E9E9E;
    transition: all 0.3s ease;
    pointer-events: none;

    &.shrink {
      color: #fff;
      font-size: 0.75rem;
      top: 0;
    }
  }
`;

export default FormInputContainer;
