import { useParams } from 'react-router';

export function PostDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>PostDetails</h1>
      <p>Post id: {id}</p>
      <div style={{ height: '200vh' }} />
    </div>
  );
}
