import { apiClient } from './ApiClient';

class MessageService {
  send({ receiverId, content }) {
    return apiClient.post('/message/send', { receiverId, content });
  }

  getConversation(userId) {
    return apiClient.get(`/message/conversation/${userId}`);
  }
}

export const messageService = new MessageService();
