import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async fetch PGs action
export const fetchPGs = createAsyncThunk('pgs/fetchPGs', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/pgs');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
});

// Define the PGs slice
const pgsSlice = createSlice({
  name: 'pgs',
  initialState: {
    pgs: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPGs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPGs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pgs = action.payload;
        state.error = null;
      })
      .addCase(fetchPGs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default pgsSlice.reducer;
