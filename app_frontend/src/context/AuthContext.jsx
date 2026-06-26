import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { authService, setOnUnauthorized, userService } from '../services/api';

export const AuthContext = createContext(null);

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

function getStoredToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function getStoredUser() {
  try {
    const token = getStoredToken();
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
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      setUser(null);
      setError(null);
      window.location.href = '/auth/sign-in';
    });
  }, []);

  const refreshProfile = useCallback(async () => {
    const token = getStoredToken();
    if (!token) return;
    try {
      const data = await userService.getProfile();
      const profile = data?.user || data;
      if (profile) {
        localStorage.setItem(USER_KEY, JSON.stringify(profile));
        setUser(profile);
      }
    } catch {
      /* token expired — 401 handler will redirect */
    }
  }, []);

  useEffect(() => {
    if (getStoredToken()) refreshProfile();
  }, [refreshProfile]);

  const afterAuth = useCallback(async () => {
    try {
      const data = await userService.getProfile();
      const profile = data?.user || data;
      if (profile) {
        localStorage.setItem(USER_KEY, JSON.stringify(profile));
        setUser(profile);
      }
      return profile;
    } catch {
      /* will be caught by caller */
    }
  }, []);

  const signIn = useCallback(async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.signIn(credentials);
      if (data.token) localStorage.setItem(TOKEN_KEY, data.token);
      const profile = await afterAuth();
      return profile;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [afterAuth]);

  const signUp = useCallback(async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.signUp(userData);
      if (data.token) localStorage.setItem(TOKEN_KEY, data.token);
      const profile = await afterAuth();
      return profile;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [afterAuth]);

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
    refreshProfile,
  }), [user, loading, error, isAuthenticated, signIn, signUp, logout, clearError, refreshProfile]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
