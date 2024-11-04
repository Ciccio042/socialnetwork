// src/services/auth.service.ts

import api from './api';

const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  localStorage.setItem('token', response.data.token);
};

const logout = () => {
  localStorage.removeItem('token');
};

const isAuthenticated = () => !!localStorage.getItem('token');

const getFriends = async () => {
  const response = await api.get('/users/friends');
  return response.data;
};

export default {
  login,
  logout,
  isAuthenticated,
  getFriends,
};
