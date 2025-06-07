import { FiCalendar } from 'react-icons/fi';

import './PostCard.css';

export function PostCard({ image, title, country, date, author }) {
  return (
    <div className='post-card'>
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
    </div>
  );
}
