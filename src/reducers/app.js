import * as requestStates from '../constants/requestStates'
import * as types from '../types'

const initialState = {
  requestState: requestStates.POPUP__PROCESS,
  name: '',
  phone: '',
  item: {
    name: '',
    cat: ''
  },
  scrollPoints: {
    0: 0
  },
  position: 0,
  keys: [0, 'gallery_hotels', 'gallery_flats', 'gallery_yachts'],
  current: 0
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case types.POPUP__PROCESS:
    case types.POPUP__REQUEST:
    case types.POPUP__FAILURE:
    case types.POPUP__SUCCESS:
      return {
        ...state,
        requestState: requestStates[action.type]
      }
    case types.CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    case types.CALC_SCROLL:
      return {
        ...state,
        scrollPoints: {
          ...state.scrollPoints,
          [action.payload.id]: action.payload.y
        }
      }
    case types.SELECT_ONE: {
      return {
        ...state,
        item: action.payload
      }
    }
    case types.POSITION_CHANGE: {
      return {
        ...state,
        position: action.payload.pos
      }
    }
    case types.SCROLL_NEAR: {
      return {
        ...state,
        current: action.payload.current
      }
    }
    default: return state
  }
}

export default app
