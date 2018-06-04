import { NavigationActions } from 'react-navigation'

import { CREATE_USER_SUCCESS, LOGIN, LOGOUT } from '../actions/types'
import InitialStack from '../navigators/InitialStack'

const ActionForLoggedOut = InitialStack.router.getActionForPathAndParams('Home')
const ActionForLoggedIn = InitialStack.router.getActionForPathAndParams('Dashboard')

const stateForLoggedOut = InitialStack.router.getStateForAction(ActionForLoggedOut)
const stateForLoggedIn = InitialStack.router.getStateForAction(ActionForLoggedIn)

const INITIAL_STATE = InitialStack.router.getStateForAction(InitialStack.router.getActionForPathAndParams('Home'))

const NavReducer = (state = INITIAL_STATE, action) => {
  let nextState
  
  switch(action.type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        stateForLoggedIn: InitialStack.router.getStateForAction(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
          })
        )
      }
    case LOGIN:
      return {
        ...state,
        stateForLoggedIn: InitialStack.router.getStateForAction(
          ActionForLoggedIn,
          stateForLoggedOut
        )
      }
    case LOGOUT:
      return {
        ...state,
        stateForLoggedOut: InitialStack.router.getStateForAction(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.init({ routeName: 'login' })]
          })
        )
      }
    default:
      return {
        ...state,
        stateForLoggedIn: InitialStack.router.getStateForAction(
          action,
          state.stateForLoggedIn
        )
      }
  }
  // const nextState = InitialStack.router.getStateForAction(action, state)
  //
  // return nextState || state
}

export default NavReducer
