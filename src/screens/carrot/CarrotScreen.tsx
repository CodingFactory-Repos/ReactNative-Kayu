import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ProductItem from './components/productItem/ProductItem.tsx';
import {styles} from './CarrotScreen.styles.ts';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import NutritionInfo from './components/NutritionInfo.tsx';
import {setProduct} from '../../service/redux/slices/productSlice.ts';

const CarrotScreen = () => {
  const dispatch = useDispatch();
  const {productList} = useSelector(state => state.product);
  const [isBottomSheetModalVisible, setBottomSheetModalVisible] =
    useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) setBottomSheetModalVisible(false);
  }, []);

  const handlePress = item => {
    setBottomSheetModalVisible(true);
    bottomSheetRef.current?.expand();
    setSelectedProduct(item);
  };

  useEffect(() => {
    console.log('product', productList);
  }, [productList]);

  const fakeProductList = [
    {
      name: 'Carotte',
      categories: ['Légume', 'Bio'],
      nutriments: {
        carbohydrates: 54,
        proteins: 7,
        fat: 30,
        sugars: 100,
        salt: 0.2,
      },
      image_front_small_url:
        'https://static.openfoodfacts.org/images/products/327/655/000/5003/front_fr.3.200.jpg',
      nutriscore_score: 3,
      nutriscore_grade: 'c',
    },
    {
      name: 'Carotte',
      categories: ['Légume', 'Bio'],
      nutriments: {
        carbohydrates: 54,
        proteins: 7,
        fat: 30,
        sugars: 100,
        salt: 0.2,
      },
      image_front_small_url:
        'https://static.openfoodfacts.org/images/products/327/655/000/5003/front_fr.3.200.jpg',
      nutriscore_score: 3,
      nutriscore_grade: 'c',
    },
    {
      name: 'Carotte',
      categories: ['Légume', 'Bio'],
      nutriments: {
        carbohydrates: 54,
        proteins: 7,
        fat: 30,
        sugars: 100,
        salt: 0.2,
      },
      image_front_small_url:
        'https://static.openfoodfacts.org/images/products/327/655/000/5003/front_fr.3.200.jpg',
      nutriscore_score: 3,
      nutriscore_grade: 'c',
    },
  ];

  const renderList = product => {
    return (
      <TouchableOpacity onPress={() => handlePress(product)}>
        <ProductItem
          title={product.item.name ?? product.name}
          subtitle="Blablatest"
          badgeText="4/100 Mauvais"
          defects={['Additifs', 'Sucre']}
          categories={product.item.categories ?? product.categories}
          nutriments={product.item.nutriments ?? product.nutriments}
          qualities={['Protéines', 'Fibres', 'Graisses saturées']}
          image_front_small_url={
            product.item.image_front_small_url ?? product.image_front_small_url
          }
          nutriscore_score={
            product.item.nutriscore_score ?? product.nutriscore_score
          }
          nutriscore_grade={
            product.item.nutriscore_grade ?? product.nutriscore_grade
          }
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      {(productList && productList[0] && (
        <FlatList
          data={productList}
          renderItem={renderList}
          keyExtractor={(item, index) => index.toString()}
        />
      )) ?? (
        <FlatList
          data={fakeProductList}
          renderItem={renderList}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
          <Text style={styles.buttonText}>Détails</Text>
        </TouchableOpacity>
      </View>
      {isBottomSheetModalVisible && (
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={['50%']}
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

export default CarrotScreen;
