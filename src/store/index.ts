import { configureStore } from "@reduxjs/toolkit";

import projectReducer from "./slices/projectSlice";
import themeReducer from "./slices/themeSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    projects: projectReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
