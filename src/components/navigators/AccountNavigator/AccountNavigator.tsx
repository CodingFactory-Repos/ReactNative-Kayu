import React from 'react';
import {useSelector} from 'react-redux';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ACCOUNT_NAVIGATOR_ROUTES,
  AccountNavigatorParamList,
} from './AccountNavigator.interfaces.ts';
import ProfileScreen from '../../../screens/profile/ProfileScreen';

const Stack = createNativeStackNavigator<AccountNavigatorParamList>();

export default function AccountNavigator() {
  // @ts-ignore
  const {user} = useSelector(state => state.user);
  console.log('user token', {user});

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
          component={ProfileScreen}
        />
      </Stack.Navigator>
    );
  }
}
