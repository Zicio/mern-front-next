import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const menuSlice = createSlice({
  name: "isOpenMenu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.value = !state.value;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

const isOpenMenuReducer = menuSlice.reducer;

export default isOpenMenuReducer;
