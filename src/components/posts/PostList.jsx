import { PostCard } from './PostCard';

import './PostList.css';

export function PostList({ posts }) {
  return (
    <ul className='post-list'>
      {posts
        .map((post) => (
          <PostCard
            key={post._id}
            id={post._id}
            image={post.image}
            title={post.title}
            country={post.location.country}
            date={post.date}
            author={post.authorInfo}
          />
        ))
        .reverse()}
    </ul>
  );
}
