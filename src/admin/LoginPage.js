import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Dispatch the login action with username and password
      const response = await dispatch(login({ username, password }));
      const { accessToken, refreshToken } = response.payload;

      // Store the access token and refresh token in local storage or cookie
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Login success, navigate to the dashboard
      navigate('/admin/dashboard');
    } catch (error) {
      // Login error, handle accordingly
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
