import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    marginLeft: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#4B5563',
    fontSize: 12,
  },
  content: {
    marginTop: 16,
  },

  bottomModal: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
  },
});
