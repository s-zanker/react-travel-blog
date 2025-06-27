import { NavLink } from 'react-router';
import { FaCompass } from 'react-icons/fa';

import './LogoTitle.css';

export function LogoTitle({ scrolled, setMenuOpen }) {
  return (
    <NavLink
      to='/'
      className={`logo-title${scrolled ? ' scrolled' : ''}`}
      onClick={() => setMenuOpen(false)}
    >
      <FaCompass className='logo-icon' />
      <span>Dachzelt Adventures</span>
    </NavLink>
  );
}
