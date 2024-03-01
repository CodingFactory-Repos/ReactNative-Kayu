const apiUrlBarcode = 'https://world.openfoodfacts.org/api/v2/';
const apiUrlSearch = 'https://world.openfoodfacts.org/cgi/search.pl?json=1&search_simple=1&search_terms='

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
  data.energy = json.product.nutriments.energy;
  data.energy100g = json.product.nutriments['energy-kcal_100g'];
  data.positive_nutrients = json.product.nutriscore['2023'].positive_nutrients;
  data.negative_nutrients = json.product.nutriscore['2023'].negative_nutrients;
  data.nutriscore_score = json.product.nutriscore_score;
  data.nutriscore_grade = json.product.nutriscore_grade;

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

  for(let i = 0; i <= 15; i++)
  {
    let object = {};
    if (!rawJson.products[i].product_name || rawJson.products[i].product_name == '') continue;

    let alreadyPresent = false;
    // no foreach, because we want to use break;
    for(let j = 0; j < data.length; j++)
    {
      if(data[j].name.toLocaleLowerCase() == rawJson.products[i].product_name.toLocaleLowerCase())
      {
        alreadyPresent = true;
        break;
      }
    }

    if(alreadyPresent) continue;

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
