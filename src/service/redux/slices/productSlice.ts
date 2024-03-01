import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    product: {},
    productSearch: {},
  },
  reducers: {
    addProductToList: (state, action) => {
      // state.productList.push(action.payload);
      // Push on the top of the list
      state.productList = [action.payload, ...state.productList];
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
    removeProductFromList: (state, action) => {
      state.productList = state.productList.filter(
        product => product.name !== action.payload.name,
      );
    },
  },
});

export const {
  removeProductFromList,
  addProductToList,
  setProduct,
  setProductList,
  setProductSearch,
} = productSlice.actions;

export default productSlice.reducer;
