import {format, parse} from 'date-fns';
import React from 'react';
import {View, Text, SectionList, StyleSheet, StatusBar} from 'react-native';
import {colors, fonts} from '../config/styles';
import {CustomerResponse} from '../interfaces/CustomersInterface';
import {PaymentResponse} from '../interfaces/PaymentsInterface';

interface Props {
  customer: CustomerResponse;
  payments: PaymentResponse[];
}

const PaymentsDescriptionScreen = ({customer, payments}: Props) => {
  const filteredData = payments?.filter(
    payment => payment.userId === customer.id,
  );

  const statusArr = payments
    ?.map(payment => payment.status)
    .sort((a, b) => a.localeCompare(b));

  const filteredStatusArr = statusArr?.filter(
    (stat, index) => !statusArr.includes(stat, index + 1),
  );
  const DATA =
    filteredStatusArr?.length > 0
      ? filteredStatusArr?.map(status => ({
          title: status,
          data:
            filteredData?.length > 0
              ? filteredData?.filter(payment => payment.status === status)
              : [],
        }))
      : [];

  const Item = ({payment}: {payment: PaymentResponse}) =>
    payment ? (
      <View style={styles.item}>
        <Text style={styles.description}>{payment.description}</Text>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.total}>${payment.amount}</Text>
          <Text style={styles.date}>
            {format(payment.created, 'MMM dd / yyyy')}
          </Text>
        </View>
      </View>
    ) : (
      <View style={{height: 50}} />
    );

  return (
    <View>
      <SectionList
        sections={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Item payment={item} />}
        renderSectionHeader={({section: {title, data}}) => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
        )}
        renderSectionFooter={() => {
          return <View style={{height: 50}} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
  },
  header: {
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
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
  description: {
    fontSize: 16,
    fontFamily: fonts.MainLatoRegular,
    lineHeight: 19.2,
    color: colors.Black,
    fontWeight: '500',
  },
  date: {
    fontFamily: fonts.MainLatoRegular,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
  },
  total: {
    fontFamily: fonts.MainLatoRegular,
    lineHeight: 24,
    color: colors.Black,
    fontWeight: 'normal',
    fontSize: 20,
  },
});

export default PaymentsDescriptionScreen;
