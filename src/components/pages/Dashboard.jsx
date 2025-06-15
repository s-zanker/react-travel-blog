import { useState, useEffect } from 'react';

import './Dashboard.css';

import { fetchAllPosts } from '../../api';
import { PostList } from '../posts/PostList';
import { Map } from '../map/Map';

export function Dashboard() {
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    console.log('Dashboard - loadPosts():');
    const allPosts = await fetchAllPosts();
    console.log(allPosts);
    setPosts(allPosts);
  }
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <main className='dashboard'>
      <section className='dashboard__posts'>
        <PostList posts={posts} />
      </section>
      <section>
        <Map posts={posts} />
      </section>
    </main>
  );
}
