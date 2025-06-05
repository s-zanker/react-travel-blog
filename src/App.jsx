import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css';

import { Dashboard } from './components/pages/Dashboard';
import { Contact } from './components/pages/Contact';
import { AddPost } from './components/pages/AddPost';
import { MenuBar } from './components/MenuBar';

export function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add-post' element={<AddPost />} />
      </Routes>
    </BrowserRouter>
  );
}
