import getProductListApi from '../../store/list/api';
import { createSlice } from '@reduxjs/toolkit';

export const listInitialState = {
  isLoading: false,
  error: null,
  productList: [],
};

export const listSlice = createSlice({
  name: 'productList',
  initialState: listInitialState,
  reducers: {
    startRequest: (state) => {
      state.isLoading = true;
    },
    errorRequest: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    successRequest: (state, action) => {
      state.productList = action.payload;
      state.isLoading = false;
    },
    resetList: (state) => {
      state = listInitialState;
    },
  },
});
const { startRequest, errorRequest, successRequest } = listSlice.actions;
export const getProductList = () => async (dispatch) => {
  try {
    dispatch(startRequest());
    const productList = await getProductListApi();
    dispatch(successRequest(productList));
    return productList;
  } catch (error) {
    dispatch(errorRequest(error));
    throw error;
  }
};
export const { resetList } = listSlice.actions;

export default listSlice.reducer;
