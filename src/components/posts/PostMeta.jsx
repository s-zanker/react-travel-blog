import { FaCalendar } from 'react-icons/fa';

import { Separator } from '../elements/Separator';
import { PostDate } from './PostDate';

import './PostMeta.css';

export function PostMeta({ country, date }) {
  return (
    <div className='post-meta'>
      <span>{country}</span>
      <Separator />
      <PostDate date={date} Icon={<FaCalendar />} />
    </div>
  );
}
