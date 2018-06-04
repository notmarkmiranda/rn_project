import React, { Component } from 'react'
import { Text } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import { PersistGate } from 'redux-persist/lib/integration/react'

import reducers from './src/reducers'
import InitialStack from './src/navigators/InitialStack'
import navMiddleware from './src/middlewares/navMiddleware'
import { persistor, store } from './src/store'


const addListener = createReduxBoundAddListener("root")

class App extends Component {
  render() {
    const { dispatch, nav, isLoggedIn } = this.props
    const state = isLoggedIn
      ? nav.stateForLoggedIn
      : nav.stateForLoggedOut
    return (
      <InitialStack navigation={
        addNavigationHelpers({ state: nav, dispatch, addListener })
      } />
    )
  }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.LoginReducer,
    nav: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(App)

class Root extends Component {
  render () {
    // const store = createStore(reducers, applyMiddleware(navMiddleware, ReduxThunk))

    return (
      <Provider store={store}>
        <PersistGate loading={<Text>loading...</Text>} persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    )
  }
}

export default Root
