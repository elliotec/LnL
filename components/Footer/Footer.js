import React from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import './Footer.css';
import { Link } from 'react-router';
import inthegullyLogo from 'images/inthegullylogoblack.png';

export default class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <div className="footer-nav">
          <div className="fb-container">
            <a href="https://www.facebook.com/groups/1830648883849106/" target="_blank">
              <FaFacebookSquare className='fb-button footer-fb' />
            </a>
          </div>
          <div className="footer-flex">
            <Link className="footer-link" to='/products/'>Products</Link>
            <Link className="footer-link" to='/about/'>About</Link>
            <Link className="footer-link" to='/howtouse/'>How to Use</Link>
          </div>
          <div className="gully-flex">
            <p className="website-by">website by</p>
            <img src={inthegullyLogo} className="gully-logo" alt="inthegully logo"/>
          </div>
        </div>
      </div>
    )
  }
}
