const apiUrlBarcode = 'https://world.openfoodfacts.org/api/v2/';
const apiUrlSearch =
  'https://world.openfoodfacts.org/cgi/search.pl?json=1&search_simple=1&search_terms=';

export async function getProductByBarcode(barcode: string) {
  let data = {},
    rawJson = {};
  await fetch(`${apiUrlBarcode}product/${barcode}`)
    .then(response => response.json())
    .then(json => (rawJson = json));
  data.code = rawJson.code;
  data.name = rawJson.product.product_name;
  data.categories = rawJson.product.categories;
  data.nutriments = rawJson.product.nutriments;
  data.energy = rawJson.product.nutriments.energy;
  data.energy100g = rawJson.product.nutriments['energy-kcal_100g'];
  data.positive_nutrients = rawJson.product.nutriscore['2023'].data.positive_nutrients;
  data.negative_nutrients = rawJson.product.nutriscore['2023'].data.negative_nutrients ? rawJson.product.nutriscore['2023'].data.negative_nutrients : [];
  data.nutriscore_score = rawJson.product.nutriscore_score;
  data.nutriscore_grade = rawJson.product.nutriscore_grade;
  data.image = rawJson.product.image_front_thumb_url;
  data.ingredients_text = rawJson.product.ingredients_text;

  console.log(data);
  
  return data;
}

export async function getProductByName(productName: string) {
  if (productName.length == 0) return [];
  let data = [],
    rawJson = {};
  await fetch(`${apiUrlSearch}${encodeURIComponent(productName)}`)
    .then(response => response.json())
    .catch(err => console.error(err))
    .then(json => (rawJson = json));

  for (let i = 0; i <= 15; i++) {
    let object = {};
    if (
      !rawJson.products[i].product_name ||
      rawJson.products[i].product_name == ''
    )
      continue;

    let alreadyPresent = false;
    // no foreach, because we want to use break;
    for (let j = 0; j < data.length; j++) {
      if (
        j < data.length &&
        data[j].name.toLocaleLowerCase() ==
          rawJson.products[i].product_name.toLocaleLowerCase()
      ) {
        alreadyPresent = true;
        break;
      }
    }

    if (alreadyPresent) continue;

    object.name = rawJson.products[i].product_name;
    object.categories = rawJson.products[i].categories;
    object.nutriments = rawJson.products[i].nutriments;
    object.energy = rawJson.products[i].nutriments.energy;
    object.energy100g = rawJson.products[i].nutriments['energy-kcal_100g'];
    object.positive_nutrients =
      rawJson.products[i].nutriscore['2023'].positive_nutrients;
    object.negative_nutrients =
      rawJson.products[i].nutriscore['2023'].negative_nutrients;
    object.nutriscore_score = rawJson.products[i].nutriscore_score;
    object.nutriscore_grade = rawJson.products[i].nutriscore_grade;
    object.image = rawJson.products[i].image_front_thumb_url;
    object.ingredients_text = rawJson.products[i].ingredients_text;

    data.push(object);
  }

  return data;
}
