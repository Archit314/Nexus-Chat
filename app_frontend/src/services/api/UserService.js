import { apiClient } from './ApiClient';

class UserService {
  search(query) {
    return apiClient.get('/user/search', { q: query });
  }
}

export const userService = new UserService();
