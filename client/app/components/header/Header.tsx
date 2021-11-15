import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheetProperties,
  TextStyle,
} from 'react-native';
import {colors, fonts} from '../../config/styles';
import {ArchiveBoxIcon, CloseIcon} from '../icons';

interface Props {
  title: string;
  titleStyle?: TextStyle;
  leftIcon: React.ReactNode;
  leftIconPress?: () => void;
  rightLabel: string;
  phoneNumber?: string | null;
  email?: string | null;
}

const Header = ({
  title,
  titleStyle,
  leftIcon,
  leftIconPress = () => {},
  rightLabel,
  phoneNumber,
  email,
}: Props) => {
  return (
    <View style={{flexDirection: 'row', width: '100%', marginBottom: 10}}>
      <TouchableOpacity
        style={{paddingTop: 5}}
        onPress={() => leftIconPress()! || console.log('close icon pressed')}>
        {leftIcon}
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.MainLatoRegular,
            fontWeight: '900',
            marginTop: -5,
            fontSize: 24,
            color: colors.Black,
            textTransform: 'capitalize',
            ...titleStyle,
          }}>
          {title}
        </Text>
        {phoneNumber && (
          <Text
            style={{
              fontFamily: fonts.MainLatoRegular,
              fontWeight: '500',
              lineHeight: 16.8,
              fontSize: 14,
              color: colors.Black,
            }}>
            {phoneNumber}
          </Text>
        )}
        {email && (
          <Text
            style={{
              fontFamily: fonts.MainLatoRegular,
              // fontWeight: '500',
              lineHeight: 16.8,
              fontSize: 12,
              color: 'rgba(0, 0, 0, 0.5)',
            }}>
            {email}
          </Text>
        )}
      </View>
      <View>
        <TouchableOpacity
          onPress={() => console.log('archive button pressed')}
          style={{alignItems: 'center'}}>
          <ArchiveBoxIcon size={24} />
          <Text
            style={{
              fontFamily: fonts.MainLatoRegular,
              fontWeight: '700',
              color: colors.Black,
            }}>
            {rightLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
