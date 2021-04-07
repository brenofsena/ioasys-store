import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_ITEM: (state, { payload: { item } }) => ({
      ...state,
      items: [...state.items, item],
    }),
    REMOVE_ITEM: (state, { payload: { id } }) => ({
      ...state,
      items: state.items.filter((item) => item.id !== id),
    }),
  },
});

const { actions, reducer } = cartSlice;

export const { ADD_ITEM, REMOVE_ITEM } = actions;

export default reducer;
