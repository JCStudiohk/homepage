import React from 'react';
import { Section } from '../../../custom/Section';
import { Card } from './Card';
import { services } from '../../../../constants/card';

export const Services = () => {
  return (
    <Section title="Our Services">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <Card {...service} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
