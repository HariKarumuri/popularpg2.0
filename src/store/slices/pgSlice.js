import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

// Define the async postPg action
export const postPg = createAsyncThunk('pgs/postPg', async (pgData) => {
  try {
    const accessToken = Cookies.get('accessToken'); // Retrieve the access token from cookies
    const response = await axios.post('http://127.0.0.1:8000/api/pgs/', pgData, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Include the access token in the request headers
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
});

// Define the pg slice
const pgSlice = createSlice({
  name: 'pgs',
  initialState: {
    pg: null,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postPg.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postPg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pg = action.payload;
        state.error = null;
      })
      .addCase(postPg.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default pgSlice.reducer;
