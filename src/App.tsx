import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCameraPermission} from 'react-native-vision-camera';
import {ColorValue} from 'react-native';
import LoginScreen from './screens/login/LoginScreen.tsx';

const Tab = createBottomTabNavigator();

const LastScanScreen = () => null;
const PlateScreen = () => null;
const QRScanScreen = () => null;
const SearchScreen = () => null;

const App = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const renderIcon =
    (name: string) =>
    // eslint-disable-next-line react/no-unstable-nested-components
    ({color, size}: {color: ColorValue; size: number}) =>
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
          component={LoginScreen}
          options={{
            tabBarIcon: renderIcon('account-circle'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
