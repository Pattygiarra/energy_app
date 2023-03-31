import { createSlice } from "@reduxjs/toolkit";
import { Device } from "../../../models/device.model";
/* nome Elettrodomestico 
   consumo KWH
   
*/
const initialState: Device[] = [];

const prodSlice = createSlice({
  name: "@@product",
  initialState: initialState,
  reducers: {
    GET_ALL_REQUEST() {},
    GET_ALL_SUCCESS(state, action) {
      return (state = action.payload);
    },
    GET_ALL_FAILED(state, action) {
      console.log(action);
    },
  },
});

export const prodAction = prodSlice.actions;
export default prodSlice.reducer;
