import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import '../css/markdown-styles'
import Header from 'components/Header/Header.js';
const CONTENTFUL_ACCESS_TOKEN = 'f64d0cedb314e6d19f7cc0fdc8757de534bbcea00eaa825ede3e8072f631cb41';

module.exports = React.createClass({
  componentDidMount () {
    // TODO: This is our actual contentful. get some data and use it in acomponent just like this. it works
    fetch(`https://cdn.contentful.com/spaces/jg5tu42w97lj/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}`)
      .then(response => response.json())
      .then((response) => { this.setState({ response });
    });
  },
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Header />
        <Link
          to={prefixLink('/')}
        >
        </Link>
         {this.props.children}
      </div>
    )
  }
})
