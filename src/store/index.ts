import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import projectReducer from "./slices/projectSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    projects: projectReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
