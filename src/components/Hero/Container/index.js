import React from 'react';
import './index.scss';

export const Container = ({ children, srcName }) => {
  return <div className={`js-hero bg-${srcName}`}>{children}</div>;
};
