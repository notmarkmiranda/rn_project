import { combineReducers } from 'redux'

import UserCreationReducer from './UserCreationReducer'

export default combineReducers({
  userCreate: UserCreationReducer
})
