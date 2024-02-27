import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      {/*      <NavigationContainer>*/}
      {/*/!* Add your navigators here *!/*/}
      {/*      </NavigationContainer>*/}
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
