import { useNavigate } from 'react-router';
import { FaCalendar } from 'react-icons/fa';

import './PostCard.css';
import { PostTitle } from './PostTitle';
import { PostImage } from './PostImage';
import { PostDate } from './PostDate';
import { Separator } from '../elements/Separator';
import { PostAuthor } from './PostAuthor';

export function PostCard({ id, image, title, country, date, author }) {
  const navigate = useNavigate();

  function onClickHandler() {
    console.log('onClickHandler - id: ', id);
    navigate(`/post/${id}`);
  }
  return (
    <li className='post-card' onClick={() => onClickHandler()}>
      <PostImage source={image} alt={title} variant='thumb' />
      <div className='post-card__text'>
        <PostTitle title={title} />
        <div className='post-card__meta'>
          <span>{country}</span>
          <Separator />
          <PostDate date={date} Icon={<FaCalendar />} />
        </div>
        <PostAuthor author={author} />
      </div>
    </li>
  );
}
