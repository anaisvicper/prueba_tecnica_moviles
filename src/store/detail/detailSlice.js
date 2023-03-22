import { createSlice } from '@reduxjs/toolkit';
import {
  addProductToCart as addProductToCartApi,
  getProductDetail as getProductDetailApi,
} from './api';

const initialState = {
  isLoading: false,
  error: null,
  productDetail: {},
  addedToCart: [],
  countInApi: 0,
};

export const detailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    startRequest: (state) => {
      state.isLoading = true;
    },
    errorRequest: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    successRequest: (state, action) => {
      state.productDetail = action.payload;
      state.isLoading = false;
    },
    addToCartSuccess: (state, action) => {
      state.addedToCart = [...state.addedToCart, action.payload.product];
      state.countInApi = action.payload.count;
    },
    resetDetail: (state) => {
      state = initialState;
    },
  },
});

const { startRequest, errorRequest, successRequest, addToCartSuccess } =
  detailSlice.actions;

export const getProductDetail =
  ({ id }) =>
  async (dispatch) => {
    try {
      dispatch(startRequest());
      const productList = await getProductDetailApi({ id });
      dispatch(successRequest(productList));
      return productList;
    } catch (error) {
      dispatch(errorRequest(error));
      throw error;
    }
  };

export const addProductToCart = (product) => async (dispatch) => {
  try {
    const { count } = await addProductToCartApi(product);
    dispatch(addToCartSuccess({ product, count }));
    return count;
  } catch (error) {
    dispatch(errorRequest(error));
    throw error;
  }
};

export const { resetDetail } = detailSlice.actions;

export default detailSlice.reducer;
