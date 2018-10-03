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
              <p className='number'>до 8.11%</p>
              <p class="center">Доходность отелей в Европе</p>
            </div>
            <div>
              <p className='number'>от 2.2%</p>
              <p class="center">Ипотека на жилые объекты</p>
            </div>
            <div>
              <p className='number'>от 1.4%</p>
              <p class="center">Ипотека в наших банках</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Start
