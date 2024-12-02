import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

const counterSlice = createSlice({
  name: "startup",
  initialState: INITIAL_STATE,
  reducers: {
    startup: () => {},
  },
});

export const startup = counterSlice.actions.startup;
