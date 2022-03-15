import React, {memo} from 'react';
import { Text, TouchableOpacity} from 'react-native';
import styles from './style';

const CommonButton = memo(
  ({
    text,
    onPress,
  }) => {
    return (
        <TouchableOpacity style={{borderWidth: 1, borderColor: 'black', borderRadius: 25, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}} onPress={() => onPress()} >
            <Text style={{fontSize: 12, fontWeight: '600'}} >
                {text}
            </Text>
            </TouchableOpacity>
    );
  },
);

export default CommonButton;