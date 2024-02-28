import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const LastScanScreen = () => null;
const PlateScreen = () => null;
const QRScanScreen = () => null;
const SearchScreen = () => null;
const AccountScreen = () => null;

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Veggies"
          component={LastScanScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="carrot" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Plate"
          component={PlateScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="food" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="QRScan"
          component={QRScanScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="qrcode-scan" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="magnify" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="account-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
