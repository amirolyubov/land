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
  handlePrivacyClick = () => this.props.actions.showPrivacyInfo()
  handleBackClick = () => this.props.actions.showInitialPopup()


  componentWillUpdate = (next, prev) => {
    if (next.app !== this.props.app) {
      this.setState({ isAccept: next.app.name !== '' && next.app.phone !== '' })
    }
  }

  renderPrivacyInfo = () => (
    <div className='popup info' onClick={e => e.stopPropagation()}>
      <p>Предоставляя свои персональные данные Пользователь даёт согласие на обработку, хранение и использование своих персональных данных на основании ФЗ № 152-ФЗ «О персональных данных» от 27.07.2006 г. в следующих целях:</p>
      <ul>
        <li>Осуществление клиентской поддержки</li>
        <li>Получения Пользователем информации о маркетинговых событиях</li>
        <li>Проведения аудита и прочих внутренних исследований с целью повышения качества предоставляемых услуг.</li>
      </ul>
      <p>Под персональными данными подразумевается любая информация личного характера, позволяющая установить личность Пользователя/Покупателя такая как:</p>
      <ul>
        <li>Фамилия, Имя, Отчество</li>
        <li>Контактный телефон</li>
        <li>Адрес электронной почты</li>
      </ul>
      <p>Персональные данные Пользователей хранятся исключительно на электронных носителях и обрабатываются с использованием автоматизированных систем, за исключением случаев, когда неавтоматизированная обработка персональных данных необходима в связи с исполнением требований законодательства.</p>
      <p>Компания обязуется не передавать полученные персональные данные третьим лицам, за исключением следующих случаев:</p>
      <ul>
        <li>По запросам уполномоченных органов государственной власти РФ только по основаниям и в порядке, установленным законодательством РФ</li>
        <li>Стратегическим партнерам, которые работают с Компанией для предоставления продуктов и услуг, или тем из них, которые помогают Компании реализовывать продукты и услуги потребителям. Мы предоставляем третьим лицам минимальный объем персональных данных, необходимый только для оказания требуемой услуги или проведения необходимой транзакции.</li>
      </ul>
      <p>Компания оставляет за собой право вносить изменения в одностороннем порядке в настоящие правила, при условии, что изменения не противоречат действующему законодательству РФ. Изменения условий настоящих правил вступают в силу после их публикации на Сайте.</p>
      <button onClick={this.handleBackClick}>Назад</button>
    </div>
  )
  renderError = () => (
    <div className='popup' onClick={e => e.stopPropagation()}>
      <p className='size__font-30px'>Что-то пошло не так...</p>
    </div>
  )
  renderSuccess = () => (
    <div className='popup' onClick={e => e.stopPropagation()}>
      <p className='size__font-30px'>Данные успешно отправлены</p>
    </div>
  )
  renderProcess = () => {
    const { app: { requestState, name, phone } } = this.props
    const { isAccept } = this.state

    return (
      <div className='popup process' onClick={e => e.stopPropagation()}>
        <p className='size__font-30px'>Отправить заявку</p>
        <p className='size__font-18px'>Обратитесь к вашему личному менеджеру для получения<br />более подробной информации об услугах или получения<br />доступа к закрытому списку обьектов</p>
        <input name='name' value={ name } onChange={this.handleChange} placeholder='Ваше имя' />
        <input name='phone' value={ phone } onChange={this.handleChange} placeholder='Телефон' />
        <button className={isAccept ? '' : 'disabled'} onClick={isAccept ? this.handleSendClick : null}>Связаться с нами</button>
        <p className='size__font-12px'>Нажимая кнопку “Связаться с нами“, Вы даете<br />согласие на <span onClick={this.handlePrivacyClick}>обработку персональных данных.</span></p>
      </div>
    )
  }
  render () {
    const { app: { requestState } } = this.props
    console.log(requestState);
    return (
      <div className='popup-wrapper' onClick={this.props.togglePopup}>
          {
            requestState === requestStates.POPUP__PROCESS
                    ? this.renderProcess()
                    : requestState === requestStates.POPUP__FAILURE
                      ? this.renderError()
                      : requestState === requestStates.POPUP__PRIVACY
                        ? this.renderPrivacyInfo()
                        : this.renderSuccess()
          }
          <div className='cancel' onClick={this.props.togglePopup}></div>
      </div>
    )
  }
}

export default Popup
