import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/exampleSlices';
import userReducer from './slices/userSlice';

export default configureStore({
  // The slice reducers are passed to the store configuration so we can use them in the app
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
