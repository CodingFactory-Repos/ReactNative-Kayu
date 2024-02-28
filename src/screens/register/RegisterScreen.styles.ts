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
    marginTop: 20,
  },
  innerView: {
    width: '80%',
  },
  textInput: {
    ...baseTextInput,
  },
  passwordInput: {
    ...baseTextInput,
    marginTop: 10,
    // Retiré color: 'black', si noir est déjà la couleur de texte par défaut
  },
  buttonView: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightText: {
    textAlign: 'right',
    width: '100%',
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
