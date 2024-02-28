import React, {useEffect} from 'react';
import {ColorValue} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import AccountNavigator from '../AccountNavigator';
import {ACCOUNT_NAVIGATOR_ROUTES} from '../AccountNavigator/AccountNavigator.interfaces.ts';
import CarrotScreen from '../../../screens/carrot/CarrotScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TAB_BAR_NAVIGATOR_ROUTES,
  TabBarNavigatorParamList,
} from './TabNavigator.interfaces.ts';
import {Imager} from '../../../screens/imager/Imager';

const Tab = createBottomTabNavigator<TabBarNavigatorParamList>();

const PlateScreen = () => null;
const QRScanScreen = () => Imager();
const SearchScreen = () => null;

const TabNavigator = () => {
  const {navigate} = useNavigation();

  useEffect(() => {
    console.log('user token');
    // AsyncStorage.getItem('user').then(userInfo => {
    //   if (userInfo) {
    //     console.log('user token', {userInfo});
    //   } else {
    //     console.log('user token not found');
    //     // @ts-ignore
    //     navigate(TAB_BAR_NAVIGATOR_ROUTES.ACCOUNT);
    //   }
    // });
  }, [navigate]);

  const renderIcon =
    (name: string) =>
    // eslint-disable-next-line react/no-unstable-nested-components
    ({color, size}: {color: ColorValue; size: number}) =>
      <Icon name={name} color={color} size={size} />;
  return (
    <Tab.Navigator
      initialRouteName={TAB_BAR_NAVIGATOR_ROUTES.CARROT}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={TAB_BAR_NAVIGATOR_ROUTES.CARROT}
        component={CarrotScreen}
        options={{
          tabBarIcon: renderIcon('carrot'),
        }}
      />
      <Tab.Screen
        name={TAB_BAR_NAVIGATOR_ROUTES.PLATE}
        component={PlateScreen}
        options={{
          tabBarIcon: renderIcon('food'),
        }}
      />
      <Tab.Screen
        name={TAB_BAR_NAVIGATOR_ROUTES.QRSCAN}
        component={QRScanScreen}
        options={{
          tabBarIcon: renderIcon('qrcode-scan'),
        }}
      />
      <Tab.Screen
        name={TAB_BAR_NAVIGATOR_ROUTES.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: renderIcon('magnify'),
        }}
      />
      <Tab.Screen
        name={TAB_BAR_NAVIGATOR_ROUTES.ACCOUNT}
        component={AccountNavigator}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          console.log(routeName);

          if (routeName === ACCOUNT_NAVIGATOR_ROUTES.PROFILE) {
            return {
              tabBarIcon: renderIcon('account'),
            };
          }
          if (
            routeName === ACCOUNT_NAVIGATOR_ROUTES.LOGIN ||
            routeName === ACCOUNT_NAVIGATOR_ROUTES.REGISTER
          ) {
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
