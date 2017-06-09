import React from 'react';
import ApplicationInstructions from 'components/ApplicationInstructions/ApplicationInstructions';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

export default class Howtouse extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <ApplicationInstructions />
        <Footer />
      </div>
    )
  }
}
