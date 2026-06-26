import { io } from 'socket.io-client';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

class SocketService {
  constructor() {
    this.socket = null;
  }

  connect(userId) {
    if (this.socket?.connected) return;

    this.socket = io(BASE_URL, {
      query: { userId },
      transports: ['websocket', 'polling'],
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.disconnect();
      this.socket = null;
    }
  }

  emit(event, data) {
    this.socket?.emit(event, data);
  }

  on(event, callback) {
    this.socket?.on(event, callback);
  }

  off(event, callback) {
    if (callback) {
      this.socket?.off(event, callback);
    } else {
      this.socket?.removeAllListeners(event);
    }
  }
}

export const socketService = new SocketService();
