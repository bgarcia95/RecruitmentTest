import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Platform, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {colors, fonts} from '../../config/styles';
import {SearchIcon} from '../icons';
import {CustomerResponse} from '../../interfaces/CustomersInterface';

interface Props {
  isFocused: boolean;
  onFocusChange: (value: boolean) => void;
  data: any;
  value: string;
  onChangeText: (text: string) => void;
  onPressItem: (customer: CustomerResponse) => void;
}

const SearchBar = ({
  isFocused,
  onFocusChange,
  data,
  value,
  onChangeText,
  onPressItem,
}: Props) => {
  return (
    <View
      style={{
        width: '100%',
        borderColor: '#E5E5E5',
        borderRadius: 6,
        borderWidth: 1,
        height: 40,
        justifyContent: 'center',
        zIndex: 999,
      }}>
      <View
        style={{
          paddingLeft: 50,
          flexDirection: 'row',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        <SearchIcon size={19} />
        <TextInput
          style={{
            height: '100%',
            flex: 1,
            left: 13,
            fontSize: 16,
            fontWeight: '700',
            lineHeight: 19.2,
            color: '#C4C4C4',
            fontFamily: fonts.MainLatoRegular,
            marginTop: Platform.OS === 'android' ? 5 : 0,
          }}
          placeholder="Search client"
          placeholderTextColor="#C4C4C4"
          onFocus={() => {
            onFocusChange(true);
          }}
          onBlur={() => onFocusChange(false)}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      <View
        style={{
          display: isFocused ? 'flex' : 'none',
          position: 'absolute',
          alignSelf: 'flex-start',
          maxHeight: 150,
          top: 40,
          width: '100%',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: '#EEEEEE',
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderBottomWidth: 1,
          backgroundColor: colors.White,
          padding: 10,
        }}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="always"
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onPressItem(item)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#C4C4C4',
                  marginLeft: 15,
                }}>
                {item.email}
              </Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <Text>No results found</Text>}
        />
      </View>
    </View>
  );
};

export default SearchBar;
