import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [
      {
        name: 'Carotte',
        categories: ['Légume', 'Bio'],
        ingredients_text: 'Carotte, eau',
        nutriments: {
          carbohydrates: 54,
          proteins: 7,
          fat: 30,
          sugars: 100,
          salt: 0.2,
        },
        image_url:
          'https://images.openfoodfacts.net/images/products/301/762/042/2003/front_en.610.100.jpg',
        nutriscore_score: 3,
        nutriscore_grade: 'c',
        positive_nutrients: ['vitamin C', 'fiber'],
        negative_nutrients: ['sugar'],
      },
    ],
    product: {},
    productSearch: {},
  },
  reducers: {
    addProductToList: (state, action) => {
      state.productList.push(action.payload);
    },
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProductSearch: (state, action) => {
      state.productSearch = action.payload;
    },
  },
});

export const {addProductToList, setProduct, setProductList, setProductSearch} =
  productSlice.actions;

export default productSlice.reducer;
