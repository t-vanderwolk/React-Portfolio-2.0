import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function MainNavbar (props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="me">
        <NavbarBrand href="/" >
          <h1 className='name'>Taylor B. VanderWolk</h1>
         
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/About">About Me</NavLink>
              
            </NavItem>
            
            
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Skills
              </NavLink>
              </NavItem>
              <NavItem>
            
           
              <NavLink href="/components/">My Projects</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/components/">Group Projects</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/components/">Contact Me</NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavbar;