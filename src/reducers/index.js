import { combineReducers } from 'redux'

import UserCreationReducer from './UserCreationReducer'
import NavReducer from './NavReducer'
import LoginReducer from './LoginReducer'

export default combineReducers({
  userCreate: UserCreationReducer,
  nav: NavReducer,
  isLoggedIn: LoginReducer,
})
