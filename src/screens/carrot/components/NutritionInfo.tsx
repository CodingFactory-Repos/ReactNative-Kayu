import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NutritionInfo = ({data}) => {
  const {
    name,
    ingredients_text,
    nutriments,
    ecoscore_score,
    nutriscore_grade,
    item,
  } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name || item.name}</Text>
      <Text style={styles.subtitle}>
        Ingrédients: {ingredients_text || item.ingredients_text}
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informations Nutritionnelles:</Text>
        <Text>
          Carbohydrates:{' '}
          {nutriments?.carbohydrates || item?.nutriments?.carbohydrates}g
        </Text>
        <Text>
          Protéines: {nutriments?.proteins || item?.nutriments?.proteins}g
        </Text>
        <Text>Graisses: {nutriments?.fat || item?.nutriments?.fat}g</Text>
        <Text>Sucres: {nutriments?.sugars || item?.nutriments?.sugars}g</Text>
        <Text>Sel: {nutriments?.salt || item?.nutriments?.salt}g</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Scores:</Text>
        <Text>Eco-Score: {ecoscore_score || item.ecoscore_score}</Text>
        <Text>Nutri-Score: {nutriscore_grade || item.nutriscore_grade}</Text>
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
