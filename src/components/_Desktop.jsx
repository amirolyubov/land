import React, { Component, Fragment } from 'react'
import ReactPageScroller from 'react-page-scroller'
import MediaQuery from 'react-responsive'

import { PopupContainer } from '../containers'
import { Nav, Start, Gallery, Footer } from './'
import * as utils from '../utils'


class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trig: true
    }
  }
  handleBulletClick = to => {
    this.props.scroll(to)
  }
  calcActive = to => {
    return to === this.props.position
           ? 'active'
           : ''
  }
  render() {
    return (
      <div className='slider'>
        <div className={this.calcActive(0)} onClick={() => this.handleBulletClick(0)}></div>
        <div className={this.calcActive(1)} onClick={() => this.handleBulletClick(1)}></div>
        <div className={this.calcActive(2)} onClick={() => this.handleBulletClick(2)}></div>
        <div className={this.calcActive(3)} onClick={() => this.handleBulletClick(3)}></div>
      </div>
    )
  }
}

class Desktop extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount = () => {
    const { app: { current, keys, scrollPoints }, actions: { wheel } } = this.props
    document.body.onkeydown = ({ keyCode }) => {
      if (keyCode === 33) {
        this.reactPageScroller.goToPage(this.reactPageScroller.state.componentIndex - 1)
      }
      if (keyCode === 34) {
        this.reactPageScroller.goToPage(this.reactPageScroller.state.componentIndex + 1)
      }
    }
  }

  togglePopup = () => this.setState({ renderPopup: !this.state.renderPopup })
  render () {
    const { actions: { data, scroll }, renderPopup, data: { yachts, buildings, hotels } } = this.props
    return (
      <Fragment>
        <Slider position={this.props.app.position} scroll={this.reactPageScroller && this.reactPageScroller.goToPage} />
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

export default Desktop
