/**
 * Works as a parent component to wrap the children components
 * and provide the Redux Store to them.
 *
 * Just like in a real app, any Redux-connected components
 * will need a React-Redux <Provider> component wrapped around them,
 * with a real Redux store set up and provided.
 * Additionally, the test code should create
 * a separate Redux store instance for every test,
 * rather than reusing the same store instance and resetting
 * its state. That ensures no values accidentally leak between tests.
 *
 * Instead of copy-pasting the same store creation and Provider setup
 * in every test, we can use the wrapper option in the render function
 * and export our own customized renderWithProviders function
 * that creates a new Redux store and renders a <Provider>,
 */

import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers
import timeReducer from "./store/slices/timeSlice";
import data from "./data";

export function renderWithProviders(
  ui,
  {
    preloadedState = {
      time: {
        ...data,
        freq: "daily",
      },
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { time: timeReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
