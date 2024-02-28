import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/exampleSlices';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
