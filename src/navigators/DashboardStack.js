import { createStackNavigator } from 'react-navigation'

import Dashboard from '../components/Dashboard'

const DashboardStack = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        header: null,
        headerBackTitle: null
      }
    }
  }
)

export default DashboardStack
