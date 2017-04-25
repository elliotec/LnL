import React from 'react';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
const CONTENTFUL_ACCESS_TOKEN = 'f64d0cedb314e6d19f7cc0fdc8757de534bbcea00eaa825ede3e8072f631cb41';


export default class extends React.Component {
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
    return (
      <div>
        <Header />
         {this.props.children, this.state}
        <Footer />
      </div>
    )
  }
}
