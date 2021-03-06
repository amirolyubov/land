import React, { Component, Fragment } from 'react'
import ReactPageScroller from 'react-page-scroller'
import MediaQuery from 'react-responsive'

import { PopupContainer } from '../containers'
import { Nav, Start, Gallery__desktop, Footer } from './'
import * as utils from '../utils'


class Slider extends Component {
  constructor(props) {
    super(props)
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
    this.state = {
      renderPopup: false
    }
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

  togglePopup = (name, cat) => {
    this.props.actions.selectOne({name, cat})
    this.setState({ renderPopup: !this.state.renderPopup })
  }
  render () {
    const { actions: { data, scroll }, data: { yachts, buildings, hotels } } = this.props
    const { renderPopup } = this.state
    return (
      <Fragment>
        <Slider position={this.props.app.position} scroll={this.reactPageScroller && this.reactPageScroller.goToPage} />
        <ReactPageScroller
          ref={c => this.reactPageScroller = c}
          animationTimer={200}
          pageOnChange={key => scroll(key - 1)}
          >
          <Fragment>
            <Nav position={this.props.app.position} togglePopup={this.togglePopup} scrollPoints={this.props.app.scrollPoints} onClick={this.reactPageScroller && this.reactPageScroller.goToPage} scroll={this.props.actions.scroll}/>
            <Start />
          </Fragment>
          <Gallery__desktop id={'gallery_hotels'} actions={this.props.actions} togglePopup={this.togglePopup} name={ 'Отели' } data={ hotels } />
          <Gallery__desktop id={'gallery_flats'} actions={this.props.actions} togglePopup={this.togglePopup} name={ 'Жилая недвижимость' } data={ buildings } />
          <Gallery__desktop id={'gallery_yachts'} actions={this.props.actions} togglePopup={this.togglePopup} name={ 'Яхты' } data={ yachts } />
        </ReactPageScroller>
        <Footer />
        { renderPopup && <PopupContainer togglePopup={this.togglePopup}/> }
      </Fragment>
    )
  }
}

export default Desktop
