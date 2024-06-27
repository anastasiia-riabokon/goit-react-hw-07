import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

const sliceFilter = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectNameFilter: (state) => state.filters.name,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const filterReducer = sliceFilter.reducer;
export const {changeFilter} = sliceFilter.actions;
export const {selectNameFilter} = sliceFilter.selectors;
