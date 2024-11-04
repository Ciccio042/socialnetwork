import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileView: React.FC = () => {
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('/api/users/profile');
      setProfile(response.data);
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>{profile.username}</h2>
      <p>{profile.bio}</p>
    </div>
  );
};

export default ProfileView;
