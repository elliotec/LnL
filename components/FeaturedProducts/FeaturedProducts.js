import React from 'react';
import Product from 'components/Product/Product';
import './FeaturedProducts.css';


export default class FeaturedProducts extends React.Component {
  render () {
    return (
      <section className="featured-products">
        <h2 className="featured-products-header">Featured Products</h2>
        <div className="featured-flex">
          {this.props.products.map(product =>
              <Product
                key={product.sys.id}
                id={product.sys.id}
                name={product.productName}
                productDescription={product.productDescription}
                quantity={product.quantity}
                sizetypecolor={product.sizetypecolor}
                price={product.price}
                imageUrl={product.imageUrl}
              />
          )}
        </div>
      </section>
    );
  }
}
