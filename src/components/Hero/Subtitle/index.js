import React from 'react';
import './index.scss';

export const Subtitle = ({ children, center, left, right }) => {
  return (
    <p
      className={`js-subtitle text-caption ${center ? 'text-center' : ''} ${
        left ? 'text-left' : ''
      } ${right ? 'text-right' : ''}`}
    >
      {children}
    </p>
  );
};
