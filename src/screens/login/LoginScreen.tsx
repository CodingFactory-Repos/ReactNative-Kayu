import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {logger} from 'react-native-logs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {styles} from './LoginScreen.styles.ts';
import {useNavigation} from '@react-navigation/native';
import {ACCOUNT_NAVIGATOR_ROUTES} from '../../components/navigators/AccountNavigator/AccountNavigator.interfaces.ts';

const LoginScreen = () => {
  const navigation = useNavigation();

  function RedirectToRegister() {
    navigation.navigate(ACCOUNT_NAVIGATOR_ROUTES.REGISTER);
  }

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
              <Text
                style={styles.rightText}
                onPress={() => RedirectToRegister()}>
                Don't have an account?
              </Text>
            </View>
            <View style={styles.buttonView}>
              <View style={styles.row}>
                <Text>Mot de passe oublié?</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => Login()}>
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default LoginScreen;
