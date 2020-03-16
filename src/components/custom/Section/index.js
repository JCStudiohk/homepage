import React from 'react';
import './index.scss';
import Fade from 'react-reveal/Fade';

export const Section = ({ children, title }) => {
  return (
    <section className="js-section">
      <div className="container">
        <Fade ssrReveal duration={1000}>
          <h2 className="section-title text-white">{title}</h2>
        </Fade>
      </div>
      {children}
    </section>
  );
};
