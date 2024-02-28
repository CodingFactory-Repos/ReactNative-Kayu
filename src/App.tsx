import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCameraPermission} from 'react-native-vision-camera';
import {Provider} from 'react-redux';
import store from './service/redux/store.ts';

const Tab = createBottomTabNavigator();

const LastScanScreen = () => null;
const PlateScreen = () => null;
const QRScanScreen = () => null;
const SearchScreen = () => null;
const AccountScreen = () => null;

const App = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const renderIcon =
    name =>
    ({color, size}) =>
      <Icon name={name} color={color} size={size} />;

  useEffect(() => {
    if (!hasPermission) {
      requestPermission().then(r => console.log('requested permission', r));
    }
  }, [hasPermission, requestPermission]);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Veggies"
          component={LastScanScreen}
          options={{
            tabBarIcon: this.renderIcon('carrot'),
          }}
        />
        <Tab.Screen
          name="Plate"
          component={PlateScreen}
          options={{
            tabBarIcon: this.renderIcon('food'),
          }}
        />
        <Tab.Screen
          name="QRScan"
          component={QRScanScreen}
          options={{
            tabBarIcon: this.renderIcon('qrcode-scan'),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: this.renderIcon('magnify'),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: this.renderIcon('account-circle'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
