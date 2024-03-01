import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabBarNavigation/TabNavigator.tsx';
import {
  ROOT_NAVIGATOR_ROUTE_NAMES,
  RootNavigatorInterfaces,
} from './RootNavigator.interfaces.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStackNavigator from '../AuthNavigator/AuthStackNavigator.tsx';
import {login} from '../../../service/redux/slices/userSlice.ts';

const RootStack = createNativeStackNavigator<RootNavigatorInterfaces>();

const RootNavigator = () => {
  const {isAuth} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        setIsLogged(true);
        console.log('user token', {user});
        dispatch(login({email: user}));
      }
    });
  }, [isLogged, setIsLogged]);

  useEffect(() => {
    if (isAuth) {
      setIsLogged(true);
    }
  }, [isAuth]);

  if (!isLogged) {
    return (
      <RootStack.Navigator
        initialRouteName={ROOT_NAVIGATOR_ROUTE_NAMES.AUTH}
        screenOptions={{
          headerShown: false,
          orientation: 'portrait_up',
        }}>
        <RootStack.Screen
          name={ROOT_NAVIGATOR_ROUTE_NAMES.AUTH}
          component={AuthStackNavigator}
        />
      </RootStack.Navigator>
    );
  } else {
    return (
      <RootStack.Navigator
        initialRouteName={ROOT_NAVIGATOR_ROUTE_NAMES.INITIAL}
        screenOptions={{
          headerShown: false,
          orientation: 'portrait_up',
        }}>
        <RootStack.Screen
          name={ROOT_NAVIGATOR_ROUTE_NAMES.INITIAL}
          component={TabNavigator}
        />
      </RootStack.Navigator>
    );
  }
};

export default RootNavigator;
