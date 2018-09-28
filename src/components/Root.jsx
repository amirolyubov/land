import React, { Component, Fragment } from 'react'
import scrollTo from 'jquery.scrollTo'
import ReactPageScroller from 'react-page-scroller'
import MediaQuery from 'react-responsive'

import { PopupContainer } from '../containers'
import { Nav, Start, Gallery, Footer, Desktop, Mobile } from './'
import * as utils from '../utils'

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
              'https://traveller-eu.ru/sites/default/files/styles/index/public/Hrad_Loket_-1024x683.jpg?itok=c8E1l1yz?noresize',
              'https://topwar.ru/uploads/posts/2017-04/1493225357_1-zamok-lihtenshtayn-v-germanii-v-baden-vyurtemberge.jpg?noresize',
              'http://www.praga-praha.ru/wp-content/uploads/2012/12/%D0%97%D0%B0%D0%BC%D0%BA%D0%B8-%D0%B2-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%A7%D0%B5%D1%85%D0%B8%D0%B8.jpg?noresize'
            ]
          },
          {
            name: 'AAAAAAAA',
            location: 'Test',
            description: 'Короткие (до 1 000 знаков) приветственные тексты на главную страницу могут позволить себе далеко не все сайты. Например, почти все крупные интернет-магазины, сайты компаний',
            cost: '120 000$',
            images: [
              'https://traveller-eu.ru/sites/default/files/styles/index/public/Hrad_Loket_-1024x683.jpg?itok=c8E1l1yz',
              'https://topwar.ru/uploads/posts/2017-04/1493225357_1-zamok-lihtenshtayn-v-germanii-v-baden-vyurtemberge.jpg',
              'http://www.praga-praha.ru/wp-content/uploads/2012/12/%D0%97%D0%B0%D0%BC%D0%BA%D0%B8-%D0%B2-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%A7%D0%B5%D1%85%D0%B8%D0%B8.jpg'
            ]
          },
          {
            name: '0010101001010',
            location: 'Teeest',
            description: 'Реалии же таковы, что короткие тексты обычно встречаются на трастовых и уважаемых сайтах, которые прекрасно чувствуют себя в выдаче. Наверное, в число «счастливчиков» можно ',
            cost: '120 000$',
            images: [
              'https://traveller-eu.ru/sites/default/files/styles/index/public/Hrad_Loket_-1024x683.jpg?itok=c8E1l1yz',
              'https://topwar.ru/uploads/posts/2017-04/1493225357_1-zamok-lihtenshtayn-v-germanii-v-baden-vyurtemberge.jpg',
              'http://www.praga-praha.ru/wp-content/uploads/2012/12/%D0%97%D0%B0%D0%BC%D0%BA%D0%B8-%D0%B2-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%A7%D0%B5%D1%85%D0%B8%D0%B8.jpg'
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
              'https://traveller-eu.ru/sites/default/files/styles/index/public/Hrad_Loket_-1024x683.jpg?itok=c8E1l1yz',
              'https://topwar.ru/uploads/posts/2017-04/1493225357_1-zamok-lihtenshtayn-v-germanii-v-baden-vyurtemberge.jpg',
              'http://www.praga-praha.ru/wp-content/uploads/2012/12/%D0%97%D0%B0%D0%BC%D0%BA%D0%B8-%D0%B2-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%A7%D0%B5%D1%85%D0%B8%D0%B8.jpg'
            ]
          },
          {
            name: 'Evssbv  SEBerb',
            location: 'Spb',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'https://www.topkurortov.com/wp-content/uploads/2016/10/1-13.jpg',
              'https://uznayvse.ru/images/stories2016/uzn_1481699219.jpg',
              'http://mtdata.ru/u16/photoC907/20560341118-0/original.jpg'
            ]
          },
          {
            name: 'Wgerv Dbvke',
            location: 'Msk',
            description: 'На улицах и пустырях мальчики запускают воздушных змеев, а девочки играют деревянными ракетками с многоцветными рисунками в ханэ, при этом чувство непосредственно',
            cost: '120 000$',
            images: [
              'https://traveller-eu.ru/sites/default/files/styles/index/public/Hrad_Loket_-1024x683.jpg?itok=c8E1l1yz',
              'https://topwar.ru/uploads/posts/2017-04/1493225357_1-zamok-lihtenshtayn-v-germanii-v-baden-vyurtemberge.jpg',
              'http://www.praga-praha.ru/wp-content/uploads/2012/12/%D0%97%D0%B0%D0%BC%D0%BA%D0%B8-%D0%B2-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%A7%D0%B5%D1%85%D0%B8%D0%B8.jpg'
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
    const { actions: { scroll }, app } = this.props
    return (
      <Fragment>
        <MediaQuery query='(min-device-width: 800px)'>
          <Desktop app={app} data={this.state.data} actions={this.props.actions} renderPopup={renderPopup} />
        </MediaQuery>
      </Fragment>
    )
  }
}

export default Root
