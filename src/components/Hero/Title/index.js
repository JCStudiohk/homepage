import React from 'react';
import './index.scss';

export const Title = ({ children, center }) => {
  return (
    <h1 className={`js-title text-white ${center ? 'text-center' : ''}`}>
      {children}
    </h1>
  );
};
