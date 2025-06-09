import { useState, useEffect } from 'react';

import './Dashboard.css';

import { fetchAllPosts } from '../../api';
import { PostList } from '../PostList';

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
    <main className='two-column-layout'>
      <section className='dashboard-posts'>
        <PostList posts={posts} />
      </section>
      <section className='dashboard-map'>
        <h1>Map</h1>
        <p>Here will be the map</p>
        <div style={{ height: '200vh' }} />
      </section>
    </main>
  );
}
