import React, { Component, Fragment } from 'react'
import * as requestStates from '../constants/requestStates'

class Popup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAccept: false
    }
  }

  handleChange = ({target: { name, value }}) => this.props.actions.handleChange({ name, value })
  handleSendClick = () => this.props.actions.sendContacts({
    name: this.props.app.name,
    phone: this.props.app.phone
  })

  componentWillUpdate = (next, prev) => {
    if (next.app !== this.props.app) {
      this.setState({ isAccept: next.app.name !== '' && next.app.phone !== '' })
    }
  }

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
    const { isAccept } = this.state

    return (
      <Fragment>
        <p className='size__font-30px'>Отправить заявку</p>
        <p className='size__font-18px'>Обратитесь к вашему личному менеджеру для получения<br />более подробной информации об услугах или получения<br />доступа к закрытому списку обьектов</p>
        <input name='name' value={ name } onChange={this.handleChange} placeholder='Ваше имя' />
        <input name='phone' value={ phone } onChange={this.handleChange} placeholder='Телефон' />
        <button className={isAccept ? '' : 'disabled'} onClick={isAccept ? this.handleSendClick : null}>Связаться с нами</button>
        <p className='size__font-18px'>Нажимая кнопку “Связаться с нами“,<br />Вы даете согласие на обработку персональных данных.</p>
      </Fragment>
    )
  }
  render () {
    const { app: { requestState } } = this.props
    console.log(requestState);
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
