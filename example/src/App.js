import React, { Component } from 'react'

import ProductWidget from 'awesome-product-library'

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.productWidget = React.createRef()
  }

  onClick = () => {
    this.productWidget.current.toggleModal()
  }

  render() {
    return (
      <section className="hero is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="container">
            <ProductWidget text='Product details' ref={this.productWidget}/>
            <a className="button is-primary" onClick={this.onClick}>Launch Modal</a>
          </div>
        </div>
      </section>
    )
  }
}
