import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const menuSlice = createSlice({
  name: "isOpenMenu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.value = !state.value;
      return state;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
