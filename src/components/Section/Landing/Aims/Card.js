import React from 'react';
import './Card.scss';

export const Card = ({ src, text }) => {
  return (
    <div className="text-center js-card">
      <img src={src} alt="card" className="img-fluid" />
      <p className="text-center text-white">{text}</p>
    </div>
  );
};
