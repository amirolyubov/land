import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions'

import { Popup } from '../components'

class PopupContainer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return <Popup
            actions={this.props.actions}
            app={this.props.app}
            togglePopup={this.props.togglePopup}
            />
  }
}

const mapStateToProps = state => ({
  app: state.app
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer)
