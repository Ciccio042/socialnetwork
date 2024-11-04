import React from 'react';
import { Redirect } from 'react-router-dom';

const AuthGuard: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? children : <Redirect to="/login" />;
};

export default AuthGuard;
