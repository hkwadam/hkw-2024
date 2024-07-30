import React, { useEffect, useRef } from 'react';
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
  @media (max-width: 1080px) {
    padding: 48px 0;
  }
`
const ServicesLeft = styled(Container)`
  grid-column: 1 / 6;
  justify-content: flex-start;
  position: relative;
  @media (max-width: 1080px) {
    margin-bottom: 40px;
  }
  @media (max-width: 600px) {
    grid-column: 1 / 13;
    margin-bottom: 24px;
  }
`

const ServicesRight = styled(Container)`
  grid-column: 6 / 13;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.75rem;
  @media (max-width: 1080px) {
    grid-column: 1 / 13;
    gap: 30px;
  }
  @media (max-width: 600px) {
    gap: 16px;
  }
`

const ServicesHeader = styled(Text)`
  color: #FDF4E2;
  font-family: "pf-grand-gothik-variable", sans-serif;
  font-variation-settings: "ital" 0, "wdth" 150, "wght" 900;    
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
  @media (max-width: 1080px) {
    font-size: 40px;
    letter-spacing: -2px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
    letter-spacing: -1px;
  }
  @media (min-width: 1081px) {
    position: sticky;
    top: 6rem;
  }
`

const ServiceText = styled(Text)`
  color: rgba(255, 255, 255, 0.20);
  font-size: 6.4rem;
  font-family: "neue-haas-grotesk-text", sans-serif;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -3.2px;
  line-height: unset;
  @media (max-width: 1080px) {
    font-size: 46px;
    gap: 30px;
  }
  @media (max-width: 600px) {
    font-size: 64px;
    letter-spacing: -1.6px;
    gap: 16px;
  }
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
  transition: color 0.4s ease, transform 0.4s ease;
  &.active {
    color: white;
  }
`

const Services: React.FC = () => {
  const headerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (!header) return;

      const headerRect = header.getBoundingClientRect();
      const serviceElements = document.querySelectorAll('.service-text');
      
      let closest = null;
      let closestDistance = Infinity;

      serviceElements.forEach(el => {
        const elRect = el.getBoundingClientRect();
        const distance = Math.abs(headerRect.top - elRect.top);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = el;
        }
      });

      serviceElements.forEach(el => el.classList.remove('active'));
      if (closest) {
        closest.classList.add('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ServicesSection>
      <ServicesLeft>
        <ServicesHeader ref={headerRef}>services</ServicesHeader>
      </ServicesLeft>
      <ServicesRight className="services-right">
        {services.map((service, index) => (
          <ServiceText key={index} className="service-text">{service}</ServiceText>
        ))}
      </ServicesRight>
    </ServicesSection>
  );
};

export default Services;
