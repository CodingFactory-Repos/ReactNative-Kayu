import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../../assets/kayu.png')}
          style={{width: 200, height: 200}}
        />
      </View>
      <View style={{flex: 3}}>
        <Text>Form</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default LoginScreen;
