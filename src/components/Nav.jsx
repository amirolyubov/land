import React, { Component } from 'react'
import * as utils from '../utils'

class Nav extends Component {
  constructor (props) {
    super(props)
  }
  handleAnchorClick = to => this.props.onClick(to)
  render () {
    return (
      <nav>
        <a href='/'><div className='logo' /></a>
        <div>
          <p className={this.props.position === 0 ? 'active' : null} onClick={() => this.handleAnchorClick(0)} >О компании</p>
          <p className={this.props.position === 1 ? 'active' : null} onClick={() => this.handleAnchorClick(1)} >Отели</p>
          <p className={this.props.position === 2 ? 'active' : null} onClick={() => this.handleAnchorClick(2)} >Жилая недвижимость</p>
          <p className={this.props.position === 3 ? 'active' : null} onClick={() => this.handleAnchorClick(3)} >Яхты</p>
        </div>
        <button onClick={this.props.togglePopup}>Заказать звонок</button>
      </nav>
    )
  }
}

export default Nav
