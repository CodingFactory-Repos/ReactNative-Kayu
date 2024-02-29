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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TAB_BAR_NAVIGATOR_ROUTES} from '../../components/navigators/TabBarNavigation/TabNavigator.interfaces.ts';
import {validateEmail, validatePassword} from '../../utils/validationUtils.ts';

const LoginScreen = () => {
  const log = logger.createLogger();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function RedirectToRegister() {
    navigation.navigate(ACCOUNT_NAVIGATOR_ROUTES.REGISTER);
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

    AsyncStorage.setItem('user', email).then(() => {
      navigation.navigate(TAB_BAR_NAVIGATOR_ROUTES.CARROT);
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
