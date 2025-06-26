import { useNavigate } from 'react-router';

import './PostCard.css';

import { PostTitle } from './PostTitle';
import { PostImage } from './PostImage';
import { PostAuthor } from './PostAuthor';
import { PostMeta } from './PostMeta';

export function PostCard({ id, image, title, city, date, author }) {
  const navigate = useNavigate();

  function onClickHandler() {
    navigate(`/post/${id}`);
  }
  return (
    <li className='post-card' onClick={() => onClickHandler()}>
      <PostImage source={image} alt={title} variant='thumb' />
      <div className='post-card__text'>
        <PostTitle title={title} />
        <PostMeta city={city} date={date} />
        <PostAuthor author={author} />
      </div>
    </li>
  );
}
