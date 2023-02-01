import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialState = { ...data, freq: "daily" };

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    changeFreq: (state, action) => {
      state.freq = action.payload;
    },
    getHours: (state, action) => {
      return state[state.freq];
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCategory, getHours } = timeSlice.actions;

export default timeSlice.reducer;
