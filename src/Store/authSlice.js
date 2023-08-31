import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    loginSuccess(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ username, password }) => {
    try {
      const response = await axios.post('https://your-backend-url/login/', {
        username,
        password,
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  });

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;