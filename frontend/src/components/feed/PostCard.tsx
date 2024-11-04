import React from 'react';

interface PostCardProps {
  content: string;
  author: string;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({ content, author, date }) => {
  return (
    <div>
      <p>{content}</p>
      <span>by {author} on {date}</span>
    </div>
  );
};

export default PostCard;
