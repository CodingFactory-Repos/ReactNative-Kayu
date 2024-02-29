import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  CARROT_NAVIGATOR_ROUTES,
  CarrotNavigatorParamList,
} from './CarrotNavigator.interfaces.ts';
// import NutritionScreen from '../../../screens/carrot/components/NutritionInfo.tsx';
import MockScreen from '../../../screens/carrot/components/MockApiComponent.tsx';
import CarrotScreen from '../../../screens/carrot/CarrotScreen.tsx';

const Stack = createNativeStackNavigator<CarrotNavigatorParamList>();

const CarrotNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={CARROT_NAVIGATOR_ROUTES.CARROT}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={CARROT_NAVIGATOR_ROUTES.CARROT}
        component={CarrotScreen}
      />
      {/*<Stack.Screen*/}
      {/*  name={CARROT_NAVIGATOR_ROUTES.NUTRITION}*/}
      {/*  component={NutritionScreen}*/}
      {/*/>*/}
      <Stack.Screen
        name={CARROT_NAVIGATOR_ROUTES.MOCK}
        component={MockScreen}
      />
    </Stack.Navigator>
  );
};

export default CarrotNavigator;
