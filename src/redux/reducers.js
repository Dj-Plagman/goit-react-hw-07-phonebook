import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

export const filterReducer = createReducer("", {
  [actions.setFilter]: (state, action) => action.payload,
});