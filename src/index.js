import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
          <p>{text}</p>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
    )
  }
}
