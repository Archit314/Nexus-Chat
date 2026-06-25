import { apiClient } from './ApiClient';

class AuthService {
  signUp({ userName, email, password }) {
    return apiClient.post('/auth/sign-up', { userName, email, password });
  }

  signIn({ userName, password }) {
    return apiClient.post('/auth/sign-in', { userName, password });
  }
}

export const authService = new AuthService();
