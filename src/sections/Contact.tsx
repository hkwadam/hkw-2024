import React from 'react';
import styled from '@emotion/styled';
import Section from '../styled_components/Section';

const Contact: React.FC = () => {
  
  const ContactSection = styled(Section)`
    padding: 2rem 0;
  `;

  return (
    <>
        <ContactSection>
            <p>contact</p>
        </ContactSection>
    </>
  );
};

export default Contact;