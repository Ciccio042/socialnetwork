import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileEdit: React.FC = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('/api/users/profile');
      setUsername(response.data.username);
      setBio(response.data.bio);
    };
    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      await axios.put('/api/users/profile', { username, bio });
      // Notify success or reload
    } catch (error) {
      console.error('Profile update failed', error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" />
      <button onClick={handleSave}>Save</button>
    </form>
  );
};

export default ProfileEdit;
