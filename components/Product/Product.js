import React from 'react';
import './Product.css';

export default class Product extends React.Component {
  render () {
    return (
      <div className="product-container">
        <a
            className="snipcart-add-item"
            data-item-id={this.props.id}
            data-item-url={this.props.url}
            data-item-name={this.props.name}
            data-item-price={this.props.price}
            data-item-description={this.props.productDescription}>
          <div className="product-image">
            <img height="150" src={this.props.imageUrl} alt="product image"/>
          </div>
          <h3 className="product-name">{this.props.name}</h3>
          <p className="product-type">{this.props.sizetypecolor}</p>
          <p className="product-price">${this.props.price}</p>
        </a>
      </div>
    );
  }
}
