import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
const CONTENTFUL_ACCESS_TOKEN = 'f64d0cedb314e6d19f7cc0fdc8757de534bbcea00eaa825ede3e8072f631cb41';

export default class ReactComponent extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }

  handlePlusClick () {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusClick () {
    this.setState({ count: this.state.count - 1 })
  }

  componentDidMount () {
    // TODO: This is our actual contentful. get some data and use it in acomponent just like this. it works
    fetch(`https://cdn.contentful.com/spaces/jg5tu42w97lj/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}`)
      .then(response => response.json())
      .then((response) => { this.setState({ response }); });
  }

  render () {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | React.js components`}
        />
        <h1>React.js components</h1>
        <h3>Counter example</h3>
        <p>{this.state.count}</p>
        <button onClick={() => this.handlePlusClick()}>+</button>
        <button onClick={() => this.handleMinusClick()}>-</button>
      </div>
    )
  }
}
