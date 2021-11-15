import React from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {colors} from '../../config/styles';

interface Props {
  icon: React.ReactNode;
  onPress: () => void;
  buttonStyles?: ViewStyle;
}

const FAB = ({icon, onPress, buttonStyles}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        position: 'absolute',
        bottom: 40,
        right: 0,
        backgroundColor: colors.Black,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowRadius: 4,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 1,
        elevation: 20,
        ...buttonStyles,
      }}>
      {icon}
    </TouchableOpacity>
  );
};

export default FAB;
