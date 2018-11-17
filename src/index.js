import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RecommendationItem from './components/recommendationItem'
import ProductItem from './components/productItem'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import 'react-tabs/style/react-tabs.css';
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
            <Tabs>
              <TabList className="tabs is-fullwidth is-centered">
                <Tab selectedClassName="is-active"><a>Product</a></Tab>
                <Tab selectedClassName="is-active"><a>Recommendations</a></Tab>
              </TabList>
              <TabPanel>
                <ProductItem title="Product title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."></ProductItem>
              </TabPanel>
              <TabPanel>
                <RecommendationItem title="Product title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."></RecommendationItem>
                <RecommendationItem title="Product title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."></RecommendationItem>
                <RecommendationItem title="Product title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."></RecommendationItem>
                <RecommendationItem title="Product title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."></RecommendationItem>
                <RecommendationItem title="Product title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."></RecommendationItem>
                <RecommendationItem title="Product title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."></RecommendationItem>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.toggleModal}></button>
      </div>
    )
  }
}
