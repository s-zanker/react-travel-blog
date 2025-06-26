import { FaCalendar } from 'react-icons/fa';

import { Separator } from '../elements/Separator';
import { PostDate } from './PostDate';

import './PostMeta.css';

export function PostMeta({ city, date }) {
  return (
    <div className='post-meta'>
      <span>{city}</span>
      <Separator />
      <PostDate date={date} Icon={<FaCalendar />} />
    </div>
  );
}
