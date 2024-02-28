import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Imager } from './screens/imager/Imager';

const Tab = createBottomTabNavigator();

const LastScanScreen = () => null;
const PlateScreen = () => null;
const QRScanScreen = () => Imager();
const SearchScreen = () => null;
const AccountScreen = () => null;

const App = () => {
  const renderIcon =
    name =>
    ({color, size}) =>
      <Icon name={name} color={color} size={size} />;

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Veggies"
          component={LastScanScreen}
          options={{
            tabBarIcon: renderIcon('carrot'),
          }}
        />
        <Tab.Screen
          name="Plate"
          component={PlateScreen}
          options={{
            tabBarIcon: renderIcon('food'),
          }}
        />
        <Tab.Screen
          name="QRScan"
          component={QRScanScreen}
          options={{
            tabBarIcon: renderIcon('qrcode-scan'),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: renderIcon('magnify'),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: renderIcon('account-circle'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
