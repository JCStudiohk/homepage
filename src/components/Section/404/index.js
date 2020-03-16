import React from 'react';
import { BgContainer, Title } from '../../Hero';

export const NotFound = () => {
  return (
    <BgContainer srcName="not-found">
      <div className="container text-center hero-content">
        <div className="animated fadeIn delay-500ms slower text-center">
          <Title center>
            Oops... <br />
            Page
            <br /> Not Found
          </Title>
        </div>
      </div>
    </BgContainer>
  );
};
