import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  products: [],
  product: null,
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
    GET_PRODUCT: (state) => ({ ...state, isLoading: true }),
    GET_PRODUCT_SUCCESS: (state, { payload: { data } }) => ({
      ...state,
      isLoading: false,
      product: data,
    }),
    GET_PRODUCT_FAILURE: (state, { payload: { error } }) => ({
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
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} = actions;

export default reducer;
