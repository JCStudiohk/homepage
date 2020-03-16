import React from 'react';
import { Section } from '../../../custom/Section';
import { Card } from './Card';
import { services } from '../../../../constants/card';
import Fade from 'react-reveal/Fade';

export const Services = () => {
  return (
    <Section title="Our Services">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <Fade ssrReveal down delay={index * 200} duration={1500}>
                <Card {...service} />
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
