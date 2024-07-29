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
  @media (max-width: 600px) {
    padding: 48px 0;
  }
`
const FormHeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 7;
  gap: 2rem;
  @media (max-width: 600px) {
    grid-column: 1 / 13;
    gap: 24px;
    margin-bottom: 24px;
  }
`
const FormContainer = styled(Container)`
  background-color: #1F1F1F;
  grid-column: 7 / 13;
  border-radius: 2.5rem;
  padding: 2.5rem;
  gap: 2.5rem;
  flex-direction: column;
  @media (max-width: 600px) {
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
  @media (max-width: 600px) {
    font-size: 32px;
    letter-spacing: -1.6px;
    .hide-on-mobile {
    display: none;
    }
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