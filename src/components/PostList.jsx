import { useState } from 'react';
import { PostCard } from './PostCard';

import './PostList.css';

const initialPosts = [
  {
    img: '/img/salzburg-01-thumbnail.jpg',
    title: 'Salzburg',
    country: 'AT',
    date: '2020-08-11',
    author: {
      img: '/img/sylvia-rainbowheart.jpg',
      name: 'Codingheart',
    },
  },
  {
    img: '/img/malcesine-thumbnail.jpg',
    title: 'Malcesine',
    country: 'IT',
    date: '2020-10-03',
    author: {
      img: '/img/sylvia-rainbowheart.jpg',
      name: 'Codingheart',
    },
  },
];
export function PostList() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className='post-list'>
      <PostCard
        image={posts[0].img}
        title={posts[0].title}
        country={posts[0].country}
        date={posts[0].date}
        author={posts[0].author}
      />
      <PostCard
        image={posts[1].img}
        title={posts[1].title}
        country={posts[1].country}
        date={posts[1].date}
        author={posts[1].author}
      />
    </div>
  );
}
