import { useCallback, useState } from 'react';
import { friendService } from '../services/api';

export function useFriendRequests() {
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPending = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await friendService.getPending();
      setPending(data?.requests || data || []);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const sendRequest = useCallback(async (senderId, receiverId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await friendService.send({ senderId, receiverId });
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const acceptRequest = useCallback(async (requestId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await friendService.accept({ requestId });
      setPending((prev) => prev.filter((r) => r.id !== requestId));
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const rejectRequest = useCallback(async (requestId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await friendService.reject({ requestId });
      setPending((prev) => prev.filter((r) => r.id !== requestId));
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    pending,
    loading,
    error,
    fetchPending,
    sendRequest,
    acceptRequest,
    rejectRequest,
  };
}
