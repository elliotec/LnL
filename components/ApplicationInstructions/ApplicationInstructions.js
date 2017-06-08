import React from 'react';
import './ApplicationInstructions.css';
import instructions from 'images/instructions.jpg';

export default class ApplicationInstructions extends React.Component {
  render () {
    return (
      <div className="instruction-container">
        <img className="instructions" src={instructions} alt="application instructions"/>
      </div>
    );
  }
}
