import { useNavigate } from 'react-router';
import { FiCalendar } from 'react-icons/fi';

import './PostCard.css';

export function PostCard({ id, image, title, country, date, author }) {
  const navigate = useNavigate();

  function onClickHandler() {
    console.log('onClickHandler - id: ', id);
    navigate(`/post/${id}`);
  }
  return (
    <li className='post-card' onClick={() => onClickHandler()}>
      <img className='post-card-img' src={image} alt='' />
      <div className='post-card-text'>
        <h2>{title}</h2>
        <p>
          <span>{country}</span>
          <FiCalendar className='calendar-icon' />
          <span>{date}</span>
        </p>
        <div className='post-author'>
          <img src={author.img} alt='' />
          <span className='author-name'>{author.name}</span>
        </div>
      </div>
    </li>
  );
}
