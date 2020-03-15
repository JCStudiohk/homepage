/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { NavbarComponent } from './navigation/Navbar';

import '../assets/scss/main.scss';

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        JC Studio
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
