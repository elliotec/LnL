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
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import {onShowProductsPage} from 'pages/_template.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar className="header-menu">
         <Navbar.Header>
           <Navbar.Brand>
             <a className="logo" href="/">
               Lipstick n' Lace
             </a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav>
             <LinkContainer to='/products/'>
               <NavItem className="nav-link">Products</NavItem>
             </LinkContainer>
             <LinkContainer to='/about/'>
               <NavItem className="nav-link">About</NavItem>
             </LinkContainer>
             <LinkContainer to='/howtouse/'>
               <NavItem className="nav-link">How to Use</NavItem>
             </LinkContainer>
           </Nav>
           <Nav pullRight>
              <LinkContainer to="#" className="snipcart-checkout">
                 <NavItem className="nav-link">
                    <FaShoppingCart className='cart-button' />
                 </NavItem>
              </LinkContainer>
           </Nav>
           <a href="https://www.facebook.com/groups/1830648883849106/" target="_blank">
              <FaFacebookSquare className='fb-button' />
           </a>
         </Navbar.Collapse>
      </Navbar>
    );
  }
}
