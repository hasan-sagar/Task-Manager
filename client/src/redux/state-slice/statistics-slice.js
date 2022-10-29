import { createSlice } from "@reduxjs/toolkit";
import DeletAlert from "../../helper/DeleteAlert";

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    value: [],
  },
  reducers: {
    SetStatistics(state, action) {
      state.value = action.payload;
    },
  },
});

export const { SetStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;
