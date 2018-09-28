import React, { Component } from 'react'

class Start extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='start'>
        <div className='content'>
          <h1>YIG - Yachts & Immovables Group</h1>
          <p>YIG управление недвижимостью - сотрудники, работающие в данном направлении, помогают владельцам сдавать в аренду их дома, апартаменты и объекты коммерческой недвижимости. Мы берем на себя заботу по всем вопросам - включая юридическое сопровождение, реновацию, текущее обслуживание, поиск арендаторов</p>
          <div>
            <div>
              <p className='number'>30%</p>
              <p>Описание процентов</p>
            </div>
            <div>
              <p className='number'>50%</p>
              <p>Описание процентов</p>
            </div>
            <div>
              <p className='number'>25%</p>
              <p>Описание процентов</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Start
