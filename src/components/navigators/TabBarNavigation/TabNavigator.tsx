import React, {useEffect} from 'react';
import {ColorValue} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountNavigator from '../AccountNavigator';
import {ACCOUNT_NAVIGATOR_ROUTES} from '../AccountNavigator/account-navigator.interfaces.ts';
import CarrotScreen from '../../../screens/carrot/CarrotScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const PlateScreen = () => null;
const QRScanScreen = () => null;
const SearchScreen = () => null;

const TabNavigator = () => {
  const {navigate} = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('user').then(userInfo => {
      if (userInfo) {
        console.log('user token', {userInfo});
      } else {
        console.log('user token not found');
        // @ts-ignore
        navigate('Account');
      }
    });
  }, [navigate]);

  const renderIcon =
    (name: string) =>
    // eslint-disable-next-line react/no-unstable-nested-components
    ({color, size}: {color: ColorValue; size: number}) =>
      <Icon name={name} color={color} size={size} />;
  return (
    <Tab.Navigator initialRouteName="Carrot">
      <Tab.Screen
        name="Carrot"
        component={CarrotScreen}
        options={{
          tabBarIcon: renderIcon('carrot'),
        }}
      />
      <Tab.Screen
        name="Plate"
        component={PlateScreen}
        options={{
          tabBarIcon: renderIcon('food'),
        }}
      />
      <Tab.Screen
        name="QRScan"
        component={QRScanScreen}
        options={{
          tabBarIcon: renderIcon('qrcode-scan'),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: renderIcon('magnify'),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          if (routeName === ACCOUNT_NAVIGATOR_ROUTES.LOGIN) {
            console.log('routeName', routeName);
            return {
              tabBarStyle: {
                display: 'none',
              },
            };
          }

          return {
            tabBarStyle: {
              display: 'flex',
            },
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
