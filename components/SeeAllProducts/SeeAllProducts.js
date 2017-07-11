import React from 'react';
import './SeeAllProducts.css';
import { Link } from 'react-router';

export default class SeeAllProducts extends React.Component {
  render () {
    return (
      <div className="see-products-flex">
        <Link className="see-products-link" to='/products/'>
          <div className="see-products bundle">
            <h2 className="see-header">See All Products</h2>
          </div>
        </Link>
      </div>
    );
  }
}
