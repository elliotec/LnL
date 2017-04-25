import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import Hero from 'components/Hero/Hero';
import SeasonalAndBundles from 'components/SeasonalAndBundles/SeasonalAndBundles';
import Product from 'components/Product/Product';
import FeaturedProducts from 'components/FeaturedProducts/FeaturedProducts';
import JustArrived from 'components/JustArrived/JustArrived';

export default class Index extends React.Component {
  render () {
    console.log(this.state);
    return (
      !this.state.response ? <h1>Loading...</h1> :
        <div>
          <Helmet
            title={config.siteTitle}
            meta={[
              {"name": "description", "content": "Sample"},
              {"name": "keywords", "content": "sample, something"},
            ]}
          />
          <Hero />
          <SeasonalAndBundles />
          <FeaturedProducts
            response={this.state.response}
          />
          <JustArrived />
        </div>
    )
  }
}
