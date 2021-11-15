import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import parsePhoneNumber from 'libphonenumber-js';

import {RouteStackParams, TopTabs} from '../navigator/AppNavigator';
import Header from '../components/header/Header';
import {CloseIcon, PlusIcon} from '../components/icons';
import httpService from '../api/httpService';
import {PaymentResponse} from '../interfaces/PaymentsInterface';
import {colors, fonts} from '../config/styles';
import FAB from '../components/fab/FAB';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {currencyFormatter} from '../utils/formatCurrency';

type ScreenProps = StackScreenProps<RouteStackParams, 'PaymentDetailsScreen'>;

interface PaymentsState {
  paymentsData: PaymentResponse[];
}

const PaymentDetailsScreen = ({navigation, route}: ScreenProps) => {
  const {customer} = route.params;

  const {top} = useSafeAreaInsets();

  const phoneNumber = parsePhoneNumber(customer.phone, {defaultCountry: 'US'});

  const [state, setState] = useState<PaymentsState>();

  const getPaymentsData = useCallback(async () => {
    const {data, status} = await httpService.get<PaymentResponse[]>(
      '/payments',
    );

    if (status === 200) {
      setState({
        paymentsData: data,
      });
    }
  }, []);

  useEffect(() => {
    getPaymentsData();
  }, []);

  const getTotalEarnings = () =>
    console.log(
      state?.paymentsData?.filter(payment => payment.userId === customer.id),
    );

  useEffect(() => {
    if (state?.paymentsData!?.length > 0) {
      getTotalEarnings();
    }
  }, [state?.paymentsData]);

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <View style={{paddingHorizontal: 20}}>
        <Header
          leftIcon={<CloseIcon size={12} />}
          leftIconPress={() => navigation.navigate('MainHomeScreen')}
          titleStyle={{
            color: '#000',
          }}
          rightLabel="Archive"
          title={customer.name}
          phoneNumber={phoneNumber?.formatInternational()}
          email={customer.email}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          padding: 10,
          shadowColor: 'rgba(197, 207, 214, 0.25)',
          shadowOffset: {width: 0, height: 1},
          shadowRadius: 0.5,
          shadowOpacity: 1,
          backgroundColor: colors.White,
        }}>
        <Text
          style={{
            textAlign: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 30,
              fontFamily: fonts.MainLatoRegular,
              color: colors.Black,
            }}>
            {currencyFormatter(customer?.revenues, {})}
          </Text>
        </Text>
        <Text style={{fontSize: 13, lineHeight: 15.6}}>Total Earned</Text>
      </View>
      <View style={{flex: 1}}>
        <TopTabs customer={customer} payments={state?.paymentsData!} />
      </View>
      <FAB
        icon={<PlusIcon color="#fff" size={14} />}
        buttonStyles={{
          marginBottom: 60,
          marginRight: 20,
        }}
        onPress={() => console.log('add button pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PaymentDetailsScreen;
