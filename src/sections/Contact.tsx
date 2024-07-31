import React, { useEffect, useRef, useState } from 'react';
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
`;

const FormHeaderContainer = styled(Container)`
  grid-column: 1 / 6;
  @media (max-width: 1080px) {
    grid-column: 1 / 13;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
  opacity: 0;
`;

const FormTitleTexts = styled(Container)`
  height: fit-content;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1080px) {
    position: sticky;
    top: 6rem;
  }
`;

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
  opacity: 0;
`;

const LetsTalk = styled(TextColoredPunct)`
  color: #FDF4E2;
  font-family: "pf-grand-gothik-variable", sans-serif;
  font-variation-settings: "ital" 0, "wdth" 150, "wght" 900;
  line-height: 100%;
  letter-spacing: -0.2px;
  text-transform: uppercase;
  font-size: 3.2rem;
  @media (max-width: 1080px) {
    font-size: 64px;
    letter-spacing: -0.22rem;
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
`;

const FormSubHeader = styled(Text)`
  font-size: 1.625rem;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 16px;
    font-weight: 500;
  }
  @media (max-width: 1080px) {
    .mobile-only {
      display: none;
    }
  }
`;

const Contact: React.FC = () => {
  const formHeaderRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [hasAnimatedHeader, setHasAnimatedHeader] = useState(false);
  const [hasAnimatedForm, setHasAnimatedForm] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === formHeaderRef.current && !hasAnimatedHeader) {
            entry.target.classList.add('slide-in');
            setHasAnimatedHeader(true);
          } else if (entry.target === formContainerRef.current && !hasAnimatedForm) {
              entry.target.classList.add('slide-in-delay');
              setHasAnimatedForm(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0,
    });

    if (formHeaderRef.current) {
      observer.observe(formHeaderRef.current);
    }

    if (formContainerRef.current) {
      observer.observe(formContainerRef.current);
    }

    return () => {
      if (formHeaderRef.current) {
        observer.unobserve(formHeaderRef.current);
      }
      if (formContainerRef.current) {
        observer.unobserve(formContainerRef.current);
      }
    };
  }, [hasAnimatedHeader, hasAnimatedForm]);

  return (
    <>
      <ContactSection>
        <FormHeaderContainer ref={formHeaderRef}>
          <FormTitleTexts>
            <LetsTalk>
              Let's talk<ColoredPunct>.</ColoredPunct>
            </LetsTalk>
            <FormSubHeader>The world changes one conversation<br className="mobile-only"></br>at a time.</FormSubHeader>
          </FormTitleTexts>
        </FormHeaderContainer>
        <FormContainer ref={formContainerRef}>
          <ContactForm />
        </FormContainer>
      </ContactSection>
    </>
  );
};

export default Contact;
