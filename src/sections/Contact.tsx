import React from 'react';
import styled from '@emotion/styled';
import Section from '../styled_components/Section';
import Container from '../styled_components/Container';
import TextColoredPunct from '../styled_components/TextColorPunct';
import ColoredPunct from '../styled_components/ColoredPunct';
import Text from '../styled_components/Text';
import ContactForm from '../components/ContactForm';

const ContactSection = styled(Section)`
  padding: 5rem 0;
`
const FormHeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 7;
  gap: 2rem;
`
const FormContainer = styled(Container)`
  background-color: #1F1F1F;
  grid-column: 7 / 13;
  border-radius: 2.5rem;
  padding: 2.5rem;
  gap: 2.5rem;
  flex-direction: column;
`
const LetsTalk = styled(TextColoredPunct)`
  color: #FDF4E2;
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
  color: #fff;
`

const Contact: React.FC = () => {

  return (
    <>
        <ContactSection>
          <FormHeaderContainer>
            <LetsTalk>
              Let's <br></br>talk<ColoredPunct>.</ColoredPunct>
            </LetsTalk>
            <FormSubHeader>The world changes one conversation at a time.</FormSubHeader>
          </FormHeaderContainer>
          <FormContainer>
            <ContactForm />
          </FormContainer>
        </ContactSection>
    </>
  );
};

export default Contact;