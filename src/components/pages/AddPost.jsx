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

  function handleAddPost(post) {
    addPost(post);
    navigate('/'); //to dashboard
  }

  return (
    <div>
      <PostForm addPost={(post) => handleAddPost(post)} />
    </div>
  );
}
