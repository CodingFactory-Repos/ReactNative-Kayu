import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {CARROT_NAVIGATOR_ROUTES} from '../../components/navigators/CarrotNavigator/CarrotNavigator.interfaces.ts';

interface ProductItemProps {
  title: string;
  subtitle: string;
  badgeText: string;
  defects: string[];
  qualities: string[];
  img: string;
}

const ProductItem = ({
  title,
  subtitle,
  badgeText,
  defects,
  qualities,
  img,
}: ProductItemProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image style={styles.image} source={{uri: img}} />
        <View style={styles.headerText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Text style={styles.badge}>{badgeText}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Défauts</Text>
        {defects.map((defect, index) => (
          <View key={index} style={styles.listItem}>
            <Icon name="circle" size={10} color="#EF4444" />
            <Text style={styles.listText}>{defect}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Qualités</Text>
        {qualities.map((quality, index) => (
          <View key={index} style={styles.listItem}>
            <Icon name="circle" size={10} color="#10B981" />
            <Text style={styles.listText}>{quality}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const CarrotScreen = ({route}) => {
  const {product} = route.params;

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(CARROT_NAVIGATOR_ROUTES.MOCK);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {product && product.name && (
          <ProductItem
            title={product.name}
            subtitle="Blablatest"
            badgeText="4/100 Mauvais"
            defects={['Additifs', 'Sucre']}
            qualities={['Protéines', 'Fibres', 'Graisses saturées']}
            img={product.images}
          />
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
            <Text style={styles.buttonText}>Détails</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#4B5563',
    fontSize: 12,
  },
  badge: {
    backgroundColor: '#FECACA',
    color: '#B91C1C',
    borderRadius: 9999,
    padding: 4,
  },
  content: {
    marginTop: 16,
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
});

export default CarrotScreen;
