# awesome-product-library

> 

[![NPM](https://img.shields.io/npm/v/awesome-product-library.svg)](https://www.npmjs.com/package/awesome-product-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save awesome-product-library
```

## Usage

```jsx
import React, { Component } from 'react'

import ProductWidget from 'awesome-product-library'
import 'awesome-product-library/src/styles.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.productWidget = React.createRef()
    this.productData = {
      'title': 'Super artist tropper',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet aliquam velit eu commodo. Suspendisse blandit velit quis dui viverra aliquam. Praesent vehicula metus sed ultrices vehicula. Mauris posuere massa ante, molestie pharetra felis iaculis id. Aliquam sed magna efficitur, maximus leo et, dictum leo.',
      'img': 'https://source.unsplash.com/ZqqlOZyGG7g'
    }
    this.recommendationsData = {
      'recommendations' : [
        {'title': 'Bunch of plastic dinorours', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula lacinia pellentesque. Maecenas sodales nisl ac convallis accumsan. Integer hendrerit et sem ac tincidunt.','img': 'https://source.unsplash.com/bBgqqWZAVT4/128x128'},
        {'title': 'RockerPug', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare, lorem condimentum faucibus pharetra, dui nunc bibendum lacus, quis finibus nisi mi vel leo. Suspendisse potenti. Aliquam erat volutpat.','img': 'https://source.unsplash.com/K4mSJ7kc0As/128x128'},
        {'title': 'Creepy baby doll', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed dignissim urna, non bibendum diam. Curabitur tincidunt mi leo, in aliquet felis sollicitudin rhoncus.','img': 'https://source.unsplash.com/RZX-_BJmNa8/128x128'},
        {'title': 'Green denture toy', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae velit eros. Nam finibus in nulla vitae cursus. Vivamus tincidunt sem in libero consectetur placerat. Donec viverra ut augue ut congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','img': 'https://source.unsplash.com/4FXR3Y0jsZ4/128x128'},
        {'title': 'Splash water gun', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare, lorem condimentum faucibus pharetra, dui nunc bibendum lacus, quis finibus nisi mi vel leo. Suspendisse potenti. Aliquam erat volutpat.','img': 'https://source.unsplash.com/h5GUPGGMjWQ/128x128'},
        {'title': 'Sliced lemon on white ceramic plate', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula lacinia pellentesque. Maecenas sodales nisl ac convallis accumsan. Integer hendrerit et sem ac tincidunt.','img': 'https://source.unsplash.com/w35up2PkaFs/128x128'}
      ]
    }
  }

  /* Method to trigger toggle (open/close) widget modal */
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
```

## License

MIT © [boxton90](https://github.com/boxton90)
