import React, { Component } from 'react'

import ExampleComponent from 'awesome-product-library'

export default class App extends Component {
  render() {
    return (
      <section className="hero is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="container">
            <ExampleComponent text='Modern React component module' />
            <a className="button is-primary">Launch Modal</a>
          </div>
        </div>
      </section>
    )
  }
}
