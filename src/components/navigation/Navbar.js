import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
  Container,
} from 'reactstrap';
import Link from 'gatsby-link';
import './Navbar.scss';
import src from '../../assets/images/logo@4x.png';

export const NavbarComponent = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggle = () => setIsNavbarOpen(!isNavbarOpen);

  return (
    <header>
      <Navbar color="secondary" dark expand="md" className="py-2">
        <Container>
          <div class="navbar-brand">
          <Link to="/">
            <img src={src} alt="" className="mr-4 img-fluid" />
            <NavbarText className="orbitron text-primary">JC STUDIO</NavbarText>
          </Link>
          </div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isNavbarOpen} navbar>
            <Nav className="ml-auto nav-list" navbar>
              <NavItem>
                <Link to="/" className="text-white nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/development" className="text-white nav-link">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/development" className="text-white nav-link">
                  Pricing
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/development" className="text-white nav-link">
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <button className="btn bg-gradient-primary text-white round-circle">
                  Try it Now
                </button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
