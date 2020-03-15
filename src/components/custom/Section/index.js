import React from 'react';
import './index.scss';

export const Section = ({ children, title }) => {
  return (
    <section className="js-section">
      <div className="container">
        <h2 className="section-title text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
};
