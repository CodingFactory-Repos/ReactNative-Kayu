import React from 'react';
import {ColorValue} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  AUTH_TAB_BAR_NAVIGATOR_ROUTES,
  AuthTabBarNavigatorParamList,
} from './AuthTabNavigator.interfaces.ts';
import LoginScreen from '../../../screens/login/LoginScreen';
import RegisterScreen from '../../../screens/register/RegisterScreen';

const Tab = createBottomTabNavigator<AuthTabBarNavigatorParamList>();

const AuthTabNavigator = () => {
  const renderIcon =
    (name: string) =>
    // eslint-disable-next-line react/no-unstable-nested-components
    ({color, size}: {color: ColorValue; size: number}) =>
      <Icon name={name} color={color} size={size} />;
  return (
    <Tab.Navigator
      initialRouteName={AUTH_TAB_BAR_NAVIGATOR_ROUTES.LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={AUTH_TAB_BAR_NAVIGATOR_ROUTES.LOGIN}
        component={LoginScreen}
        options={{
          tabBarIcon: renderIcon('login'),
        }}
      />
      <Tab.Screen
        name={AUTH_TAB_BAR_NAVIGATOR_ROUTES.REGISTER}
        component={RegisterScreen}
        options={{
          tabBarIcon: renderIcon('account-plus'),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthTabNavigator;
