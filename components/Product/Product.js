import React from 'react';
import './Product.css';

export default class Product extends React.Component {
  render () {
    return (
      <div className="product-container">
        <a
            className="snipcart-add-item"
            data-item-id="1"
            data-item-name="Bacon"
            data-item-price="3.00"
            data-item-weight="20"
            data-item-url="http://myapp.com/products/bacon"
            data-item-description="Some fresh bacon">
          <div className="product-image">
          </div>
          <h3 className="product-name">{this.props.name}</h3>
          <p className="product-type">Texture: Matte</p>
          <p className="product-price">$24.00</p>
        </a>
      </div>
    );
  }
}
