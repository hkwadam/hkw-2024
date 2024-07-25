import React from 'react';
import styled from '@emotion/styled';
import Section from '../styled_components/Section';
import Container from '../styled_components/Container';
import Text from '../styled_components/Text';
import TextColorPunct from '../styled_components/TextColorPunct';
import NavBar from '../components/NavBar';

interface HomeProps {
    homeRef: React.RefObject<HTMLDivElement>;
    servicesRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

const Home: React.FC<HomeProps> = ({ homeRef, servicesRef, contactRef }) => {

    const HeroSection = styled(Section)`
        gap: 16px; 
        height: 100vh;
    `;
    
    const HeroLeftContainer = styled(Container)`
        grid-column: 1 / 5;
        align-items: flex-start;
    `;

    const HeroRightContainer = styled(Container)`
        grid-column: 6 / 11;
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
        justify-content: flex-start;
    `

    const HeroText = styled(Text)`
        font-size: 1.25rem;
        line-height: 115%;
    `

    const HeroBottomContainer = styled(Container)`
        grid-column: 1 / 13;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 2rem;
    `

    const HeroHeader = styled(TextColorPunct)`
        color: #FF354D;
        font-family: 'PFGrandGothik', sans-serif;
        font-size: 8.75rem;
        font-variation-settings: 
            'wght' 900,
            'wdth' 150;
        text-transform: uppercase;
        line-height: 77.143%;
        letter-spacing: -7px;
        span {
            color: #FDF4E2;
        }
    `

  return (
    <>
        <HeroSection>
            <NavBar homeRef={homeRef} servicesRef={servicesRef} contactRef={contactRef} />
            <HeroLeftContainer >
                <HeroText>
                    We are a digital design and marketing studio based in Spokane, Washington.
                </HeroText>
            </HeroLeftContainer>
            <HeroRightContainer>
                <HeroText>
                    We build unique online experiences and engaging campaigns for non-profits and fun brands. We gravitate to the quirky and give it purpose.
                </HeroText>
                <HeroText>
                    For those looking to make a statement, we'd like to help you find your voice.
                </HeroText>
            </HeroRightContainer>
            <HeroBottomContainer>
                <HeroHeader>
                    We're changing everything<span>.</span>
                </HeroHeader>
            </HeroBottomContainer>
        </HeroSection>
    </>
  );
};

export default Home;