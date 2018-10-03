import React, { Component, Fragment } from 'react'
import ReactPageScroller from 'react-page-scroller'
import MediaQuery from 'react-responsive'

import { PopupContainer } from '../containers'
import { Nav, Start, Gallery__mobile, Footer } from './'
import * as utils from '../utils'

class Mobile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      renderPopup: false
    }
  }


  togglePopup = (name, cat) => {
    this.props.actions.selectOne({name, cat})
    this.setState({ renderPopup: !this.state.renderPopup })
  }
  render () {
    const { actions: { scroll }, data } = this.props
    const { renderPopup } = this.state

    return (
      <Fragment>
        <Nav position={this.props.app.position} togglePopup={this.togglePopup} scrollPoints={this.props.app.scrollPoints} onClick={this.reactPageScroller && this.reactPageScroller.goToPage} scroll={this.props.actions.scroll}/>
        <Start />
        <h1>Отели</h1>
        { data.hotels.map((item, key) => <Gallery__mobile id={'gallery_hotels'} actions={this.props.actions} togglePopup={this.togglePopup} name={ 'Отели' } data={ item } key={key} />) }
        <h1>Живая недвижимость</h1>
        { data.buildings.map((item, key) => <Gallery__mobile id={'gallery_hotels'} actions={this.props.actions} togglePopup={this.togglePopup} name={ 'Отели' } data={ item } key={key} />) }
        <h1>Яхты</h1>
        { data.yachts.map((item, key) => <Gallery__mobile id={'gallery_hotels'} actions={this.props.actions} togglePopup={this.togglePopup} name={ 'Отели' } data={ item } key={key} />) }
        <Footer />
        { renderPopup && <PopupContainer togglePopup={this.togglePopup}/> }
      </Fragment>
    )
  }
}

export default Mobile
