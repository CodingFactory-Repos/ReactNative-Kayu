import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useCameraPermission} from 'react-native-vision-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logger} from 'react-native-logs';
import {Provider} from 'react-redux';
import store from './service/redux/store.ts';
import RootNavigator from './components/navigators/RootNavigator/RootNavigator.tsx';

const log = logger.createLogger();

const App = () => {
  const {hasPermission, requestPermission} = useCameraPermission();

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
        // navigator.push('Account');
        log.info('user token not found');
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
