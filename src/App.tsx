import React, {useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCameraPermission} from 'react-native-vision-camera';
import {ColorValue} from 'react-native';
import LoginScreen from './screens/login/LoginScreen.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logger} from 'react-native-logs';

const Tab = createBottomTabNavigator();
const log = logger.createLogger();

const LastScanScreen = () => null;
const PlateScreen = () => null;
const QRScanScreen = () => null;
const SearchScreen = () => null;

const App = () => {
  const navigation = useNavigation();
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

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        log.info('user token', {user});
      } else {
        log.error('no user token');
      }
    });
  }, [navigation]);

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
            tabBarStyle: {
              display: 'none',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
