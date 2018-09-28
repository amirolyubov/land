import React, { Component, Fragment } from 'react'
import ReactPageScroller from 'react-page-scroller'
import MediaQuery from 'react-responsive'

import { PopupContainer } from '../containers'
import { Nav, Start, Gallery, Footer } from './'
import * as utils from '../utils'

class Mobile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      renderPopup: false
    }
  }

  togglePopup = () => this.setState({ renderPopup: !this.state.renderPopup })
  render () {
    const { actions: { data, scroll }, data: { yachts, buildings, hotels } } = this.props
    const { renderPopup } = this.state
    return (
      <Fragment>
        <ReactPageScroller
          ref={c => this.reactPageScroller = c}
          animationTimer={600}
          pageOnChange={key => scroll(key - 1)}
          >
          <Fragment>
            <Nav position={this.props.app.position} togglePopup={this.togglePopup} scrollPoints={this.props.app.scrollPoints} onClick={this.reactPageScroller && this.reactPageScroller.goToPage} scroll={this.props.actions.scroll}/>
            <Start />
          </Fragment>
          <Gallery id={'gallery_hotels'} actions={this.props.actions} togglePopup={this.togglePopup} name={ 'Отели' } data={ hotels } />
          <Gallery id={'gallery_flats'} actions={this.props.actions} togglePopup={this.togglePopup} name={ 'Живая недвижимость' } data={ buildings } />
          <Gallery id={'gallery_yachts'} actions={this.props.actions} togglePopup={this.togglePopup} name={ 'Яхты' } data={ yachts } />
        </ReactPageScroller>
        <Footer />
        { renderPopup && <PopupContainer togglePopup={this.togglePopup}/> }
      </Fragment>
    )
  }
}

export default Mobile
