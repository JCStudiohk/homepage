/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { NavbarComponent } from './navigation/Navbar';
import { Footer } from './Footer';

import '../assets/scss/main.scss';
import 'animate.css/animate.min.css';

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
