import React from 'react';
import Link from 'gatsby-link';
import { BgContainer, Title, Subtitle } from '../../Hero';

export const Building = () => {
  return (
    <BgContainer srcName="building">
      <div className="container text-center hero-content">
        <div className="animated fadeIn delay-500ms slower text-center">
          <Title center>Website development in progress</Title>
          <Subtitle center>
            Please follow our{' '}
            <Link
              to="https://www.instagram.com/jcstudio_hk/?hl=zh-hk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>{' '}
            and{' '}
            <Link
              to="https://www.facebook.com/JCStudioHK/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>{' '}
            for latest news
          </Subtitle>
        </div>
      </div>
    </BgContainer>
  );
};
