import React from 'react';
import './Product.css';

export default class Product extends React.Component {
  render () {
    return (
      <div className="product-container">
        <div className="product-pic">
        </div>
        <h3>Color Name</h3>
        <p>Texture: Matte</p>
      </div>
    );
  }
}
