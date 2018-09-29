import React, { Component, Fragment } from 'react'
import ReactPageScroller from 'react-page-scroller'
import MediaQuery from 'react-responsive'

import { PopupContainer } from '../containers'
import { Nav, Start, Gallery, Footer, Desktop, Mobile } from './'
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

class Root extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        yachts: [
          {
            name: 'Qwrf',
            location: 'Georgia, Tbilisi',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'http://www.mby.ru/uploads/assets/images/%D0%AF%D1%85%D1%82%D1%8B%20Sanlorenzo%20460%20Exp/Sanlorenzo%20460%20Exp%2013.png',
              'http://superyachts.agent4stars.com/wp-content/uploads/2016/02/LionheartBenettiRecordGreen.png',
              'https://www.contactyachts.com/site/assets/files/2352/contact-yachts-gaffe-001.0x854.png'
            ]
          },
          {
            name: 'AAAAAAAA',
            location: 'Test',
            description: 'Короткие (до 1 000 знаков) приветственные тексты на главную страницу могут позволить себе далеко не все сайты. Например, почти все крупные интернет-магазины, сайты компаний',
            cost: '120 000$',
            images: [
              'http://www.mby.ru/uploads/assets/images/%D0%92%D0%B5%D1%80%D1%84%D0%B8_sunseeker/sunseeker%2010.png',
              'http://www.yachtco.ru/uploads/yacht/yacht-OTMzODkwMzg1MTY.png',
              'http://www.mby.ru/uploads/assets/images/%D0%AF%D1%85%D1%82%D1%8B%20kamino/kamino%205.png'
            ]
          },
          {
            name: '0010101001010',
            location: 'Teeest',
            description: 'Реалии же таковы, что короткие тексты обычно встречаются на трастовых и уважаемых сайтах, которые прекрасно чувствуют себя в выдаче. Наверное, в число «счастливчиков» можно ',
            cost: '120 000$',
            images: [
              'http://superyachts.agent4stars.com/wp-content/uploads/2018/04/VICKY-59m-charter-yacht-by-Baglietto-Yachts45.png',
              'http://yachtrus.ru/arfa-fad-dea3/uploads/2015/02/%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C-%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B0.png',
              'http://www.mby.ru/uploads/assets/images/%D0%92%D0%B5%D1%80%D1%84%D0%B8_sunseeker/sunseeker%209.png'
            ]
          }
        ],
        buildings: [
          {
            name: 'Basev SBEsebv',
            location: 'Georgia, Tbilisi',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'http://customhomemagazine.com/wp-content/uploads/2018/01/CA-AR-03-min.png',
              'http://sanfranciscoarchitects.org/wp-content/uploads/calistoga-residence-by-signum-archtecture-min.png',
              'http://customhomemagazine.com/wp-content/uploads/2018/01/TX-AR-03-min.png'
            ]
          },
          {
            name: 'Evssbv  SEBerb',
            location: 'Spb',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'http://customhomemagazine.com/wp-content/uploads/2018/01/CA-AR-04-min.png',
              'https://koldx2xu34b4ckd0324gwb6e-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Residential_Architects_2_Main_Modern-Contemporary.png',
              'https://i.pinimg.com/originals/c2/8f/65/c28f65a501fe41e08679813effb9762a.png'
            ]
          },
          {
            name: 'Wgerv Dbvke',
            location: 'Msk',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'http://sanfranciscoarchitects.org/wp-content/uploads/soda-canyon-residence-by-bar-architects-min.png',
              'https://2kuols1oen5p2ip3ry8egl5f-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/CA-DB-01-min-1024x770.png',
              'https://static1.squarespace.com/static/58b341c329687f881c7c374f/58b3439f197aea63fbd497ca/5b69cc1c03ce6485a8c9fa0c/1533661198808/Screen+Shot+2018-08-07+at+9.44.25+AM.png?format=1500w'
            ]
          }
        ],
        hotels: [
          {
            name: 'Alpine Palace',
            location: 'Вена, Австрия',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'https://traveller-eu.ru/sites/default/files/styles/index/public/Hrad_Loket_-1024x683.jpg?itok=c8E1l1yz',
              'https://topwar.ru/uploads/posts/2017-04/1493225357_1-zamok-lihtenshtayn-v-germanii-v-baden-vyurtemberge.jpg',
              'http://www.praga-praha.ru/wp-content/uploads/2012/12/%D0%97%D0%B0%D0%BC%D0%BA%D0%B8-%D0%B2-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%A7%D0%B5%D1%85%D0%B8%D0%B8.jpg'
            ]
          },
          {
            name: 'Thurnhers Alpenhof',
            location: 'Somewhere',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'https://traveller-eu.ru/sites/default/files/styles/index/public/Hrad_Loket_-1024x683.jpg?itok=c8E1l1yz',
              'https://topwar.ru/uploads/posts/2017-04/1493225357_1-zamok-lihtenshtayn-v-germanii-v-baden-vyurtemberge.jpg',
              'http://www.praga-praha.ru/wp-content/uploads/2012/12/%D0%97%D0%B0%D0%BC%D0%BA%D0%B8-%D0%B2-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%A7%D0%B5%D1%85%D0%B8%D0%B8.jpg'
            ]
          },
          {
            name: 'Ambassador',
            location: 'Lipetsk',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'https://traveller-eu.ru/sites/default/files/styles/index/public/Hrad_Loket_-1024x683.jpg?itok=c8E1l1yz',
              'https://topwar.ru/uploads/posts/2017-04/1493225357_1-zamok-lihtenshtayn-v-germanii-v-baden-vyurtemberge.jpg',
              'http://www.praga-praha.ru/wp-content/uploads/2012/12/%D0%97%D0%B0%D0%BC%D0%BA%D0%B8-%D0%B2-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%A7%D0%B5%D1%85%D0%B8%D0%B8.jpg'
            ]
          }
        ],
      },
      //,
      renderPopup: false,
      prevTime: 0
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

  togglePopup = () => this.setState({ renderPopup: !this.state.renderPopup })
  render () {
    const { yachts, buildings, hotels, renderPopup } = this.state
    const { actions: { scroll } } = this.props
    return (
      <Fragment>
        <MediaQuery query='(min-device-width: 800px)'>
          <Desktop data={this.state.data} app={this.props.app} actions={this.props.actions}/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 800px)'>
          <Mobile data={this.state.data} app={this.props.app} actions={this.props.actions}/>
        </MediaQuery>
      </Fragment>
    )
  }
}

export default Root
