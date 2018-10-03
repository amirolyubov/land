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
        buildings: [
          {
            name: 'Вилла в Испании',
            location: 'Маребелья, Испания',
            description: 'Роскошная вилла в престижном, закрытом комплексе на побережье Андалюсии (полезная площадь более 500 кв.м., а террасы - 300 м.). Можно как жить, так и сдавать постоянно или в сезон. Построена в 2018 году.',
            cost: '2.900.000 €',
            images: [
              'img/estate/vill/1.jpeg',
              'img/estate/vill/2.jpeg',
              'img/estate/vill/3.jpeg',
              'img/estate/vill/5.jpeg',
              'img/estate/vill/6.jpeg',
            ]
          },
          {
            name: 'Квартира в Вене',
            location: '1. округ, Вена, Австрия',
            description: 'Трехспальные аппартаменты расположенные в самой престижной части Вены, находятся в пятизвездочном отеле. После реновации. С дорогой сантехникой и кухней. Жилая площадь 183 м. Стоимость недвижимости в районе растет на 5-6% в год. В наличии 4 похожие квартиры',
            cost: '1.720.000 €',
            images: [
              'img/estate/flat/1.jpeg',
              'img/estate/flat/2.jpeg',
              'img/estate/flat/3.jpeg',
              'img/estate/flat/4.jpeg',
              'img/estate/flat/5.jpeg',
            ]
          },
          {
            name: 'Особняк в Вене',
            location: '18. округ, Вена, Австрия',
            description: 'Удостоенный премией за лучшие архитектурные решения. Особняк расположен в одном и из самых тихих и дорогих районов Вены. На площади более 350 метров находятся все для комфортного проживания большой семьи: бассейн, джакузи, две сауны и тд. Мебель и предметы искусств включены в цену',
            cost: '2.850.000 €',
            images: [
              'img/estate/mansion/1.jpeg',
              'img/estate/mansion/2.jpeg',
              'img/estate/mansion/3.jpeg',
              'img/estate/mansion/4.jpeg',
            ]
          }
        ],
        yachts: [
          {
            name: '88-метровая мегаяхта',
            location: 'Georgia, Tbilisi',
            description: 'Мы предлагаем современную, элегантную, построенную в 2017 году 88-метровую яхту. Практически не использовалась владельцем. Построена заслужившей доверие международной компанией Oceanco. Уникальный интерьер и экстерьер, прекрасный баланс функционала и дизайна. Вертолётная площадка',
            cost: '179.000.000 €',
            images: [
              'img/yachts/1/1.jpg',
              'img/yachts/1/2.jpg',
              'img/yachts/1/3.jpg',
              'img/yachts/1/4.jpg',
              'img/yachts/1/5.jpg',
            ]
          },
          {
            name: '56-метровый парусник',
            location: 'Испания',
            description: '56-метровый парусник из серии Perini. Самый современный дизайн, роскошная отделка палубы и кают, джакузи на верхней палубе. Находится в Испании. Зарегистрирована в оффшоре (минимальные ежегодные затраты)',
            cost: '28.000.000 €',
            images: [
              'img/yachts/2/1.jpg',
              'img/yachts/2/2.jpg',
              'img/yachts/2/3.jpg',
              'img/yachts/2/4.jpg',
              'img/yachts/2/5.jpg',
            ]
          },
          {
            name: 'Manhattan 52',
            location: 'Франция',
            description: 'Великолепная небольшая яхта, расположенная во Франции, была изготовлена в августе прошлого года и управлялась командой на Кипре. Самая популярная модель компании Sunseeker. Создана для максимизации комфортного отдыха и возможностей развлечения. Износ двигателя менее 140 часов.',
            cost: '1.150.000 €',
            images: [
              'img/yachts/3/1.jpg',
              'img/yachts/3/2.jpg',
              'img/yachts/3/3.jpg',
              'img/yachts/3/4.jpg',
              'img/yachts/3/5.jpg',
            ]
          }
        ],
        hotels: [
          {
            name: 'Австрийские альпы',
            location: 'Бад-Гаштайн, Австрия',
            description: 'Трёхзвёздочный отель на 86 мест находится на известном горнолыжном курорте. В данный момент сдан в аренду и приносит доход до 120 000 евро в год. Доход возможно увеличить при инвестировании в косметическую реконструкцию.',
            cost: '1.920.000 €',
            images: [
              'img/hotels/alpine/1.jpg',
              'img//hotels/alpine/2.jpg',
              'img//hotels/alpine/3.jpg',
              'img//hotels/alpine/4.jpg',
              'img//hotels/alpine/5.jpg',
            ]
          },
          {
            name: 'Рядом с Веной',
            location: 'Амштеттен, Австрия',
            description: 'Четырёхзвёздочный отель на 50 комнат, расположенный в самом сердце города Амштеттен, на земле Нижней Австрии. Хорошо управляется и приносит 580 000 евро в год. В очень хорошем состоянии и с высокими показателями заполняемости.',
            cost: '6.800.000 €',
            images: [
              'img/hotels/vienna/1.jpg',
              'img/hotels/vienna/2.jpg',
              'img/hotels/vienna/3.jpg',
              'img/hotels/vienna/4.jpg',
              'img/hotels/vienna/5.jpg',
            ]
          },
          {
            name: 'В Черногории',
            location: 'Будва, Черногория',
            description: 'Сезонный четырёхзвёздочный отель на 256 номеров, который готова взять в долгосрочное управление крупная европейская компания. Доход собственника будет 3 140 000 в год. Отличное расположение на первой линии у моря и собственный выход на пляж.',
            cost: '28.500.000 €',
            images: [
              'img/hotels/chern/02.jpg',
              'img/hotels/chern/03.jpg',
              'img/hotels/chern/04.jpg',
              'img/hotels/chern/05.jpg',

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
        <MediaQuery query='(min-device-width: 1025px)'>
          <Desktop data={this.state.data} app={this.props.app} actions={this.props.actions}/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1024px)'>
          <Mobile data={this.state.data} app={this.props.app} actions={this.props.actions}/>
        </MediaQuery>
      </Fragment>
    )
  }
}

export default Root
