import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './LoginScreen.styles.ts';
import {useNavigation} from '@react-navigation/native';
import {ACCOUNT_NAVIGATOR_ROUTES} from '../../components/navigators/AccountNavigator/AccountNavigator.interfaces.ts';
import {logger} from 'react-native-logs';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TAB_BAR_NAVIGATOR_ROUTES} from '../../components/navigators/TabBarNavigation/TabNavigator.interfaces.ts';

const LoginScreen = () => {
  const log = logger.createLogger();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function RedirectToRegister() {
    navigation.navigate(ACCOUNT_NAVIGATOR_ROUTES.REGISTER);
  }

  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password: string): boolean {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }

  function Login() {
    if (!email || !password) {
      log.error('Email or password is empty');
      return;
    }

    if (!validateEmail(email)) {
      log.error('Email is not valid');
      return;
    }

    if (!validatePassword(password)) {
      log.error(
        'Password is not valid. It must contain at least 8 characters, one letter and one number',
      );
      return;
    }

    // Check if user exists in database
    database()
      .app.database(
        'https://kayu-c268c-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref('users/' + email)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          const user = snapshot.val();
          if (user.password === password) {
            log.info('User logged in', {user});
            AsyncStorage.setItem('user', email).then(() => {
              navigation.navigate(TAB_BAR_NAVIGATOR_ROUTES.CARROT);
            });
          } else {
            log.error('Password is incorrect');
          }
        } else {
          log.error('User does not exist');
        }
      });
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
      <View style={styles.viewRegister}>
        <Text
          style={styles.registerButton}
          onPress={() => RedirectToRegister()}>
          S'inscrire
        </Text>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <View>
              <TextInput
                placeholder="Adresse email"
                textContentType={'emailAddress'}
                style={styles.textInput}
                placeholderTextColor="black"
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                placeholder="Mot de passe"
                textContentType={'password'}
                style={styles.passwordInput}
                secureTextEntry={true}
                placeholderTextColor="black"
                onChangeText={text => setPassword(text)}
              />
            </View>
            <View style={styles.buttonView}>
              <View style={styles.row}>
                <Text>Mot de passe oublié?</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => Login()}>
              Se connecter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default LoginScreen;
