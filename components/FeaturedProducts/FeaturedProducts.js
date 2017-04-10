import React from 'react';
import Product from 'components/Product/Product';
import './FeaturedProducts.css';


export default class FeaturedProducts extends React.Component {
  render () {
    return (
      <section className="featured-products">
        <h2 className="featured-products-header">Featured Products</h2>
        <div className="featured-flex">
          {this.props.response.items.map(product =>
              <Product
                key={product.sys.id}
                name={product.fields.productName}
              />
          )}
        </div>
      </section>
    );
  }
}
