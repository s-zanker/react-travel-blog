import { NavLink } from 'react-router';
import { FaCompass } from 'react-icons/fa';

import './LogoTitle.css';

export function LogoTitle({ scrolled }) {
  return (
    <NavLink to='/' className={`logo-title${scrolled ? ' scrolled' : ''}`}>
      <FaCompass className='logo-icon' />
      <span>Dachzelt Adventures</span>
    </NavLink>
  );
}
