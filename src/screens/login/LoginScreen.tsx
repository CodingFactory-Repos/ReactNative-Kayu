import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../../assets/kayu.png')}
          style={{width: 200, height: 200}}
        />
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>
          Welcome back to Kayu
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Login</Text>

        <View style={{width: '80%'}}>
          <View>
            <TextInput
              placeholder="Email"
              style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                borderColor: 'grey',
              }}
            />
            <TextInput
              placeholder="Password"
              style={{
                borderWidth: 1,
                padding: 10,
                marginTop: 10,
                borderRadius: 10,
                borderColor: 'grey',
              }}
            />
          </View>
          <View style={{width: '80%', marginTop: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{textAlign: 'left', width: '50%'}}>
                Forgot Password?
              </Text>
              <Text style={{textAlign: 'right', width: '50%'}}>
                You don't have an account?
              </Text>
            </View>
            <Button title="Login" />
          </View>
        </View>
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
