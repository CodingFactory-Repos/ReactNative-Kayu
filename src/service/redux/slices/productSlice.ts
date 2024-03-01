import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    product: {},
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
  },
});

export const {addProductToList, setProduct, setProductList} =
  productSlice.actions;

export default productSlice.reducer;
