/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const HKWLogo = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 1440px) {
    width: 4.444vw;
  }
  @media (max-width: 1439px) {
    width: 46px;
  }
  svg {
    height: 100%;
  }
  opacity: 0;
  transform: translateY(5px);
  animation: slideInOpacityHero 1s forwards;
  animation-delay: 0.25s;
`;

export default HKWLogo;