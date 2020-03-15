import React from 'react';
import './Card.scss';

export const Card = ({ src, title, text }) => {
  return (
    <div className="service-card text-center bg-gradient-secondary mb-4">
      <div className="img-container">
        <img src={src} alt="service" />
      </div>
      <h3 className="text-white text-left mt-4">{title}</h3>
      <p className="text-white text-left mt-4">{text}</p>
    </div>
  );
};
