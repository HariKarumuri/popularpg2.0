import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

// Define the async deletePG action
export const deletePG = createAsyncThunk('pgs/deletePG', async (id) => {
    try {
      const accessToken = Cookies.get('accessToken'); // Retrieve the access token from cookies
      const response = await axios.delete(`http://127.0.0.1:8000/api/pgs/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the access token in the request headers
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  });

  const pgDeleteSlice = createSlice({
    name: 'pgs',
    initialState: {
        pg: null,
        error: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(deletePG.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(deletePG.fulfilled, (state, action) => {
            state.isLoading = false;
            state.pg = null;
            state.pgs = state.pgs.filter((pg) => pg.id !== action.payload);
            state.error = null;
          })
          .addCase(deletePG.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
          })
      }
    });

    export default pgDeleteSlice.reducer;