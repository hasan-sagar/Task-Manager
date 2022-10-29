import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings-slice";
import taskReducer from "../state-slice/task-slice";
import statisticsReducer from "../state-slice/statistics-slice";
import profileReducer from "../state-slice/profile-slice";

export default configureStore({
  reducer: {
    settings: settingsReducer,
    task: taskReducer,
    statistics: statisticsReducer,
    profile: profileReducer,
  },
});
