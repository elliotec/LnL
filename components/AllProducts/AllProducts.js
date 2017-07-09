import React from 'react';
import Product from 'components/Product/Product';
import '../FeaturedProducts/FeaturedProducts.css';


export default class SeasonalProducts extends React.Component {
  render () {
    return (
      <section className="all-products">
        <h2 className="all-products-header">All Products</h2>
        <div className="all-flex">
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
