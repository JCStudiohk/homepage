import React from 'react';
import './index.scss';

export const Title = ({ children, center, left, right }) => {
  return (
    <h1
      className={`js-title text-white ${center ? 'text-center' : ''} ${
        left ? 'text-left' : ''
      } ${right ? 'text-right' : ''}`}
    >
      {children}
    </h1>
  );
};
