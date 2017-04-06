import React from 'react';
import Product from 'components/Product/Product';
import '../FeaturedProducts/FeaturedProducts.css';
// using same styles as FeaturedProducts


export default class JustArrived extends React.Component {
  render () {
    return (
      <section className="just-arrived">
        <h2 className="just-arrived-header">Just Arrived</h2>
        <div className="arrived-flex">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    );
  }
}
