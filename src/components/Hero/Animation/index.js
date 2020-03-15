import React, { useEffect, useState } from 'react';
import { init } from './function';

export const Animation = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
    };
  }, []);
  useEffect(() => {
    init();
  }, [width]);

  return (
    <div id="large-header" style={{ position: 'absolute' }}>
      <canvas id="canvas" style={{ zIndex: 1000 }}></canvas>
    </div>
  );
};
