const apiUrl = 'https://world.openfoodfacts.org/api/v2/product/';

interface positive_nutrients {
  2023: {
    positive_nutrients: string[];
    negative_nutrients: string[];
  };
}
export async function getProduct(barcode: string) {
  console.log('getProduct', barcode);
  const response = await fetch(apiUrl + barcode);
  const json = await response.json();

  let data = {};
  data.code = json.code;
  data.name = json.product.product_name;
  data.categories = json.product.categories;
  data.nutriments = json.product.nutriments;
  data.ingredients_text = json.product.ingredients_text_fr;
  data.energy = json.product.nutriments.energy;
  data.energy100g = json.product.nutriments['energy-kcal_100g'];
  data.positive_nutrients = json.product.nutriscore['2023'].positive_nutrients;
  data.negative_nutrients = json.product.nutriscore['2023'].negative_nutrients;
  data.nutriscore_score = json.product.nutriscore_score;
  data.nutriscore_grade = json.product.nutriscore_grade;

  return data;
}
