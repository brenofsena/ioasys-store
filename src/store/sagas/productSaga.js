import { call, put, takeLatest } from "redux-saga/effects";

import api from "services/api";

import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from "store/slices/productSlice";

function* getProducts() {
  try {
    const { data } = yield call(api.get, "/shelves");
    yield put(GET_PRODUCTS_SUCCESS({ data }));
  } catch (error) {
    yield put(GET_PRODUCTS_FAILURE({ error }));
  }
}

function* getProduct({ payload: { id } }) {
  try {
    const { data } = yield call(api.get, `/products/${id}`);
    yield put(GET_PRODUCT_SUCCESS({ data }));
  } catch (error) {
    yield put(GET_PRODUCT_FAILURE({ error }));
  }
}

export default function* watcher() {
  yield takeLatest(GET_PRODUCTS, getProducts);
  yield takeLatest(GET_PRODUCT, getProduct);
}
