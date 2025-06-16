import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { IoChevronBackCircle } from 'react-icons/io5';

import { fetchPostById } from '../../api';

import './PostDetails.css';

import { PostTitle } from '../posts/PostTitle';
import { PostImage } from '../posts/PostImage';
import { IconButton } from '../elements/IconButton';
import { PostLocation } from '../posts/PostLocation';
import { PostDetailsMeta } from '../posts/PostDetailsMeta';
import { Map } from '../map/Map';

export function PostDetails() {
  const [post, setPost] = useState();
  const navigate = useNavigate();

  const { id } = useParams();

  async function loadPostById(postId) {
    const fetchedPost = await fetchPostById(postId);
    setPost(fetchedPost);
  }

  function handleBackBtnClick() {
    navigate('/');
  }

  useEffect(() => {
    loadPostById(id);
  }, [id]);

  if (!post) {
    return <p>Post not found or still loading details...</p>;
  }
  return (
    <main className='post-details'>
      <section className='post-details__content'>
        <div className='post-details__header'>
          {/** Back Button */}
          <IconButton
            onBtnClick={() => handleBackBtnClick()}
            btnText='Back'
            Icon={<IoChevronBackCircle />}
          />
          {/** Title */}
          <PostTitle title={post.title} />
        </div>

        {/** Date & Author */}
        <PostDetailsMeta post={post} />

        {/** Image */}
        <PostImage source={post.image} alt={post.title} variant='big' />

        {/** Blog Post Text */}
        <div className='post-details__text'>
          <h3>{post.description}</h3>
          <p>{post.summary}</p>
        </div>
        {/** Icon & City & Country */}
        <PostLocation post={post} />
      </section>

      {/** Map */}
      <section>
        <Map posts={[post]} zoomLevel={6} showDetailLink={false} />
      </section>
    </main>
  );
}
