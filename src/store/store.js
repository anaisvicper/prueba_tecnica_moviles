import { combineReducers, configureStore } from '@reduxjs/toolkit';
import listReducer from './list/listSlice';
import detailReducer from './detail/detailSlice';

// Combining reducers by type of data allows to introduce new types that also have list and detail
const productReducer = combineReducers({
  list: listReducer,
  detail: detailReducer,
});

export default configureStore({
  reducer: {
    product: productReducer,
  },
});
