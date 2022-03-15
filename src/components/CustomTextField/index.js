import React, {useState, memo} from 'react';
import { View, TextInput} from 'react-native';
import styles from './style';

const TextFieldComponent = memo(
  ({
    name,
    placeholder,
    onChangeText = () => {},
    customStyle = {},
    value,
  }) => {
    return (
      <View
        style={[styles.container, customStyle]}>
        <TextInput
          name={name}
          value={value}
          placeholder={placeholder}
          style={styles.inputField}
          onChangeText={onChangeText}
        />
      </View>
    );
  },
);

export default TextFieldComponent;