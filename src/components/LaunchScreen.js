import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation'

import { OutlinedButton } from './common'

class LaunchScreen extends Component {
  navigateTo = (route) => {
    const navigate = NavigationActions.navigate({ routeName: route })
    this.props.navigation.dispatch(navigate)
  }

  render () {
    const { container, buttonBox } = styles

    return (
      <View style={container}>
        <MaterialCommunityIcons
          name='cards-playing-outline'
          size={150}
          color={'red'}
        />
        <View style={buttonBox}>
          <OutlinedButton
            onPress={() => this.navigateTo('SignIn')}
            overrideColor='black'
          >
            SIGN IN
          </OutlinedButton>
          <OutlinedButton
            onPress={() => this.navigateTo('SignUp')}
            overrideColor='red'
          >
            SIGN UP
          </OutlinedButton>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonBox: {
    width: '80%',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
}

export default LaunchScreen
