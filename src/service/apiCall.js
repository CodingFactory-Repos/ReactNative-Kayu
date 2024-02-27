const apiUrl = 'https://world.openfoodfacts.org/api/v2/product/';

export async function getProduct(barcode)
{
    let data;
    await fetch(apiUrl + barcode)
    .then(result => result.json())
    .then(json => {
        data.code = json.code;
        data.name = json.product.generic_name_fr ? json.product.generic_name_fr : json.product.generic_name_en ? json.product.generic_name_en : json.product.generic_name;
        data.nutriscore = json.product.nutriscore_grade;
        data.categories = json.product.categories;
        data.nutriments = json.product.nutriments;
    })
    .catch(error => {
        console.error(error);
        data = null;
    });

    return data;
}