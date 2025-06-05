import { NavButton } from './NavButton';
import { FaPlus, FaSignInAlt } from 'react-icons/fa';

import './NavBar.css';

export function NavBar() {
  return (
    <nav>
      <ul className='nav-list'>
        <li>
          <NavButton to='/contact'>Contact</NavButton>
        </li>
        <li>
          <NavButton to='/add-post' icon={FaPlus}>
            Add Post
          </NavButton>
        </li>
        <li>
          <NavButton to='/login' icon={FaSignInAlt}>
            Login
          </NavButton>
        </li>
      </ul>
    </nav>
  );
}
