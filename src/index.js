import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './components/product'

import './styles.css'

export default class ProductWidget extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  toggleModal = () => {
    const modal = document.querySelector('.modal')
    modal.classList.toggle('is-active')
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className="modal">
        <div className="modal-background" onClick={this.toggleModal}></div>
        <div className="modal-content">
          <div className="box">
            <div className="tabs is-centered">
              <ul>
                <li className="is-active"><a>Product</a></li>
                <li><a>Recomendations</a></li>
              </ul>
            </div>
            <Product title="Product title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."></Product>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.toggleModal}></button>
      </div>
    )
  }
}
