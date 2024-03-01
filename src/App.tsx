import React, {useEffect, useRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import {useCameraPermission} from 'react-native-vision-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logger} from 'react-native-logs';
import {Provider} from 'react-redux';
import store from './service/redux/store.ts';
import RootNavigator from './components/navigators/RootNavigator/RootNavigator.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const log = logger.createLogger();

const App = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const routeNameRef = useRef<string>();

  const navigationRef =
    // eslint-disable-next-line no-undef
    useRef<NavigationContainerRef<ReactNavigation.RootParamList>>(null);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission().then(r => console.log('requested permission', r));
    }
  }, [hasPermission, requestPermission]);

  const onReady = () => {
    routeNameRef.current =
      navigationRef.current?.getCurrentRoute?.()?.name ?? 'UNKNOWN';
  };

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
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer onReady={onReady} ref={navigationRef}>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
