// src/components/profile/FriendsList.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Definisci il tipo per un amico
interface Friend {
  id: number;
  username: string;
}

const FriendsList: React.FC = () => {
  // Usa il tipo Friend per specificare che `friends` è un array di oggetti Friend
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const response = await axios.get('/api/users/friends');
      setFriends(response.data);
    };

    fetchFriends();
  }, []);

  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>{friend.username}</li>
      ))}
    </ul>
  );
};

export default FriendsList;

