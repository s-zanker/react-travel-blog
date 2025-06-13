import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { FiCalendar } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { MdArrowBack } from 'react-icons/md';

import { fetchPostById } from '../../api';

import './PostDetails.css';

export function PostDetails() {
  const [post, setPost] = useState();
  const navigate = useNavigate();

  const { id } = useParams();

  async function loadPostById(postId) {
    const fetchedPost = await fetchPostById(postId);
    setPost(fetchedPost);
  }

  useEffect(() => {
    loadPostById(id);
  }, [id]);

  if (!post) {
    return <p>Post not found or still loading details...</p>;
  }
  return (
    <main className='postdetails-layout'>
      <section className='postdetails-content'>
        <button onClick={() => navigate(-1)} className='back-button'>
          <MdArrowBack className='back-icon' />
          Back
        </button>
        {/** Title */}
        <h1>{post.title}</h1>

        {/** Date left, Author */}
        <div className='postdetails-content__meta'>
          <div className='postdetails-content__date'>
            <FiCalendar />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className='postdetails-content__author'>
            {' '}
            <img src={post.authorInfo.img} alt='' />
            <span>{post.authorInfo.name}</span>
          </div>
        </div>

        {/** Image */}
        <img src={post.image} alt='' />

        <div className='postdetails-content__text'>
          {/** Description */}
          <h3>{post.description}</h3>

          {/** Summary */}
          <p>{post.summary}</p>
        </div>

        {/** Location */}
        <div className='postdetails__location'>
          <MdLocationOn className='postdetails__icon' />
          <span>{post.location.city}</span>
          <span className='postdetails__separator'>|</span>
          <span>{post.location.country}</span>
        </div>
      </section>

      {/** Map */}
      <section className='postdetails-map'>
        <h1>Map</h1>
        <p>Post id: {id}</p>
        <div style={{ height: '200vh' }} />
      </section>
    </main>
  );
}
