import {StyleSheet} from 'react-native';

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
    backgroundColor: '#BB93E5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  innerView: {
    width: '80%',
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'grey',
  },
  passwordInput: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    borderColor: 'grey',
    color: 'black',
  },
  buttonView: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftText: {
    textAlign: 'left',
    width: '50%',
  },
  rightText: {
    textAlign: 'right',
    width: '50%',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    fontSize: 18,
  },
});
