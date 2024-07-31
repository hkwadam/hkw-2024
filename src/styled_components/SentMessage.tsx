/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const SentMessage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  opacity: 0;
  transition: opacity 1.25s ease-in;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  &.visible {
    opacity: 1;
  }
`;

export default SentMessage;
