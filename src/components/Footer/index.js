import React from 'react';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './index.scss';

export const Footer = () => {
  return (
    <>
      <footer className="bg-secondary">
        <div className="container">
          <h3 className="text-white">Contact Us</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="item d-flex">
                <FontAwesomeIcon icon={faGlobe} color={'#af143a'} size="lg" />
                <Link to="https://jcstudio.hk" className="text-white ml-4">
                  https://jcstudio.hk
                </Link>
              </div>
              <div className="item d-flex">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={'#af143a'}
                  size="lg"
                />
                <a
                  href="mailto:info@jcstudio.hk"
                  className="text-white ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@jcstudio.hk
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item d-flex">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  color={'#af143a'}
                  size="lg"
                />
                <a
                  href="tel:85262583690"
                  className="text-white ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +852 6258 3690
                </a>
              </div>
              <div className="item d-flex">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  color={'#af143a'}
                  size="lg"
                />
                <a
                  href="https://www.facebook.com/JCStudioHK/"
                  className="text-white ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @JCStudioHK
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item d-flex">
                <FontAwesomeIcon
                  icon={faInstagram}
                  color={'#af143a'}
                  size="lg"
                />
                <a
                  href="https://www.instagram.com/jcstudio_hk/?hl=zh-hk"
                  className="text-white ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jcstudio_hk
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-dark copyright-text">
        <div className="container text-center">
          <span className="text-white mr-3">@{new Date().getFullYear()}</span>
          <span className="text-white  mr-3">JC Studio.</span>
          <span className="text-white">All rights reserved.</span>
        </div>
      </div>
    </>
  );
};
