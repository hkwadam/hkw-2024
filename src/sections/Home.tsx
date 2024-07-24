import React from 'react';
import StyledSection from '../styled_components/StyledSection';
import StyledContainer from '../styled_components/StyledContainer';

const Home: React.FC = () => {

  return (
    <>
        <StyledSection columnStart={'1'} columnEnd={'13'} padding={'36px 0'} gap={'16px'}>
            <StyledContainer columnStart={'1'} columnEnd={'5'} padding={'0'} alignItems={'flex-start'}>
                <p>We are a digital design and marketing studio based in Spokane, Washington.</p>
            </StyledContainer>
            <StyledContainer columnStart={'6'} columnEnd={'11'} padding={'0'} flexDirection={'column'} gap={'24px'} alignItems={'flex-start'}>
                <p>We build unique online experiences and engaging campaigns for non-profits and fun brands. We gravitate to the quirky and give it purpose.</p> 
                <p>For those looking to make a statement, we'd like to help you find your voice.</p>
            </StyledContainer>
        </StyledSection>
    </>
  );
};

export default Home;