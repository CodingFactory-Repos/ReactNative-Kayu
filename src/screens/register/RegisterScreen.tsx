import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './RegisterScreen.styles.ts';
import {useNavigation} from '@react-navigation/native';
import {ACCOUNT_NAVIGATOR_ROUTES} from '../../components/navigators/AccountNavigator/AccountNavigator.interfaces.ts';
import {logger} from 'react-native-logs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TAB_BAR_NAVIGATOR_ROUTES} from '../../components/navigators/TabBarNavigation/TabNavigator.interfaces.ts';

const RegisterScreen = () => {
  const log = logger.createLogger();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function RedirectToLogin() {
    navigation.navigate(ACCOUNT_NAVIGATOR_ROUTES.LOGIN);
  }

  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password: string): boolean {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }

  function Register() {
    if (!email || !password || !name || !surname) {
      log.error('Email, password, name or surname is empty');
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
      <View style={styles.viewLogin}>
        <Text
          style={styles.loginButton}
          onPress={() => RedirectToLogin()}>
          Se connecter
        </Text>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <View>
              <View style={styles.inputFlex}>
                <TextInput
                  placeholder="Nom"
                  textContentType={'name'}
                  style={styles.nameInput}
                  placeholderTextColor="black"
                  onChangeText={text => setName(text)}
                />
                <TextInput
                  placeholder="Prenom"
                  textContentType={'name'}
                  style={styles.surnameInput}
                  placeholderTextColor="black"
                  onChangeText={text => setSurname(text)}
                />
              </View>
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
            <Text style={styles.buttonText} onPress={() => Register()}>
              Créer mon compte
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default RegisterScreen;
