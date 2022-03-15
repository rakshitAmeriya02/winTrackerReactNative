import React, {memo} from 'react';
import { Text, TouchableOpacity} from 'react-native';
import styles from './style';

const CommonButton = memo(
  ({
    text,
    onPress,
  }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()} >
            <Text style={styles.text} >
                {text}
            </Text>
            </TouchableOpacity>
    );
  },
);

export default CommonButton;