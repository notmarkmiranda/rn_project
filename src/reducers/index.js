import { combineReducers } from 'redux'

import UserCreationReducer from './UserCreationReducer'
import NavReducer from './NavReducer'

export default combineReducers({
  userCreate: UserCreationReducer,
  nav: NavReducer
})
