import React, { Component } from 'react'
import RecommendationItem from './components/recommendationItem'
import ProductItem from './components/productItem'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import 'react-tabs/style/react-tabs.css';
import './styles.css'

export default class ProductWidget extends Component {
  constructor() {
    super()
    this.state = {
      selectedTabIndex: 0,
      numberTabs : 2}
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown',this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown')
  }

  /* OnkeyDown event that handle right and left arrow keys pressing to switch between tabs */
  onKeyDown(event) {
    switch (event.keyCode) {
      // Right arrow key case
      case 39:
        this.state.selectedTabIndex < (this.state.numberTabs - 1) ? this.increaseSelectedTabIndex() : null
      break
      // Left arrow key case
      case 37:
        this.state.selectedTabIndex > 0 ? this.dicreaseSelectedTabIndex() : null
      break
    }
  }

  /* Method that increase selected tab index state count by 1 */
  increaseSelectedTabIndex = () => {
    this.setState(prevState => ({selectedTabIndex: prevState.selectedTabIndex + 1}))
  }

  /* Method that dicrease selected tab index state count by 1 */
  dicreaseSelectedTabIndex = () => {
    this.setState(prevState => ({selectedTabIndex: prevState.selectedTabIndex - 1}))
  }

  /* Method that toggle (open/close) widget modal */
  toggleModal = () => {
    const modal = document.querySelector('.modal')
    modal.classList.toggle('is-active')
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-background" onClick={this.toggleModal}></div>
        <div className="modal-content">
          <div className="box">
            <Tabs selectedIndex={this.state.selectedTabIndex} onSelect={selectedTabIndex => this.setState({ selectedTabIndex: selectedTabIndex })}>
              <TabList className="tabs is-fullwidth is-centered">
                <Tab selectedClassName="is-active"><a>Product</a></Tab>
                <Tab selectedClassName="is-active"><a>Recommendations</a></Tab>
              </TabList>
              <TabPanel>
                <ProductItem title={this.props.productData.title} desc={this.props.productData.desc} img={this.props.productData.img}></ProductItem>
              </TabPanel>
              <TabPanel>
                {this.props.recommendationsData.recommendations.map((recommendation, index) => {
                  return (<RecommendationItem title={recommendation.title} desc={recommendation.desc} img={recommendation.img} key={index}></RecommendationItem>)
                })}
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.toggleModal}></button>
      </div>
    )
  }
}
