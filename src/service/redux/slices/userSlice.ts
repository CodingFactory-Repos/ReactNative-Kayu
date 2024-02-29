import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  //Initial value of the state
  initialState: {
    user: null,
    isAuth: false,
  },
  // Reducers are functions that define how to update the state
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
// Export the action creators so you can dispatch them in your app
export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
