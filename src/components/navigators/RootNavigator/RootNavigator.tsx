import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabBarNavigation/TabNavigator.tsx';
import {
  ROOT_NAVIGATOR_ROUTE_NAMES,
  RootNavigatorInterfaces,
} from './RootNavigator.interfaces.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthTabNavigator from '../AuthNavigator/AuthTabNavigator.tsx';

const RootStack = createNativeStackNavigator<RootNavigatorInterfaces>();

const RootNavigator = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('user').then(userInfo => {
      if (userInfo) {
        console.log('user token', {userInfo});
        setIsLogged(true);
      } else {
        console.log('user token not found');
      }
    });
  }, [isLogged, setIsLogged]);
  return (
    <RootStack.Navigator
      initialRouteName={
        isLogged
          ? ROOT_NAVIGATOR_ROUTE_NAMES.INITIAL
          : ROOT_NAVIGATOR_ROUTE_NAMES.AUTH
      }
      screenOptions={{
        headerShown: false,
        orientation: 'portrait_up',
      }}>
      <RootStack.Screen
        name={ROOT_NAVIGATOR_ROUTE_NAMES.INITIAL}
        component={TabNavigator}
      />
      <RootStack.Screen
        name={ROOT_NAVIGATOR_ROUTE_NAMES.AUTH}
        component={AuthTabNavigator}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
