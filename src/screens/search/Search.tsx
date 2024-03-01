import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {getProductByName} from '../../service/apiCall';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import NutritionInfo from '../carrot/components/NutritionInfo.tsx';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isBottomSheetModalVisible, setBottomSheetModalVisible] =
    useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) setBottomSheetModalVisible(false);
  }, []);

  const handlePress = item => {
    console.log(item);
    
    setBottomSheetModalVisible(true);
    bottomSheetRef.current?.expand();
    setSelectedProduct(item);
  };

  async function searchForProduct(productName: string) {
    let products = await getProductByName(productName);
    setProducts(products);
  }

  const renderProducts = () => {
    return products.map((product, index) => (
      <TouchableOpacity
        key={index}
        style={styles.card}
        onPress={() => handlePress(product)}>
        <View style={styles.header}>
          <Image style={styles.image} source={{uri: product.image}} />
          <View style={styles.headerText}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.subtitle}>{product.energy100g}kg</Text>
          </View>
          <Text style={styles.badge}>
            {product.nutriscore_grade} - "{product.nutriscore_score}/100"
          </Text>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <TextInput
        placeholder="Search a product..."
        style={styles.input}
        onChangeText={text => {
          setQuery(text);
          if (text == '') setProducts([]);
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setProducts([]);
          searchForProduct(query);
        }}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <ScrollView>{renderProducts()}</ScrollView>

      {isBottomSheetModalVisible && (
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={['50%', '80%']}
          enablePanDownToClose={true}
          style={styles.bottomModal}>
          <BottomSheetView>
            <NutritionInfo data={selectedProduct} />
          </BottomSheetView>
        </BottomSheet>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    borderRadius: 20,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    margin: '5%',
    padding: 10,
  },
  button: {
    backgroundColor: '#4B5563',
    marginHorizontal: '30%',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
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
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: '#4B5563',
    fontSize: 14,
  },
  badge: {
    backgroundColor: '#FECACA',
    color: '#B91C1C',
    borderRadius: 20,
    padding: 4,
    fontSize: 12,
  },
  bottomModal: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
  },
});

export default Search;
