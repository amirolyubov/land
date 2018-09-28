import React, { Component, Fragment } from 'react'
import MediaQuery from 'react-responsive'
import { Gallery__desktop, Gallery__mobile } from './Gallery'

class Gallery extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <Gallery__desktop id={this.props.id} actions={this.props.actions} togglePopup={this.props.togglePopup} name={ this.props.name } data={ this.props.data } />
  }
}

export default Gallery
