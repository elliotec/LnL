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
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';

class Index extends React.Component {
 constructor(props) {
  super(props);
 }
  componentDidMount() {
    this.props.dispatch(fetchContentful())
  }
  render () {
    return (
      !this.props.contentful ? <h1>Loading...</h1> :
        <div>
          <Helmet
            title={config.siteTitle}
            meta={[
              {"name": "description", "content": "Lipstick n' Lace etc."},
              {"name": "keywords", "content": "lipstick, beauty, lipsense"},
            ]}
          />
          <Header />
          <Hero />
          <SeasonalAndBundles />
          <FeaturedProducts
            response={this.props.contentful}
          />
          <JustArrived />
          <Footer />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contentful: state.contentful
  }
}
// Connected Component
export default connect(mapStateToProps)(Index)
