import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../styles/desktop.scss'
import '../styles/mobile.scss'
import '../styles/tablet.scss'
import { Root } from '../components'
import * as actions from '../actions'


class RootContainer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return this.props.match.isExact && <Root
                                        actions={this.props.actions}
                                        app={this.props.app}
                                        />
  }
}

const mapStateToProps = state => ({
  app: state.app
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RootContainer))
