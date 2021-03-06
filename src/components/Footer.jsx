import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

class Footer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <footer>
        <p className='name'>2018 YIG - Yachts & Immovables Group</p>
        <p className='contacts'>
          <a href="tel:+74957777777"  data-rel="external"><p className='phone'>+7 (495) 199-1999 </p></a>
          <p className='split'>|</p>
          <a href="mailto:test@test.com"  data-rel="external"><p className='phone'> test@test.com</p></a>
        </p>
        <MediaQuery query='(min-device-width: 751px)'>
          <p className='address'>«БАШНЯ ФЕДЕРАЦИЯ» Пресненская наб. 12,  Москва</p>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 750px)'>
          <p className='address'>«БАШНЯ ФЕДЕРАЦИЯ»<br />Пресненская наб. 12, Москва</p>
        </MediaQuery>
      </footer>
    )
  }
}

export default Footer
