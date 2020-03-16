import React from 'react';
import { BgContainer, Title, Subtitle } from '../../Hero';
import { Animation } from '../../Hero/Animation';

export const LandingHero = () => {
  return (
    <BgContainer srcName="landing">
      <div className="container text-center hero-content">
        <div className="animated fadeIn delay-500ms slower ">
          <Title center>We Build Your Dreams</Title>
          <Subtitle center>With the up-to-date technologies</Subtitle>
        </div>

        <Animation />
      </div>
    </BgContainer>
  );
};
