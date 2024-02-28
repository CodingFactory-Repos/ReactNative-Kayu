import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuth: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: state => {
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
