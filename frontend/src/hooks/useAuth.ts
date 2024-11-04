// src/hooks/useAuth.ts

import { useState, useEffect } from 'react';
import authService from '../services/auth.service';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    try {
      await authService.login(email, password);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed', error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkAuth = () => setIsAuthenticated(authService.isAuthenticated());
    checkAuth();
  }, []);

  return { isAuthenticated, login, logout };
};

export default useAuth;
