import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const OutlinedButton = ({ onPress, children, overrideColor }) => {
  const { buttonStyle, textStyle } = styles

  const customColor = () => {
    return overrideColor === undefined
      ? '#007aff'
      : overrideColor

  }

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, { borderColor: customColor() }]}>
      <Text style={[textStyle, { color: customColor() }]}>
        { children }
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    width: '40%'
  },
  textStyle: {
    fontWeight: '600',
    alignSelf: 'center',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  }

}

export { OutlinedButton }
