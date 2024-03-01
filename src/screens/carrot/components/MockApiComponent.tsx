import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NutritionInfo from './NutritionInfo';
import { CARROT_NAVIGATOR_ROUTES } from '../../../components/navigators/CarrotNavigator/CarrotNavigator.interfaces.ts';
import { useSelector } from 'react-redux';

const fakeApiData = {
  image_url: 'https://fakeimg.pl/300/',
  product_name: 'Ourson Chocolat',
  ingredients_text: 'Cacao, sucre, lait',
  nutriments: {
    carbohydrates: 54,
    proteins: 7,
    fat: 30,
    sugars: 100,
    salt: 0.2,
  },
  nutriscore_score: 75,
  nutriscore_grade: 'B',
};
const App = () => {
  const {product} = useSelector(state => state.product);
  const {goBack} = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={() => goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
        {/* <NutritionInfo data={fakeApiData} /> */}
        <NutritionInfo data={product} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 20,
  },
});

export default App;
