import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import NutritionInfo from './NutritionInfo';

const fakeApiData = {
  product_name: 'Ourson Chocolat',
  ingredients_text: 'Cacao, sucre, lait',
  nutriments: {
    carbohydrates: 54,
    proteins: 7,
    fat: 30,
    sugars: 100,
    salt: 0.2,
  },
  ecoscore_score: '75',
  nutriscore_grade: 'B',
};

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <NutritionInfo data={fakeApiData} />
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
