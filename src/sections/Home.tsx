/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import Section from '../styled_components/Section';
import Container from '../styled_components/Container';
import SlideInContainer from '../styled_components/SlideInContainer';
import Text from '../styled_components/Text';
import TextColorPunct from '../styled_components/TextColorPunct';
import ColoredPunct from '../styled_components/ColoredPunct';
import NavBar from '../components/NavBar';

interface HomeProps {
  contactRef: React.RefObject<HTMLDivElement>;
  setShowOverlay: (show: boolean) => void;
}

const HeroSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Ensure overflow is hidden */
`;

const HeroSansNav = styled(Section)`
  height: 100%;
  @media (max-width: 1080px) {
    padding: 48px 0;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const HeroTextContainer = styled(Section)`
  height: 100%;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 56px;
  }
`;

const HeroLeftContainer = styled(Container)`
  grid-column: 1 / 5;
  align-items: flex-start;
  @media (max-width: 1080px) {
    grid-column: 1 / 6;
  }
`;

const HeroRightContainer = styled(Container)`
  grid-column: 6 / 11;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 1080px) {
    grid-column: 7 / 13;
  }
  @media (max-width: 600px) {
    gap: 16px;
  }
`;

const HeroText = styled(Text)`
  font-size: 1.25rem;
  line-height: 115%;
  opacity: 0;
  transform: translateY(40px);
  animation: slideInOpacity 1s forwards;
  animation-delay: 0.25s;
  @media (max-width: 1080px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

const HeroTextRight = styled(HeroText)`
  animation-delay: 0.5s;
`

const HeroBottomContainer = styled(Container)`
  grid-column: 1 / 13;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 2rem;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const HeroHeaderSlideInContainer = styled(SlideInContainer)`
  overflow: hidden;
`

const HeroHeader = styled(TextColorPunct)`
  color: #FF1A35;
  font-size: 7rem;
  font-family: "pf-grand-gothik-variable", sans-serif;
  font-variation-settings: "ital" 0, "wdth" 150, "wght" 900;
  text-transform: uppercase;
  line-height: 100%;
  letter-spacing: -0.375rem;
  margin-top: 0;
  margin-bottom: -1.25rem;
  @media (min-width: 1440px) {
    font-size: 6.5rem;
  }
  @media (max-width: 1080px) {
    font-size: 5rem;
    line-height: 4.125rem;
    letter-spacing: -0.25rem;
    margin: 0;
  }
  @media (max-width: 600px) {
    font-size: 38px;
    line-height: 29px;
    letter-spacing: -1.9px;
  }
  transform: translateY(40px);
  animation: slideInTranslate 1s forwards;
`;

const WhitePeriod = styled(ColoredPunct)`
  color: #FDF4E2;
`;

const Home: React.FC<HomeProps> = ({ contactRef, setShowOverlay }) => {
  return (
    <>
      <HeroSection>
        <NavBar contactRef={contactRef} setShowOverlay={setShowOverlay} />
        <HeroSansNav>
          <HeroTextContainer>
            <HeroLeftContainer>
              <SlideInContainer>
                <HeroText>
                  We are a digital design and marketing studio based in Spokane, Washington.
                </HeroText>
              </SlideInContainer>
            </HeroLeftContainer>
            <HeroRightContainer>
              <SlideInContainer>
                <HeroTextRight>
                  We build unique online experiences and engaging campaigns for non-profits and fun brands. We gravitate to the quirky and give it purpose.
                </HeroTextRight>
              </SlideInContainer>
              <SlideInContainer>
                <HeroTextRight>
                  For those looking to make a statement, we'd like to help you find your voice.
                </HeroTextRight>
              </SlideInContainer>
            </HeroRightContainer>
          </HeroTextContainer>
          <HeroBottomContainer>
            <HeroHeaderSlideInContainer>
              <HeroHeader>
                We're
              </HeroHeader>
            </HeroHeaderSlideInContainer>
            <HeroHeaderSlideInContainer>
              <HeroHeader>
                changing
              </HeroHeader>
            </HeroHeaderSlideInContainer>
            <HeroHeaderSlideInContainer>
              <HeroHeader>
                everything<WhitePeriod>.</WhitePeriod>
              </HeroHeader>
            </HeroHeaderSlideInContainer>
          </HeroBottomContainer>
        </HeroSansNav>
      </HeroSection>
    </>
  );
};

export default Home;
