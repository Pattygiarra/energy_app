import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "@@user",
  initialState: initialState,
  reducers: {},
});

export const userAction = userSlice.reducer;
