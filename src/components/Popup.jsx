import React, { Component, Fragment } from 'react'
import * as requestStates from '../constants/requestStates'

class Popup extends Component {
  constructor (props) {
    super(props)
  }

  handleChange = ({target: { name, value }}) => this.props.actions.handleChange({ name, value })
  handleSendClick = () => this.props.actions.sendContacts({
    name: this.props.app.name,
    phone: this.props.app.phone
  })

  renderError = () => (
    <Fragment>
      <p className='size__font-30px'>Что-то пошло не так...</p>
    </Fragment>
  )
  renderSuccess = () => (
    <Fragment>
      <p className='size__font-30px'>Данные успешно отправлены</p>
    </Fragment>
  )
  renderProcess = () => {
    const { app: { requestState, name, phone } } = this.props

    return (
      <Fragment>
        <p className='size__font-30px'>Отправить заявку</p>
        <p className='size__font-18px'>Обратитесь к вашему личному менеджеру для получения<br />более подробной информации об услугах или получения<br />доступа к закрытому списку обьектов</p>
        <input name='name' value={ name } onChange={this.handleChange} placeholder='Ваше имя' />
        <input name='phone' value={ phone } onChange={this.handleChange} placeholder='Телефон' />
        <button onClick={this.handleSendClick}>Связаться с нами</button>
      </Fragment>
    )
  }
  render () {
    const { app: { requestState } } = this.props
    return (
      <div className='popup-wrapper' onClick={this.props.togglePopup}>
        <div className='popup' onClick={e => e.stopPropagation()}>
          {
            requestState === requestStates.POPUP__PROCESS
                    ? this.renderProcess()
                    : requestState === requestStates.POPUP__FAILURE
                      ? this.renderError()
                      : this.renderSuccess()
          }
          <div className='cancel' onClick={this.props.togglePopup}></div>
        </div>
      </div>
    )
  }
}

export default Popup
