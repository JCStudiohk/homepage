import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
} from 'reactstrap';
import './Navbar.scss';
import src from '../../assets/images/logo@4x.png';

export const NavbarComponent = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggle = () => setIsNavbarOpen(!isNavbarOpen);

  return (
    <header>
      <Navbar color="secondary" dark expand="md" className="py-2">
        <Container>
          <NavbarBrand href="/">
            <img src={src} alt="" className="mr-4 img-fluid" />
            <NavbarText className="orbitron text-primary">JC STUDIO</NavbarText>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isNavbarOpen} navbar>
            <Nav className="ml-auto nav-list" navbar>
              <NavItem>
                <NavLink href="/components/" className="text-white">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/reactstrap/reactstrap"
                  className="text-white"
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="text-white">
                  Pricing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/reactstrap/reactstrap"
                  className="text-white"
                >
                  Contact
                </NavLink>
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
