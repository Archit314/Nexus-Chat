import { apiClient } from './ApiClient';

class UserService {
  search(query) {
    return apiClient.get('/user/search', { q: query });
  }

  getProfile() {
    return apiClient.get('/user/profile');
  }
}

export const userService = new UserService();
