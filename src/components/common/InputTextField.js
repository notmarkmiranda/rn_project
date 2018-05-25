import React from 'react'
import { Text, TextInput, View } from 'react-native'

const InputTextField =  ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType, autoCapitalize }) => {
  const { inputStyle, labelStyle, containerStyle } = styles

  const keyboard =  () => {
    return keyboardType === undefined
      ? 'default'
      : keyboardType
  }

  const capitalization = () => {
    return autoCapitalize === undefined
      ? 'sentences'
      : autoCapitalize
  }

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{ label }</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboard()}
        autoCapitalize={capitalization()}
      />
    </View>
  )
}

const styles = {
  inputStyle: {
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    width: '100%'
  },
  labelStyle: {
    fontSize: 12,
    marginBottom: 5,
    color: 'red'
  },
  containerStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20
  }
}

export { InputTextField }
