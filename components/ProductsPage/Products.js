import React from 'react';
import { config } from 'config';
import { connect } from 'react-redux';
import { fetchContentful } from 'pages/_template.jsx';
import Product from 'components/Product/Product';
import SeasonalProducts from 'components/SeasonalProducts/SeasonalProducts';
import BundleProducts from 'components/BundleProducts/BundleProducts';
import AllProducts from 'components/AllProducts/AllProducts';

export default class Products extends React.Component {
    render () {
      return (
          <div>
            { !this.props.allProducts ? <h1>Loading...</h1> :
              <div>
                <SeasonalProducts
                  products={this.props.seasonal}
                />
                <BundleProducts
                  products={this.props.bundle}
                />
                <AllProducts
                  products={this.props.allProducts}
                />
              </div>
            }
          </div>
      )
    }
}
