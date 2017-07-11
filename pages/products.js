import React from 'react';
import Product from 'components/Product/Product';
import SeasonalProducts from 'components/SeasonalProducts/SeasonalProducts';
import BundleProducts from 'components/BundleProducts/BundleProducts';
import AllProducts from 'components/AllProducts/AllProducts';
import { connect } from 'react-redux';
import { fetchContentful } from 'pages/_template.jsx';

export class Products extends React.Component {
  constructor(props) {
   super(props);
  }
   componentDidMount() {
       this.props.dispatch(fetchContentful());
   }
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
export default connect(mapStateToProps)(Products)
