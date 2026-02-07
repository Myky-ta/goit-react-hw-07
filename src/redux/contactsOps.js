import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// базовий URL твого MockAPI проєкту
axios.defaults.baseURL = "https://6987c500780e8375a686f6a6.mockapi.io/";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts"); 
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// додати новий контакт
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, phone });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// видалити контакт
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
