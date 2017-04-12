import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import '../css/markdown-styles'
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';

module.exports = React.createClass({
  render () {
    return (
      <div>
        <Header />
         {this.props.children}
        <Footer />
      </div>
    )
  }
})
