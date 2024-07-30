import React from 'react';
import styled from '@emotion/styled';
import Section from '../styled_components/Section';
import Container from '../styled_components/Container';
import TextColoredPunct from '../styled_components/TextColorPunct';
import ColoredPunct from '../styled_components/ColoredPunct';
import Text from '../styled_components/Text';
import ContactForm from '../components/ContactForm';

const ContactSection = styled(Section)`
  padding: 5rem 0 3rem 0;
  @media (max-width: 600px) {
    padding: 48px 0;
  }
`
const FormHeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 6;
  gap: 2rem;
  @media (max-width: 1080px) {
    grid-column: 1 / 13;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
`
const FormContainer = styled(Container)`
  background-color: #1F1F1F;
  grid-column: 6 / 13;
  border-radius: 2.5rem;
  padding: 2.5rem;
  gap: 2.5rem;
  flex-direction: column;
  @media (max-width: 1080px) {
    grid-column: 1 / 13;
    padding: 40px 20px;
  }
`
const LetsTalk = styled(TextColoredPunct)`
  color: #FDF4E2;
  font-family: "pf-grand-gothik-variable", sans-serif;
  font-variation-settings: "ital" 0, "wdth" 150, "wght" 900;
  font-size: 6rem;
  line-height: 100%;
  letter-spacing: -0.3rem;
  text-transform: uppercase;
  @media (max-width: 1080px) {
    font-size: 4.375rem;
    letter-spacing: -0.22rem;
    .hide-on-mobile {
      display: none;
    }
  }
  @media (max-width: 600px) {
    font-size: 32px;
    letter-spacing: -1.6px;
  }
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
  @media (max-width: 600px) {
    font-size: 16px;
    font-weight: 500;
  }
`

const Contact: React.FC = () => {

  return (
    <>
        <ContactSection>
          <FormHeaderContainer>
            <LetsTalk>
              Let's <br className="hide-on-mobile"></br>talk<ColoredPunct>.</ColoredPunct>
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