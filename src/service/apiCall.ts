import {logger} from 'react-native-logs';

const apiUrl = 'https://world.openfoodfacts.org/api/v2/product/';
const log = logger.createLogger();

export async function getProduct(barcode: string) {
  interface ProductData {
    code: string;
    name: string;
    nutriscore: string;
    categories: string;
    nutriments: object; // ou un type plus spécifique si possible
  }

  let data: ProductData | any = null;

  try {
    const response = await fetch(apiUrl + barcode);
    const json = await response.json();
    data.code = json.code;
    data.name = json.product.generic_name_fr
      ? json.product.generic_name_fr
      : json.product.generic_name_en
      ? json.product.generic_name_en
      : json.product.generic_name;
    data.nutriscore = json.product.nutriscore_grade;
    data.categories = json.product.categories;
    data.nutriments = json.product.nutriments;
  } catch (error: any) {
    log.error('Erreur lors de la récupération du produit', {error});
    // Retourner un objet d'erreur spécifique
    return {error: true, message: 'Erreur lors de la récupération du produit.'};
  }

  return data;
}
