import React from 'react';
import ApplicationInstructions from 'components/ApplicationInstructions/ApplicationInstructions';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { connect } from 'react-redux';
import Products from 'components/ProductsPage/Products';

export class Howtouse extends React.Component {
  render () {
    return (
      <div>
        <Header
          dispatch ={this.props.dispatch}
        />
        { this.props.shouldShowProductsPage ?
          <Products
            allProducts={this.props.allProducts}
            seasonal={this.props.seasonal}
            bundle={this.props.bundle}
          /> :
          <div>
            <ApplicationInstructions />
          </div>
        }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    featured: state.featured,
    justArrived: state.justArrived,
    seasonal: state.seasonal,
    bundle: state.bundle,
    shouldShowProductsPage: state.shouldShowProductsPage
  }
}
export default connect(mapStateToProps)(Howtouse)
