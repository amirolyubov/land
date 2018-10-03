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
              'https://odis.homeaway.com/odis/listing/aa5cdbc7-fdf5-4135-86d1-9a6803cc86e4.c10.jpg',
              'https://s-ec.bstatic.com/images/hotel/max1024x768/106/106272808.jpg',
              'https://odis.homeaway.com/odis/listing/50624bf1-f903-42cc-8aa4-6a84d1a5f332.c10.jpg'
            ]
          },
          {
            name: 'AAAAAAAA',
            location: 'Test',
            description: 'Короткие (до 1 000 знаков) приветственные тексты на главную страницу могут позволить себе далеко не все сайты. Например, почти все крупные интернет-магазины, сайты компаний',
            cost: '120 000$',
            images: [
              'https://image.yachtcharterfleet.com/charter-LADY-A/LADY-A-yacht-rear-view-5-large.jpg?image_id=96051&k=b961&w=1024&h=768&q=75',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfo6jKOHsmQdl9-NVnd32xbC8cpH4ExOOFjLaWy4D1cFKnNWK',
              'https://odis.homeaway.com/odis/listing/8183f736-5ff1-4dd3-a53a-cb7aac4244ac.c10.jpg'
            ]
          },
          {
            name: '0010101001010',
            location: 'Teeest',
            description: 'Реалии же таковы, что короткие тексты обычно встречаются на трастовых и уважаемых сайтах, которые прекрасно чувствуют себя в выдаче. Наверное, в число «счастливчиков» можно ',
            cost: '120 000$',
            images: [
              'https://odis.homeaway.com/odis/listing/824a21db-6b39-4537-a508-159d28bcb2e4.c10.jpg',
              'https://cdn.denisonyachtsales.com/images/api-listings/1/91/6/4929106_20170719053500415_1_XLARGE.jpg',
              'https://imt.boatwizard.com/images/1/91/6/4929106_20170719053454484_1_XLARGE.jpg'
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
              'https://c1.staticflickr.com/6/5064/5560750715_a1783e827f_b.jpg',
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
              'https://c1.staticflickr.com/6/5064/5560750715_a1783e827f_b.jpg',
              'https://edinarealtyimages.blob.core.windows.net/listing/RMLS/9901-9903-Rich-Road-Bloomington-MN-55437-4890933-image1.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rich-Twinn_Octagon_House_Oct_09.jpg/1024px-Rich-Twinn_Octagon_House_Oct_09.jpg'
            ]
          },
          {
            name: 'Wgerv Dbvke',
            location: 'Msk',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'https://t-ec.bstatic.com/images/hotel/max1024x768/151/151762845.jpg',
              'https://c1.staticflickr.com/2/1735/28610441618_5407a08120_b.jpg',
              'https://www.tourstaffordva.com/wp-content/uploads/2017/06/belmont1-1024x768.jpg'
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
              'https://s-ec.bstatic.com/images/hotel/max1024x768/102/102955271.jpg',
              'https://t-ec.bstatic.com/images/hotel/max1024x768/102/102805776.jpg',
              'https://pix10.agoda.net/hotelImages/263/263722/263722_15110916520037617543.jpg?s=1024x768',
            ]
          },
          {
            name: 'Thurnhers Alpenhof',
            location: 'Somewhere',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'https://t-ec.bstatic.com/images/hotel/max1024x768/894/89465445.jpg',
              'https://pix10.agoda.net/hotelImages/479579/-1/b7875dec4aa313dedc044e5ba2747d4e.jpg?s=1024x768',
              'https://s-ec.bstatic.com/images/hotel/max1024x768/596/59674259.jpg',
            ]
          },
          {
            name: 'Ambassador',
            location: 'Lipetsk',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'https://s-ec.bstatic.com/images/hotel/max1024x768/596/59674259.jpg',
              'https://intercity.by/upload/resize_cache/iblock/787/1024_768_1dffdf205b575648ed4337be7d72ebe97/anastasia-beach-hotel-4.jpg',
              'https://q.bstatic.com/images/hotel/max1024x768/492/49238020.jpg',
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
