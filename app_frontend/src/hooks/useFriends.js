import { useCallback, useState } from 'react';
import { friendService } from '../services/api';

export function useFriends() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFriends = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await friendService.getFriends();
      setFriends(data?.friends || data || []);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    friends,
    loading,
    error,
    fetchFriends,
  };
}
