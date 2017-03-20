import React from 'react'
import Helmet from 'react-helmet'

import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      body: React.PropTypes.string,
    }
  },
  render () {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          {css}
        </head>
        <body>
            <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
            <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
            <script src="https://code.jquery.com/jquery-3.2.0.min.js"></script>
            <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="MjkwYmIwN2YtZTk4Yi00Zjc0LWFkMzUtN2FjNDI4NGIyYzQwNjM2MjMyNTgzMzI2MzEwMDgx"></script>

            <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
        </body>
      </html>
    )
  },
})
