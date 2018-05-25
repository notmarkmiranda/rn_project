import {
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  SIGN_UP_FORM_UPDATE
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_UP_FORM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case CREATE_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }
    case CREATE_USER_FAIL:
      return INITIAL_STATE
    default:
      return state
  }
}
