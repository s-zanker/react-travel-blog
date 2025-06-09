import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css';

import { MenuBar } from './components/MenuBar';
import { Dashboard } from './components/pages/Dashboard';
import { Contact } from './components/pages/Contact';
import { AddPost } from './components/pages/AddPost';
import { PostDetails } from './components/pages/PostDetails';

export function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add-post' element={<AddPost />} />
        <Route path='/post/:id' element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
