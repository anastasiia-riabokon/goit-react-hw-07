import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://667d183e297972455f637047.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/FetchAll", async (_, thunkAPI) => {
  try {
    const {data} = await axios.get("/contacts");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
