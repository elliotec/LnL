import React from 'react';
import Product from 'components/Product/Product';
import './SeasonalProducts.css';


export default class SeasonalProducts extends React.Component {
  render () {
    return (
      <section className="seasonal-products">
        <h2 className="seasonal-products-header">Seasonal Products</h2>
        <div className="seasonal-flex">
          {this.props.response.items.map(product =>
              <Product
                key={product.sys.id}
                id={product.sys.id}
                name={product.fields.productName}
                productDescription={product.fields.productDescription}
                quantity={product.fields.quantity}
                sizetypecolor={product.fields.sizetypecolor}
                imageId={product.fields.image[0].sys.id}
                price={product.fields.price}
              />
          )}
        </div>
      </section>
    );
  }
}
