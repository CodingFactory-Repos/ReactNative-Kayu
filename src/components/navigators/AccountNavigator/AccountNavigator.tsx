import React from 'react';
import {useSelector} from 'react-redux';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Example from '../../../screens/example/example.tsx';
import {
  ACCOUNT_NAVIGATOR_ROUTES,
  AccountNavigatorParamList,
} from './AccountNavigator.interfaces.ts';
import LoginScreen from '../../../screens/login/LoginScreen.tsx';

const Stack = createNativeStackNavigator<AccountNavigatorParamList>();

export default function AccountNavigator() {
  // @ts-ignore
  const {user} = useSelector(state => state.user);
  if (user) {
    return (
      <Stack.Navigator
        initialRouteName={ACCOUNT_NAVIGATOR_ROUTES.PROFILE}
        screenOptions={{
          headerShown: false,
          orientation: 'portrait_up',
        }}>
        <Stack.Screen
          name={ACCOUNT_NAVIGATOR_ROUTES.PROFILE}
          component={Example}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator
      initialRouteName={ACCOUNT_NAVIGATOR_ROUTES.LOGIN}
      screenOptions={{
        headerShown: false,
        orientation: 'portrait_up',
      }}>
      <Stack.Screen
        name={ACCOUNT_NAVIGATOR_ROUTES.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        name={ACCOUNT_NAVIGATOR_ROUTES.REGISTER}
        component={Example}
      />
    </Stack.Navigator>
  );
}
