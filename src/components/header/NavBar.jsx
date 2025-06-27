import { NavButton } from './NavButton';
import { FaPlus, FaSignInAlt } from 'react-icons/fa';

import './NavBar.css';

export function NavBar({ isMenuOpen, setMenuOpen }) {
  return (
    <nav className={isMenuOpen ? 'active' : ''}>
      <ul className='nav-bar'>
        <li>
          <NavButton to='/dashboard' setMenuOpen={setMenuOpen}>
            Explore
          </NavButton>
        </li>
        <li>
          <NavButton to='/contact' setMenuOpen={setMenuOpen}>
            Contact
          </NavButton>
        </li>
        <li>
          <NavButton to='/add-post' Icon={FaPlus} setMenuOpen={setMenuOpen}>
            Add Post
          </NavButton>
        </li>
        <li>
          <NavButton to='/login' Icon={FaSignInAlt} setMenuOpen={setMenuOpen}>
            Login
          </NavButton>
        </li>
      </ul>
    </nav>
  );
}
