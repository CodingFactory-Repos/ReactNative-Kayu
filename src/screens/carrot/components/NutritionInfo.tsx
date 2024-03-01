import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NutritionInfo = ({data}) => {
  const {
    product_name,
    ingredients_text,
    nutriments,
    ecoscore_score,
    nutriscore_grade,
  } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product_name}</Text>
      <Text style={styles.subtitle}>Ingrédients: {ingredients_text}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informations Nutritionnelles:</Text>
        <Text>Carbohydrates: {nutriments.carbohydrates}g</Text>
        <Text>Protéines: {nutriments.proteins}g</Text>
        <Text>Graisses: {nutriments.fat}g</Text>
        <Text>Sucres: {nutriments.sugars}g</Text>
        <Text>Sel: {nutriments.salt}g</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Scores:</Text>
        <Text>Eco-Score: {ecoscore_score}</Text>
        <Text>Nutri-Score: {nutriscore_grade}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginVertical: 10,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});

export default NutritionInfo;
