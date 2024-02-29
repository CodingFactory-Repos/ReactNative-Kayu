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
import {Image, Text, View} from 'react-native';

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
        headerShown: true,
        // Set logo in left side of header
        headerLeft: () => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../../assets/kayu.png')}
              style={{width: 40, height: 40}}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Kayu
            </Text>
          </View>
        ),
        headerRight: () => (
          <Icon
            name="camera"
            size={25}
            color="black"
            style={{marginRight: 10}}
            onPress={() => navigate(TAB_BAR_NAVIGATOR_ROUTES.QRSCAN)}
          />
        ),
        headerTitle: '',
      }}>
      <Tab.Screen
        name={TAB_BAR_NAVIGATOR_ROUTES.CARROT}
        component={CarrotScreen}
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
