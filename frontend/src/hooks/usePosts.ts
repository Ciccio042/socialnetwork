// src/hooks/usePosts.ts

import { useState, useEffect } from 'react';
import postService from '../services/post.service';

interface Post {
  id: number;
  content: string;
  author: string;
  date: string;
}

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const data = await postService.getPosts();
      setPosts(data);
    } catch (error) {
      console.error('Failed to load posts', error);
    }
  };

  const createPost = async (content: string) => {
    try {
      const newPost = await postService.createPost(content);
      setPosts([newPost, ...posts]);
    } catch (error) {
      console.error('Failed to create post', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, createPost };
};

export default usePosts;
