import { createStackNavigator } from 'react-navigation'

import InitialStack from './InitialStack'
import DashboardStack from './DashboardStack'

const RootStack = createStackNavigator(
  {
    LaunchScreen: {
      screen: InitialStack,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    DashboardScreen: {
      screen: DashboardStack,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'LaunchScreen'
  }
)

export default RootStack
