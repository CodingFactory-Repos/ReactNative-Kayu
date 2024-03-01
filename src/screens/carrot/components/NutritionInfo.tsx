import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const NutritionInfo = ({data}) => {
  console.log('data', data);
  const {
    name,
    ingredients_text,
    nutriments,
    nutriscore_score,
    nutriscore_grade,
    item,
    image,
  } = data;

  return (
    <>
      {item ? (
        <View style={styles.container}>
          <View style={styles.upperPartContainer}>
            <Image style={styles.image} source={{uri: image}} />
            <Text style={styles.title}>{item.name}</Text>
          </View>
          <View style={styles.subtitle}>
            <Text style={{fontWeight: 'bold'}}>Ingrédients:</Text>
            <Text>{item.ingredients_text}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Informations Nutritionnelles:
            </Text>
            <Text>Carbohydrates: {item.nutriments?.carbohydrates}g</Text>
            <Text>Protéines: {item.nutriments?.proteins}g</Text>
            <Text>Graisses: {item.nutriments?.fat}g</Text>
            <Text>Sucres: {item.nutriments?.sugars}g</Text>
            <Text>Sel: {item.nutriments?.salt}g</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Scores:</Text>
            <Text>Eco-Score: {item.nutriscore_score} / 100</Text>
            <Text>Nutri-Score: {item.nutriscore_grade}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.upperPartContainer}>
            <Image style={styles.image} source={{uri: image}} />
            <Text style={styles.title}>{name}</Text>
          </View>
          <View style={styles.subtitle}>
            <Text style={{fontWeight: 'bold'}}>Ingrédients:</Text>
            <Text>{ingredients_text}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Informations Nutritionnelles:
            </Text>
            <Text>Carbohydrates: {nutriments?.carbohydrates}g</Text>
            <Text>Protéines: {nutriments?.proteins}g</Text>
            <Text>Graisses: {nutriments?.fat}g</Text>
            <Text>Sucres: {nutriments?.sugars}g</Text>
            <Text>Sel: {nutriments?.salt}g</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Scores:</Text>
            <Text>Eco-Score: {nutriscore_score} / 100</Text>
            <Text>Nutri-Score: {nutriscore_grade}</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  upperPartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
  },
  subtitle: {
    fontSize: 14,
    marginVertical: 10,
    flexDirection: 'column',
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});

export default NutritionInfo;
