import { combineReducers, configureStore } from '@reduxjs/toolkit';
import listReducer, { listInitialState } from './list/listSlice';
import detailReducer, { detailInitialState } from './detail/detailSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import expireReducer from 'redux-persist-expire';

// Combining reducers by type of data allows to introduce new types that also have list and detail
const productListAnDetailReducer = combineReducers({
  list: listReducer,
  detail: detailReducer,
});
const productReducer = combineReducers({
  product: productListAnDetailReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    expireReducer('detail', {
      expireSeconds: 3600,
      expiredState: detailInitialState,
      autoExpire: true,
    }),
    expireReducer('list', {
      expireSeconds: 3600,
      expiredState: listInitialState,
      autoExpire: true,
    }),
  ],
};
const persistedReducer = persistReducer(persistConfig, productReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
