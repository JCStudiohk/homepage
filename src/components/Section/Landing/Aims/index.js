import React from 'react';
import { Card } from './Card';
import { aims } from '../../../../constants/card';

import { Section } from '../../../custom/Section';
import Fade from 'react-reveal/Fade';

export const Aims = () => {
  return (
    <Section title="Design. Innovate. Create.">
      <div className="container mt-4">
        <div className="row">
          {aims.map((card, index) => (
            <div className={`col-md-4`} key={index}>
              <Fade ssrReveal right delay={index * 200} duration={1500}>
                <Card {...card} />
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
