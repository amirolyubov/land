import * as types from '../types'

export const handleChange = params => ({
  type: types.CHANGE,
  payload: { ...params }
})

export const sendContacts = params =>
  dispatch => {
    dispatch(sendContacts__request);
    (() => new Promise((resolve, reject) => {
      fetch('/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      .then(data => responce(data.json()))
      .catch(err => reject())
    }))().then(
      responce => responce.data.error
      ? dispatch((() => ({
          type: types.POPUP__FAILURE,
          payload: responce
        }))())
      : dispatch((() => ({
          type: types.POPUP__SUCCESS,
          payload: responce
        }))())
    ).catch(
      responce => dispatch((() => ({
        type: types.POPUP__SUCCESS,
        payload: responce
      }))())
    )
  }
const sendContacts__request = () => ({
  type: types.POPUP__REQUEST
})

export const calcScroll = id => {
  const y = document.getElementById(id).offsetTop
  return {
    type: types.CALC_SCROLL,
    payload: { id, y }
  }
}

export const scroll = pos =>
  (dispatch, getState) => {
    dispatch((() => ({
      type: types.POSITION_CHANGE,
      payload: { pos }
    }))())
  }
