const apiUrl = 'https://world.openfoodfacts.org/api/v2/product/';

export async function getProduct(barcode: string) {
  const response = await fetch(apiUrl + barcode);
  const json = await response.json();

  let data = {};
  data.code = json.code;
  data.name = json.product.product_name;
  data.nutriscore = json.product.nutriscore_grade;
  data.categories = json.product.categories;
  data.nutriments = json.product.nutriments;
  data.energy = json.product.nutriments.energy;
  data.energy100g = json.product.nutriments['energy-kcal_100g'];
  data.image = json.product.image_front_thumb_url;
  data.nutriscore_point = json.product.nutriscore_score;

  return data;
}
