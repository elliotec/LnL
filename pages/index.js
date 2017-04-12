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
const CONTENTFUL_ACCESS_TOKEN = 'f64d0cedb314e6d19f7cc0fdc8757de534bbcea00eaa825ede3e8072f631cb41';

export default class Index extends React.Component {
 constructor(props) {
  super(props);
     this.state = {
        response:{
            items: [
                {
                    fields:{
                        productName: 'Lipstick'
                    },
                    sys:{
                        id: 1
                    }
                }
            ]
        }
     };
 }
  componentDidMount () {
    fetch(`https://cdn.contentful.com/spaces/jg5tu42w97lj/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}`)
      .then(response => response.json())
      .then(response => { this.setState({ response });
    });
  }
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
