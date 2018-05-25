import { NavigationActions } from 'react-navigation'

import firebase from '../config/firebase'
import {
  CREATE_USER,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  SIGN_UP_FORM_UPDATE
} from './types'

export const signUpFormUpdate = ({ prop, value }) => {
  return {
    type: SIGN_UP_FORM_UPDATE,
    payload: { prop, value }
  }
}

export const createUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER })

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch))
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: CREATE_USER_SUCCESS,
    payload: user
  })

  const nav = NavigationActions.navigate({
    routeName: 'Dashboard',
    action: NavigationActions.navigate({ routeName: 'Dashboard' })
  })

  dispatch(nav)
}

const loginUserFail = (dispatch) => {
  dispatch({
    type: CREATE_USER_FAIL
  })
}
