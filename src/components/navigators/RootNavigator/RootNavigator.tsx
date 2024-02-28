import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabBarNavigation/TabNavigator.tsx';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
        orientation: 'portrait_up',
      }}>
      <RootStack.Screen name={'Initial'} component={TabNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
