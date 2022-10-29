import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    New: [],
    Progress: [],
    Completed: [],
    Canceled: [],
  },
  reducers: {
    SetNewTask(state, action) {
      state.New = action.payload;
    },
    SetProgressTask(state, action) {
      state.Progress = action.payload;
    },
    SetCompletedTask(state, action) {
      state.Completed = action.payload;
    },
    SetCanceledTask(state, action) {
      state.Canceled = action.payload;
    },
  },
});

export const {
  SetNewTask,
  SetProgressTask,
  SetCanceledTask,
  SetCompletedTask,
} = taskSlice.actions;
export default taskSlice.reducer;
