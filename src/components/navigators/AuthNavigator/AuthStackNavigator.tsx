import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AUTH_TAB_BAR_NAVIGATOR_ROUTES,
  AuthTabBarNavigatorParamList,
} from './AuthStackNavigator.interfaces.ts';
import LoginScreen from '../../../screens/login/LoginScreen';
import RegisterScreen from '../../../screens/register/RegisterScreen';

const Stack = createNativeStackNavigator<AuthTabBarNavigatorParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AUTH_TAB_BAR_NAVIGATOR_ROUTES.LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={AUTH_TAB_BAR_NAVIGATOR_ROUTES.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        name={AUTH_TAB_BAR_NAVIGATOR_ROUTES.REGISTER}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
