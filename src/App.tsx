import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Provider} from 'react-redux';

// import {NavigationContainer} from '@react-navigation/native';
// import TabNavigator from './components/navigators/TabNavigator.tsx';
import {useCameraPermission} from 'react-native-vision-camera';
import store from './service/redux/store.ts';

const App = () => {
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission().then(r => console.log('requested permission', r));
    }
  }, [hasPermission, requestPermission]);

  return (
    <SafeAreaView style={styles.screen}>
      <Provider store={store}>
        <Text>App</Text>
        {/*<NavigationContainer>*/}
        {/*  <TabNavigator />*/}
        {/*</NavigationContainer>*/}
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
