import { useNavigate } from 'react-router';
import { sendAddPost } from '../../api';

import { PostForm } from '../posts/PostForm';

import './AddPost.css';

export function AddPost() {
  const navigate = useNavigate();

  async function addPost(newPost) {
    const newId = await sendAddPost(newPost);
    console.log('AddPost.jsx - addPost() - newId: ', newId);
  }

  async function handleAddPost(post) {
    await addPost(post);
    navigate('/dashboard');
  }

  return (
    <main className='add-post'>
      <PostForm addPost={(post) => handleAddPost(post)} />
    </main>
  );
}
