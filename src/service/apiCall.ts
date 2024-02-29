const apiUrl = 'https://world.openfoodfacts.org/api/v2/product/';

export async function getProduct(barcode: string) {
  const response = await fetch(apiUrl + barcode);
  const json = await response.json();

  let data = {};
  data.code = json.code;
  data.name = json.product.product_name;
  data.categories = json.product.categories;
  data.nutriments = json.product.nutriments;
  data.energy = json.product.nutriments.energy;
  data.energy100g = json.product.nutriments['energy-kcal_100g'];
  data.image_front_small_url = json.product.image_front_small_url;
  data.nutriscore_score = json.product.nutriscore_score;
  data.nutriscore_grade = json.product.nutriscore_grade;

  return data;
}
