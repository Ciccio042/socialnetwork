// src/hooks/useFriends.ts

import { useState, useEffect } from 'react';
import authService from '../services/auth.service';

interface Friend {
  id: number;
  username: string;
}

const useFriends = () => {
  const [friends, setFriends] = useState<Friend[]>([]);

  const fetchFriends = async () => {
    try {
      const data = await authService.getFriends();
      setFriends(data);
    } catch (error) {
      console.error('Failed to load friends', error);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  return { friends };
};

export default useFriends;
