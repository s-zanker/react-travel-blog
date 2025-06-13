import { BsBoxArrowUpRight } from 'react-icons/bs';

import './Popup.css';

export function Popup({ post }) {
  const visitDate = new Date(post.date).toLocaleDateString('de-DE');

  return (
    <div className='map-popup'>
      <h3>{post.title}</h3>
      <p className='map-popup__date'>Visited on: {visitDate}</p>
      <div className='map-popup__author'>
        <img src={post.authorInfo.img} alt={post.authorInfo.name} />
        <span>{post.authorInfo.name}</span>
      </div>

      <a className='map-popup__link' href={`/post/${post._id}`}>
        View Details <BsBoxArrowUpRight />
      </a>
    </div>
  );
}
