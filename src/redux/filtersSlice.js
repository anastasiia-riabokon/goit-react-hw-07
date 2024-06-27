import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const sliceFilter = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectNameFilter: (state) => state.name,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = sliceFilter.reducer;
export const {changeFilter} = sliceFilter.actions;
export const {selectNameFilter} = sliceFilter.selectors;
