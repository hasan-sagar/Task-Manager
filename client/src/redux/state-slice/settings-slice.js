import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    loader: "invisible",
  },
  reducers: {
    ShowLoader(state) {
      state.loader = " ";
    },
    HideLoader(state) {
      state.loader = "invisible";
    },
  },
});

export const { ShowLoader, HideLoader } = settingsSlice.actions;
export default settingsSlice.reducer;
