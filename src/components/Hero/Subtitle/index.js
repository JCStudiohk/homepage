import React from 'react';
import './index.scss';

export const Subtitle = ({ children, center }) => {
  return (
    <p className={`js-subtitle text-caption ${center ? 'text-center' : ''}`}>
      {children}
    </p>
  );
};
