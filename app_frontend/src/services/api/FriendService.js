import { apiClient } from './ApiClient';

class FriendService {
  send({ senderId, receiverId }) {
    return apiClient.post('/friend-request/send', { senderId, receiverId });
  }

  accept({ requestId, userId }) {
    return apiClient.post('/friend-request/accept', { requestId, userId });
  }

  reject({ requestId, userId }) {
    return apiClient.post('/friend-request/reject', { requestId, userId });
  }

  getPending() {
    return apiClient.get('/friend-request/pending');
  }

  getFriends() {
    return apiClient.get('/friend-request/friends');
  }
}

export const friendService = new FriendService();
