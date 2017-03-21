import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar className="header-menu" collapseOnSelect>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="#">Lipstick n' Lace etc.</a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav>
             <NavItem eventKey={1} href="#">Products</NavItem>
             <NavDropdown eventKey={3} title="About" id="basic-nav-dropdown">
               <MenuItem eventKey={3.1}>About</MenuItem>
               <MenuItem eventKey={3.2}>How to Use</MenuItem>
             </NavDropdown>
           </Nav>
           <Nav pullRight>
             <NavItem eventKey={1} href="#">Cart</NavItem>
           </Nav>
         </Navbar.Collapse>
      </Navbar>
    );
  }
}
