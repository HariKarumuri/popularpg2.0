import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action to authorize access token
const authorizeAccessToken = (accessToken) => {
  // Implement your authorization logic here (e.g., store the token in local storage)
  localStorage.setItem('accessToken', accessToken);
};

// Define the async login action
export const login = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/token', credentials);
    const { access, refresh } = response.data;

    // Authorize access token
    authorizeAccessToken(access);

    // Store the refresh token
    localStorage.setItem('refreshToken', refresh);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
});

// Define the async refresh token action
export const refreshToken = createAsyncThunk('auth/refreshToken', async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post('http://127.0.0.1:8000/api/token/refresh', { refresh: refreshToken });
    const { access } = response.data;

    // Authorize the new access token
    authorizeAccessToken(access);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
});

// Define the authentication slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(refreshToken.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
