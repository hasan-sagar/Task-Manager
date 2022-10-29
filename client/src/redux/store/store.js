import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings-slice";
import taskReducer from "../state-slice/task-slice";
import statisticsReducer from "../state-slice/statistics-slice";

export default configureStore({
  reducer: {
    settings: settingsReducer,
    task: taskReducer,
    statistics: statisticsReducer,
  },
});
