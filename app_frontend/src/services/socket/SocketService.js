import { io } from 'socket.io-client';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

class SocketService {
  constructor() {
    this.socket = null;
    this.listeners = [];
    this.currentUserId = null;
  }

  connect(userId) {
    if (this.socket?.connected) {
      if (this.currentUserId === userId) return;
      this.disconnect();
    }
    this.currentUserId = userId;

    this.socket = io(BASE_URL, {
      query: { userId },
      transports: ['websocket', 'polling'],
    });

    for (const { event, callback } of this.listeners) {
      this.socket.on(event, callback);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.disconnect();
      this.socket = null;
    }
    this.currentUserId = null;
  }

  emit(event, data) {
    this.socket?.emit(event, data);
  }

  on(event, callback) {
    this.listeners.push({ event, callback });
    this.socket?.on(event, callback);
  }

  off(event, callback) {
    this.listeners = this.listeners.filter(
      (l) => !(l.event === event && l.callback === callback)
    );
    this.socket?.off(event, callback);
  }
}

export const socketService = new SocketService();
