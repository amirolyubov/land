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
              'https://static.tonkosti.ru/images/a/a9/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D0%A1%D1%84%D0%BE%D1%80%D1%86%D0%B0%2C_%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/32694.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/41862.jpg',
            ]
          },
          {
            name: 'AAAAAAAA',
            location: 'Test',
            description: 'Короткие (до 1 000 знаков) приветственные тексты на главную страницу могут позволить себе далеко не все сайты. Например, почти все крупные интернет-магазины, сайты компаний',
            cost: '120 000$',
            images: [
              'https://static.tonkosti.ru/images/a/a9/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D0%A1%D1%84%D0%BE%D1%80%D1%86%D0%B0%2C_%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/32694.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/41862.jpg',
            ]
          },
          {
            name: '0010101001010',
            location: 'Teeest',
            description: 'Реалии же таковы, что короткие тексты обычно встречаются на трастовых и уважаемых сайтах, которые прекрасно чувствуют себя в выдаче. Наверное, в число «счастливчиков» можно ',
            cost: '120 000$',
            images: [
              'https://static.tonkosti.ru/images/a/a9/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D0%A1%D1%84%D0%BE%D1%80%D1%86%D0%B0%2C_%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/32694.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/41862.jpg',
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
              'https://static.tonkosti.ru/images/a/a9/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D0%A1%D1%84%D0%BE%D1%80%D1%86%D0%B0%2C_%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/32694.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/41862.jpg',
            ]
          },
          {
            name: 'Evssbv  SEBerb',
            location: 'Spb',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'https://static.tonkosti.ru/images/a/a9/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D0%A1%D1%84%D0%BE%D1%80%D1%86%D0%B0%2C_%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/32694.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/41862.jpg',
            ]
          },
          {
            name: 'Wgerv Dbvke',
            location: 'Msk',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'https://static.tonkosti.ru/images/a/a9/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D0%A1%D1%84%D0%BE%D1%80%D1%86%D0%B0%2C_%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/32694.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/41862.jpg',
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
              'https://static.tonkosti.ru/images/a/a9/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D0%A1%D1%84%D0%BE%D1%80%D1%86%D0%B0%2C_%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/32694.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/41862.jpg',
            ]
          },
          {
            name: 'Thurnhers Alpenhof',
            location: 'Somewhere',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'https://static.tonkosti.ru/images/a/a9/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D0%A1%D1%84%D0%BE%D1%80%D1%86%D0%B0%2C_%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/32694.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/41862.jpg',
            ]
          },
          {
            name: 'Ambassador',
            location: 'Lipetsk',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'https://static.tonkosti.ru/images/a/a9/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D0%A1%D1%84%D0%BE%D1%80%D1%86%D0%B0%2C_%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/41862.jpg',
              'http://www.allcastles.ru/assets/imagecache/www/images/387/32694.jpg',
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
