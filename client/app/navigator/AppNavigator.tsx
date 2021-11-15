import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from '../screens/HomeScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import {HomeIcon, MoneyIcon, RoutesIcon, StatsIcon} from '../components/icons';
import {colors, fonts} from '../config/styles';
import PaymentDetailsScreen from '../screens/PaymentDetailsScreen';
import {CustomerResponse} from '../interfaces/CustomersInterface';
import PaymentsDescriptionScreen from '../screens/PaymentsDescription';
import SessionsScreen from '../screens/SessionsScreen';
import {PaymentResponse} from '../interfaces/PaymentsInterface';

const screens = [
  {
    screenName: 'Home',
    routeName: 'HomeScreen',
    component: HomeScreen,
    icon: (color: string) => <HomeIcon color={color} />,
  },
  {
    screenName: 'Transactions',
    routeName: 'TransactionsScreen',
    component: TransactionsScreen,
    icon: (color: string) => <RoutesIcon color={color} />,
  },
  {
    screenName: 'Analytics',
    routeName: 'AnalyticsScreen',
    component: AnalyticsScreen,
    icon: (color: string) => <StatsIcon color={color} />,
  },
  {
    screenName: 'Payments',
    routeName: 'PaymentsScreen',
    component: PaymentsScreen,
    icon: (color: string) => <MoneyIcon color={color} />,
  },
];

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontWeight: '500',
          textTransform: 'uppercase',
          lineHeight: 12.89,
          fontSize: 11,
        },
        tabBarActiveTintColor: colors.Primary,
        tabBarInactiveTintColor: colors.Accent,
        tabBarStyle: {
          borderTopColor: 'transparent',
          elevation: 0,
          marginBottom: Platform.OS === 'android' ? 10 : 0,
        },
        tabBarHideOnKeyboard: true,
      }}
      sceneContainerStyle={{
        backgroundColor: colors.White,
        paddingTop: top,
        // paddingHorizontal: 20,
      }}>
      {screens.map(screen => (
        <Tab.Screen
          key={screen.routeName}
          name={screen.routeName}
          component={screen.component}
          options={{
            tabBarIcon: ({color}) => screen.icon(color),
            title: screen.screenName,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

// use types whenever you know are not going to be extended or not sure if can expand or not
export type RouteStackParams = {
  MainHomeScreen: undefined;
  PaymentDetailsScreen: {customer: CustomerResponse};
};

const Stack = createStackNavigator<RouteStackParams>();

const StackNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.White,
        },
      }}>
      <Stack.Screen name="MainHomeScreen" component={TabNavigator} />
      <Stack.Screen
        name="PaymentDetailsScreen"
        component={PaymentDetailsScreen}
      />
    </Stack.Navigator>
  );
};

interface Props {
  customer: CustomerResponse;
  payments: PaymentResponse[];
}

const TopTab = createMaterialTopTabNavigator();

export const TopTabs = ({customer, payments}: Props) => {
  return (
    <TopTab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.White,
        borderTopWidth: 0,
        padding: 20,
      }}
      screenOptions={{
        tabBarInactiveTintColor: '#C4C4C4',
        tabBarActiveTintColor: colors.Black,
        tabBarStyle: {
          shadowColor: 'transparent',
        },
        tabBarIndicatorStyle: {
          width: 100,
          left: (Dimensions.get('window').width / 2 - 100) / 2,
          backgroundColor: colors.Primary,
          marginBottom: 5,
        },
      }}>
      <TopTab.Screen
        name="PaymentsDescriptionScreen"
        children={() => (
          <PaymentsDescriptionScreen customer={customer} payments={payments} />
        )}
        options={{
          title: 'Payments',
          tabBarLabelStyle: {
            fontFamily: fonts.MainLatoRegular,
            fontSize: 16,
            fontWeight: '400',
          },
        }}
      />
      <TopTab.Screen
        name="SessionsScreen"
        component={SessionsScreen}
        options={{
          title: 'Sessions',
          tabBarLabelStyle: {
            fontFamily: fonts.MainLatoRegular,
            fontSize: 16,
            fontWeight: '400',
          },
        }}
      />
    </TopTab.Navigator>
  );
};

export default StackNavigator;
