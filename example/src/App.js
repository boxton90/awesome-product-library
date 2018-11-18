import React, { Component } from 'react'

import ProductWidget from 'awesome-product-library'
import 'awesome-product-library/src/styles.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.productWidget = React.createRef()
    this.productData = {
      'title': 'Test title',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet aliquam velit eu commodo. Suspendisse blandit velit quis dui viverra aliquam. Praesent vehicula metus sed ultrices vehicula. Mauris posuere massa ante, molestie pharetra felis iaculis id. Aliquam sed magna efficitur, maximus leo et, dictum leo.'
    }
    this.recommendationsData = {
      'recommendations' : [
        {'title': 'recomen1', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula lacinia pellentesque. Maecenas sodales nisl ac convallis accumsan. Integer hendrerit et sem ac tincidunt.'},
        {'title': 'recomen2', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare, lorem condimentum faucibus pharetra, dui nunc bibendum lacus, quis finibus nisi mi vel leo. Suspendisse potenti. Aliquam erat volutpat.'},
        {'title': 'recomen3', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed dignissim urna, non bibendum diam. Curabitur tincidunt mi leo, in aliquet felis sollicitudin rhoncus.'},
        {'title': 'recomen4', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae velit eros. Nam finibus in nulla vitae cursus. Vivamus tincidunt sem in libero consectetur placerat. Donec viverra ut augue ut congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {'title': 'recomen5', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare, lorem condimentum faucibus pharetra, dui nunc bibendum lacus, quis finibus nisi mi vel leo. Suspendisse potenti. Aliquam erat volutpat.'},
        {'title': 'recomen6', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula lacinia pellentesque. Maecenas sodales nisl ac convallis accumsan. Integer hendrerit et sem ac tincidunt.'}
      ]
    }
  }

  onClick = () => {
    this.productWidget.current.toggleModal()
  }

  render() {
    return (
      <section className="hero is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="container">
            <ProductWidget productData={this.productData} recommendationsData={this.recommendationsData} ref={this.productWidget} />
            <a className="button is-primary" onClick={this.onClick}>Launch Modal</a>
          </div>
        </div>
      </section>
    )
  }
}
