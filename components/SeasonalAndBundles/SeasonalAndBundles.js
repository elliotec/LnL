import React from 'react';
import {
  Grid,
  Row,
  Col,
  Clearfix,
} from 'react-bootstrap';
import './SeasonalAndBundles.css'

export default class SeasonalAndBundles extends React.Component {
  render () {
    return (
        <Grid className="featured-grid">
          <Row>
            <Col className="seasonal-and-bundle-products" sm={5} smPull={1} smOffset={1}>
              <h2 className="sb-header">Seasonal</h2>
            </Col>
            <Col className="seasonal-and-bundle-products bundle" sm={5} smPush={1}>
              <h2 className="sb-header">Bundles</h2>
            </Col>
          </Row>
        </Grid>
    );
  }
}
