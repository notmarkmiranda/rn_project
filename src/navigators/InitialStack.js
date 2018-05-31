import { StackNavigator } from 'react-navigation'

import LaunchScreen from '../components/LaunchScreen'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import Dashboard from '../components/Dashboard'

const InitialStack = StackNavigator(
  {
    Home: {
      screen: LaunchScreen,
      navigationOptions: {
        header: null,
        headerBackTitle: null
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: null,
      }
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: null
      }
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default InitialStack
