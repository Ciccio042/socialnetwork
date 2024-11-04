// src/components/feed/PostList.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from './PostCard';

// Definisci il tipo per il post
interface Post {
  id: number;
  content: string;
  author: string;
  date: string;
}

const PostList: React.FC = () => {
  // Usa il tipo Post per specificare che `posts` è un array di oggetti Post
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} content={post.content} author={post.author} date={post.date} />
      ))}
    </div>
  );
};

export default PostList;

