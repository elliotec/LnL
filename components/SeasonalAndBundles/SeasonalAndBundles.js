import React from 'react';
import {
  Grid,
  Row,
  Col,
  Clearfix,
} from 'react-bootstrap';
import './SeasonalAndBundles.css';
import {onShowProductsPage} from 'pages/_template.jsx';

export default class SeasonalAndBundles extends React.Component {
  render () {
    return (
        <Grid className="featured-grid">
          <Row>
            <span className="sb-link" onClick={ () => {this.props.dispatch(onShowProductsPage()); document.getElementById('seasonal').scrollIntoView();}}>
              <Col className="seasonal-and-bundle-products seasonal" sm={5} smPull={1} smOffset={1}>
                <h2 className="sb-header">Seasonal</h2>
              </Col>
            </span>
            <span className="sb-link" onClick={ () => {this.props.dispatch(onShowProductsPage()); document.getElementById('bundle').scrollIntoView();}}>
              <Col className="seasonal-and-bundle-products bundle" sm={5} smPush={1}>
                <h2 className="sb-header">Bundles</h2>
              </Col>
            </span>
          </Row>
        </Grid>
    );
  }
}
