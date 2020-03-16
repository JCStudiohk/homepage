import React from 'react';
import { BgContainer, Title, Subtitle } from '../../Hero';
import { Animation } from '../../Hero/Animation';

export const Building = () => {
  return (
    <BgContainer srcName="building">
      <div className="container text-center hero-content">
        <div className="animated fadeIn delay-500ms slower text-center">
          <Title center>Website development in progress</Title>
          <Subtitle center>
            Please follow our{' '}
            <a
              href="https://www.instagram.com/jcstudio_hk/?hl=zh-hk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{' '}
            and{' '}
            <a
              href="https://www.facebook.com/JCStudioHK/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{' '}
            for latest news
          </Subtitle>
        </div>

        <Animation />
      </div>
    </BgContainer>
  );
};
