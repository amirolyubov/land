import React, { Component } from 'react'

class Footer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <footer>
        <p className='name'>2018 YIG - Yachts & Immovables Group</p>
        <p className='phone'>+7 (495) 777-77-77</p>
        <p className='address'>«БАШНЯ ФЕДЕРАЦИЯ» Пресненская наб. 12, 19.2, Москва</p>
      </footer>
    )
  }
}

export default Footer
