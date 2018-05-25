import React, { Component } from 'react'
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { InputTextField, OutlinedButton } from './common'
import { createUser, signUpFormUpdate } from '../actions'

class SignUp extends Component {
  onButtonPress() {
    const { email, password } = this.props

    this.props.createUser({ email, password })
  }

  render () {
    const { buttonStyle, container, inputContainer, innerContainer } = styles

    return (
      <KeyboardAvoidingView style={container} behavior="padding">
        <Text>Get Signed Up!</Text>
        <View style={inputContainer}>
          <InputTextField
            label="EMAIL"
            placeholder="test@example.com"
            onChangeText={(value) => this.props.signUpFormUpdate({ prop: 'email', value })}
            value={this.props.email}
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <InputTextField
            label="PASSWORD"
            placeholder="password"
            onChangeText={(value) => this.props.signUpFormUpdate({ prop: 'password', value })}
            value={this.props.password}
            secureTextEntry
          />
          <OutlinedButton
            onPress={this.onButtonPress.bind(this)}
            style={buttonStyle}
            overrideColor='red'
          >
            Sign Up!
          </OutlinedButton>
        </View>
    </KeyboardAvoidingView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputContainer: {
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25
  }
}

const mapStateToProps = state => {
  const { email, password } = state.userCreate

  return { email, password }
}

export default connect(mapStateToProps, { signUpFormUpdate, createUser })(SignUp)
