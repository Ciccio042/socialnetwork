import React, { useState } from 'react';
import axios from 'axios';

const CreatePost: React.FC = () => {
  const [content, setContent] = useState('');

  const handlePost = async () => {
    try {
      await axios.post('/api/posts', { content });
      setContent('');
      // Reload or update posts
    } catch (error) {
      console.error('Post creation failed', error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="What's on your mind?" />
      <button onClick={handlePost}>Post</button>
    </form>
  );
};

export default CreatePost;
