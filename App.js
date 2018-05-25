import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './src/reducers'
import RootStack from './src/navigators/RootStack'

class App extends Component {
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}

export default App
