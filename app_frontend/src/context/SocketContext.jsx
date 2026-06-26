import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useAuth } from '../hooks';
import { socketService } from '../services/socket/SocketService';

const SocketContext = createContext(null);

export function SocketProvider({ children }) {
  const { user } = useAuth();
  const [unreadCounts, setUnreadCounts] = useState({});
  const [onlineUsers, setOnlineUsers] = useState(new Set());
  const activeChatRef = useRef(null);

  const clearUnread = useCallback((senderId) => {
    setUnreadCounts((prev) => ({
      ...prev,
      [senderId]: 0,
    }));
  }, []);

  const setActiveChat = useCallback((userId) => {
    activeChatRef.current = userId;
  }, []);

  useEffect(() => {
    if (!user?.id) {
      socketService.disconnect();
      return;
    }

    const handleNewMessage = (msg) => {
      if (msg.senderId === user.id) return;
      if (msg.senderId === activeChatRef.current) return;
      setUnreadCounts((prev) => ({
        ...prev,
        [msg.senderId]: (prev[msg.senderId] || 0) + 1,
      }));
    };

    const handleOnlineUsers = (userIds) => {
      setOnlineUsers(new Set(userIds));
    };

    const handleUserOnline = (userId) => {
      setOnlineUsers((prev) => new Set(prev).add(userId));
    };

    const handleUserOffline = (userId) => {
      setOnlineUsers((prev) => {
        const next = new Set(prev);
        next.delete(userId);
        return next;
      });
    };

    socketService.on('newMessage', handleNewMessage);
    socketService.on('onlineUsers', handleOnlineUsers);
    socketService.on('userOnline', handleUserOnline);
    socketService.on('userOffline', handleUserOffline);

    socketService.connect(user.id);

    return () => {
      socketService.off('newMessage', handleNewMessage);
      socketService.off('onlineUsers', handleOnlineUsers);
      socketService.off('userOnline', handleUserOnline);
      socketService.off('userOffline', handleUserOffline);
    };
  }, [user?.id]);

  const value = useMemo(() => ({
    unreadCounts,
    onlineUsers,
    clearUnread,
    setActiveChat,
  }), [unreadCounts, onlineUsers, clearUnread, setActiveChat]);

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocketContext() {
  const ctx = useContext(SocketContext);
  if (!ctx) {
    throw new Error('useSocketContext must be used within a SocketProvider');
  }
  return ctx;
}
