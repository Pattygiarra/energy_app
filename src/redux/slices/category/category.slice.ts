import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const categorySlice = createSlice({
  name: "@@category",
  initialState: initialState,
  reducers: {},
});

export const categoryAction = categorySlice.reducer;
