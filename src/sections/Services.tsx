import React from 'react';
import styled from '@emotion/styled';
import Section from '../styled_components/Section';
import Container from '../styled_components/Container';
import Text from '../styled_components/Text';

const services = [
  'Strategy', 'Branding', 'Writing', 'Design', 'Web', 'Apps', 
  'Products', 'Print', 'Campaigns', 'Marketing', 'SEO', 'Analytics'
];

const ServicesSection = styled(Section)`
  padding: 5rem 0;
`

const ServicesLeft = styled(Container)`
  grid-column: 1 / 7;
  justify-content: flex-start;
`

const ServicesRight = styled(Container)`
  grid-column: 7 / 13;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.75rem;
`

const ServicesHeader = styled(Text)`
  color: #FDF4E2;
  font-family: "pf-grand-gothik-variable", sans-serif;
  font-variation-settings: "ital" 0, "wdth" 150, "wght" 900;    
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
`

const ServiceText = styled(Text)`
  color: rgba(255, 255, 255, 0.20);
  font-size: 4rem;
  font-family: "neue-haas-grotesk-text", sans-serif;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -3.2px;
  ::before, ::after {
    content: '';
    display: block;
    height: 0;
  }
  ::before {
    margin-top: -0.25em;
  }
  ::after {
    margin-bottom: -0.25em;
  }
  :hover {
    color: #fff;
    transform: translateX(1.5rem);
  }
  transition: color 0.4s ease, transform 0.4s ease;
`

const Services: React.FC = () => {

  return (
    <>
        <ServicesSection>
          <ServicesLeft>
            <ServicesHeader>services</ServicesHeader>
          </ServicesLeft>
          <ServicesRight>
            {services.map((service, index) => (
              <ServiceText key={index}>{service}</ServiceText>
            ))}
          </ServicesRight>
        </ServicesSection>
    </>
  );
};

export default Services;