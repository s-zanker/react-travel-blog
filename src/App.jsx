import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css';

import { MenuBar } from './components/header/MenuBar';
import { Home } from './components/pages/Home';
import { Dashboard } from './components/pages/Dashboard';
import { Contact } from './components/pages/Contact';
import { AddPost } from './components/pages/AddPost';
import { Login } from './components/pages/Login';
import { PostDetails } from './components/pages/PostDetails';

export function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add-post' element={<AddPost />} />
        <Route path='/login' element={<Login />} />
        <Route path='/post/:id' element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
