import './Dashboard.css';

import { PostList } from '../PostList';

export function Dashboard() {
  return (
    <main className='two-column-layout'>
      <section className='dashboard-posts'>
        <PostList />
      </section>
      <section className='dashboard-map'>
        <h1>Map</h1>
        <p>Here will be the map</p>
        <div style={{ height: '200vh' }} />
      </section>
    </main>
  );
}
