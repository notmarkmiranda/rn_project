import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './src/reducers'
import InitialStack from './src/navigators/InitialStack'
import navMiddleware from './src/middlewares/navMiddleware'


const addListener = createReduxBoundAddListener("root")

class App extends Component {
  render() {
    return (
      <InitialStack navigation={
        addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        })
      } />
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(App)

class Root extends Component {
  render () {
    const store = createStore(reducers, applyMiddleware(navMiddleware, ReduxThunk))

    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default Root
