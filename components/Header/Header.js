import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import './Header.css';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';


export default class Header extends React.Component {
  render() {
    return (
      <Navbar className="header-menu" collapseOnSelect>
         <Navbar.Header>
           <Navbar.Brand>
             <a className="logo" href="#">
               Lipstick n' Lace
             </a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav>
             <NavItem eventKey={1} href="#">Products</NavItem>
             <NavItem eventKey={2} href="#">About</NavItem>
             <NavItem eventKey={3} href="#">How to Use</NavItem>
           </Nav>
           <Nav pullRight>
             <NavItem eventKey={1} href="#">
               <FaShoppingCart className='cart-button' />
             </NavItem>
           </Nav>
         </Navbar.Collapse>
      </Navbar>
    );
  }
}
