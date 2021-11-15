import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../config/styles';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const Avatar = ({children}: Props) => {
  return (
    <View
      style={{
        width: 55,
        height: 55,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.Primary,
      }}>
      {children}
    </View>
  );
};

export default Avatar;
