import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Hero.css';
import lipstick from 'images/flowersLips.png';

export default class Hero extends React.Component {
  render() {
    return (
      <Jumbotron className="hero">
        <img className="banner-img" src={lipstick} alt="lipstick"/>
      </Jumbotron>
    );
  }
}
