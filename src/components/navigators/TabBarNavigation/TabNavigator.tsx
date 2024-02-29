import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import AccountNavigator from '../AccountNavigator';
import CarrotScreen from '../../../screens/carrot/CarrotScreen';
import {
  TAB_BAR_NAVIGATOR_ROUTES,
  TabBarNavigatorParamList,
} from './TabNavigator.interfaces.ts';
import {Imager} from '../../../screens/imager/Imager';
import CarrotNavigator from "../CarrotNavigator/CarrotNavigator.tsx";

const Tab = createBottomTabNavigator<TabBarNavigatorParamList>();

const PlateScreen = () => null;
const SearchScreen = () => null;

const TabNavigator = () => {
  const {navigate} = useNavigation();

  useEffect(() => {
    console.log('user token');
    // AsyncStorage.getItem('user').then(userInfo => {
    //   if (userInfo) {
    //     console.log('user token', {userInfo});
    //   } else {
    //     console.log('user token not found');
    //     // @ts-ignore
    //     navigate(TAB_BAR_NAVIGATOR_ROUTES.ACCOUNT);
    //   }
    // });
  }, [navigate]);

  return (
    <Tab.Navigator
      initialRouteName={TAB_BAR_NAVIGATOR_ROUTES.CARROT}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={TAB_BAR_NAVIGATOR_ROUTES.CARROT}
        component={CarrotNavigator}
        options={{
          tabBarLabel: 'Last Scan',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_BAR_NAVIGATOR_ROUTES.PLATE}
        component={PlateScreen}
        options={{
          tabBarLabel: 'Plats',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_BAR_NAVIGATOR_ROUTES.QRSCAN}
        component={Imager}
        options={{
          tabBarLabel: 'QRScan',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_BAR_NAVIGATOR_ROUTES.SEARCH}
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_BAR_NAVIGATOR_ROUTES.ACCOUNT}
        component={AccountNavigator}
        options={() => {
          return {
            tabBarStyle: {
              display: 'flex',
            },
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
