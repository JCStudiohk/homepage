import React from 'react';
import { BgContainer, Title, Subtitle } from '../../Hero';
import { Animation } from '../../Hero/Animation';

export const LandingHero = () => {
  return (
    <BgContainer srcName="landing">
      <div className="container text-center">
        <Title center>We Build Your Dreams</Title>
        <Subtitle center>With the up-to-date technologies</Subtitle>

        <Animation />
      </div>
    </BgContainer>
  );
};
