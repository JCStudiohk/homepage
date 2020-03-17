import React, { useEffect, useState } from 'react';
import { init } from './function';

export const Animation = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const update = () => setWidth(window.innerWidth);
      update();
      window.addEventListener('resize', update);
      return () => {
        window.removeEventListener('resize', update);
      };
    }
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
