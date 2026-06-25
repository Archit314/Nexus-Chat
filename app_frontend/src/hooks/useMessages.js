import { useCallback, useState } from 'react';
import { messageService } from '../services/api';

export function useMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const fetchConversation = useCallback(async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await messageService.getConversation(userId);
      setMessages(data?.messages || data || []);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const sendMessage = useCallback(async (receiverId, content) => {
    setSending(true);
    setError(null);
    try {
      const data = await messageService.send({ receiverId, content });
      setMessages((prev) => [...prev, data?.message || data]);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setSending(false);
    }
  }, []);

  return {
    messages,
    loading,
    sending,
    error,
    fetchConversation,
    sendMessage,
  };
}
