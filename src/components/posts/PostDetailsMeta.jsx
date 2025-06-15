import { FaCalendar } from 'react-icons/fa';

import './PostDetailsMeta.css';

import { PostDate } from './PostDate';
import { Separator } from '../elements/Separator';
import { PostAuthor } from './PostAuthor';

export function PostDetailsMeta({ post }) {
  return (
    <div className='post-details__meta'>
      <PostDate date={post.date} Icon={<FaCalendar />} />
      <Separator />
      <PostAuthor author={post.authorInfo} />
    </div>
  );
}
