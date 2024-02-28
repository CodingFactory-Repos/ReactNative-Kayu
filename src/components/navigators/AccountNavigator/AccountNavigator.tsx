import React from 'react';
import {useSelector} from 'react-redux';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Example from '../../../screens/example/example.tsx';
import {ACCOUNT_NAVIGATOR_ROUTES} from './account-navigator.interfaces.ts';

const Stack = createNativeStackNavigator();

export default function AccountNavigator() {
  // @ts-ignore
  const {user} = useSelector(state => state.user);
  return (
    <Stack.Navigator
      initialRouteName={
        user ? ACCOUNT_NAVIGATOR_ROUTES.LOGIN : ACCOUNT_NAVIGATOR_ROUTES.PROFILE
      }
      screenOptions={{
        headerShown: false,
        orientation: 'portrait_up',
      }}>
      <Stack.Screen name={ACCOUNT_NAVIGATOR_ROUTES.LOGIN} component={Example} />
      <Stack.Screen
        name={ACCOUNT_NAVIGATOR_ROUTES.PROFILE}
        component={Example}
      />
    </Stack.Navigator>
  );
}
