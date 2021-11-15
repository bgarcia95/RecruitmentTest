import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  SectionList,
  TouchableOpacity,
} from 'react-native';

import FAB from '../components/fab/FAB';

import Header from '../components/header/Header';
import {AddPersonIcon, CloseIcon} from '../components/icons';
import SearchBar from '../components/searchBar/SearchBar';
import {colors, fonts} from '../config/styles';

import {StackScreenProps} from '@react-navigation/stack';
import {RouteStackParams} from '../navigator/AppNavigator';
import httpService from '../api/httpService';
import {CustomerResponse} from '../interfaces/CustomersInterface';
import Avatar from '../components/avatar/Avatar';
import {currencyFormatter} from '../utils/formatCurrency';

type ScreenProps = StackScreenProps<RouteStackParams, 'MainHomeScreen'>;

interface PaymentsState {
  results: CustomerResponse[];
}

const PaymentsScreen = ({navigation, route}: ScreenProps) => {
  const [state, setState] = useState<PaymentsState>();
  const getData = useCallback(async () => {
    const {data, status} = await httpService.get<CustomerResponse[]>(
      '/customers',
    );

    if (status === 200) {
      setState({
        results: data.sort((a, b) => b.revenues - a.revenues),
      });
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getInitials = (name: string) => {
    const split = name.split('');

    const result = split.length > 1 ? `${split[0]}${split[1]}` : `${split[0]}`;

    return result;
  };

  // Relocate selected item
  const sortArray = (arr: CustomerResponse[], from: number, to: number) =>
    arr.map((item: CustomerResponse, i: number) =>
      i === to
        ? arr[from]
        : i >= Math.min(from, to) && i <= Math.max(from, to)
        ? arr[i + Math.sign(to - from)]
        : item,
    );

  // Search Bar Functionality

  const [isFocused, setIsFocused] = useState(false);

  const [searchText, setSearchText] = useState('');

  const [filteredData, setFilteredData] = useState<PaymentsState>();

  const onChangeText = (text: string) => setSearchText(text);

  const getSearchData = async (text: string) => {
    const {data} = await httpService.get<CustomerResponse[]>(
      `/customers?name_like=${text}`,
    );
    setFilteredData({results: data});
  };

  const customerIdx = (id: string) =>
    state?.results!.findIndex(cust => cust.id === id);

  const onPressItem = (customer: CustomerResponse) => {
    setSearchText('');
    setFilteredData({results: []});
    setState({
      results: sortArray(state?.results!, customerIdx(customer.id)!, 0),
    });
    navigation.navigate('PaymentDetailsScreen', {customer});
  };

  useEffect(() => {
    if (searchText.length >= 3) {
      getSearchData(searchText);
    } else {
      setFilteredData({results: []});
    }
  }, [searchText]);

  // End of Search Bar functionality

  // Section List logic

  const filteredValues = state?.results?.filter(customer => customer.id);

  const statusArr = state?.results
    ?.map(customer => customer.status)
    .sort((a, b) => a.localeCompare(b));

  const filteredStatusArr = statusArr?.filter(
    (stat, index) => !statusArr.includes(stat, index + 1),
  );
  const DATA =
    filteredStatusArr?.map(status => ({
      title: status,
      data: filteredValues?.filter(customer => customer.status === status),
    })) || [];

  const Item = ({customer}: {customer: CustomerResponse}) =>
    customer ? (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('PaymentDetailsScreen', {customer});
          setState({
            results: sortArray(state?.results!, customerIdx(customer.id)!, 0),
          });
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 12.5,
          flex: 1,
        }}>
        <Avatar>
          <Text
            style={{
              textTransform: 'uppercase',
              lineHeight: 16.8,
              fontFamily: fonts.MainLatoRegular,
              fontWeight: '500',
              fontSize: 14,
            }}>
            {getInitials(customer.name)}
          </Text>
        </Avatar>
        <View style={{flex: 1, paddingLeft: 10}}>
          <Text
            style={{
              fontFamily: fonts.MainLatoRegular,
              fontWeight: '500',
              fontSize: 16,
              lineHeight: 19.2,
              textTransform: 'capitalize',
            }}>
            {customer.name}
          </Text>
          <Text
            style={{
              color: '#525252',
              fontFamily: fonts.MainLatoRegular,
              fontSize: 14,
              lineHeight: 16.8,
            }}>
            {customer.email}
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={{
              color: '#525252',
              fontWeight: '700',
              fontFamily: fonts.MainLatoRegular,
              fontSize: 16,
              lineHeight: 19.2,
            }}>
            {currencyFormatter(customer.revenues, {})}
          </Text>
          <Text
            style={{
              fontFamily: fonts.MainLatoRegular,
              fontSize: 10,
              fontWeight: '500',
              lineHeight: 12,
              color: '#A3A3A3',
            }}>
            Total Paid
          </Text>
        </View>
      </TouchableOpacity>
    ) : (
      <View style={{height: 50}} />
    );

  // End of section list logic

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        setIsFocused(false);

        return false;
      }}>
      <Header
        title="Clients"
        titleStyle={{
          color: '#525252',
        }}
        leftIcon={<CloseIcon size={12} />}
        rightLabel="Archived"
      />

      <SearchBar
        isFocused={isFocused}
        onFocusChange={setIsFocused}
        data={filteredData?.results}
        onChangeText={onChangeText}
        value={searchText}
        onPressItem={onPressItem}
      />
      <View style={{flex: 1}}>
        <SectionList
          sections={DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Item customer={item} />}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.header}>
              <Text style={styles.activeText}>{title}</Text>
            </View>
          )}
          renderSectionFooter={() => {
            return <View style={{height: 50}} />;
          }}
          style={{marginTop: 32}}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <FAB
        icon={<AddPersonIcon color={colors.White} size={20} />}
        onPress={() => console.log('FAB pressed')}
        buttonStyles={{
          right: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  activeText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: fonts.MainLatoRegular,
    color: colors.Primary,
    textTransform: 'capitalize',
  },
  header: {
    backgroundColor: colors.White,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#A3A3A3',
    fontFamily: fonts.MainLatoRegular,
    textTransform: 'uppercase',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#A3A3A3',
  },
});

export default PaymentsScreen;
