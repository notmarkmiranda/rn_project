import React from 'react'
import { Text, View } from 'react-native'

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In!</Text>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default SignIn
