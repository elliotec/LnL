import React from 'react';
import Product from 'components/Product/Product';
import '../FeaturedProducts/FeaturedProducts.css';


export default class JustArrived extends React.Component {
  render () {
    return (
      <section className="just-arrived">
        <h2 className="just-arrived-header">Just Arrived</h2>
        <div className="arrived-flex">
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
