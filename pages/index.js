import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import Header from 'components/Header';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Header />
        <h1>
          Hi Sara!
        </h1>
        <ul>
          <li>
            <Link to={prefixLink('/markdown/')}>Markdown</Link>
          </li>
          <li>
            <Link to={prefixLink('/react/')}>JSX (React components)</Link>
          </li>
          <li>
            <Link to={prefixLink('/postcss/')}>PostCSS</Link>
          </li>
          <li>
            <Link to={prefixLink('/css-modules/')}>CSS Modules</Link>
          </li>
          <li>
            <Link to={prefixLink('/less/')}>Less</Link>
          </li>
        </ul>
      </div>
    )
  }
}
