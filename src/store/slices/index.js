import { combineReducers } from "@reduxjs/toolkit";

import product from "./productSlice";
import cart from "./cartSlice";

export default combineReducers({
  product,
  cart,
});
