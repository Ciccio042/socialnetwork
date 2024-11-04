// src/services/post.service.ts

import api from './api';

interface Post {
  id: number;
  content: string;
  author: string;
  date: string;
}

const getPosts = async (): Promise<Post[]> => {
  const response = await api.get('/posts');
  return response.data;
};

const createPost = async (content: string): Promise<Post> => {
  const response = await api.post('/posts', { content });
  return response.data;
};

export default {
  getPosts,
  createPost,
};
