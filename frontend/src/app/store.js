import { configureStore } from "@reduxjs/toolkit";
import tasksSliceReducer from "../features/slices/tasksSlice/tasksSlice";
import themeSliceReducer from "../features/slices/themeSlice/themeSlice";
import userSliceReducer from "../features/slices/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksSliceReducer,
    theme: themeSliceReducer,
    user: userSliceReducer,
  },
});
