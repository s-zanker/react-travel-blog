import { BsBoxArrowUpRight } from 'react-icons/bs';

import './Popup.css';

import { PostAuthor } from '../posts/PostAuthor';
import { PostMeta } from '../posts/PostMeta';

export function Popup({ post, showDetailLink = true }) {
  return (
    <div className='map-popup'>
      <h3>{post.title}</h3>
      <PostMeta country={post.location.country} date={post.date} />
      <PostAuthor author={post.authorInfo} />
      {showDetailLink && (
        <a className='map-popup__link' href={`/post/${post._id}`}>
          View Details <BsBoxArrowUpRight />
        </a>
      )}
    </div>
  );
}
