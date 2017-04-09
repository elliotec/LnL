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
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';


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
             <NavItem eventKey={3} href="https://facebook.com">How to Use</NavItem>
           </Nav>
           <Nav pullRight>
             <NavItem eventKey={1} href="#">
               <FaShoppingCart className='cart-button' />
             </NavItem>
             <NavItem eventKey={2} href="https://www.facebook.com/groups/1830648883849106/" target="_blank">
               <FaFacebookSquare className='fb-button' />
             </NavItem>
           </Nav>
         </Navbar.Collapse>
      </Navbar>
    );
  }
}
