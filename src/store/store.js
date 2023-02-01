import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./slices/timeSlice";

export const store = configureStore({
  reducer: {
    time: timeReducer,
  },
});
