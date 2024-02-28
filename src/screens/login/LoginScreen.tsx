import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './LoginScreen.styles.ts';

const LoginScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <Image
          source={require('../../../assets/kayu.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Welcome back to Kayu</Text>
      </SafeAreaView>
      <View style={styles.view}>
        <View style={styles.innerView}>
          <View>
            <TextInput
              placeholder="Email"
              textContentType={'emailAddress'}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Password"
              textContentType={'password'}
              style={styles.passwordInput}
            />
          </View>
          <View style={styles.buttonView}>
            <View style={styles.row}>
              <Text style={styles.leftText}>Forgot Password?</Text>
              <Text style={styles.rightText}>You don't have an account?</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default LoginScreen;
