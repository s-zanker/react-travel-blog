import { MdLocationOn } from 'react-icons/md';
import { Separator } from '../elements/Separator';
import './PostLocation.css';

export function PostLocation({ post }) {
  return (
    <div className='post-location'>
      <MdLocationOn className='post-location__icon' />
      <span>{post.location.city}</span>
      <Separator />
      <span>{post.location.country}</span>
    </div>
  );
}
