import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import ProductItem from './components/productItem/ProductItem.tsx';
import {styles} from './CarrotScreen.styles.ts';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import NutritionInfo from './components/NutritionInfo.tsx';

const CarrotScreen = () => {
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
  }, [productList, selectedProduct]);
  /*
    const fakeProductList = [
      {
        name: 'Carotte',
        categories: ['Légume', 'Bio'],
        ingredients_text: 'Carotte, eau',
        nutriments: {
          carbohydrates: 54,
          proteins: 7,
          fat: 30,
          sugars: 100,
          salt: 0.2,
        },
        image_url:
          'https://images.openfoodfacts.net/images/products/301/762/042/2003/front_en.610.100.jpg',
        nutriscore_score: 3,
        nutriscore_grade: 'c',
      },
      {
        name: 'Carotte',
        categories: ['Légume', 'Bio'],
        ingredients_text: 'Carotte, eau',
        nutriments: {
          carbohydrates: 54,
          proteins: 7,
          fat: 30,
          sugars: 100,
          salt: 0.2,
        },
        image_url:
          'https://images.openfoodfacts.net/images/products/301/762/042/2003/front_en.610.200.jpg',
        nutriscore_score: 3,
        nutriscore_grade: 'c',
      },
      {
        name: 'Carotte',
        categories: ['Légume', 'Bio'],
        ingredients_text: 'Carotte, eau',
        nutriments: {
          carbohydrates: 54,
          proteins: 7,
          fat: 30,
          sugars: 100,
          salt: 0.2,
        },
        image_url:
          'https://images.openfoodfacts.net/images/products/301/762/042/2003/front_en.610.200.jpg',
        nutriscore_score: 3,
        nutriscore_grade: 'c',
      },
    ];
  */
  const renderList = product => {

    console.log('-----------------------------');
    console.log(product);
    console.log('-----------------------------');

    return (
      <TouchableOpacity onPress={() => handlePress(product)}>
        <ProductItem
          title={product.item.name ?? product.name}
          subtitle="Blablatest"
          badgeText="4/100 Mauvais"
          defects={
            product.item.negative_nutrients ?? product.negative_nutrients
          }
          categories={product.item.categories ?? product.categories}
          ingredients_text={
            product.item.ingredients_text ?? product.ingredients_text
          }
          nutriments={product.item.nutriments ?? product.nutriments}
          qualities={
            product.item.positive_nutrients ?? product.positive_nutrients
          }
          image={product.item.image ?? product.image}
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
      ))}
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

export default CarrotScreen;
