import InitialStack from '../navigators/InitialStack'

const INITIAL_STATE = InitialStack.router.getStateForAction(InitialStack.router.getActionForPathAndParams('Home'))

const NavReducer = (state = INITIAL_STATE, action) => {
  // how does it change the navigation if there's no case statement?
  const nextState = InitialStack.router.getStateForAction(action, state)

  return nextState || state
}

export default NavReducer
