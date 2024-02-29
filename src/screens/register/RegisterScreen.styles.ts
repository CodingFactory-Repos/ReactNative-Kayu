import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors.ts';

const baseTextInput = {
  borderWidth: 1,
  padding: 10,
  borderRadius: 10,
  borderColor: 'gray',
};

export const styles = StyleSheet.create({
  safeAreaView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  view: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
  },
  viewLogin: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  innerView: {
    width: '80%',
  },
  textInput: {
    ...baseTextInput,
    marginTop: 20,
  },
  passwordInput: {
    ...baseTextInput,
    marginTop: 20,
    color: 'black',
  },
  nameInput: {
    ...baseTextInput,
    width: '49%',
  },
  surnameInput: {
    ...baseTextInput,
    width: '49%',
  },
  inputFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonView: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    textAlign: 'center',
    backgroundColor: 'white',
    marginTop: 50,
  },
  loginButton: {
    width: '100%',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 18,
  },
});
