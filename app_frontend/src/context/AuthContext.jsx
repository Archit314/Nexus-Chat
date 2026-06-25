import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { authService, setOnUnauthorized } from '../services/api';

export const AuthContext = createContext(null);

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

function getStoredUser() {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return null;
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    setOnUnauthorized(() => {
      setUser(null);
      setError(null);
      window.location.href = '/auth/sign-in';
    });
  }, []);

  const signIn = useCallback(async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.signIn(credentials);
      if (data.token) localStorage.setItem(TOKEN_KEY, data.token);
      const userData = data.user || { userName: credentials.userName };
      localStorage.setItem(USER_KEY, JSON.stringify(userData));
      setUser(userData);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signUp = useCallback(async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.signUp(userData);
      if (data.token) localStorage.setItem(TOKEN_KEY, data.token);
      const newUser = data.user || { userName: userData.userName, email: userData.email };
      localStorage.setItem(USER_KEY, JSON.stringify(newUser));
      setUser(newUser);
      return newUser;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setUser(null);
    setError(null);
  }, []);

  const clearError = useCallback(() => setError(null), []);

  const value = useMemo(() => ({
    user,
    loading,
    error,
    isAuthenticated,
    signIn,
    signUp,
    logout,
    clearError,
  }), [user, loading, error, isAuthenticated, signIn, signUp, logout, clearError]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
