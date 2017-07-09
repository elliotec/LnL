import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { connect } from 'react-redux';
import { fetchContentful } from 'pages/_template.jsx';
import Hero from 'components/Hero/Hero';
import SeasonalAndBundles from 'components/SeasonalAndBundles/SeasonalAndBundles';
import Product from 'components/Product/Product';
import FeaturedProducts from 'components/FeaturedProducts/FeaturedProducts';
import JustArrived from 'components/JustArrived/JustArrived';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SeasonalProducts from 'components/SeasonalProducts/SeasonalProducts';
import BundleProducts from 'components/BundleProducts/BundleProducts';
import Products from 'components/ProductsPage/Products';
import {onShowProductsPage} from 'pages/_template.jsx';

class Index extends React.Component {
 constructor(props) {
  super(props);
 }
  componentDidMount() {
    if (!this.props.allProducts) {
       this.props.dispatch(fetchContentful());
    }
  }
  render () {
    return (
        <div>
          <Helmet
            title={config.siteTitle}
            meta={[
              {"name": "description", "content": "Lipstick n' Lace etc."},
              {"name": "keywords", "content": "lipstick, beauty, lipsense"},
            ]}
          />
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
                <Hero />
                <SeasonalAndBundles
                  dispatch ={this.props.dispatch}
                />
                { !this.props.allProducts ? <h1>Loading...</h1> :
                  <div>
                    <FeaturedProducts
                      products={this.props.featured}
                    />
                    <JustArrived
                      products={this.props.justArrived}
                    />
                  </div>
                }
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
// Connected Component
export default connect(mapStateToProps)(Index)
