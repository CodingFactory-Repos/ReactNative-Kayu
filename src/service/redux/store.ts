import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/exampleSlices';
import userReducer from './slices/userSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
