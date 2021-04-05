import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  products: [],
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    GET_PRODUCTS: (state) => ({ ...state, isLoading: true }),
    GET_PRODUCTS_SUCCESS: (state, { payload: { data } }) => ({
      ...state,
      isLoading: false,
      products: data,
    }),
    GET_PRODUCTS_FAILURE: (state, { payload: { error } }) => ({
      ...state,
      isLoading: false,
      error,
    }),
  },
});

const { actions, reducer } = productSlice;

export const {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} = actions;

export default reducer;
