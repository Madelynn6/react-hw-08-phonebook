import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://645782f21a4c152cf983b21d.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (details, thunkAPI) => {
    const { name, phone } = details;
    try {
      const { contacts } = thunkAPI.getState();
      const ifNameExist = contacts.items.find(
        el => el.name.toLowerCase() === details.name.toLowerCase()
      );
      console.log(ifNameExist);
      if (ifNameExist) {
        alert(`${details.name} is already in contacts.`);
        return thunkAPI.rejectWithValue();
      } else {
        const response = await axios.post('/contacts', { name, phone });
        return response.data;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
