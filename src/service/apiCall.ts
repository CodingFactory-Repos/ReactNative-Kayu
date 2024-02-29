const apiUrlBarcode = 'https://world.openfoodfacts.org/api/v2/';
const apiUrlSearch = 'https://world.openfoodfacts.org/cgi/search.pl?json=1&search_simple=1&search_terms='

export async function getProductByBarcode(barcode: string) {
  let data = {}, rawJson = {};
  await fetch(`${apiUrlBarcode}product/${barcode}`)
  .then(response => response.json())
  .then(json => rawJson = json);

  data.code = rawJson.code;
  data.name = rawJson.product.product_name;
  data.nutriscore = rawJson.product.nutriscore_grade;
  data.categories = rawJson.product.categories;
  data.nutriments = rawJson.product.nutriments;
  data.energy = rawJson.product.nutriments.energy;
  data.energy100g = rawJson.product.nutriments['energy-kcal_100g'];
  data.image = rawJson.product.image_front_thumb_url;
  data.nutriscore_point = rawJson.product.nutriscore_score;

  return data;
}

export async function getProductByName(productName: string)
{
  if ( productName.length == 0 ) return [];
  let data = [], rawJson = {};
  await fetch(`${apiUrlSearch}${encodeURIComponent(productName)}`)
  .then(response => response.json())
  .catch(err => console.error(err))
  .then(json => rawJson = json);

  for(let i = 0; i < 15; i++)
  {
    let object = {};
    if (!rawJson.products[i].product_name || rawJson.products[i].product_name == '') continue;
    // if(!rawJson.products[i].product_name.toLocaleLowerCase().startsWith(productName.toLocaleLowerCase())) continue;
    object.name = rawJson.products[i].product_name;
    object.nutriscore = rawJson.products[i].nutriscore_grade;
    object.categories = rawJson.products[i].categories;
    object.nutriments = rawJson.products[i].nutriments;
    object.energy = rawJson.products[i].nutriments.energy;
    object.energy100g = rawJson.products[i].nutriments['energy-kcal_100g'];
    object.image = rawJson.products[i].image_front_thumb_url;
    object.nutriscore_point = rawJson.products[i].nutriscore_score;
    data.push(object);
  }

  return data;
}