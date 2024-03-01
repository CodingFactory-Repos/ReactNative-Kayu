import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#FECACA',
    color: '#B91C1C',
    borderRadius: 9999,
    padding: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
  sectionTitle: {
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  listText: {
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
});
