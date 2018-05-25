import { createStackNavigator } from 'react-navigation'

import LaunchScreen from '../components/LaunchScreen'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

const InitialStack = createStackNavigator(
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
    }

  },
  {
    initialRouteName: 'Home'
  }
)

export default InitialStack
