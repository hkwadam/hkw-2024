import React from 'react';
import styled from '@emotion/styled';
import Section from '../styled_components/Section';
import Container from '../styled_components/Container';
import TextColoredPunct from '../styled_components/TextColorPunct';
import ColoredPunct from '../styled_components/ColoredPunct';
import Text from '../styled_components/Text';

const ContactSection = styled(Section)`
  padding: 2rem 0 0 0;
`
const FormContainer = styled(Container)`
  background-color: white;
  grid-column: 1 / 13;
  border-radius: 2.5rem 2.5rem 0 0;
  padding: 6.5rem 3.75rem;
  gap: 2rem;
  flex-direction: column;
`
const LetsTalk = styled(TextColoredPunct)`
  color: #171717;
  font-family: "pf-grand-gothik-variable", sans-serif;
  font-variation-settings: "ital" 0, "wdth" 150, "wght" 900;
  font-size: 6rem;
  line-height: 100%;
  letter-spacing: -0.3rem;
  text-transform: uppercase;
  ::before, ::after {
    content: '';
    display: block;
    height: 0;
  }
  ::before {
    margin-top: -0.075em;
  }
  ::after {
    margin-bottom: -0.25em;
  }
`

const FormSubHeader = styled(Text)`
  font-size: 1.625rem;
  color: #454545;
  margin-bottom: 0.5rem;
`

const FormBody = styled(Container)`
  background-color: #1F1F1F;
  border-radius: 1rem;
  padding: 2.5rem;
  width: 100%;
`

const Contact: React.FC = () => {

  return (
    <>
        <ContactSection>
          <FormContainer>
            <LetsTalk>
              Let's talk<ColoredPunct>.</ColoredPunct>
            </LetsTalk>
            <FormSubHeader>The world changes one conversation at a time.</FormSubHeader>
            <FormBody>Form</FormBody>
          </FormContainer>
        </ContactSection>
    </>
  );
};

export default Contact;