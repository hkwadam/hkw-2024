import React from 'react';
import StyledSection from '../styled_components/StyledSection';
import StyledContainer from '../styled_components/StyledContainer';
import StyledText from '../styled_components/StyledText';
import StyledTextColoredPunct from '../styled_components/StyledTextColorPunct';

const Home: React.FC = () => {

  return (
    <>
        <StyledSection columnStart={'1'} columnEnd={'13'} padding={'36px 0'} gap={'16px'}>
            <StyledContainer columnStart={'1'} columnEnd={'5'} padding={'0'} alignItems={'flex-start'}>
                <StyledText fontSize={'1.25rem'} lineHeight={'115%'}>
                    We are a digital design and marketing studio based in Spokane, Washington.
                </StyledText>
            </StyledContainer>
            <StyledContainer columnStart={'6'} columnEnd={'11'} padding={'0'} flexDirection={'column'} gap={'24px'} alignItems={'flex-start'}>
                <StyledText fontSize={'1.25rem'} lineHeight={'115%'}>
                    We build unique online experiences and engaging campaigns for non-profits and fun brands. We gravitate to the quirky and give it purpose.
                </StyledText>
                <StyledText fontSize={'1.25rem'} lineHeight={'115%'}>
                    For those looking to make a statement, we'd like to help you find your voice.
                </StyledText>
            </StyledContainer>
            <StyledContainer columnStart={'1'} columnEnd={'13'} padding={'0'} alignItems={'center'} justifyContent={'flex-start'}>
                <StyledTextColoredPunct fontSize={'8.75rem'} fontWeight={'900'} textTransform={'uppercase'} lineHeight={'77.143%'} textColor={'#FF354D'} punctColor={'#FDF4E2'}>
                    We're changing everything<span>.</span>
                </StyledTextColoredPunct>
            </StyledContainer>
        </StyledSection>
    </>
  );
};

export default Home;