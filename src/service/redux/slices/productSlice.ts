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
