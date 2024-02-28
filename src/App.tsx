import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCameraPermission} from 'react-native-vision-camera';

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
