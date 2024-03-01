import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    product: {},
  },
  reducers: {
    setProducts: (state, action) => {
      state.productList = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const {setProducts, setProduct} = productSlice.actions;

export default productSlice.reducer;
