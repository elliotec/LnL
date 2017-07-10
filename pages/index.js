import React from 'react';
import { connect } from 'react-redux';
import { fetchContentful } from 'pages/_template.jsx';
import Helmet from 'react-helmet';
import { config } from 'config';
import Products from 'pages/products';
import '../components/FeaturedProducts/FeaturedProducts.css';
import Hero from 'components/Hero/Hero';
import SeasonalAndBundles from 'components/SeasonalAndBundles/SeasonalAndBundles';
import Product from 'components/Product/Product';
import FeaturedProducts from 'components/FeaturedProducts/FeaturedProducts';
import JustArrived from 'components/JustArrived/JustArrived';
import SeasonalProducts from 'components/SeasonalProducts/SeasonalProducts';
import BundleProducts from 'components/BundleProducts/BundleProducts';

export class Index extends React.Component {
  constructor(props) {
   super(props);
  }
   componentDidMount() {
       this.props.dispatch(fetchContentful());
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
        <div>
          <Hero />
          <SeasonalAndBundles/>
          { !this.props.featured ? <h1>Loading...</h1> :
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
        <div className="hide-products">
            <Products />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    featured: state.featured,
    justArrived: state.justArrived,
    seasonal: state.seasonal,
    bundle: state.bundle
  }
}
// Connected Component
export default connect(mapStateToProps)(Index)
