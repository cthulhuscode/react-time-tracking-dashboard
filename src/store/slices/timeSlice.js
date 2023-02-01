import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialState = data;

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    getDailyHours: (state, action) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = timeSlice.actions;
