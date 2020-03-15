import React from 'react';
import { Card } from './Card';
import { aims } from '../../../../constants/card';

import { Section } from '../../../custom/Section';

export const Aims = () => {
  return (
    <Section title="Design. Innovate. Create.">
      <div className="container mt-4">
        <div className="row">
          {aims.map((card, index) => (
            <div className="col-md-4" key={index}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
